import axios from "axios";
import type { ContactPayload, CreateProjectPayload, LeetCodeStats, Project } from "./types";
import { loadLocalProjects, mergeProjects, saveLocalProject } from "./utils/projectStorage";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 8000,
});

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await api.get<{ data: Project[] }>("/projects");
    return mergeProjects(response.data.data, loadLocalProjects());
  } catch (error) {
    const localProjects = loadLocalProjects();
    if (localProjects.length > 0) {
      if (import.meta.env.DEV) {
        console.warn("[fetchProjects] Backend unavailable, using local project cache.", error);
      }
      return localProjects;
    }

    throw error;
  }
}

export async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
  const response = await api.get<{ data: LeetCodeStats }>("/leetcode-stats");
  return response.data.data;
}

export async function submitContact(payload: ContactPayload): Promise<string> {
  const response = await api.post<{ message: string }>("/contact", payload);
  return response.data.message;
}

export async function createProject(payload: CreateProjectPayload): Promise<Project> {
  const token = import.meta.env.VITE_PROJECT_ADMIN_TOKEN;

  if (import.meta.env.DEV) {
    console.log("[createProject] VITE_PROJECT_ADMIN_TOKEN present:", Boolean(token));
    console.log("[createProject] VITE_API_BASE_URL:", import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api");
  }

  try {
    const response = await api.post<{ data: Project }>("/projects", payload, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        const localProject: Project = {
          _id: `local-${Date.now()}`,
          slug: payload.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
          ...payload,
        };

        saveLocalProject(localProject);

        if (import.meta.env.DEV) {
          console.warn("[createProject] Backend unavailable. Saved project locally.", error.message);
        }

        return localProject;
      }

      const backendMessage =
        typeof error.response.data === "object" && error.response.data && "message" in error.response.data
          ? String((error.response.data as { message?: unknown }).message || "")
          : "";

      throw new Error(
        backendMessage ||
          `Project request failed with status ${error.response.status}. Check token/env and try again.`
      );
    }

    throw error;
  }
}
