import React from 'react';
import { ExternalLink, Terminal, Flame, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';
import { DSA_TOPICS } from '../data/portfolioData';
import { LeetCodeIcon, CodeChefIcon } from '../components/common/SocialIcons';

export const DSASection: React.FC = () => {
  return (
    <section id="programming" className="py-20 scroll-mt-24 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Competitive Programming & DSA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
            Problem Solving
          </h2>
          <p className="mt-3 text-slate-600 dark:text-[#ADB7BE] text-sm sm:text-base leading-relaxed">
            I actively practice competitive programming with a strong focus on data structures, algorithms, and algorithmic consistency using C++.
          </p>
        </div>

        {/* LeetCode & CodeChef Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* LeetCode Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#181818] border-2 border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.06)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center p-2.5 border border-amber-500/20">
                    <LeetCodeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      LeetCode Profile
                    </h3>
                    <span className="text-xs font-mono text-purple-500 dark:text-purple-400">
                      @Ankit_kumar6394
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-500/15 text-amber-500 border border-amber-500/30">
                  250+ Solved
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                Solved 250+ Data Structures & Algorithms problems on LeetCode using C++, demonstrating consistent problem-solving discipline and optimal time-space complexity analysis.
              </p>

              {/* Progress Breakdown Pills */}
              <div className="grid grid-cols-3 gap-2.5 mb-6 text-center">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-slate-800">
                  <div className="text-sm font-bold text-emerald-500">Foundational</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Easy Problems</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-slate-800">
                  <div className="text-sm font-bold text-amber-500">Core Focus</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Medium Topics</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-slate-800">
                  <div className="text-sm font-bold text-rose-500">Advanced</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Hard Paradigms</div>
                </div>
              </div>
            </div>

            <a
              href={SITE_CONFIG.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold text-xs sm:text-sm border border-amber-500/30 transition-all hover:scale-[1.01]"
            >
              <span>View LeetCode Profile (Ankit_kumar6394)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* CodeChef Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#181818] border-2 border-slate-200 dark:border-slate-800 hover:border-purple-500/40 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.06)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center p-2.5 border border-purple-500/20">
                    <CodeChefIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      CodeChef Profile
                    </h3>
                    <span className="text-xs font-mono text-purple-500 dark:text-purple-400">
                      @ankit_kumar_76
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-purple-500/15 text-purple-400 border border-purple-500/30">
                  500 Rating
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                Completed all practice problems rated 500 difficulty on CodeChef, and completed all lessons and projects on C++ STL (Standard Template Library) for optimal algorithmic execution.
              </p>

              {/* Verified Badges */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-gray-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Completed all practice problems rated 500 difficulty</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Certified in C++ STL (Vectors, Maps, Sets, Iterators, Sorting)</span>
                </div>
              </div>
            </div>

            <a
              href={SITE_CONFIG.socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 font-semibold text-xs sm:text-sm border border-purple-500/30 transition-all hover:scale-[1.01]"
            >
              <span>View CodeChef Profile (ankit_kumar_76)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Core Topics Matrix */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#181818] border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-500" />
                <span>Active DSA Practice Topics (in C++)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Techniques and patterns practiced daily to refine runtime efficiency and memory usage.
              </p>
            </div>

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold self-start sm:self-auto">
              C++ STL Engine
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {DSA_TOPICS.map((topic) => (
              <div
                key={topic.name}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {topic.name}
                  </span>
                  <span className="text-[10px] font-mono text-purple-500 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                    {topic.count}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
