import React, { useState, useEffect } from 'react';
import { Menu, FileDown, ArrowUpRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleMobileMenu, showToast, incrementResumeDownload } from '../../store/slices/uiSlice';
import { PROFILE_INFO } from '../../data/profileData';
import { downloadResumeFile } from '../../utils/downloadResume';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'How I Work', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeSection = useAppSelector((state) => state.ui.activeSection);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    dispatch(incrementResumeDownload());
    dispatch(showToast({ message: 'Downloading Vrushali_Pawar.pdf...', type: 'success' }));
    downloadResumeFile('Vrushali_Pawar.pdf');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/90 backdrop-blur-2xl border-b border-obsidian-700/80 shadow-glossy-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-obsidian-800 to-obsidian-900 border border-teal-brand/40 flex items-center justify-center text-teal-light font-bold text-base shadow-glossy-card group-hover:border-teal-brand group-hover:shadow-teal-glow transition-all">
            VP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-teal-light transition-colors">
              {PROFILE_INFO.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-mint-accent animate-pulse" />
              <span className="text-[11px] text-slate-400 font-medium">
                {PROFILE_INFO.status}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-obsidian-900/80 p-1.5 rounded-full border border-obsidian-750/80 backdrop-blur-xl shadow-glossy-card">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-teal-brand/20 text-teal-light border border-teal-brand/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-obsidian-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-obsidian-850 text-slate-100 border border-teal-brand/40 hover:bg-obsidian-800 hover:border-teal-brand shadow-sm transition-all duration-200 cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 text-teal-light" />
            <span>Download Résumé</span>
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-teal-brand text-white border border-teal-brand hover:bg-teal-dark shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="p-2 rounded-xl bg-obsidian-900 text-slate-300 hover:text-teal-light border border-obsidian-700 lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
