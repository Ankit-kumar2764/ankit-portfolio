import React from 'react';
import { ExternalLink, ArrowRight, Plane, Activity, Compass, Layers, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../types';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const isSkyOps = project.id === 'skyops-control-center';
  const isCareScope = project.id === 'care-scope-analytics';
  const isWanderlust = project.id === 'wanderlust';

  const getProjectIcon = () => {
    if (isSkyOps) return <Plane className="w-8 h-8 text-purple-400 -rotate-45" />;
    if (isCareScope) return <Activity className="w-8 h-8 text-pink-400" />;
    if (isWanderlust) return <Compass className="w-8 h-8 text-blue-400" />;
    return <Layers className="w-8 h-8 text-indigo-400" />;
  };

  return (
    <div className="group rounded-3xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 p-4 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] flex flex-col justify-between">
      <div>
        {/* Top Banner / Visual Mockup with Amber Hasan style hover overlay */}
        <div className="relative h-48 sm:h-52 w-full rounded-2xl bg-gradient-to-br from-slate-900 via-[#121212] to-slate-950 overflow-hidden flex flex-col items-center justify-center p-6 border border-slate-200/50 dark:border-slate-800">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />

          {/* Central Visual */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
              {getProjectIcon()}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  Featured
                </span>
              )}
            </div>
          </div>

          {/* Amber Hasan style full hover overlay with quick action circle buttons */}
          <div className="absolute inset-0 bg-[#121212]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Live Demo"
                className="w-12 h-12 rounded-full border-2 border-slate-400 hover:border-white text-white flex items-center justify-center hover:scale-110 transition-all bg-black/50 shadow-lg"
                title="Launch Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Code on GitHub"
                className="w-12 h-12 rounded-full border-2 border-slate-400 hover:border-white text-white flex items-center justify-center hover:scale-110 transition-all bg-black/50 shadow-lg"
                title="View Code on GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="pt-5 pb-2 px-1">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            {project.role && (
              <span className="text-[11px] font-mono font-semibold text-purple-500 dark:text-purple-400">
                {project.role}
              </span>
            )}
          </div>

          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#ADB7BE] leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Key bullets preview from resume */}
          <div className="space-y-1.5 mb-4">
            {project.keyFeatures.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono border border-slate-200 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-400 font-mono">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/20 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
        </div>

        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors cursor-pointer"
        >
          <span>Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
