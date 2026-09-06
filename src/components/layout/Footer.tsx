import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/config';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/60 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              {SITE_CONFIG.name}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
              Developer Portfolio
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 italic">
            "Building, learning and solving one problem at a time."
          </p>
        </div>

        {/* Center Social links */}
        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={SITE_CONFIG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={SITE_CONFIG.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <LeetCodeIcon className="w-4 h-4" />
          </a>
          <a
            href={SITE_CONFIG.socials.email}
            aria-label="Email Ankit"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right copyright & Back to top */}
        <div className="flex items-center gap-4 text-center md:text-right">
          <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
            &copy; 2026 Ankit Kumar. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
