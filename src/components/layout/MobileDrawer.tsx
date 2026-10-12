import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setMobileMenuOpen, showToast, incrementResumeDownload } from '../../store/slices/uiSlice';
import { PROFILE_INFO } from '../../data/profileData';
import { downloadResumeFile } from '../../utils/downloadResume';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'How I Work', href: '#approach' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const MobileDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.mobileMenuOpen);

  const handleLinkClick = (href: string) => {
    dispatch(setMobileMenuOpen(false));
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    dispatch(incrementResumeDownload());
    dispatch(showToast({ message: 'Downloading Vrushali_Pawar.pdf...', type: 'success' }));
    dispatch(setMobileMenuOpen(false));
    downloadResumeFile('Vrushali_Pawar.pdf');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(setMobileMenuOpen(false))}
            className="fixed inset-0 z-40 bg-obsidian-950/85 backdrop-blur-md lg:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-obsidian-900 border-l border-obsidian-700/80 p-6 flex flex-col justify-between lg:hidden shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-obsidian-750 mb-6">
                <span className="text-sm font-extrabold tracking-wider text-teal-light uppercase">
                  VRUSHALI PAWAR
                </span>
                <button
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-obsidian-800 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleLinkClick(item.href)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium text-slate-300 hover:text-teal-light rounded-xl hover:bg-obsidian-850 transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-obsidian-750 flex flex-col gap-4">
              <button
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-teal-brand hover:bg-teal-dark text-white font-semibold text-sm border border-teal-brand shadow-sm cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Résumé</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-slate-400 pt-2">
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:text-teal-light transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:text-teal-light transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="p-2 hover:text-teal-light transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
