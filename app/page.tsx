import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhySection } from "@/components/sections/WhySection";
import { StatsBar } from "@/components/sections/StatsBar";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MantisShield - Defending the Decentralized Fabric",
  description:
    "AI-driven threat intelligence & automated response for DeFi protocols. Advanced Web3 security powered by autonomous AI agents.",
  openGraph: {
    title: "MantisShield Security",
    description: "Advanced Web3 security powered by AI agents",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section with DecodingText */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Grid */}
      <Services />

      {/* Why MantisShield — with flip cards */}
      <WhySection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  );
}
