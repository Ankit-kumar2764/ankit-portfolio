import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, MapPin, Award, Code2 } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from '../components/common/SocialIcons';
import confetti from 'canvas-confetti';
import ankitPhoto from '../assets/ankit_photo.jpg';

interface HeroProps {
  onOpenResumeModal: () => void;
}

// Roles for typewriter animation
const HERO_ROLES = [
  "Ankit Kumar",
  "Software Engineering Intern",
  "Full-Stack Developer",
  "Problem Solver (250+ LeetCode)",
  "C++ & React Specialist"
];

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = HERO_ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleDownloadCelebration = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#ec4899', '#3b82f6'],
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Amber Hasan style radial gradient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)] blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 w-[350px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.12),transparent_70%)] blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status / Location badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Summer '26 Internships</span>
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{SITE_CONFIG.location}</span>
              </span>
            </div>

            {/* Main Heading with Amber Hasan animated typing & gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              <span>Hello, I'm </span>
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent inline-block min-h-[1.2em]">
                {currentText}
                <span className="animate-pulse text-purple-400">|</span>
              </span>
            </h1>

            {/* Resume Summary Description */}
            <p className="text-slate-600 dark:text-[#ADB7BE] text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Computer Science undergraduate at <strong className="text-slate-900 dark:text-white">ABES Engineering College</strong> (CGPA: <strong>7.32</strong>). Passionate about Object-Oriented Programming, C++, and full-stack web development. Solved <strong className="text-purple-500 dark:text-purple-400 font-bold">250+ DSA problems</strong> on LeetCode and built production-ready systems like the <strong>SkyOps Airport Operations Control Center</strong>.
            </p>

            {/* Action Buttons styled like amberhasan.me */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              {/* Primary Hire Me button with amberhasan gradient */}
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-95 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)] inline-flex items-center gap-2"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume button linked directly to Google Drive */}
              <a
                href={SITE_CONFIG.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadCelebration}
                className="p-[1.5px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 active:scale-95 transition-all inline-block"
              >
                <span className="block bg-white dark:bg-[#121212] hover:bg-slate-50 dark:hover:bg-slate-900 rounded-full px-7 py-3 text-slate-900 dark:text-white text-sm sm:text-base font-semibold transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span>Download Resume</span>
                </span>
              </a>

              {/* View Resume in modal */}
              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-500 dark:hover:text-purple-400 bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
              >
                View Full CV
              </button>
            </div>

            {/* Social Links including CodeChef, LeetCode, GitHub, LinkedIn, Email */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Profiles:
              </span>

              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-400 hover:scale-110 transition-all shadow-sm"
                title="GitHub: Ankit-kumar2764"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110 transition-all shadow-sm"
                title="LinkedIn: ankit-yadav"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2.5 rounded-full text-amber-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 hover:scale-110 transition-all shadow-sm"
                title="LeetCode: 250+ Solved (Ankit_kumar6394)"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeChef Profile"
                className="p-2.5 rounded-full text-purple-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 hover:scale-110 transition-all shadow-sm"
                title="CodeChef: ankit_kumar_76"
              >
                <CodeChefIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.socials.email}
                aria-label="Email Ankit"
                className="p-2.5 rounded-full text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-pink-500 hover:scale-110 transition-all shadow-sm"
                title="Email: ay9335144776@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Amber Hasan Style Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Radiant glow behind photo */}
            <div className="absolute inset-0 max-w-xs sm:max-w-sm mx-auto bg-gradient-to-tr from-purple-600/30 via-pink-500/25 to-blue-500/20 rounded-3xl blur-2xl -z-10" />

            {/* Photo Card Frame matching amberhasan.me */}
            <div className="relative w-64 h-84 sm:w-72 sm:h-96 lg:w-80 lg:h-[430px] rounded-3xl overflow-hidden border-4 border-white/90 dark:border-[#33353F] shadow-[0_0_40px_rgba(168,85,247,0.3)] group bg-slate-900">
              <img
                src={ankitPhoto}
                alt="Ankit Kumar"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('/ankit_photo.jpg')) {
                    target.src = '/ankit_photo.jpg';
                  }
                }}
              />

              {/* Subtle inner gradient shadow at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            </div>

            {/* Floating Achievement Badge 1 (Top-Right) */}
            <div className="absolute -top-3 -right-2 sm:right-0 bg-white/90 dark:bg-[#181818]/95 backdrop-blur-md p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
              <div className="p-1.5 rounded-xl bg-amber-500/15 text-amber-500">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-amber-500 leading-tight">250+ Solved</div>
                <div className="text-[10px] text-slate-400 font-normal">LeetCode (C++)</div>
              </div>
            </div>

            {/* Floating Achievement Badge 2 (Bottom-Left) */}
            <div className="absolute -bottom-3 -left-2 sm:left-0 bg-white/90 dark:bg-[#181818]/95 backdrop-blur-md p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
              <div className="p-1.5 rounded-xl bg-purple-500/15 text-purple-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-purple-400 leading-tight">Finalist</div>
                <div className="text-[10px] text-slate-400 font-normal">Frontend Wars '26</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
