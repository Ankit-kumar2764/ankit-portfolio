export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role?: string;
  category: 'Full-Stack' | 'Frontend' | 'Data & ML' | 'Systems';
  description: string;
  problemSolved: string;
  techStack: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  highlightQuote?: string;
  architectureNotes?: string;
  datasetModules?: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    isPrimary?: boolean;
    badge?: string;
  }[];
}

export interface HackathonEvent {
  id: string;
  title: string;
  edition: string;
  organizer?: string;
  description: string;
  projectAssociated?: string;
  focusAreas: string[];
  year: string;
  badge?: string;
}

export interface AchievementItem {
  platform: string;
  headline: string;
  ratingOrScore: string;
  description: string;
  topics: string[];
  profileLink?: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  status: string;
  coreInterests: string[];
}

export interface ExploringTopic {
  title: string;
  category: string;
  description: string;
  tools: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  credentialUrl?: string;
}
