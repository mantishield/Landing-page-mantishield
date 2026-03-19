"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>{}[]";

interface DecodingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

function DecodingText({
  text,
  className = "",
  delay = 0,
  speed = 30,
}: DecodingTextProps) {
  const [displayText, setDisplayText] = useState(
    text
      .split("")
      .map(() => " ")
      .join("")
  );
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let iteration = 0;
    const totalIterations = text.length * 3;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (iteration > index * 3) {
              return char;
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration > totalIterations + 5) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [hasStarted, text, speed]);

  return (
    <span className={`${className} whitespace-pre-wrap`}>{displayText}</span>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="w-[1px] h-20 bg-white/50 mb-8" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[-0.05em] uppercase mb-6">
            {" ".repeat(35)}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Grid background for depth */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-[1]" />

      {/* Hero Mantis Background Visual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
        <div className="hero-mantis-bg relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] hidden sm:block">
          <Image
            src="/assets/Hero.jpeg"
            alt=""
            fill
            className="object-contain"
            style={{
              mixBlendMode: "screen",
              filter: "brightness(1.2)",
            }}
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 500px, 600px"
            priority
          />
        </div>
      </div>

      {/* Dark radial overlay behind text for legibility */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 80%)",
        }}
      />

      {/* Content — above the mantis visual */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-green-400/80">
            {t("hero.status")}
          </span>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-[1px] h-16 bg-white/40 mb-8 origin-top"
        />

        {/* Main Headline with Decoding Effect */}
        <h1
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase mb-8 leading-[1.05] tracking-[-0.05em]"
          style={{ textShadow: "0 0 60px rgba(0,0,0,0.9), 0 0 40px rgba(0,255,0,0.3)" }}
        >
          <DecodingText text={t("hero.line1")} delay={300} speed={25} />
          <br />
          <DecodingText text={t("hero.line2")} delay={600} speed={25} />
          <br />
          <DecodingText text={t("hero.line3")} delay={900} speed={25} />
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.15em] uppercase text-white/60 mb-12 max-w-2xl"
          style={{ textShadow: "0 0 20px rgba(0,0,0,0.9)" }}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Link
            href="/services"
            className="group relative font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase px-8 py-4 border-[0.5px] border-white/60 hover:border-white backdrop-blur-sm overflow-hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.3)", transition: "none" }}
          >
            <span className="relative z-10 group-hover:text-black">
              {t("hero.cta1")}
            </span>
            <div
              className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left"
              style={{ transition: "none" }}
            />
          </Link>

          <Link
            href="/contact"
            className="group relative font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase px-8 py-4 border-[0.5px] border-green-400/60 text-green-400 hover:border-green-400 backdrop-blur-sm overflow-hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.3)", transition: "none" }}
          >
            <span className="relative z-10 group-hover:text-black">
              {t("hero.cta2")}
            </span>
            <div
              className="absolute inset-0 bg-green-400 scale-x-0 group-hover:scale-x-100 origin-left"
              style={{ transition: "none" }}
            />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/40">
              {t("hero.scroll")}
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-6 md:left-12 w-8 h-8 border-l-[0.5px] border-t-[0.5px] border-white/20 z-10" />
      <div className="absolute top-24 right-6 md:right-12 w-8 h-8 border-r-[0.5px] border-t-[0.5px] border-white/20 z-10" />
      <div className="absolute bottom-12 left-6 md:left-12 w-8 h-8 border-l-[0.5px] border-b-[0.5px] border-white/20 z-10" />
      <div className="absolute bottom-12 right-6 md:right-12 w-8 h-8 border-r-[0.5px] border-b-[0.5px] border-white/20 z-10" />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, #000000 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
