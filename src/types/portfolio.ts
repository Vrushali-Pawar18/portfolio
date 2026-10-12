export interface ProjectCaseStudy {
  id: string;
  title: string;
  cardTitle: string;
  cardDescription: string;
  overview: string;
  challenge: string;
  whatIBuilt: string[];
  engineeringFocus: string[];
  technologies: string[];
  impact: string;
  metricBadge: string;
  category: 'fullstack' | 'frontend' | 'ai';
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  iconName: string;
  isKey?: boolean;
}

export interface SkillCategory {
  id: 'frontend' | 'backend' | 'databases' | 'ai' | 'cloud';
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface WorkPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
}
