"use client";

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { useState } from "react";

const contactLinks = [
  { label: "Email", value: "aditya@example.com", href: "mailto:aditya@example.com" },
  { label: "GitHub", value: "github.com/aditya", href: "https://github.com/username" },
  { label: "LinkedIn", value: "linkedin.com/in/aditya", href: "https://linkedin.com/in/username" },
  { label: "Instagram", value: "@aditya_dev", href: "https://instagram.com/username" },
  { label: "Telegram", value: "t.me/aditya", href: "https://t.me/username" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulasi kirim pesan
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <PageWrapper>
      <div className="flex flex-col h-full py-8">
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Let&apos;s Connect
          </h1>
          <p className="text-neutral-500 mt-2 text-lg">
            Have a project in mind or just want to say hi?
          </p>
        </header>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-16 space-y-8 max-w-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Name */}
            <div className="group">
              <label htmlFor="name" className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-800 py-2 text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder-neutral-700"
                placeholder="John Doe"
              />
            </div>

            {/* Input Email */}
            <div className="group">
              <label htmlFor="email" className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-neutral-800 py-2 text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder-neutral-700"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Input Message */}
          <div className="group">
            <label htmlFor="message" className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-neutral-800 py-2 text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder-neutral-700 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="text-white border-b border-neutral-600 hover:border-white pb-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium tracking-wide uppercase cursor-pointer"
          >
            {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
          </button>
        </form>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-900 mb-12" />

        {/* Links List (No Icons) */}
        <div>
          <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">
            Direct Channels
          </h2>
          <div className="flex flex-col border-t border-neutral-800">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="group flex items-center justify-between py-6 border-b border-neutral-800 hover:bg-neutral-900/20 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
                  <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors w-24">
                    {link.label}
                  </span>
                  <span className="text-sm text-neutral-600 group-hover:text-neutral-500 transition-colors hidden sm:block">
                    {link.value}
                  </span>
                </div>
                
                {/* Arrow Text Only */}
                <span className="text-neutral-600 group-hover:text-white transition-all text-lg group-hover:-translate-y-1 group-hover:translate-x-1 duration-300">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}