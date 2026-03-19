"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

interface LogLine {
  id: number;
  text: string;
  status?: "ok" | "warning" | "error" | "info";
  isCommand?: boolean;
  timestamp?: string;
}

const initialLogs: LogLine[] = [
  { id: 1, text: "Initializing security protocol v4.2.1...", status: "info" },
  { id: 2, text: "Connection established to secure node", status: "ok" },
];

const scanLogs: LogLine[] = [
  { id: 3, text: "Scanning smart contracts...", status: "info", isCommand: true },
  { id: 4, text: "Analyzing bytecode structure", status: "info" },
  { id: 5, text: "Checking for re-entrancy vulnerabilities", status: "info" },
  { id: 6, text: "Re-entrancy guard detected [SAFE]", status: "ok" },
  { id: 7, text: "Validating access control patterns", status: "info" },
  { id: 8, text: "Owner privileges verified [OK]", status: "ok" },
  { id: 9, text: "Detecting integer overflow risks", status: "info" },
  { id: 10, text: "SafeMath implementation found [OK]", status: "ok" },
  { id: 11, text: "Scanning external call dependencies", status: "info" },
  { id: 12, text: "Low-level call usage detected [WARNING]", status: "warning" },
  { id: 13, text: "Analyzing front-running susceptibility", status: "info" },
  { id: 14, text: "No sandwich attack vectors found [SAFE]", status: "ok" },
  { id: 15, text: "Checking timestamp dependence", status: "info" },
  { id: 16, text: "Block timestamp usage minimal [OK]", status: "ok" },
  { id: 17, text: "Verifying proxy contract integrity", status: "info" },
  { id: 18, text: "Implementation slot validated [OK]", status: "ok" },
  { id: 19, text: "Running formal verification...", status: "info", isCommand: true },
  { id: 20, text: "Mathematical proofs verified [SAFE]", status: "ok" },
  { id: 21, text: "Generating final report...", status: "info" },
  { id: 22, text: "=== AUDIT COMPLETE ===", status: "ok" },
  { id: 23, text: "Risk Score: 2/100 (LOW)", status: "ok" },
  { id: 24, text: "Status: CLEARED FOR DEPLOYMENT", status: "ok" },
];

function StatusIndicator({ status }: { status?: string }) {
  const colors = {
    ok: "text-white",
    warning: "text-white",
    error: "text-white",
    info: "text-white/60",
  };

  const labels = {
    ok: "[OK]",
    warning: "[WARN]",
    error: "[ERR]",
    info: "",
  };

  return (
    <span className={colors[status as keyof typeof colors] || "text-white/60"}>
      {labels[status as keyof typeof labels] || ""}
    </span>
  );
}

// Generate a static base time to avoid hydration mismatch
const BASE_TIME = new Date("2025-01-01T00:00:00");

function formatTime(index: number): string {
  const date = new Date(BASE_TIME.getTime() + index * 1000);
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function Terminal() {
  const { t } = useLang();
  const ref = useRef(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only animating after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && logs.length === 0) {
      setLogs(initialLogs);
      setCurrentIndex(initialLogs.length);
    }
  }, [isInView, logs.length]);

  useEffect(() => {
    if (currentIndex >= scanLogs.length + initialLogs.length) {
      setIsTyping(false);
      return;
    }

    if (currentIndex >= initialLogs.length && isInView) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        const logIndex = currentIndex - initialLogs.length;
        setLogs((prev) => [...prev, scanLogs[logIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 400 + 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isInView]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const restartScan = () => {
    setLogs(initialLogs);
    setCurrentIndex(initialLogs.length);
    setIsTyping(true);
  };

  // Pre-compute timestamps to avoid any hydration issues
  const timestamps = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => formatTime(i));
  }, []);

  if (!mounted) {
    return (
      <section id="protocol" className="relative py-32 md:py-40 bg-black">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="border-[0.5px] border-white/40 bg-black">
            <div className="p-6 md:p-8 h-[400px] font-mono text-[11px] md:text-[12px] leading-relaxed text-white/30">
              Initializing terminal...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="protocol" className="relative py-32 md:py-40 bg-black">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/40" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              {t("protocol.label")}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-[0.05em]">
            {t("protocol.heading")}
          </h2>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="border-[0.5px] border-white/40 bg-black"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b-[0.5px] border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full border border-white/40" />
              <div className="w-2 h-2 rounded-full border border-white/40" />
              <div className="w-2 h-2 rounded-full border border-white/40" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
              mantis-cli — audit.log
            </span>
            <button
              onClick={restartScan}
              className="font-mono text-[10px] tracking-[0.1em] text-white/40 hover:text-white transition-colors duration-0"
            >
              {t("protocol.restart")}
            </button>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="p-6 md:p-8 h-[400px] overflow-y-auto font-mono text-[11px] md:text-[12px] leading-relaxed"
          >
            <div className="text-white/40 mb-4">
              {/* ASCII Art Header */}
              <pre className="text-[8px] md:text-[10px] leading-[1.2] text-white/30">
{`    __  ___           __  _________.__                 .___
   /  |/  /________ _/  |/  /  _  \__| ____  ____   __| _/
  / /|_/ / __  / _ \\   __   /  /_\  \  |/ ___\/ __ \ / __ | 
 / /  / / /_/ /  __/  / /|  /    |    \  \  \__\  ___// /_/ | 
/_/  /_/\__,_/\___/__/ /|__/____|__  /__|\___  >___  >____ | 
                      \/           \/        \/    \/     \/`}
              </pre>
              <div className="mt-4 text-white/30">
                MantisShield Security Engine v4.2.1
                <br />
                Type &apos;help&apos; for available commands
              </div>
            </div>

            {/* Logs */}
            <AnimatePresence mode="popLayout">
              {logs.map((log, index) => (
                <motion.div
                  key={`${log.id}-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.05 }}
                  className={`mb-1 ${log.isCommand ? "mt-4" : ""}`}
                >
                  <span className="text-white/30 mr-2">
                    {timestamps[index] || "00:00:00"}
                  </span>
                  <span className={log.isCommand ? "text-white" : "text-white/70"}>
                    {log.isCommand ? "> " : "  "}
                    {log.text}{" "}
                    {log.status && <StatusIndicator status={log.status} />}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Cursor */}
            {currentIndex < scanLogs.length + initialLogs.length && (
              <div className="mt-2">
                <span className="text-white/30 mr-2">
                  {timestamps[logs.length] || "00:00:00"}
                </span>
                <span className="text-white">
                  {"> "}
                  <span
                    className={`inline-block w-2 h-4 bg-white ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </span>
              </div>
            )}

            {/* Completion Message */}
            {currentIndex >= scanLogs.length + initialLogs.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 pt-4 border-t-[0.5px] border-white/20"
              >
                <span className="text-white/30 mr-2">
                  {timestamps[logs.length] || "00:00:00"}
                </span>
                <span className="text-white/50">&gt; Waiting for next scan...</span>
                <span
                  className={`inline-block w-2 h-4 bg-white/50 ml-1 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                />
              </motion.div>
            )}
          </div>

          {/* Terminal Footer */}
          <div className="flex items-center justify-between px-4 py-2 border-t-[0.5px] border-white/20 text-[10px] font-mono tracking-[0.1em] text-white/30">
            <span>NODE: active</span>
            <span>LATENCY: 12ms</span>
            <span>ENCRYPTION: AES-256</span>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-[1px] mt-[1px]"
        >
          {[
            { labelKey: "protocol.contractsAudited", value: "847" },
            { labelKey: "protocol.vulnsFound", value: "12,493" },
            { labelKey: "protocol.criticalIssues", value: "342" },
            { labelKey: "protocol.securedValue", value: "$2.4B" },
          ].map((stat) => (
            <div
              key={stat.labelKey}
              className="border-[0.5px] border-white/20 p-6 text-center"
            >
              <div className="font-serif text-3xl md:text-4xl mb-2">{stat.value}</div>
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
