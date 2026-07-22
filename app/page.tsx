import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhySection } from "@/components/sections/WhySection";
import { StatsBar } from "@/components/sections/StatsBar";
import { VerdictSection } from "@/components/sections/VerdictSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mantishield — Security Research Firm",
  description:
    "We research digital fraud. Analysis of scams, social engineering and deepfakes with in-house, AI-assisted tools and continuous monitoring.",
  openGraph: {
    title: "Mantishield — Security Research Firm",
    description:
      "Fraud, scam, social engineering and deepfake analysis with AI-assisted tools.",
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

      {/* Why Mantishield — with flip cards */}
      <WhySection />

      {/* Verdict product */}
      <VerdictSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  );
}
