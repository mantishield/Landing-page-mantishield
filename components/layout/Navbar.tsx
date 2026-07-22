"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

const navLinkKeys = [
  { key: "nav.services", href: "/services", external: false },
  {
    key: "nav.verdict",
    href: "https://verdict.mantishield.xyz/",
    external: true,
  },
  { key: "nav.contact", href: "/contact", external: false },
];

export function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  const renderLink = (link: (typeof navLinkKeys)[number]) => {
    const className = `font-mono text-[11px] uppercase tracking-[0.25em] relative group inline-flex items-center gap-1 ${
      isActive(link.href) ? "text-white" : "text-white/70 hover:text-white"
    }`;
    const underline = (
      <span
        className={`absolute -bottom-1 left-0 h-[1px] bg-accent ${
          isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
        }`}
        style={{ transition: "none" }}
      />
    );

    if (link.external) {
      return (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          style={{ transition: "none" }}
        >
          {t(link.key)}
          <ArrowUpRight size={11} className="text-accent" />
          {underline}
        </a>
      );
    }

    return (
      <Link
        key={link.key}
        href={link.href}
        prefetch={false}
        className={className}
        style={{ transition: "none" }}
      >
        {t(link.key)}
        {underline}
      </Link>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || pathname !== "/"
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Left Nav Links */}
            <nav className="hidden md:flex items-center gap-12 flex-1 justify-end pr-16">
              {navLinkKeys.slice(0, 1).map(renderLink)}
            </nav>

            {/* Center Logo — Navar.jpeg with mix-blend-mode to remove black bg */}
            <Link
              href="/"
              className="navbar-logo relative flex items-center justify-center gap-3 px-4 group"
            >
              <div className="relative h-10 w-10 md:h-11 md:w-11 overflow-hidden flex-shrink-0">
                <Image
                  src="/assets/Navar.jpeg"
                  alt="Mantishield Logo"
                  fill
                  className="object-cover object-left"
                  style={{
                    mixBlendMode: "screen",
                    filter:
                      "hue-rotate(140deg) drop-shadow(0 0 4px rgba(56, 189, 248, 0.3))",
                  }}
                  priority
                  sizes="44px"
                />
              </div>
              <span className="font-mono text-sm md:text-base tracking-[0.25em] uppercase text-white hidden sm:block">
                MANTIS
              </span>
              {/* Accent line under logo */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] w-0 group-hover:w-full bg-accent"
                style={{ transition: "width 0.2s ease" }}
              />
            </Link>

            {/* Right Nav Links */}
            <nav className="hidden md:flex items-center gap-12 flex-1 justify-start pl-16">
              {navLinkKeys.slice(1).map(renderLink)}
            </nav>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="navbar-toggle hidden md:block ml-4"
              aria-label="Toggle language"
            >
              {lang === "en" ? "[ES]" : "[EN]"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {/* Mobile Logo */}
              <Link href="/" className="mb-8 flex flex-col items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/assets/Navar.jpeg"
                    alt="Mantishield"
                    fill
                    className="object-cover object-left"
                    style={{
                      mixBlendMode: "screen",
                      filter:
                        "hue-rotate(140deg) drop-shadow(0 0 4px rgba(56, 189, 248, 0.3))",
                    }}
                    priority
                    sizes="80px"
                  />
                </div>
                <span className="font-mono text-lg tracking-[0.3em] uppercase">
                  MANTIS
                </span>
              </Link>

              {navLinkKeys.map((link, index) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-lg uppercase tracking-[0.3em] text-white/70 inline-flex items-center gap-2"
                    >
                      {t(link.key)}
                      <ArrowUpRight size={16} className="text-accent" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      prefetch={false}
                      className={`font-mono text-lg uppercase tracking-[0.3em] ${
                        isActive(link.href) ? "text-white" : "text-white/70"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Language Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: navLinkKeys.length * 0.1, duration: 0.3 }}
                className="flex gap-4 mt-4"
              >
                <button onClick={toggleLang} className="navbar-toggle">
                  {lang === "en" ? "[ES]" : "[EN]"}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
