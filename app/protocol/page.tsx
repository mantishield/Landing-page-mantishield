import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const Terminal = dynamic(
  () =>
    import("@/components/Terminal").then((mod) => ({
      default: mod.Terminal,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="font-mono text-sm text-white/40 animate-pulse">
          [INITIALIZING PROTOCOL...]
        </div>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "MantisShield - Protocol",
  description:
    "Technical documentation and protocol specifications. Real-time audit logs and security protocol analysis for DeFi systems.",
  openGraph: {
    title: "MantisShield - Protocol Documentation",
    description: "Technical specs, audit logs & security protocols",
    images: ["/og-image.png"],
  },
};

export default function ProtocolPage() {
  return (
    <>
      <div className="relative min-h-screen bg-black pt-24">
        <Terminal />
      </div>
      <Footer />
    </>
  );
}
