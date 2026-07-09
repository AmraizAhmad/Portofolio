"use client";

import { motion } from "framer-motion";
import { BookOpen, Puzzle, ShieldCheck, Wrench } from "lucide-react";
import { highlights, profile, timeline } from "@/lib/data";

const icons = [BookOpen, Puzzle, ShieldCheck, Wrench];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Learning to defend by learning to attack
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            {profile.bio}
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="mb-10 text-center font-display text-2xl font-semibold text-white">
            Journey so far
          </h3>
          <div className="relative mx-auto max-w-3xl">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-green via-accent-blue/50 to-transparent sm:left-1/2"
              aria-hidden="true"
            />
            <ol className="space-y-10">
              {timeline.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col gap-2 pl-8 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0"
                >
                  <span
                    className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-bg-primary bg-accent-green shadow-glow sm:left-1/2 sm:-translate-x-1/2"
                    aria-hidden="true"
                  />
                  <div className="sm:pr-10 sm:text-right">
                    <span className="font-mono text-xs text-accent-blue">
                      {item.year}
                    </span>
                    <h4 className="mt-1 font-display text-base font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <div className="sm:pl-10">
                    <p className="text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
