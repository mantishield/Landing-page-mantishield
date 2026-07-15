"use client";

import { useLang } from "@/lib/LanguageContext";

const statKeys = [
  { valueKey: "stats.value1", labelKey: "stats.response" },
  { valueKey: "stats.value2", labelKey: "stats.monitoring" },
  { valueKey: "stats.value3", labelKey: "stats.secured" },
  { valueKey: "stats.value4", labelKey: "stats.audited" },
];

export function StatsBar() {
  const { t } = useLang();

  return (
    <section className="border-y border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {statKeys.map((stat) => (
          <div key={stat.labelKey} className="px-6 py-8 text-center">
            <div className="font-sans font-bold tracking-tight text-2xl md:text-3xl text-white mb-1">
              {t(stat.valueKey)}
            </div>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/40">
              {t(stat.labelKey)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
