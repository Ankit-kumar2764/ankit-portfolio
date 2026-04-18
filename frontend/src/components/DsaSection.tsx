import { motion } from "framer-motion";
import type { LeetCodeStats } from "../types";
import { SectionHeading } from "./SectionHeading";

interface DsaSectionProps {
  stats: LeetCodeStats | null;
}

export function DsaSection({ stats }: DsaSectionProps) {
  if (!stats) {
    return null;
  }

  const solvedPercent = Math.min(100, Math.round((stats.totalSolved / 500) * 100));

  return (
    <section id="dsa" className="section-wrap">
      <SectionHeading
        eyebrow="Problem Solving"
        title="DSA consistency and coding discipline"
        description="LeetCode progress, topic focus, and consistent algorithmic practice."
      />

      <motion.div
        className="glass-card mx-auto max-w-5xl p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--text)]">LeetCode: {stats.username}</h3>
            <a
              href={stats.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--accent)] hover:underline"
            >
              Visit Profile
            </a>
          </div>
          <p className="rounded-full border border-[var(--card-border)] px-4 py-2 text-sm text-[var(--text-soft)]">
            Total Solved: <span className="font-semibold text-[var(--text)]">{stats.totalSolved}</span>
          </p>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm text-[var(--text-soft)]">
            <span>Goal Completion (500 problems)</span>
            <span>{solvedPercent}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-[color:var(--bg)/0.6]">
            <div className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-emerald-400" style={{ width: `${solvedPercent}%` }} />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[var(--card-border)] p-4 text-center">
            <p className="text-sm text-[var(--text-soft)]">Easy</p>
            <p className="mt-1 text-2xl font-semibold text-emerald-500">{stats.easy}</p>
          </div>
          <div className="rounded-2xl border border-[var(--card-border)] p-4 text-center">
            <p className="text-sm text-[var(--text-soft)]">Medium</p>
            <p className="mt-1 text-2xl font-semibold text-amber-500">{stats.medium}</p>
          </div>
          <div className="rounded-2xl border border-[var(--card-border)] p-4 text-center">
            <p className="text-sm text-[var(--text-soft)]">Hard</p>
            <p className="mt-1 text-2xl font-semibold text-rose-500">{stats.hard}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {stats.topics.map((topic) => (
            <span key={topic} className="rounded-full border border-[var(--card-border)] px-3 py-1 text-sm text-[var(--text-soft)]">
              {topic}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
