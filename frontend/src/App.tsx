import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fetchLeetCodeStats, fetchProjects } from "./api";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { DsaSection } from "./components/DsaSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import type { LeetCodeStats, Project, ProjectCategory } from "./types";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  useEffect(() => {
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

        setProjects(projectData);
        setStats(leetCodeData);
      } catch (error) {
        console.warn("Could not fetch portfolio data", error);
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

  return (
    <>
      <AnimatePresence>{isLoading ? <Loader /> : null}</AnimatePresence>

      <div className="app-shell">
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
