import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "MantisShield — Contact",
  description:
    "Suspect a fraud? Describe your case — a suspicious email, a possible scam, media you doubt. Initial assessment within 24-48 hours.",
  openGraph: {
    title: "MantisShield — Contact",
    description: "Send us your case. Initial assessment within 24-48 hours.",
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
