"use client";

import { useEffect, useRef } from "react";

export function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    // Render at 1/4 resolution for performance
    const SCALE = 4;
    const TARGET_FPS = 12;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    let lastTime = 0;

    const resize = () => {
      canvas.width = Math.ceil(window.innerWidth / SCALE);
      canvas.height = Math.ceil(window.innerHeight / SCALE);
    };

    const generateNoise = (time: number) => {
      if (time - lastTime < FRAME_INTERVAL) {
        animationId = requestAnimationFrame(generateNoise);
        return;
      }
      lastTime = time;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      const len = data.length;

      for (let i = 0; i < len; i += 4) {
        const value = Math.random() > 0.5 ? 255 : 0;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 10;
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(generateNoise);
    };

    resize();
    animationId = requestAnimationFrame(generateNoise);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none"
      style={{
        mixBlendMode: "overlay",
        opacity: 0.15,
        imageRendering: "pixelated",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
