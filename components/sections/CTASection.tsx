"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

export function CTASection() {
  const { t } = useLang();

  return (
    <section className="relative py-32 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-gradient font-sans font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          {t("cta.heading")}
        </h2>
        <p className="font-mono text-sm text-white/50 mb-12 max-w-xl mx-auto">
          {t("cta.subtitle")}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="group relative font-mono text-[11px] tracking-[0.3em] uppercase px-10 py-5 border border-white/40 hover:border-white inline-block"
            style={{ transition: "none" }}
          >
            <span className="relative z-10 group-hover:text-black">
              {t("cta.btn1")}
            </span>
            <div
              className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left"
              style={{ transition: "none" }}
            />
          </Link>
          <a
            href="https://verdict.mantishield.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-mono text-[11px] tracking-[0.3em] uppercase px-10 py-5 border border-accent/60 text-accent hover:border-accent inline-block"
            style={{ transition: "none" }}
          >
            <span className="relative z-10 group-hover:text-black">
              {t("cta.btn2")}
            </span>
            <div
              className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left"
              style={{ transition: "none" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
