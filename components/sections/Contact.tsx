"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      https://formspree.io/f/xnjeaabw, {
        method: "POST",
        headers: {
     "Content-Type": "application/json",
     "Accept": "application/json",
   },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            Open to internships, junior penetration testing roles, and
            security-focused collaboration.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="glass-card flex items-center gap-4 p-5 shadow-card transition-colors hover:border-accent-green/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm text-white">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="glass-card flex items-center gap-4 p-5 shadow-card transition-colors hover:border-accent-green/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="text-sm text-white">{profile.phone}</p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-5 shadow-card transition-colors hover:border-accent-blue/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                <Github size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-400">GitHub</p>
                <p className="text-sm text-white">github.com/AmraizAhmad</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-5 shadow-card transition-colors hover:border-accent-blue/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                <Linkedin size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-400">LinkedIn</p>
                <p className="text-sm text-white">Amraiz Ahmad</p>
              </div>
            </a>

            {/* Map placeholder */}
            <div className="glass-card relative flex h-40 items-center justify-center overflow-hidden shadow-card">
              <div className="bg-grid absolute inset-0 opacity-40" />
              <div className="relative flex flex-col items-center gap-2 text-gray-400">
                <MapPin size={20} className="text-accent-green" />
                <span className="text-xs">{profile.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass-card space-y-5 p-7 shadow-card"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium text-gray-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400/60 focus:border-accent-green/50 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium text-gray-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400/60 focus:border-accent-green/50 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400/60 focus:border-accent-green/50 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-green px-6 py-3 text-sm font-semibold text-bg-primary shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-center text-sm text-accent-green">
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Please email me directly at{" "}
                {profile.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
