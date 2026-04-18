import axios from "axios";
import type { ContactPayload, CreateProjectPayload, LeetCodeStats, Project } from "./types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 8000,
});

export async function fetchProjects(): Promise<Project[]> {
  const response = await api.get<{ data: Project[] }>("/projects");
  return response.data.data;
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
  const response = await api.post<{ data: Project }>("/projects", payload, {
    headers: token ? { "x-admin-token": token } : undefined,
  });

  return response.data.data;
}
