import type { Metadata } from "next";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/Providers";
import dynamic from "next/dynamic";

const PixelatedVideoBackground = dynamic(
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

export const metadata: Metadata = {
  title: "MantisShield — Security Research Firm",
  description:
    "Security research firm specializing in fraud, scam, social engineering and deepfake analysis. Continuous monitoring and AI-assisted investigation tools.",
  metadataBase: new URL("https://mantishield.xyz"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MantisShield",
    title: "MantisShield — Security Research Firm",
    description:
      "Fraud, scam, social engineering and deepfake analysis. Continuous monitoring and AI-assisted investigation.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased font-sans">
        <Providers>
          <PixelatedVideoBackground />
          <NoiseOverlay />
          <Navbar />
          <main className="page-transition">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
