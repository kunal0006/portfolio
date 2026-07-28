// data/portfolio.ts
// ============================================================
// SINGLE SOURCE OF TRUTH — Edit this file to update content
// ============================================================

import type {
  Personal,
  Experience,
  Project,
  SecondaryProject,
  CaseStudy,
  Testimonial,
} from '@/lib/types';

// ── Personal Info ────────────────────────────────────────────
export const personal: Personal = {
  name: 'Kunal Sharma',
  role: 'Full-Stack Developer',
  email: 'kunalsharmaa235@gmail.com',
  github: 'https://github.com/kunal0006',
  linkedin: 'https://www.linkedin.com/in/kunal-sharma-6849b52b2/',
  resumeUrl: '/kunal-sharma-resume-updated.pdf',
  availability: 'Open to opportunities',
  photo: '/images/profile.jpg',
  location: 'India',
  hero: {
    headline: 'I build the kind of software people actually want to use.',
    subline:
      '2 years building web applications — from interactive consumer features to clean developer utilities.',
  },
  about: {
    p1: `I'm a full-stack developer who's built everything from real-time dashboards to interactive web apps. I work across the stack — React, Next.js, and TypeScript — and I care deeply about user experience and visual design.`,
    p2: `I believe great software is opinionated. The best products make a clear choice about what they are and commit to it completely. I bring that same clarity to how I write code: structured, intentional, and built to be maintained by the next person.`,
    stack: [
      'TypeScript / JavaScript',
      'React & Next.js',
      'Node.js & Python',
      'PostgreSQL & Firestore',
      'AWS & GCP',
      'React Native',
    ],
  },
};

// ── Experience ───────────────────────────────────────────────
export const experience: Experience[] = [
  {
    company: 'Dev Agency',
    role: 'Full-Stack Developer',
    period: 'Jan 2024 — Present',
    description:
      'Delivered client projects across e-commerce, SaaS, and content platforms. Specialized in performance optimization, responsive layouts, and smooth animations.',
  },
];

// ── Featured Projects ────────────────────────────────────────
export const featuredProjects: Project[] = [
  {
    name: 'HormonaLog',
    tagline: 'AI-powered hormonal health tracking for women',
    outcome: '10,000+ active users',
    description:
      'HormonaLog helps women understand the connection between their hormonal cycle and daily wellbeing. I designed and built the entire product — from the React Native client to the Gemini-powered analysis API — and shipped it from zero to 10K users in 8 months.',
    tech: ['React Native', 'Next.js', 'TypeScript', 'Firebase'],
    liveUrl: 'https://www.hormonalog.site',
    githubUrl: null,
    image: '/images/projects/hormonalog.png',
    slug: 'hormonalog',
    featured: true,
  },
  {
    name: 'Corti Wellness',
    tagline: 'Cortisol tracking & stress management dashboard',
    outcome: 'Real-time stress audits · Supabase integrated',
    description:
      'A comprehensive cortisol tracking and stress management dashboard built using Next.js and Supabase. Helps users log wellbeing indicators, trace cortisol trends, and analyze stress levels through structured visualizations.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: 'https://corti-fsza.vercel.app/',
    githubUrl: 'https://github.com/kunal0006/Corti',
    image: null,
    slug: undefined,
    featured: true,
  },
  {
    name: 'Rizzly V2',
    tagline: 'AI dating intelligence platform with cyberpunk aesthetic',
    outcome: 'Retro neobrutalist UI · Gemini 2.5 Flash',
    description:
      'A premium, high-fidelity AI-powered dating intelligence platform built with a retro neobrutalist cyberpunk visual aesthetic. Empowers users to optimize their online dating operations through multimodal profile audits, conversational prompt engineering, and deep psychological chat analysis. Features database-authoritative token management and Upstash Redis rate limiting.',
    tech: ['Next.js', 'Supabase', 'Redis', 'Gemini API', 'Tailwind CSS'],
    liveUrl: 'https://rizzly-psi.vercel.app',
    githubUrl: 'https://github.com/kunal0006/rizzly',
    image: null,
    slug: undefined,
    featured: true,
  },
];

// ── Secondary Projects ───────────────────────────────────────
export const secondaryProjects: SecondaryProject[] = [
  {
    name: 'WebCraft',
    tagline: 'Premium web design & development studio — high-performance sites that convert',
    tech: ['Next.js', 'TypeScript', 'GSAP', 'Three.js', 'Tailwind CSS', 'WebGL'],
    liveUrl: 'https://webcraft-website-dusky.vercel.app',
    githubUrl: null,
  },
  {
    name: 'Aurelia Coffee House',
    tagline: 'Premium café website with immersive 3D visuals and cinematic animations',
    tech: ['Next.js', 'TypeScript', 'Three.js', 'Framer Motion', 'GSAP'],
    liveUrl: 'https://aurelia-web.vercel.app',
    githubUrl: 'https://github.com/kunal0006/aurelia-coffee-house',
  },
  {
    name: 'EstatePremium',
    tagline: 'Luxury real estate platform with gold theme',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'NextAuth.js'],
    liveUrl: 'https://real-estate-project-henna-omega.vercel.app/',
    githubUrl: 'https://github.com/kunal0006/RealEstateProject',
  },
  {
    name: 'Horizons',
    tagline: 'Luxury travel experience website with Three.js globe and GSAP animations',
    tech: ['JavaScript', 'Three.js', 'GSAP', 'Vite'],
    liveUrl: 'https://horizon-demo.vercel.app/',
    githubUrl: 'https://github.com/kunal0006/horizon',
  },
  {
    name: 'SwiftCopy AI',
    tagline: 'Interactive copy-paste utility and playground',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://swiftcopyai.vercel.app/',
    githubUrl: 'https://github.com/kunal0006/swiftcopyai',
  },
];

// ── Case Studies ─────────────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  {
    projectName: 'HormonaLog',
    slug: 'hormonalog',
    role: 'Solo Founder & Engineer',
    duration: '8 months',
    year: '2024',
    outcomeHeadline:
      'From zero to 10,000 active users.',
    problem:
      'Women tracking hormonal health were using fragmented, poorly designed apps that didn\'t connect the dots between cycle data and daily symptoms like mood, energy, and skin. The data existed — the intelligence to interpret it didn\'t.',
    approach:
      'Rather than building another calendar tracker, I positioned HormonaLog as an interpretive layer. The core insight: users don\'t want raw data, they want a narrative. I prototyped three AI prompt architectures before landing on a multi-turn Gemini conversation that could ask follow-up questions when data was ambiguous. I discarded a symptom-scoring approach early because it felt reductive and didn\'t match how users actually described their experience.',
    execution:
      'Built on React Native with Expo, Firestore for real-time sync, and a Next.js API layer for the AI analysis routes. The most challenging engineering problem was designing the context window — Gemini needed enough historical symptom data to generate meaningful analysis without hitting token limits. I solved this with a rolling 90-day summary that compresses older entries while preserving anomalies. Shipped beta on iOS first, Android 6 weeks later.',
    results:
      'Reached 10,000 active users 8 months after launch with zero paid marketing. Average session length of 4.2 minutes — unusually high for a health tracking app. 62% of users return within 3 days.',
    retrospective:
      'I\'d build the Android version in parallel from day one — the 6-week gap cost early momentum on Android. I\'d also invest in user onboarding earlier; retention was lower for users who didn\'t complete the initial profile setup, which I only discovered at month 4.',
    tech: ['React Native', 'Expo', 'Next.js', 'Firebase', 'Gemini API'],
    images: [],
    liveUrl: 'https://www.hormonalog.site',
    githubUrl: null,
  },
];

// ── Testimonials ─────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    quote:
      'Kunal rebuilt our entire data pipeline in six weeks. Query times went from 8 seconds to under 400ms. The dashboard we\'d been trying to ship for months launched the week after he joined.',
    name: 'Priya Mehta',
    title: 'CTO, HealthTech Co.',
  },
];
