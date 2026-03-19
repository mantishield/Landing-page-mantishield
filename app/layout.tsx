import type { Metadata } from "next";
import { EB_Garamond, JetBrains_Mono } from "next/font/google";
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

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "MantisShield - Defending the Decentralized Fabric",
  description:
    "AI-driven threat intelligence & automated response for DeFi protocols. Security for DeFi and Fintech with optimized AI agents.",
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
    title: "MantisShield - DeFi & Fintech Security",
    description:
      "AI-driven threat intelligence & automated response for DeFi protocols",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamond.variable} ${jetbrains.variable}`}>
      <body className="bg-black text-white antialiased font-mono">
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
