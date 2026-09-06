import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Check } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';
import confetti from 'canvas-confetti';

interface ResumeCTAProps {
  onOpenResumeModal: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResumeModal }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadClick = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#a855f7', '#ec4899', '#3b82f6'],
      });
    } catch {
      // safe fallback
    }
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#181818] via-[#121212] to-slate-900 border-2 border-purple-500/30 text-center shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden">
          {/* Radiant ambient glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.3),transparent_70%)] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.25),transparent_70%)] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-6 shadow-inner">
              <FileText className="w-7 h-7" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Want to know more about my journey?
            </h2>

            <p className="text-[#ADB7BE] text-sm sm:text-base leading-relaxed mb-8">
              Explore my verified B.Tech CSE coursework (CGPA 7.32), 250+ LeetCode problem solutions, Frontend Wars 2026 Finalist credentials, and full-stack software projects in my resume.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Download Resume Button with Google Drive link */}
              <a
                href={SITE_CONFIG.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 active:scale-95 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                {downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                <span>{downloaded ? 'Resume Link Opened' : 'Download Resume (Google Drive)'}</span>
              </a>

              {/* View Resume Interactive Modal */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/20 hover:border-purple-400 backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <span>View Resume Online</span>
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-6 font-mono">
              Class of 2028 • ABES Engineering College • Software Engineering Intern
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
