import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
  title: "MantisShield - Services",
  description:
    "Smart Contract Watchdogs, AI Auto-Mitigation, and Tokenization Integrity services. Comprehensive DeFi security solutions powered by AI agents.",
  openGraph: {
    title: "MantisShield - Security Services",
    description:
      "Smart Contract Monitoring, AI Response & Tokenization Security",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageContent />
      <Footer />
    </>
  );
}
