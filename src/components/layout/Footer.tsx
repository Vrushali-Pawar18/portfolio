import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_INFO } from '../../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-obsidian-border pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-obsidian-800">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-obsidian-900 border border-teal-brand/40 flex items-center justify-center text-teal-light font-bold text-xs">
                VP
              </div>
              <span className="font-bold text-white text-base">
                {PROFILE_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Building thoughtful digital experiences through software engineering, frontend architecture, and AI-powered solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-850 text-slate-300 hover:text-white border border-obsidian-700 hover:border-teal-brand/50 text-xs font-semibold transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-cyan-ice" />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-850 text-slate-300 hover:text-white border border-obsidian-700 hover:border-teal-brand/50 text-xs font-semibold transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4 text-teal-light" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-850 text-slate-300 hover:text-white border border-obsidian-700 hover:border-teal-brand/50 text-xs font-semibold transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-teal-brand" />
              <span>Email</span>
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-brand/15 text-teal-light hover:bg-teal-brand hover:text-white border border-teal-brand/35 text-xs font-bold transition-all cursor-pointer shadow-sm"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-400 font-medium">
          <p>© 2026 {PROFILE_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with React, Redux Toolkit, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
