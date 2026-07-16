import type { Metadata } from "next";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/Providers";
import { VideoBackgroundClient } from "@/components/visuals/VideoBackgroundClient";
import { BlackHoleCursor } from "@/components/visuals/BlackHoleCursor";

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
          <VideoBackgroundClient />
          <NoiseOverlay />
          <BlackHoleCursor />
          <Navbar />
          <main className="page-transition">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
