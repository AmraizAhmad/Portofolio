"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Clock, ExternalLink, FileCheck2 } from "lucide-react";
import { SiCoursera, SiGoogle } from "react-icons/si";
import { certifications, futureCertifications } from "@/lib/data";

function IssuerLogo({ logo }: { logo?: "google" | "coursera" | "corvit" }) {
  if (logo === "google") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-400">
        <SiGoogle size={12} className="text-accent-blue" /> Google
      </span>
    );
  }
  if (logo === "coursera") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-400">
        <SiCoursera size={12} className="text-accent-blue" /> Coursera
      </span>
    );
  }
  if (logo === "corvit") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-400">
        <Award size={12} className="text-accent-green" /> Corvit Systems
      </span>
    );
  }
  return null;
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-bg-secondary/30 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Certifications</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Formal validation, backed by hands-on work
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">
            Completed training programs and the certifications I&apos;m
            currently working toward.
          </p>
        </motion.div>

        {/* Completed certifications */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group flex flex-col overflow-hidden shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              {cert.image && (
                <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-white">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 text-[11px] font-mono uppercase tracking-wide text-accent-green">
                    <FileCheck2 size={12} />
                    {cert.status}
                  </span>
                  <IssuerLogo logo={cert.issuerLogo} />
                </div>

                <h3 className="font-display text-lg font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{cert.issuer}</p>
                {cert.date && (
                  <p className="mt-1 font-mono text-xs text-accent-blue">
                    {cert.date}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-3">
                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-accent-green/40 hover:text-accent-green"
                    >
                      <FileCheck2 size={13} /> View Certificate
                    </a>
                  )}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-accent-blue/10 hover:text-accent-blue"
                    >
                      <ExternalLink size={13} /> Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Future / in-progress certifications */}
        <div className="mt-14">
          <h3 className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-gray-400">
            Working toward
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {futureCertifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-400">
                  <Clock size={15} />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">
                    {cert.title}
                  </p>
                  <p className="text-xs text-gray-400">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
