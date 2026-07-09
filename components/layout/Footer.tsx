"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="text-center">
          <p className="font-display text-xl font-medium text-white sm:text-2xl">
            Think Like an Attacker.
          </p>
          <p className="font-display text-xl font-medium text-gradient sm:text-2xl">
            Defend Like a Professional.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-accent-green/40 hover:text-accent-green"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-accent-blue/40 hover:text-accent-blue"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-accent-green/40 hover:text-accent-green"
            aria-label="Send email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/resume" className="hover:text-accent-green">
              Resume
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 transition-colors hover:border-accent-green/40 hover:text-accent-green"
            >
              Back to top <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
