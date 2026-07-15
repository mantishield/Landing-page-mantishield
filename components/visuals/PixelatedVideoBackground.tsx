'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export function PixelatedVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const [canvasActive, setCanvasActive] = useState(false)

  const startProcessing = useCallback(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    const PIXEL_SIZE = 4
    const CONTRAST = 2.0
    const DARKNESS = 0.1

    const bayerFlat = new Float32Array([
      0/16,  8/16,  2/16, 10/16,
      12/16, 4/16, 14/16,  6/16,
      3/16, 11/16,  1/16,  9/16,
      15/16, 7/16, 13/16,  5/16
    ])

    const TARGET_FPS = 18
    const FRAME_INTERVAL = 1000 / TARGET_FPS
    let lastTime = 0

    function processFrame(time: number) {
      if (!video || !canvas || !ctx) return

      if (video.paused || video.ended || video.readyState < 2) {
        animationRef.current = requestAnimationFrame(processFrame)
        return
      }

      if (time - lastTime < FRAME_INTERVAL) {
        animationRef.current = requestAnimationFrame(processFrame)
        return
      }
      lastTime = time

      const vw = video.videoWidth
      const vh = video.videoHeight
      if (vw === 0 || vh === 0) {
        animationRef.current = requestAnimationFrame(processFrame)
        return
      }

      if (canvas.width !== vw || canvas.height !== vh) {
        canvas.width = vw
        canvas.height = vh
      }

      ctx.drawImage(video, 0, 0, vw, vh)

      const imageData = ctx.getImageData(0, 0, vw, vh)
      const data = imageData.data

      for (let y = 0; y < vh; y += PIXEL_SIZE) {
        for (let x = 0; x < vw; x += PIXEL_SIZE) {
          let r = 0, g = 0, b = 0, count = 0
          const maxBy = Math.min(PIXEL_SIZE, vh - y)
          const maxBx = Math.min(PIXEL_SIZE, vw - x)

          for (let by = 0; by < maxBy; by++) {
            for (let bx = 0; bx < maxBx; bx++) {
              const i = ((y + by) * vw + (x + bx)) * 4
              r += data[i]
              g += data[i + 1]
              b += data[i + 2]
              count++
            }
          }

          let gray = (r * 0.299 + g * 0.587 + b * 0.114) / count
          gray = ((gray / 255) - DARKNESS) * CONTRAST * 255
          gray = Math.max(0, Math.min(255, gray))

          const bIdx = ((Math.floor(y / PIXEL_SIZE) % 4) * 4) + (Math.floor(x / PIXEL_SIZE) % 4)
          const threshold = bayerFlat[bIdx] * 255
          const isWhite = gray > threshold

          const rOut = isWhite ? 120 : 0
          const gOut = isWhite ? 200 : 0
          const bOut = isWhite ? 255 : 0

          for (let by = 0; by < maxBy; by++) {
            for (let bx = 0; bx < maxBx; bx++) {
              const i = ((y + by) * vw + (x + bx)) * 4
              data[i] = rOut
              data[i + 1] = gOut
              data[i + 2] = bOut
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)
      setCanvasActive(true)
      animationRef.current = requestAnimationFrame(processFrame)
    }

    animationRef.current = requestAnimationFrame(processFrame)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleReady = () => {
      video.play().catch(() => {})
      startProcessing()
    }

    video.addEventListener('canplay', handleReady)
    video.addEventListener('loadeddata', handleReady)

    // Already loaded
    if (video.readyState >= 2) {
      handleReady()
    }

    return () => {
      video.removeEventListener('canplay', handleReady)
      video.removeEventListener('loadeddata', handleReady)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [startProcessing])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Source video (hidden - feeds canvas) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="sr-only"
      >
        <source src="/assets/city_noise_web.mp4" type="video/mp4" />
      </video>

      {/* CSS-filtered video fallback (visible until canvas is ready) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: canvasActive ? 0 : 0.15,
          filter: 'grayscale(1) contrast(2.5) brightness(0.4)',
          transition: 'opacity 1s ease',
        }}
      >
        <source src="/assets/city_noise_web.mp4" type="video/mp4" />
      </video>

      {/* Dithered canvas (fades in when processing) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          imageRendering: 'pixelated',
          opacity: canvasActive ? 0.2 : 0,
          transition: 'opacity 1s ease',
        }}
      />

      {/* Scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none scanlines"
      />

      {/* CRT vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0,0,0,0.7) 100%)'
        }}
      />

      {/* Slow sweeping scan line */}
      <div
        className="absolute left-0 right-0 pointer-events-none animate-scanline"
        style={{
          background: 'linear-gradient(transparent, rgba(56, 189, 248, 0.04) 50%, transparent)',
          height: '120px',
        }}
      />

      {/* Dithered dot pattern from Colossus */}
      <div className="absolute inset-0 pointer-events-none dithered-pattern opacity-30" />
    </div>
  )
}
