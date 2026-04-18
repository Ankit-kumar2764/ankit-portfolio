export type ProjectCategory = "All" | "Full Stack" | "Frontend" | "Backend";

export interface Project {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  category: Exclude<ProjectCategory, "All">;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface LeetCodeStats {
  username: string;
  profileUrl: string;
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  topics: string[];
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface CreateProjectPayload {
  title: string;
  description: string;
  techStack: string[];
  category: Exclude<ProjectCategory, "All">;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}
