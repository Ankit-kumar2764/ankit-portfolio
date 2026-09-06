import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section id="exploring" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Continuous Learning"
          title="Currently Exploring"
          subtitle="Areas of software engineering and technology I am actively researching and expanding into."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CURRENTLY_EXPLORING.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                    {item.category}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                {item.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Callout Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 via-slate-900/40 to-indigo-500/10 border border-teal-500/30 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Curiosity & Growth Mindset
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                As a freshman/sophomore engineer, I emphasize building working systems first, followed by reading documentation, analyzing source code, and refining architectural trade-offs.
              </p>
            </div>
            <div className="pt-4 text-xs font-mono text-teal-600 dark:text-teal-400">
              Always open to technical reading & mentorship
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
