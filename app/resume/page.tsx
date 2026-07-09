import type { Metadata } from "next";
import Link from "next/link";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile, projects, skillCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: `ATS-friendly resume for ${profile.name}, ${profile.title}.`,
};

export default function ResumePage() {
  return (
    <section className="relative min-h-screen bg-grid pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Resume</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-1 font-mono text-sm text-accent-blue">
              {profile.title} &middot; {profile.subtitle}
            </p>
          </div>
          <Link
            href={profile.resumeFile}
            className="inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 text-sm font-semibold text-bg-primary shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download PDF
          </Link>
        </div>

        <div className="glass-card space-y-10 p-8 shadow-card sm:p-10">
          {/* Contact strip */}
          <div className="flex flex-wrap gap-5 border-b border-white/10 pb-6 text-sm text-gray-400">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 hover:text-accent-green"
            >
              <Mail size={14} /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-accent-green"
            >
              <Phone size={14} /> {profile.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-green"
            >
              <Github size={14} /> github.com/AmraizAhmad
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-green"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>

          {/* Objective */}
          <div>
            <h2 className="font-display text-lg font-semibold text-accent-green">
              Career Objective
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {profile.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display text-lg font-semibold text-accent-green">
              Education
            </h2>
            <div className="mt-3 flex flex-col gap-1 text-sm">
              <p className="font-medium text-white">
                {profile.degree} — {profile.university}
              </p>
              <p className="text-gray-400">
                In Progress &middot; Expected Graduation:{" "}
                {profile.expectedGraduation}
              </p>
              <p className="mt-1 text-gray-400">
                Coursework: Network Security, Operating Systems, Applied
                Cryptography, Web Application Security, Digital Forensics
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-display text-lg font-semibold text-accent-green">
              Certifications
            </h2>
            <div className="mt-3 space-y-2 text-sm">
              <p className="text-white">
                Foundations of Cybersecurity{" "}
                <span className="text-gray-400">
                  — Google via Coursera, December 2025
                </span>
              </p>
              <p className="text-white">
                Cyber Security Training{" "}
                <span className="text-gray-400">
                  — Corvit Systems, September–November 2025
                </span>
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="font-display text-lg font-semibold text-accent-green">
              Skills
            </h2>
            <div className="mt-3 space-y-3">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="text-sm">
                  <span className="font-medium text-white">
                    {cat.category}:{" "}
                  </span>
                  <span className="text-gray-400">
                    {cat.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-display text-lg font-semibold text-accent-green">
              Projects
            </h2>
            <div className="mt-3 space-y-4">
              {projects.slice(0, 5).map((project) => (
                <div key={project.title} className="text-sm">
                  <p className="font-medium text-white">
                    {project.title}{" "}
                    <span className="font-normal text-gray-400">
                      — {project.tech.join(", ")}
                    </span>
                  </p>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
