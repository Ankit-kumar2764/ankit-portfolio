import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Database, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../types';
import { Badge } from './Badge';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="brand">{project.category}</Badge>
              {project.featured && <Badge variant="accent">Featured Project</Badge>}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-teal-600 dark:text-teal-400 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Highlight Quote if present */}
          {project.highlightQuote && (
            <div className="my-6 p-4 rounded-xl bg-teal-500/5 dark:bg-teal-950/30 border-l-4 border-teal-500 text-slate-700 dark:text-slate-300 italic text-sm sm:text-base">
              "{project.highlightQuote}"
            </div>
          )}

          {/* Overview */}
          <div className="space-y-6 mt-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Project Overview
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Problem Solved
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.problemSolved}
              </p>
            </div>

            {/* Architecture Notes */}
            {project.architectureNotes && (
              <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/50">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-semibold text-sm mb-1.5">
                  <Database className="w-4 h-4" />
                  <span>Architecture Highlight</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            )}

            {/* Dataset Modules (for SkyOps) */}
            {project.datasetModules && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-teal-500" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Operational Modules Covered (9 Domains)
                  </h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {project.datasetModules.map((mod) => (
                    <div
                      key={mod}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Key Features & Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono border border-slate-200/80 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-500/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors border border-slate-300 dark:border-slate-700"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
