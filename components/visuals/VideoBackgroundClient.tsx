"use client";

import dynamic from "next/dynamic";

export const VideoBackgroundClient = dynamic(
  () =>
    import("@/components/visuals/PixelatedVideoBackground").then((mod) => ({
      default: mod.PixelatedVideoBackground,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-10 bg-black">
        {/* Static video fallback while JS loads */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: 0.15,
            filter: "grayscale(1) contrast(2.5) brightness(0.4)",
          }}
        >
          <source src="/assets/city_noise_web.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  }
);
