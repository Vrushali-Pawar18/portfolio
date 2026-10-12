import { WorkPillar, MetricItem, ApproachStep, EducationItem } from '../types/portfolio';

export const PROFILE_INFO = {
  name: 'Vrushali Pawar',
  role: 'Full Stack Developer',
  headline: 'Frontend Architecture | AI-Powered Applications',
  tagline: 'Building thoughtful digital experiences with scalable engineering.',
  heroBio:
    'I build modern, scalable web applications that turn complex requirements into intuitive digital experiences. With a strong foundation in React.js and Next.js, hands-on backend experience, and a growing focus on AI-powered workflows, I enjoy engineering products that are performant, maintainable, and built to solve real problems.',
  secondaryBio:
    'From designing frontend architecture and building responsive interfaces to developing APIs and integrating intelligent workflows, I work across the stack to bring ideas to life.',
  email: 'vrushalipawar1802@gmail.com',
  linkedin: 'https://linkedin.com/in/VrushaliPawar293',
  github: 'https://github.com/Vrushali-Pawar18',
  resumeUrl: '/Vrushali_Pawar.pdf',
  resumeFilename: 'Vrushali_Pawar.pdf',
  status: 'Open to opportunities',
  philosophy:
    'I believe great software isn\'t just about making things work—it\'s about making them reliable, understandable, and genuinely useful.',
};

export const CREDIBILITY_POINTS = [
  { label: '2.5+ Years Experience', detail: 'Professional product development' },
  { label: 'Production SaaS', detail: 'High-availability platforms built' },
  { label: 'Full Stack & APIs', detail: 'React, Next.js, FastAPI & NestJS' },
  { label: 'AI Integrations', detail: 'LLMs, dynamic schemas & workflows' },
];

export const WORK_PILLARS: WorkPillar[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Building responsive, accessible interfaces with reusable components, structured state management, and performance in mind.',
    iconName: 'Layout',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Creating API-driven functionality, asynchronous workflows, integrations, and supporting microservices.',
    iconName: 'Server',
  },
  {
    id: 'ai',
    title: 'Practical AI Integration',
    description: 'Connecting language models to structured workflows, document processing, and voice- or text-driven experiences.',
    iconName: 'Cpu',
  },
  {
    id: 'performance',
    title: 'Performance & Architecture',
    description: 'Improving rendering, managing complex application state, DOM virtualization, and designing maintainable systems.',
    iconName: 'Zap',
  },
];

export const IMPACT_METRICS: MetricItem[] = [
  {
    id: 'm1',
    value: '25%',
    label: 'Faster Frontend Loading',
    description: 'Achieved through code splitting, asset caching, and Next.js rendering optimizations.',
  },
  {
    id: 'm2',
    value: '31%',
    label: 'UI Responsiveness Boost',
    description: 'Result of state management decoupling with Redux Toolkit and isolated updates.',
  },
  {
    id: 'm3',
    value: '30%',
    label: 'Reduced Manual Input',
    description: 'Automated via AI-powered schema generation and intelligent document parsing.',
  },
  {
    id: 'm4',
    value: '5+',
    label: 'Production SaaS Apps',
    description: 'Delivered across enterprise workflows, conversational agents, and discovery portals.',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand the Problem',
    description: 'Break down product requirements, identify user needs, understand data flows, and translate business goals into practical engineering tasks.',
  },
  {
    number: '02',
    title: 'Design for Maintainability',
    description: 'Choose suitable component boundaries, state management patterns, API contracts, and data structures that keep the application understandable as it grows.',
  },
  {
    number: '03',
    title: 'Build Across the Stack',
    description: 'Connect frontend experiences with backend services, databases, third-party APIs, and AI capabilities to deliver complete features.',
  },
  {
    number: '04',
    title: 'Optimize and Iterate',
    description: 'Investigate bottlenecks, improve rendering and data flows, test edge cases, and refine the implementation based on real requirements and feedback.',
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Computer Science & Engineering",
    institution: 'MIT World Peace University, Pune',
    period: '2019 – 2023',
    grade: 'CGPA: 8.87 / 10',
    description: 'Strong foundation in core computer science, software engineering principles, algorithms, data structures, and database systems.',
  },
  {
    degree: 'Full-Stack Web Development Bootcamp',
    institution: 'Professional Course Completion',
    period: 'Intensive Training',
    grade: 'Completed',
    description: 'Hands-on practical training covering modern full-stack development, asynchronous workflows, and API architectures.',
  },
];
