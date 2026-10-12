import { ProjectCaseStudy } from '../types/portfolio';

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'enterprise-pm-doc-intelligence',
    title: 'Enterprise Project Management & Document Intelligence Platform',
    cardTitle: 'Enterprise Project Intelligence',
    cardDescription:
      'A data-intensive project management platform combining interactive timelines, asynchronous document processing, and AI-powered information discovery.',
    overview:
      'Engineering a data-intensive enterprise platform that brings project planning, operational tracking, and technical document intelligence into a unified workspace. Designed to help users navigate complex project schedules and extract critical information without disrupting their workflow.',
    challenge:
      'Project schedules contained 5,000+ interconnected tasks, while technical documents required heavy processing. The challenge was maintaining 60fps responsiveness during Gantt timeline drag interactions while executing async AI summarization.',
    whatIBuilt: [
      'Developed interactive project timelines and Gantt-style views capable of handling 5,000+ scheduled tasks smoothly.',
      'Implemented frontend rendering optimizations, including DOM virtualization, to eliminate scroll stutter and layout lag.',
      'Built asynchronous document-processing workflows using FastAPI backend services, Celery workers, and Redis queues.',
      'Integrated AI-generated document summaries directly into user views for rapid technical context discovery.',
      'Implemented optimistic state updates and client-side cache synchronization with Redux Toolkit.',
      'Synchronized field issue reports with executive project dashboards in real time.',
    ],
    engineeringFocus: [
      'DOM Virtualization & Gantt Visualization',
      'High-Density State Management (RTK)',
      'Asynchronous Processing (Celery & Redis)',
      'LLM Document Summaries & Embeddings',
    ],
    technologies: ['React.js', 'Redux Toolkit', 'Python', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL'],
    impact: 'Enabled seamless interactions across 5,000+ scheduled tasks and accelerated technical document review times by over 40%.',
    metricBadge: '5,000+ Scheduled Tasks Handled',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'conversational-ai-voice-messaging',
    title: 'AI-Powered Voice & Messaging Automation Platform',
    cardTitle: 'Conversational AI Automation',
    cardDescription:
      'A full-stack automation platform connecting AI-driven voice conversations, messaging campaigns, and operational analytics.',
    overview:
      'A full stack platform for configuring AI voice agents, orchestrating outreach campaigns, and triggering automated post-call messaging workflows through a unified administrative control center.',
    challenge:
      'Voice and messaging workflows involve multiple distributed services, asynchronous webhook events, and external communication providers. The system had to reliably coordinate events without dropping status synchronization.',
    whatIBuilt: [
      'Developed agent configuration interfaces and interactive multi-branch campaign builders.',
      'Built real-time administrative dashboards for monitoring ongoing campaign metrics and call outcomes.',
      'Implemented NestJS backend microservices to coordinate agent workflows and integrate with third-party messaging APIs.',
      'Connected webhook-driven triggers to automated multi-channel follow-up sequences.',
      'Integrated post-call event webhooks with analytics and real-time dashboard state updates.',
      'Streamlined account onboarding through embedded QR-based synchronization interfaces.',
    ],
    engineeringFocus: [
      'Event-Driven Microservices (NestJS)',
      'Webhook Ingestion & Reliability',
      'Asynchronous Queues & Cache (Redis)',
      'Real-Time Dashboard Synchronization',
    ],
    technologies: ['React.js', 'Redux Toolkit', 'NestJS', 'Redis', 'Webhooks', 'REST APIs', 'WebSockets'],
    impact: 'Automated post-call outreach workflows, reducing customer follow-up response latency from hours to immediate seconds.',
    metricBadge: 'Real-Time Webhook Pipeline',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'intelligent-voice-text-form-builder',
    title: 'Intelligent Voice & Text Form Builder',
    cardTitle: 'AI-Assisted Form Creation',
    cardDescription:
      'A voice- and text-driven application that turns natural language into structured forms using AI and dynamic frontend workflows.',
    overview:
      'An AI-powered form creation application that transforms spoken instructions or plain-text prompts into structured, multi-step, production-ready form schemas with built-in validation rules.',
    challenge:
      'Transforming unstructured natural language into strictly validated schema definitions while providing immediate real-time visual previews without unnecessary React re-renders.',
    whatIBuilt: [
      'Engineered an intuitive voice- and text-driven form generation workflow.',
      'Integrated OpenAI function calling and structured outputs to generate type-safe JSON schemas.',
      'Implemented modular multi-step form state management with isolated update boundaries.',
      'Constructed a dynamic field renderer supporting conditional logic, regex validations, and custom styling.',
      'Integrated Supabase database persistence with Row Level Security (RLS) policies.',
      'Optimized high-frequency typing and audio stream updates to prevent UI jank.',
    ],
    engineeringFocus: [
      'LLM Structured Outputs & Function Calling',
      'Dynamic JSON Schema Parsing',
      'Isolated Component Render Boundaries',
      'Audio Stream & Voice Input UX',
    ],
    technologies: ['Next.js', 'React.js', 'TypeScript', 'OpenAI API', 'Zustand / RTK', 'Supabase', 'Tailwind CSS'],
    impact: 'Delivered a 30% improvement in user flow completion rates and reduced manual form setup time significantly.',
    metricBadge: '30% Faster Form Creation',
    category: 'ai',
    featured: true,
  },
  {
    id: 'data-driven-discovery-search',
    title: 'Data-Driven Discovery & Search Platform',
    cardTitle: 'Intelligent Discovery Experience',
    cardDescription:
      'A responsive search platform featuring dynamic filtering, reusable data-fetching logic, and performance-focused frontend architecture.',
    overview:
      'A discovery platform built to help users find relevant opportunities through rapid faceted search, multi-parameter filtering, debounced queries, and smooth view transitions.',
    challenge:
      'Faceted searches with multiple simultaneous filter facets risk redundant network requests and UI flickering as users type or toggle tags.',
    whatIBuilt: [
      'Developed responsive discovery views with multi-facet dynamic filtering.',
      'Implemented custom debounced search hooks and intelligent request deduplication.',
      'Integrated RESTful search APIs with optimized payload parsing and error boundaries.',
      'Leveraged Next.js / React hydration strategies and client cache revalidation.',
      'Engineered optimistic UI updates for instant feedback during filter toggles.',
      'Structured a reusable component library for cross-team UI consistency.',
    ],
    engineeringFocus: [
      'Debounced Search UX & Caching',
      'Reusable React Custom Hooks',
      'Optimistic State Transitions',
      'Core Web Vitals & Lighthouse Optimization',
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'],
    impact: 'Drove a 15% increase in user search retention and boosted team sprint velocity by 30% with reusable architecture.',
    metricBadge: '15% Search Retention Boost',
    category: 'frontend',
    featured: true,
  },
];
