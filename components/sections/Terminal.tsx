"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { terminalLines } from "@/lib/data";

type RenderedLine = {
  type: "prompt" | "output";
  text: string;
};

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [rendered, setRendered] = useState<RenderedLine[]>([]);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const all: RenderedLine[] = [];
      terminalLines.forEach((line) => {
        all.push({ type: "prompt", text: line.prompt });
        line.output.forEach((o) => all.push({ type: "output", text: o }));
      });
      setRendered(all);
      setTyping(false);
      return;
    }

    let cancelled = false;
    const lines: RenderedLine[] = [];

    async function run() {
      for (const line of terminalLines) {
        if (cancelled) return;
        await typeLine(line.prompt, "prompt");
        for (const out of line.output) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, 150));
          lines.push({ type: "output", text: out });
          setRendered([...lines]);
        }
        await new Promise((r) => setTimeout(r, 400));
      }
      setTyping(false);
    }

    async function typeLine(text: string, type: "prompt") {
      let current = "";
      for (const char of text) {
        if (cancelled) return;
        current += char;
        setRendered([...lines, { type, text: current }]);
        await new Promise((r) => setTimeout(r, 35));
      }
      lines.push({ type, text });
      setRendered([...lines]);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [isInView]);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl px-6 pb-24 -mt-8 sm:-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass-card overflow-hidden shadow-card"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-gray-400">
            amraiz@security:~
          </span>
        </div>
        <div className="min-h-[220px] space-y-1.5 p-6 font-mono text-sm leading-relaxed">
          {rendered.map((line, i) =>
            line.type === "prompt" ? (
              <div key={i} className="flex gap-2">
                <span className="text-accent-green">$</span>
                <span className="text-white">{line.text}</span>
              </div>
            ) : (
              <div key={i} className="pl-4 text-accent-blue">
                {line.text}
              </div>
            )
          )}
          {typing && <span className="caret animate-blink" />}
        </div>
      </motion.div>
    </div>
  );
}
