import React from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Database,
  Terminal,
  Zap,
  Server,
  Sparkles,
  Shield,
  Box,
  Cloud,
  Globe,
} from 'lucide-react';

interface MarqueeItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { name: 'React.js', category: 'Frontend', icon: <Code2 className="w-4 h-4 text-teal-light" /> },
  { name: 'Next.js App Router', category: 'Architecture', icon: <Globe className="w-4 h-4 text-teal-vibrant" /> },
  { name: 'Redux Toolkit & RTK Query', category: 'State', icon: <Layers className="w-4 h-4 text-cyan-ice" /> },
  { name: 'Python & FastAPI', category: 'Backend', icon: <Zap className="w-4 h-4 text-teal-light" /> },
  { name: 'NestJS Microservices', category: 'Services', icon: <Server className="w-4 h-4 text-mint-accent" /> },
  { name: 'OpenAI & Gemini APIs', category: 'AI Workflows', icon: <Sparkles className="w-4 h-4 text-cyan-ice" /> },
  { name: 'DOM Virtualization', category: 'Performance', icon: <Cpu className="w-4 h-4 text-teal-vibrant" /> },
  { name: 'Celery Workers & Redis', category: 'Async Queue', icon: <Terminal className="w-4 h-4 text-teal-light" /> },
  { name: 'PostgreSQL & Supabase', category: 'Database', icon: <Database className="w-4 h-4 text-mint-accent" /> },
  { name: 'Docker & AWS (ECS, S3)', category: 'DevOps', icon: <Cloud className="w-4 h-4 text-cyan-ice" /> },
  { name: 'Tailwind CSS', category: 'Design System', icon: <Box className="w-4 h-4 text-teal-vibrant" /> },
  { name: 'TypeScript', category: 'Language', icon: <Shield className="w-4 h-4 text-teal-light" /> },
];

export const InfiniteMarquee: React.FC = () => {
  // Duplicate array to create seamless loop
  const duplicatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full py-8 overflow-hidden border-y border-obsidian-border bg-obsidian-900/40 backdrop-blur-xl">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-obsidian-950 via-obsidian-950/80 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-obsidian-950 via-obsidian-950/80 to-transparent" />

      {/* Continuously Sliding Ticker */}
      <div className="marquee-continuous items-center gap-4">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-b from-obsidian-800/80 to-obsidian-850/90 border border-teal-borderGlossy shadow-glossy-card hover:border-teal-light/50 hover:shadow-glossy-hover transition-all duration-300 group cursor-default"
          >
            <div className="p-1.5 rounded-xl bg-teal-darker/60 border border-teal-brand/30 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white tracking-wide group-hover:text-teal-light transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 group-hover:text-teal-brand transition-colors">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
