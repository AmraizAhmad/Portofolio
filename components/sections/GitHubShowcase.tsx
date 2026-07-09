"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Github, Star } from "lucide-react";
import { profile } from "@/lib/data";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

export default function GitHubShowcase() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=4`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (!cancelled) setRepos(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Live from GitHub</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Recent activity
          </h2>
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card mt-12 overflow-x-auto p-6 shadow-card"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/00FF88/${profile.githubUser}`}
            alt={`${profile.name}'s GitHub contribution graph`}
            className="mx-auto min-w-[600px]"
            loading="lazy"
          />
        </motion.div>

        {/* Latest repos */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {error && (
            <p className="col-span-full text-center text-sm text-gray-400">
              Couldn&apos;t load live repositories right now — visit{" "}
              <a
                href={profile.github}
                className="text-accent-green hover:underline"
              >
                GitHub directly
              </a>
              .
            </p>
          )}

          {!error && !repos &&
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="glass-card h-32 animate-pulse p-6 shadow-card"
              />
            ))}

          {repos?.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-col p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center gap-2 text-white">
                <Github size={16} className="text-accent-green" />
                <span className="font-mono text-sm font-medium">
                  {repo.name}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 flex-1 text-sm text-gray-400">
                {repo.description ?? "No description provided."}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                {repo.language && <span>{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
