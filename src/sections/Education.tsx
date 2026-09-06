import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 scroll-mt-24 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="mt-3 text-slate-600 dark:text-[#ADB7BE] text-sm sm:text-base max-w-xl mx-auto">
            Rigorous undergraduate foundation in Computer Science, algorithms, and engineering principles.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181818] border-2 border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      {EDUCATION_DATA.degree}
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/30">
                      CGPA: {EDUCATION_DATA.cgpa}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{EDUCATION_DATA.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#121212] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 self-start">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>{EDUCATION_DATA.period}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#ADB7BE] leading-relaxed mb-6">
              Pursuing a Bachelor's degree in Computer Science & Engineering with a focus on DSA, software development, and full-stack web development.
            </p>

            {/* Core Coursework */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                <span>Key Areas of Focus</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EDUCATION_DATA.coreInterests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200/80 dark:border-slate-800/80 text-xs font-medium text-slate-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
