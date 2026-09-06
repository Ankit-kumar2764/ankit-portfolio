import React, { useState } from 'react';
import { ProjectCard } from '../components/common/ProjectCard';
import { ProjectModal } from '../components/common/ProjectModal';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../types';
import { ExternalLink, Sparkles, Award } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Featured', 'Full-Stack', 'Frontend', 'Data & ML'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return project.featured;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 scroll-mt-24 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Amber Hasan style section title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-[#ADB7BE] text-sm sm:text-base max-w-xl mx-auto">
            Practical software implementations featuring real-time dashboards, full-stack architectures, and zero-backend client-side dataset processing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/20 scale-105'
                  : 'bg-white dark:bg-[#181818] text-slate-600 dark:text-[#ADB7BE] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Spotlight Banner for SkyOps Control Center (Frontend Wars 2026 Finalist) */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#181818] to-pink-950/40 border-2 border-purple-500/40 relative overflow-hidden shadow-[0_0_35px_rgba(168,85,247,0.15)]">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-md bg-purple-500/20 text-purple-400">
                  <Award className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  Frontend Wars 2026 Finalist Project
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                SkyOps Control Center — Airport Operations Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 mt-2 leading-relaxed">
                Covering 8 operational modules (flights, passengers, security, gates, baggage, maintenance, staff, and retail) with an intentional <strong>zero-backend architecture</strong> parsing CSV datasets via PapaParse and client-side persistence with IndexedDB and localStorage.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://airport-operations-control-center-pi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:scale-105 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Demo</span>
              </a>
              <button
                onClick={() => setSelectedProject(PROJECTS_DATA[0])}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-[#121212] text-slate-900 dark:text-white font-semibold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <span>Architecture Details</span>
              </button>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
