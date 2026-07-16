"use client";

import { useLang } from "@/lib/LanguageContext";
import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () =>
    import("@/components/ContactForm").then((mod) => ({
      default: mod.ContactForm,
    })),
  {
    loading: () => (
      <div className="space-y-6 animate-pulse">
        <div className="h-12 bg-white/5 border border-white/10" />
        <div className="h-12 bg-white/5 border border-white/10" />
        <div className="h-12 bg-white/5 border border-white/10" />
        <div className="h-32 bg-white/5 border border-white/10" />
        <div className="h-14 bg-white/5 border border-white/10" />
      </div>
    ),
  }
);

export function ContactContent() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/40" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              {t("contact.label")}
            </span>
          </div>
          <h1 className="text-gradient font-sans font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            {t("contact.heading")}
          </h1>
          <p className="font-mono text-sm text-white/50 max-w-xl tracking-wide">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <div className="border border-white/10 p-6">
              <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
                {t("contact.directChannel")}
              </h3>
              <p className="font-mono text-sm text-white/80">
                info@mantishield.xyz
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
                {t("contact.responseTime")}
              </h3>
              <p className="font-mono text-sm text-white/80">
                {t("contact.responseTimeText")}
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
                {t("contact.encryption")}
              </h3>
              <p className="font-mono text-sm text-white/80">
                {t("contact.encryptionText")}
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
                {t("contact.servicesLabel")}
              </h3>
              <ul className="font-mono text-xs text-white/60 space-y-2">
                <li>{t("contact.service1")}</li>
                <li>{t("contact.service2")}</li>
                <li>{t("contact.service3")}</li>
                <li>{t("contact.service4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
