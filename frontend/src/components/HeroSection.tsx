import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useTypingEffect } from "../hooks/useTypingEffect";

const profileImagePath = "/profile.jpg";
const fallbackProfileImagePath = "/profile-placeholder.svg";

export function HeroSection() {
  const typedText = useTypingEffect([
    "Full Stack MERN Developer",
    "Frontend + Backend Builder",
    "Problem Solver",
  ]);

  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl" />

      <div className="mx-auto grid w-[min(1120px,94%)] gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            ankitkumar.me · Open To Opportunities
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--text)] md:text-6xl">
            Hi, I am <span className="text-[var(--accent)]">Ankit Kumar</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--text-soft)] md:text-xl">
            {typedText}
            <span className="typing-cursor">|</span>
          </p>
          <p className="mt-6 max-w-2xl text-base text-[var(--text-soft)] md:text-lg">
            I build scalable web apps with strong UI polish, clean APIs, and reliable data workflows.
            My focus combines product quality, performance, and practical problem-solving.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:translate-y-[-2px]"
            >
              Explore Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--card-border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="glass-card relative overflow-hidden p-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="mb-4 flex items-center justify-between text-xs text-[var(--text-soft)]">
            <span>Live Profile Card</span>
            <span>Last updated: April 2026</span>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-[var(--card-border)]">
              <img
                src={profileImagePath}
                alt="Ankit Kumar"
                className="h-72 w-full object-cover"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = fallbackProfileImagePath;
                }}
              />
            </div>
            <div className="rounded-2xl border border-[var(--card-border)] bg-[color:var(--bg)/0.6] p-4">
              <p className="text-sm text-[var(--text-soft)]">Primary Role</p>
              <p className="mt-2 text-xl font-semibold text-[var(--text)]">Full Stack Developer (MERN)</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[var(--card-border)] bg-[color:var(--bg)/0.6] p-4">
                <p className="text-sm text-[var(--text-soft)]">Experience Style</p>
                <p className="mt-2 text-base font-medium text-[var(--text)]">Project-Driven</p>
              </div>
              <div className="rounded-2xl border border-[var(--card-border)] bg-[color:var(--bg)/0.6] p-4">
                <p className="text-sm text-[var(--text-soft)]">Current Focus</p>
                <p className="mt-2 text-base font-medium text-[var(--text)]">MERN + DSA</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
