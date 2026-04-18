import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project, ProjectCategory } from "../types";
import { SectionHeading } from "./SectionHeading";
import { getAlternateImageCandidate, normalizeProjectImageInput } from "../utils/projectImage";

interface ProjectsSectionProps {
  projects: Project[];
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  onOpenAddProject: () => void;
}

const categories: ProjectCategory[] = ["All", "Full Stack", "Frontend", "Backend"];
const projectImageFallback = "/assets/project-placeholder.svg";

export function ProjectsSection({ projects, activeCategory, onCategoryChange, onOpenAddProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-wrap">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work with impact and polish"
            description="Interactive portfolio cards powered by backend APIs and categorized filtering."
          />
        </div>
        <button
          type="button"
          onClick={onOpenAddProject}
          className="mb-10 rounded-full border border-[var(--card-border)] px-5 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
        >
          + Add Project
        </button>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]"
                : "border-[var(--card-border)] text-[var(--text-soft)] hover:border-[var(--accent)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
          >
            <img
              src={normalizeProjectImageInput(project.imageUrl)}
              alt={project.title}
              className="h-48 w-full object-cover"
              loading="lazy"
              onError={(event) => {
                const currentSrc = event.currentTarget.getAttribute("src") || "";
                const alternateCandidate = getAlternateImageCandidate(currentSrc);

                if (alternateCandidate && event.currentTarget.dataset.altTried !== "1") {
                  event.currentTarget.dataset.altTried = "1";
                  event.currentTarget.src = alternateCandidate;
                  return;
                }

                event.currentTarget.src = projectImageFallback;
              }}
            />
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
                <span className="rounded-full border border-[var(--card-border)] px-3 py-1 text-xs text-[var(--text-soft)]">
                  {project.category}
                </span>
              </div>
              <p className="text-sm leading-6 text-[var(--text-soft)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--card-border)] bg-[color:var(--bg)/0.66] px-2.5 py-1 text-xs text-[var(--text-soft)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-[var(--card-border)] px-4 py-2 text-sm text-[var(--text)] transition hover:border-[var(--accent)]"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-contrast)]"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
