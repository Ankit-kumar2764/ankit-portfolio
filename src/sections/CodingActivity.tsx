import React from 'react';
import { ExternalLink, FolderGit2, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { SITE_CONFIG } from '../constants/config';
import { GithubIcon, LeetCodeIcon, CodeChefIcon } from '../components/common/SocialIcons';

export const CodingActivity: React.FC = () => {
  return (
    <section id="activity" className="py-20 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Developer Overview"
          title="Coding Activity & Verified Profiles"
          subtitle="Verifiable development presence across open-source repositories and algorithmic platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* GitHub Activity Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      GitHub Repositories
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      @Ankit-kumar2764
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  Active
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#ADB7BE] leading-relaxed mb-6">
                Open-source repositories containing production-style web applications, hackathon entries (SkyOps Control Center), full-stack platforms, and frontend architectures.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-purple-500" />
                    <span className="font-semibold">SkyOps Control Center</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">React 19 + TypeScript</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-pink-500" />
                    <span className="font-semibold">Care-Scope Analytics</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">React + TanStack Query</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold">Wanderlust</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">Node.js + MongoDB</span>
                </div>
              </div>
            </div>

            <a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LeetCode & Problem Solving Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500">
                    <LeetCodeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      LeetCode & CodeChef
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      @Ankit_kumar6394 • @ankit_kumar_76
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30">
                  250+ Solved
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#ADB7BE] leading-relaxed mb-6">
                Disciplined problem-solving track record on LeetCode with C++, backed by CodeChef practice problems rated 500 difficulty and C++ STL certification.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xl font-bold text-amber-500 font-mono">
                    250+
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    LeetCode Problems Solved
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xl font-bold text-purple-400 font-mono flex items-center gap-1.5">
                    <CodeChefIcon className="w-4 h-4" />
                    <span>500</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    CodeChef Difficulty Rating
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-xs text-slate-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                  <span>Strong command over C++ STL (Vectors, Maps, Heaps, Sets)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                  <span>Emphasis on Arrays, Trees, Dynamic Programming & Graphs</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-500 hover:underline"
              >
                <span>LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={SITE_CONFIG.socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-400 hover:underline"
              >
                <span>CodeChef Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
