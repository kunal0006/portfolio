// lib/types.ts
// All TypeScript interfaces for portfolio data

export interface Personal {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  availability: string;
  photo: string;
  location?: string;
  hero: {
    headline: string;
    subline: string;
  };
  about: {
    p1: string;
    p2: string;
    stack: string[];
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

export interface Project {
  name: string;
  tagline: string;
  outcome: string;
  description: string;
  tech: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  image?: string | null;
  slug?: string; // links to case study if exists
  featured: true;
}

export interface SecondaryProject {
  name: string;
  tagline: string;
  tech: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
}

export interface CaseStudy {
  projectName: string;
  slug: string;
  role: string;
  duration: string;
  year: string;
  outcomeHeadline: string;
  problem: string;
  approach: string;
  execution: string;
  results: string;
  retrospective: string;
  tech: string[];
  images: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}
