import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
  title: "MantisShield — Services",
  description:
    "Fraud analysis, scam research, social engineering, deepfake forensics, malicious email analysis with Verdict, and continuous threat monitoring.",
  openGraph: {
    title: "MantisShield — Services",
    description:
      "Fraud, scam, social engineering and deepfake research. Email analysis with Verdict.",
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
