import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, CheckCircle2, Trophy } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';
import ankitPhoto from '../assets/ankit_photo.jpg';

type TabType = 'skills' | 'education' | 'certifications';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('skills');

  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-[#121212] border-y border-slate-200/80 dark:border-slate-800 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Profile Card with Photo / Metric Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-3xl p-6 bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-6">
                <img
                  src={ankitPhoto}
                  alt="Ankit Kumar"
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-purple-500/80 shadow-md ring-2 ring-purple-500/20"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/ankit_photo.jpg')) {
                      target.src = '/ankit_photo.jpg';
                    }
                  }}
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Ankit Kumar
                  </h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                    Software Engineering Intern Role
                  </p>
                </div>
              </div>

              {/* Verified Metrics in Amber Hasan card style */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs">
                  <span className="text-slate-600 dark:text-slate-400">LeetCode Solved</span>
                  <span className="font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    250+ Problems (C++)
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs">
                  <span className="text-slate-600 dark:text-slate-400">B.Tech CSE Grade</span>
                  <span className="font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                    CGPA 7.32
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Frontend Wars '26</span>
                  <span className="font-mono font-bold text-pink-500 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
                    Finalist Certificate
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs">
                  <span className="text-slate-600 dark:text-slate-400">CodeChef Practice</span>
                  <span className="font-mono font-bold text-teal-500 bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/20">
                    500 Rating & STL
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>ABES Engineering College</span>
                <span>Graduation: 2028</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Content from amberhasan.me */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              About Me
            </h2>

            <p className="text-slate-700 dark:text-[#ADB7BE] text-sm sm:text-base leading-relaxed mb-4">
              I am a Computer Science and Engineering student at <strong className="text-slate-900 dark:text-white">ABES Engineering College, Ghaziabad</strong>, with strong foundations in Data Structures and Algorithms and hands-on experience in full-stack web development. I enjoy building scalable, user-focused applications using modern technologies.
            </p>

            <p className="text-slate-700 dark:text-[#ADB7BE] text-sm sm:text-base leading-relaxed mb-8">
              I have solved <strong className="text-purple-500 dark:text-purple-400 font-bold">250+ problems</strong> on LeetCode using C++, which has strengthened my problem-solving skills and ability to write efficient, maintainable code. I am a continuous learner actively seeking opportunities to contribute to real-world projects and grow as a software engineer.
            </p>

            {/* Amber Hasan style Tabs Switcher */}
            <div className="flex items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-2 mb-6">
              <button
                onClick={() => setActiveTab('skills')}
                className={`text-sm sm:text-base font-semibold transition-all cursor-pointer relative pb-2 ${
                  activeTab === 'skills'
                    ? 'text-purple-500 dark:text-purple-400 border-b-2 border-purple-500'
                    : 'text-slate-500 hover:text-slate-900 dark:text-[#ADB7BE] dark:hover:text-white'
                }`}
              >
                Skills
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`text-sm sm:text-base font-semibold transition-all cursor-pointer relative pb-2 ${
                  activeTab === 'education'
                    ? 'text-purple-500 dark:text-purple-400 border-b-2 border-purple-500'
                    : 'text-slate-500 hover:text-slate-900 dark:text-[#ADB7BE] dark:hover:text-white'
                }`}
              >
                Education
              </button>

              <button
                onClick={() => setActiveTab('certifications')}
                className={`text-sm sm:text-base font-semibold transition-all cursor-pointer relative pb-2 ${
                  activeTab === 'certifications'
                    ? 'text-purple-500 dark:text-purple-400 border-b-2 border-purple-500'
                    : 'text-slate-500 hover:text-slate-900 dark:text-[#ADB7BE] dark:hover:text-white'
                }`}
              >
                Certifications & Awards
              </button>
            </div>

            {/* Tab Panels */}
            <div className="min-h-[260px]">
              <AnimatePresence mode="wait">
                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-gray-300"
                  >
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900 dark:text-white">Programming Languages: </strong>
                        <span>C++, Python, JavaScript (ES6+), TypeScript, SQL, C</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900 dark:text-white">Frontend: </strong>
                        <span>React, Next.js, Tailwind CSS, Vite, HTML5, CSS3, TanStack Table, Recharts</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900 dark:text-white">Backend & Microservices: </strong>
                        <span>Node.js, Express.js, Spring Boot, FastAPI, NestJS, REST APIs</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900 dark:text-white">Databases & Storage: </strong>
                        <span>MySQL, MongoDB (Mongoose), SQLite, IndexedDB, localStorage</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900 dark:text-white">DevOps & Tools: </strong>
                        <span>Git, GitHub, GitHub Actions (CI/CD), Docker, Kubernetes, Postman, VS Code</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900 dark:text-white">Core Computer Science: </strong>
                        <span>Data Structures & Algorithms (DSA), OOP, DBMS, Operating Systems, Computer Networks</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-purple-500" />
                        <span>ABES Engineering College Ghaziabad</span>
                      </h4>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/20 self-start">
                        2024 — 2028
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-4">
                      <span>B.Tech in Computer Science & Engineering</span>
                      <span className="bg-pink-500/10 text-pink-500 px-2 py-0.5 rounded border border-pink-500/20">
                        CGPA: 7.32
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Pursuing a Bachelor's degree in Computer Science & Engineering with a focus on DSA, software development, and full-stack web development.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {EDUCATION_DATA.coreInterests.map((interest) => (
                        <span
                          key={interest}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'certifications' && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-gray-300"
                  >
                    {ACHIEVEMENTS_DATA.map((ach, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                        <Trophy className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 dark:text-white block">
                            {ach.platform} — {ach.headline}
                          </strong>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {ach.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    {CERTIFICATIONS_DATA.slice(0, 2).map((cert, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 dark:text-white block">
                            {cert.title}
                          </strong>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
