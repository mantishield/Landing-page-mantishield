"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    protocol: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  // Honeypot field for bot detection
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Bot detection
    if (honeypot) return;

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", protocol: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === "error") setStatus("idle");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot - hidden from users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-2">
          {t("form.name")}
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          className="w-full bg-black border border-white/30 px-4 py-3 font-mono text-sm text-white focus:border-white focus:outline-none placeholder:text-white/20"
          style={{ transition: "none" }}
          placeholder={t("form.namePlaceholder")}
        />
      </div>

      <div>
        <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-2">
          {t("form.email")}
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          className="w-full bg-black border border-white/30 px-4 py-3 font-mono text-sm text-white focus:border-white focus:outline-none placeholder:text-white/20"
          style={{ transition: "none" }}
          placeholder={t("form.emailPlaceholder")}
        />
      </div>

      <div>
        <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-2">
          {t("form.protocol")}
        </label>
        <input
          type="text"
          value={formData.protocol}
          onChange={(e) => updateField("protocol", e.target.value)}
          className="w-full bg-black border border-white/30 px-4 py-3 font-mono text-sm text-white focus:border-white focus:outline-none placeholder:text-white/20"
          style={{ transition: "none" }}
          placeholder={t("form.protocolPlaceholder")}
        />
      </div>

      <div>
        <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-2">
          {t("form.message")}
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="w-full bg-black border border-white/30 px-4 py-3 font-mono text-sm text-white focus:border-white focus:outline-none resize-none placeholder:text-white/20"
          style={{ transition: "none" }}
          placeholder={t("form.messagePlaceholder")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group relative font-mono text-[11px] tracking-[0.3em] uppercase px-8 py-4 border border-white/60 hover:border-white w-full disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        style={{ transition: "none" }}
      >
        <span className="relative z-10 group-hover:text-black">
          {status === "sending" ? t("form.sending") : t("form.submit")}
        </span>
        <div
          className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left"
          style={{ transition: "none" }}
        />
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <div className="border border-green-400 bg-green-400/5 p-4 font-mono text-sm text-green-400">
          <span className="mr-2">&#10003;</span>
          {t("form.success")}
        </div>
      )}

      {status === "error" && (
        <div className="border border-red-400 bg-red-400/5 p-4 font-mono text-sm text-red-400">
          <span className="mr-2">&#10007;</span>
          {t("form.error")}
        </div>
      )}
    </form>
  );
}
