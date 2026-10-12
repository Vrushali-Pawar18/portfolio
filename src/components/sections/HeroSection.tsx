import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, FileDown, Code2, Terminal, Cpu } from 'lucide-react';
import { Button } from '../common/Button';
import { GlowOrb } from '../common/GlowOrb';
import { PROFILE_INFO } from '../../data/profileData';
import { useAppDispatch } from '../../store/hooks';
import { showToast, incrementResumeDownload } from '../../store/slices/uiSlice';
import { downloadResumeFile } from '../../utils/downloadResume';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

const HERO_ROLES = [
  'Full Stack Engineering',
  'Frontend Architecture',
  'AI-Powered Applications',
  'Python & Scalable APIs',
];

export const HeroSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleDownload = () => {
    dispatch(incrementResumeDownload());
    dispatch(showToast({ message: 'Downloading Vrushali_Pawar.pdf...', type: 'success' }));
    downloadResumeFile('Vrushali_Pawar.pdf');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Ambient background glows */}
      <GlowOrb color="teal" size="xl" className="-top-24 left-1/2 -translate-x-1/2 opacity-30" />
      <GlowOrb color="cyan" size="lg" className="top-1/3 -right-24 opacity-25" delay={2} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Status Badge with Radar Pulse */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6">
            <div className="animate-float flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-obsidian-850 border border-teal-brand/40 text-xs font-semibold text-slate-300 shadow-sm backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-light opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mint-accent" />
              </span>
              <span className="font-bold text-white tracking-widest uppercase">
                VRUSHALI PAWAR
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-teal-light font-bold">{PROFILE_INFO.status}</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Building thoughtful digital experiences with{' '}
            <span className="text-teal-light">scalable engineering.</span>
          </motion.h1>

          {/* Identity Subtitle with Animated Role Cycler */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 mb-6 text-base sm:text-xl font-bold tracking-wide min-h-[34px]"
          >
            <span className="text-slate-400">Specializing in</span>
            <div className="inline-block relative overflow-hidden h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="inline-block px-3 py-0.5 rounded-lg bg-teal-brand/15 border border-teal-brand/35 text-white font-extrabold"
                >
                  {HERO_ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Hero Bio Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto font-normal"
          >
            {PROFILE_INFO.heroBio}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollTo('projects')}
              icon={<ArrowDownRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Explore My Work
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollTo('contact')}
              icon={<ArrowUpRight className="w-5 h-5 text-teal-light" />}
              iconPosition="right"
            >
              Let's Connect
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleDownload}
              icon={<FileDown className="w-5 h-5 text-teal-light" />}
              iconPosition="left"
            >
              Download Résumé
            </Button>
          </motion.div>

          {/* Key Skill Tags Strip */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-obsidian-800"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Core Competencies:
            </span>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-obsidian-850/90 border border-obsidian-700/80 shadow-glossy-card text-xs font-semibold text-slate-200 hover:scale-105 hover:border-teal-brand/60 transition-all duration-200 cursor-default">
              <Code2 className="w-4 h-4 text-teal-light" />
              <span>React & Next.js Architecture</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-obsidian-850/90 border border-obsidian-700/80 shadow-glossy-card text-xs font-semibold text-slate-200 hover:scale-105 hover:border-teal-brand/60 transition-all duration-200 cursor-default">
              <Terminal className="w-4 h-4 text-cyan-ice" />
              <span>Python & Backend APIs</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-obsidian-850/90 border border-obsidian-700/80 shadow-glossy-card text-xs font-semibold text-slate-200 hover:scale-105 hover:border-teal-brand/60 transition-all duration-200 cursor-default">
              <Cpu className="w-4 h-4 text-mint-accent" />
              <span>Production AI Integrations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
