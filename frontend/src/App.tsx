import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createProject, fetchLeetCodeStats, fetchProjects } from "./api";
import { AddProjectModal } from "./components/AddProjectModal";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { DsaSection } from "./components/DsaSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import type { CreateProjectPayload, LeetCodeStats, Project, ProjectCategory } from "./types";
import { loadLocalProjects, mergeProjects } from "./utils/projectStorage";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [isSubmittingProject, setIsSubmittingProject] = useState(false);

  useEffect(() => {
    document.title = "ankitkumar.me | Full Stack Portfolio";

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        const [projectData, leetCodeData] = await Promise.all([
          fetchProjects(),
          fetchLeetCodeStats(),
        ]);

        setProjects(mergeProjects(projectData, loadLocalProjects()));
        setStats(leetCodeData);
      } catch (error) {
        console.warn("Could not fetch portfolio data", error);
        setProjects(loadLocalProjects());
      } finally {
        window.setTimeout(() => setIsLoading(false), 900);
      }
    }

    loadData();
  }, []);

  function handleThemeToggle() {
    setDarkMode((prev) => {
      const nextMode = !prev;
      document.documentElement.classList.toggle("dark", nextMode);
      window.localStorage.setItem("theme", nextMode ? "dark" : "light");
      return nextMode;
    });
  }

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  async function handleCreateProject(payload: CreateProjectPayload) {
    setIsSubmittingProject(true);

    try {
      const created = await createProject(payload);
      setProjects((prev) => [created, ...prev]);
      setActiveCategory("All");
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }

      throw new Error("Could not add project right now. Check token/env and try again.");
    } finally {
      setIsSubmittingProject(false);
    }
  }

  return (
    <>
      <AnimatePresence>{isLoading ? <Loader /> : null}</AnimatePresence>

      <div className="app-shell">
        <AddProjectModal
          isOpen={isAddProjectOpen}
          isSubmitting={isSubmittingProject}
          onClose={() => setIsAddProjectOpen(false)}
          onSubmit={handleCreateProject}
        />

        <Navbar darkMode={darkMode} onToggleMode={handleThemeToggle} />

        <main>
          <HeroSection />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <AboutSection />
          </motion.div>

          <SkillsSection />

          <ProjectsSection
            projects={filteredProjects}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onOpenAddProject={() => setIsAddProjectOpen(true)}
          />

          <DsaSection stats={stats} />

          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
