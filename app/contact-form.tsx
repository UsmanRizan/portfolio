"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClasses}
        />
        <input
          type="email"
          required
          placeholder="Email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClasses}
        />
      </div>
      <input
        type="tel"
        placeholder="Phone number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputClasses}
      />
      <input
        type="text"
        placeholder="Subject"
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
        className={inputClasses}
      />
      <textarea
        required
        placeholder="Message"
        rows={6}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${inputClasses} resize-none`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-blue-700 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-center text-sm text-green-600">Message sent successfully.</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
