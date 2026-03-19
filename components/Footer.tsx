"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const footerLinks = [
  { name: "Twitter", href: "https://x.com/mantaborax" },
  { name: "GitHub", href: "https://github.com/mantishield" },
  { name: "Discord", href: "https://discord.gg/mantishield" },
  { name: "Telegram", href: "https://t.me/mantishield" },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer id="contact" className="relative py-20 md:py-32 bg-black border-t-[0.5px] border-white/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        {/* CTA Section */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-[0.05em] mb-6">
              {t("footer.heading1")}
              <br />
              {t("footer.heading2")}
            </h2>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/50 mb-10 max-w-xl mx-auto">
              {t("footer.subtitle")}
            </p>
            <a
              href="mailto:contact@mantishield.io"
              className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase px-10 py-5 border-[0.5px] border-white/40 hover:border-white transition-all duration-0"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-0">
                {t("footer.cta")}
              </span>
              <ArrowUpRight 
                size={14} 
                className="relative z-10 group-hover:text-black transition-colors duration-0" 
              />
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-0 origin-left" />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-12" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-2xl tracking-[0.3em] uppercase mb-4">
              MANTISHIELD
            </div>
            <p className="font-mono text-[10px] leading-relaxed tracking-[0.05em] text-white/40 max-w-sm">
              {t("footer.brand.desc")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
              {t("footer.connect")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] text-white/60 hover:text-white transition-colors duration-0"
                  >
                    {link.name}
                    <ArrowUpRight 
                      size={10} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-0" 
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
              {t("footer.contactLabel")}
            </h4>
            <ul className="space-y-3 font-mono text-[11px] tracking-[0.05em] text-white/60">
              <li>contact@mantishield.io</li>
              <li className="text-white/40">
                Bogota, Colombia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-[0.5px] border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/30">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/30 hover:text-white transition-colors duration-0"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="/terms"
              className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/30 hover:text-white transition-colors duration-0"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-[0.5px] border-b-[0.5px] border-white/10" />
      </div>
    </footer>
  );
}
