import { ExperienceItem } from '../types/portfolio';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    organization: 'Software Product Engineering',
    period: 'February 2024 – Present',
    location: 'Pune, India',
    summary:
      'Leading end-to-end full stack development for production SaaS applications, spanning frontend architecture, backend services, third-party API orchestrations, and practical AI feature integrations.',
    highlights: [
      'Develop and maintain responsive, high-traffic web applications using React.js, Next.js, and TypeScript with reusable component systems.',
      'Design predictable application state architectures using Redux Toolkit, RTK Query, and Zustand to support complex data-driven dashboards.',
      'Build backend functionality, microservices, and asynchronous event pipelines using Python, FastAPI, and NestJS.',
      'Implement non-blocking background workers and queue processing for document intelligence using Celery and Redis.',
      'Integrate OpenAI and Gemini LLM APIs into production workflows, powering structured JSON outputs and document summaries.',
      'Achieved a 25% increase in frontend page speed and 31% improvement in UI responsiveness through DOM virtualization and state decoupling.',
      'Coordinate containerized deployments and CI/CD pipelines utilizing Docker and AWS services (ECS, S3, CodeBuild).',
      'Collaborate closely across cross-functional teams from product requirement definition through architecture, testing, and production rollout.',
    ],
  },
];
