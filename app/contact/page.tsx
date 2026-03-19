import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "MantisShield - Contact",
  description:
    "Get in touch with MantisShield. Secure your DeFi protocol with our AI-driven threat intelligence and automated response systems.",
  openGraph: {
    title: "MantisShield - Contact Us",
    description: "Secure your protocol - Get in touch",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactContent />
      <Footer />
    </>
  );
}
