"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Live: "border-accent-green/30 bg-accent-green/10 text-accent-green",
  "In Progress": "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
  Planned: "border-white/15 bg-white/5 text-gray-400",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Projects</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Things I&apos;ve built &amp; broken (ethically)
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            A mix of tooling, labs, and write-ups from my hands-on practice.
            Repos are updated as work progresses.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass-card flex flex-col p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <span
                  className={cn(
                    "shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wide",
                    statusStyles[project.status]
                  )}
                >
                  {project.status}
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:border-accent-green/40 hover:text-accent-green"
                >
                  <Github size={14} /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-accent-blue/10 hover:text-accent-blue"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
