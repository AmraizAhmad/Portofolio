"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Network,
  Rocket,
  ShieldCheck,
  Terminal as TerminalIcon,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Terminal: TerminalIcon,
  Network,
  Code2,
  ShieldCheck,
  Wrench,
  Rocket,
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-bg-secondary/30 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Technical toolkit
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            The foundations, tools, and offensive security concepts I
            practice hands-on.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? ShieldCheck;
            const isFuture = cat.category === "Future Learning";
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "glass-card group p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow",
                  isFuture && "border-dashed border-white/15 bg-white/[0.02]"
                )}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
                      isFuture
                        ? "bg-white/5 text-gray-400 group-hover:text-accent-blue"
                        : "bg-accent-blue/10 text-accent-blue group-hover:bg-accent-green/10 group-hover:text-accent-green"
                    )}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {cat.category}
                    </h3>
                    {isFuture && (
                      <p className="font-mono text-[10px] uppercase tracking-wide text-gray-400">
                        Next up
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition-colors group-hover:border-accent-green/20 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
