"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import ParticleBackground from "@/components/ui/ParticleBackground";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28 pb-20"
    >
      <ParticleBackground />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-green/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="eyebrow mb-4"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-5 space-y-1"
          >
            <p className="font-mono text-lg text-accent-blue sm:text-xl">
              {profile.title}
            </p>
            <p className="font-mono text-base text-gray-400 sm:text-lg">
              {profile.subtitle}
            </p>
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 text-sm font-semibold text-bg-primary shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent-blue/50 hover:text-accent-blue"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent-green/50 hover:text-accent-green"
            >
              <Mail size={16} />
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right — profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-br from-accent-green/30 via-accent-blue/20 to-transparent blur-2xl" />
          <div className="absolute inset-0 rounded-full border border-accent-green/30" />
          <div className="absolute inset-3 rounded-full border border-dashed border-accent-blue/20" />
          <div className="relative h-[85%] w-[85%] overflow-hidden rounded-full border-2 border-white/10 shadow-glow">
            <Image
              src="/profile.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
