"use client";

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { useState } from "react";

const contactLinks = [
  { label: "Email", value: "contact.aditya0003@google.com", href: "contact.aditya0003@google.com" },
  { label: "GitHub", value: "github.com/aditya03-fend", href: "https://github.com/aditya03-fend" },
  { label: "LinkedIn", value: "linkedin.com/in/aditya-fend", href: "https://linkedin.com/in/aditya-fend-42216b389" },
  { label: "Instagram", value: "@adtyathree", href: "https://instagram.com/adtyathree" },
  { label: "Telegram", value: "t.me/aditya_fend", href: "https://t.me/aditya_fend" },
];


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [modal, setModal] = useState<"success" | "error" | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("submitting");

  try {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error("Failed");

  setForm({ name: "", email: "", message: "" });
  setModal("success");
} catch (error) {
  setModal("error");
} finally {
  setStatus("idle");
}

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
                placeholder="Aditya Fend"
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
                placeholder="aditya@example.com"
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
      {modal && <Modal type={modal} onClose={() => setModal(null)} />}
    </PageWrapper>
  );
}

function Modal({
  type,
  onClose,
}: {
  type: "success" | "error";
  onClose: () => void;
}) {
  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md mx-4 bg-neutral-950 border border-neutral-800 rounded-xl p-8">
        <h3
          className={`text-xl font-semibold mb-2 ${
            isSuccess ? "text-white" : "text-red-400"
          }`}
        >
          {isSuccess ? "Message Sent" : "Something went wrong"}
        </h3>

        <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
          {isSuccess
            ? "Thank you for reaching out. Your message has been successfully sent and I will get back to you soon."
            : "Your message could not be sent. Please try again later or contact me via direct channels."}
        </p>

        <button
          onClick={onClose}
          className="text-sm uppercase tracking-wide border-b border-neutral-600 hover:border-white text-white pb-1 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
