import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Layout, Server, Database, BarChart2, Wrench, Zap } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Code className="w-5 h-5 text-teal-500" />;
      case 'Frontend Engineering':
        return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'Backend & APIs':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'Databases & Storage':
        return <Database className="w-5 h-5 text-amber-500" />;
      case 'Data Analytics & ML':
        return <BarChart2 className="w-5 h-5 text-cyan-500" />;
      case 'Libraries & Tooling':
        return <Wrench className="w-5 h-5 text-rose-500" />;
      case 'Workflow Automation':
        return <Zap className="w-5 h-5 text-violet-500" />;
      default:
        return <Code className="w-5 h-5 text-teal-500" />;
    }
  };

  const filterOptions = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const displayedCategories = activeFilter === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === activeFilter);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Technical Skills"
          title="Tools & Technologies I Work With"
          subtitle="Curated toolsets applied across production-style projects, data analytics pipelines, and algorithmic problem solving."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === opt
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition-colors"
                    >
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      {skill.badge && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
