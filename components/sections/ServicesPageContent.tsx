"use client";

import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

const serviceKeys = [
  { icon: "◈", titleKey: "servicesPage.mcp.title", descKey: "servicesPage.mcp.desc" },
  { icon: "◉", titleKey: "servicesPage.audit.title", descKey: "servicesPage.audit.desc" },
  { icon: "◆", titleKey: "servicesPage.threat.title", descKey: "servicesPage.threat.desc" },
  { icon: "▣", titleKey: "servicesPage.auto.title", descKey: "servicesPage.auto.desc" },
  { icon: "◊", titleKey: "servicesPage.token.title", descKey: "servicesPage.token.desc" },
  { icon: "▲", titleKey: "servicesPage.incident.title", descKey: "servicesPage.incident.desc" },
];

export function ServicesPageContent() {
  const { t } = useLang();

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/40" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              {t("servicesPage.label")}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-[-0.05em] max-w-4xl mb-6">
            {t("servicesPage.heading1")}
            <br />
            {t("servicesPage.heading2")}
          </h1>
          <p className="font-mono text-sm text-white/50 max-w-2xl tracking-wide">
            {t("servicesPage.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceKeys.map((service, index) => (
            <Card key={index}>
              <div className="text-4xl mb-6 opacity-60 group-hover:opacity-100">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-3 tracking-[-0.03em]">
                {t(service.titleKey)}
              </h3>
              <p className="font-mono text-xs tracking-wide opacity-60 group-hover:opacity-100 leading-relaxed">
                {t(service.descKey)}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.05em] mb-2">
                {t("servicesPage.readyHeading")}
              </h2>
              <p className="font-mono text-sm text-white/50 tracking-wide">
                {t("servicesPage.readySubtitle")}
              </p>
            </div>
            <Link
              href="/contact"
              className="brutal-button"
            >
              {t("servicesPage.requestAudit")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
