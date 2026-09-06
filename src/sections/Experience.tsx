import React from 'react';
import { Trophy, Calendar, CheckCircle, ExternalLink, Sparkles, Award } from 'lucide-react';
import { HACKATHONS_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 scroll-mt-24 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Events & Hackathons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
            Hackathons & Technical Events
          </h2>
          <p className="mt-3 text-slate-600 dark:text-[#ADB7BE] text-sm sm:text-base max-w-xl mx-auto">
            Competitive frontend sprints, national hackathons, and collaborative engineering challenges.
          </p>
        </div>

        <div className="space-y-6">
          {HACKATHONS_DATA.map((event) => {
            const isFinalist = event.badge?.includes('Finalist');

            return (
              <div
                key={event.id}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  isFinalist
                    ? 'bg-gradient-to-r from-white via-slate-50 to-purple-50/30 dark:from-[#181818] dark:via-[#151515] dark:to-purple-950/20 border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.12)]'
                    : 'bg-white dark:bg-[#181818] border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                        {event.edition}
                      </span>
                      {isFinalist && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                          <Award className="w-3 h-3" />
                          <span>Finalist & Certificate of Achievement</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {event.title}
                    </h3>
                    {event.organizer && (
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        Organized by {event.organizer}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 self-start">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>{event.year}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-[#ADB7BE] leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Focus areas */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                    <span>Key Focus & Skills</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {event.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-[#121212] text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-slate-800"
                      >
                        <CheckCircle className="w-3 h-3 text-purple-500" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link to project if associated */}
                {event.projectAssociated && (
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Resulting Project: <strong className="text-purple-500">{event.projectAssociated}</strong>
                    </span>
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      <span>View in Projects</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
