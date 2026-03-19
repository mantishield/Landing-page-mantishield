import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: "export" to support API routes
  distDir: "dist",
  images: {
    unoptimized: true,
  },

  swcMinify: true,
  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

const config =
  process.env.ANALYZE === "true"
    ? withBundleAnalyzer({ enabled: true })(nextConfig)
    : nextConfig;

export default config;
