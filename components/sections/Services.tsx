"use client";

import { ArrowUpRight } from "lucide-react";
import { FlipCard } from "@/components/ui/FlipCard";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

const coreProtocolMeta = [
  { id: "01", icon: "◎", titleKey: "services.01.title", descKey: "services.01.desc" },
  { id: "02", icon: "⚡", titleKey: "services.02.title", descKey: "services.02.desc" },
  { id: "03", icon: "▦", titleKey: "services.03.title", descKey: "services.03.desc" },
];

export function Services() {
  const { t } = useLang();
  return (
    <section className="relative py-32 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/40" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              {t("services.label")}
            </span>
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-5xl mb-4 tracking-tight">
            {t("services.heading")}
          </h2>
          <div className="w-24 h-[1px] bg-white/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreProtocolMeta.map((service) => (
            <FlipCard
              key={service.id}
              front={
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-auto">
                    <div className="text-5xl">{service.icon}</div>
                    <span className="font-mono text-[10px] tracking-widest text-white/40">
                      ID_{service.id}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-xl md:text-2xl tracking-tight mt-8">
                    {t(service.titleKey)}
                  </h3>
                </div>
              }
              back={
                <div className="flex flex-col h-full justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">{service.icon}</span>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent/80">
                      ID_{service.id}
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-lg tracking-tight mb-4 text-accent/90">
                    {t(service.titleKey)}
                  </h4>
                  <p className="font-mono text-[10px] md:text-xs leading-relaxed text-white/70">
                    {t(service.descKey)}
                  </p>
                </div>
              }
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white"
            style={{ transition: "none" }}
          >
            {t("services.viewAll")}
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
