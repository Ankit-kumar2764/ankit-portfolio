import type { Project } from "../types";

const LOCAL_PROJECTS_KEY = "ankit-portfolio-local-projects";

export function loadLocalProjects(): Project[] {
  try {
    const raw = window.localStorage.getItem(LOCAL_PROJECTS_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as Project[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveLocalProject(project: Project): Project[] {
  const existingProjects = loadLocalProjects();
  const updatedProjects = [project, ...existingProjects.filter((item) => item.slug !== project.slug)];
  window.localStorage.setItem(LOCAL_PROJECTS_KEY, JSON.stringify(updatedProjects));
  return updatedProjects;
}

export function mergeProjects(primaryProjects: Project[], localProjects: Project[]): Project[] {
  const projectMap = new Map<string, Project>();

  [...localProjects, ...primaryProjects].forEach((project) => {
    projectMap.set(project.slug, project);
  });

  return Array.from(projectMap.values()).sort((left, right) => Number(right.featured) - Number(left.featured));
}
