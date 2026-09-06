import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/config';
import { PROJECTS_DATA, CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#ec4899', '#3b82f6'],
      });
    } catch {
      // safe fallback
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto z-10 bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-900 dark:text-slate-100"
        >
          {/* Top Actions */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-semibold">
                Verified Curriculum Vitae
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                Ankit Kumar • Class of 2028
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:opacity-90 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open in Google Drive / PDF</span>
              </a>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Paper Content */}
          <div className="space-y-8 font-sans">
            {/* Header */}
            <div className="text-center sm:text-left border-b border-slate-200 dark:border-slate-800/80 pb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white">
                Ankit Kumar
              </h1>
              <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-1">
                Software Engineering Intern role
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600 dark:text-slate-300 mt-3 font-mono">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-purple-500" />
                  {SITE_CONFIG.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-pink-500" />
                  {SITE_CONFIG.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  {SITE_CONFIG.location}
                </span>
                <a
                  href={SITE_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-500 hover:underline"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href={SITE_CONFIG.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-amber-500 hover:underline"
                >
                  <LeetCodeIcon className="w-3.5 h-3.5" />
                  LeetCode (250+)
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-purple-500 dark:text-purple-400 mb-2 flex items-center gap-2">
                <span>Professional Summary</span>
                <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Computer Science undergraduate with strong skills in Object-Oriented Programming, C++, and full-stack web development. Gained practical exposure through projects such as a responsive Airport Operations Control Center that streamlined operations across 8 modules. Ready to contribute as a Software Engineering Intern with a focus on software development and problem-solving.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-purple-500 dark:text-purple-400 mb-3 flex items-center gap-2">
                <span>Education</span>
                <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    ABES Engineering College Ghaziabad | Ghaziabad
                  </h3>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    B.Tech CSE • <span className="font-semibold text-purple-600 dark:text-purple-400">CGPA: 7.32</span>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Pursuing a Bachelor's degree in Computer Science & Engineering with a focus on DSA, software development, and full-stack web development.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  2024 — 2028
                </span>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-purple-500 dark:text-purple-400 mb-4 flex items-center gap-2">
                <span>Projects</span>
                <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              </h2>

              <div className="space-y-6">
                {PROJECTS_DATA.slice(0, 3).map((proj) => (
                  <div key={proj.id} className="text-xs sm:text-sm">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                          {proj.title}
                        </span>
                        <span className="text-slate-400">|</span>
                        <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                          {proj.role || "Software Developer"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        {proj.liveDemoUrl && (
                          <a
                            href={proj.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-purple-500 hover:underline"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:underline"
                          >
                            <span>GitHub</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                      Technologies: {proj.techStack.join(', ')}
                    </p>

                    <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                      {proj.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Matrix */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-purple-500 dark:text-purple-400 mb-3 flex items-center gap-2">
                <span>Technical Skills</span>
                <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Programming Languages:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    C++, Python, JavaScript, TypeScript, SQL, C
                  </span>
                </div>

                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Frameworks & Libraries:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    React, Next.js, Node.js, Express, Tailwind CSS, Spring Boot, FastAPI, NestJS
                  </span>
                </div>

                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Tools & Platforms:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    Git, GitHub, GitHub Actions, Postman, Docker, Kubernetes
                  </span>
                </div>

                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                    Databases:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    MySQL, MongoDB, SQLite
                  </span>
                </div>
              </div>
            </div>

            {/* Awards & Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-purple-500 dark:text-purple-400 mb-3 flex items-center gap-2">
                <span>Awards & Achievements</span>
                <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              </h2>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Frontend Wars 2026 — Finalist: </strong>
                    <span className="text-slate-600 dark:text-slate-300">
                      Qualified as a Finalist in Frontend Wars 2026 and received a Certificate of Achievement for technical skills, creativity, and frontend development.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">LeetCode — 250+ Problems Solved: </strong>
                    <span className="text-slate-600 dark:text-slate-300">
                      Solved 250+ Data Structures & Algorithms problems on LeetCode using C++, demonstrating consistent problem-solving and algorithmic practice.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">CodeChef — 500 Difficulty Rating & C++ STL: </strong>
                    <span className="text-slate-600 dark:text-slate-300">
                      Completed all practice problems rated 500 difficulty and completed all lessons and projects on C++ STL (Standard Template Library).
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Participation */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-purple-500 dark:text-purple-400 mb-3 flex items-center gap-2">
                <span>Certifications & Participation</span>
                <span className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                {CERTIFICATIONS_DATA.map((cert, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-0.5">
                      {cert.title}
                    </strong>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
