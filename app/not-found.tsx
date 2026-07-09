import Link from "next/link";
import { Home, TerminalSquare } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-grid px-6 text-center">
      <div className="glass-card max-w-md p-10 shadow-card">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-green/10 text-accent-green">
          <TerminalSquare size={26} />
        </div>
        <p className="font-mono text-sm text-accent-green">
          404 — access_denied
        </p>
        <h1 className="mt-3 font-display text-2xl font-bold text-white">
          Route not found on this target
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          The page you&apos;re scanning for doesn&apos;t exist, moved, or was
          never mapped. Let&apos;s get you back to known territory.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 text-sm font-semibold text-bg-primary shadow-glow transition-transform hover:-translate-y-0.5"
        >
          <Home size={16} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
