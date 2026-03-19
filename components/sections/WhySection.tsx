"use client";

import { FlipCard } from "@/components/ui/FlipCard";
import { useLang } from "@/lib/LanguageContext";

const whyCardMeta = [
  { id: "01", icon: "◉", titleKey: "why.01.title", descKey: "why.01.desc" },
  { id: "02", icon: "⚡", titleKey: "why.02.title", descKey: "why.02.desc" },
  { id: "03", icon: "◇", titleKey: "why.03.title", descKey: "why.03.desc" },
];

export function WhySection() {
  const { t } = useLang();
  return (
    <section className="relative py-32 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-white/40" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
            {t("why.label")}
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[-0.05em] mb-8">
              {t("why.heading1")}
              <br />
              {t("why.heading2")}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-white/60 max-w-lg">
              {t("why.subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {whyCardMeta.map((item) => (
              <FlipCard
                key={item.id}
                className="!min-h-[180px]"
                front={
                  <div className="flex items-start justify-between h-full">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="font-serif text-xl tracking-[-0.02em]">
                        {t(item.titleKey)}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-white/30">
                      {item.id}
                    </span>
                  </div>
                }
                back={
                  <div className="flex flex-col justify-center h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm">{item.icon}</span>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-green-400/80">
                        {t(item.titleKey)}
                      </span>
                    </div>
                    <p className="font-mono text-[10px] leading-relaxed text-white/70">
                      {t(item.descKey)}
                    </p>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
