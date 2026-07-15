"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const featureKeys = ["verdict.feature1", "verdict.feature2", "verdict.feature3"];

export function VerdictSection() {
  const { t } = useLang();

  return (
    <section className="relative py-32 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="glass-panel relative overflow-hidden p-8 md:p-16"
        >
          {/* Subtle accent glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 20% 0%, rgba(56,189,248,0.08), transparent 55%)",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <span className="badge-pill mb-8">{t("verdict.badge")}</span>

            <h2 className="text-gradient font-sans font-bold text-4xl md:text-6xl tracking-tight mb-6 mt-6">
              {t("verdict.name")}
            </h2>

            <p className="font-mono text-sm md:text-base leading-relaxed text-white/60 mb-10 max-w-2xl">
              {t("verdict.tagline")}
            </p>

            <ul className="space-y-4 mb-12">
              {featureKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span
                    className="mt-[6px] w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0"
                    style={{ boxShadow: "0 0 8px rgba(56,189,248,0.6)" }}
                  />
                  <span className="font-mono text-xs md:text-sm text-white/70 leading-relaxed">
                    {t(key)}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://verdict.mantishield.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase px-10 py-5 border border-accent/60 text-accent hover:border-accent overflow-hidden"
              style={{
                transition: "none",
                boxShadow: "0 0 24px rgba(56,189,248,0.2)",
              }}
            >
              <span className="relative z-10 group-hover:text-black">
                {t("verdict.cta")}
              </span>
              <ArrowUpRight
                size={14}
                className="relative z-10 group-hover:text-black"
              />
              <div
                className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left"
                style={{ transition: "none" }}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
