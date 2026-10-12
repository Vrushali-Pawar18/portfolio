import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Cpu, Zap, Layers, Trophy } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projectsData';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeCaseStudyModal } from '../../store/slices/projectSlice';
import { modalVariants, backdropVariants } from '../../utils/motionVariants';
import { Badge } from '../common/Badge';

export const ProjectModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeId = useAppSelector((state) => state.projects.activeModalProjectId);
  const project = PROJECTS_DATA.find((p) => p.id === activeId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch(closeCaseStudyModal());
    };
    if (activeId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeId, dispatch]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => dispatch(closeCaseStudyModal())}
            className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-2xl"
          />

          {/* Modal Window with Specular Glossy Card */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-3xl my-8 bg-gradient-to-b from-obsidian-850 to-obsidian-900 border border-teal-brand/40 rounded-3xl p-6 sm:p-9 shadow-glossy-card z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Top specular shine line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-obsidian-750">
              <div>
                <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                  <Badge variant="teal" size="sm">{project.metricBadge}</Badge>
                  <Badge variant="neutral" size="sm">{project.category.toUpperCase()}</Badge>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={() => dispatch(closeCaseStudyModal())}
                className="p-2.5 rounded-2xl bg-obsidian-800 text-slate-300 hover:text-white hover:bg-obsidian-700 transition-colors shrink-0 cursor-pointer shadow-sm"
                aria-label="Close case study dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-7">
              {/* Overview */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold text-teal-light uppercase tracking-widest mb-2">
                  <Layers className="w-4 h-4" />
                  <span>Overview & Purpose</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {project.overview}
                </p>
              </div>

              {/* The Challenge */}
              <div className="p-5 rounded-2xl bg-obsidian-850 border border-obsidian-750 shadow-sm">
                <h4 className="flex items-center gap-2 text-xs font-bold text-cyan-ice uppercase tracking-widest mb-2">
                  <Zap className="w-4 h-4" />
                  <span>The Engineering Challenge</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              {/* What I Built */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold text-teal-light uppercase tracking-widest mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>What I Built & Technical Implementation</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.whatIBuilt.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-obsidian-950/70 border border-obsidian-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Focus */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                  Engineering Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.engineeringFocus.map((focus) => (
                    <span
                      key={focus}
                      className="px-3 py-1.5 rounded-xl bg-teal-brand/15 border border-teal-brand/30 text-teal-light text-xs font-semibold"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-obsidian-800 border border-obsidian-700 text-slate-200 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="p-5 rounded-2xl bg-teal-brand/10 border border-teal-brand/35 shadow-sm">
                <h4 className="flex items-center gap-2 text-xs font-bold text-teal-light uppercase tracking-widest mb-1.5">
                  <Trophy className="w-4 h-4" />
                  <span>Measured Outcome & Impact</span>
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed font-semibold">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-obsidian-750 flex justify-end">
              <button
                onClick={() => dispatch(closeCaseStudyModal())}
                className="px-6 py-2.5 rounded-xl bg-teal-brand hover:bg-teal-dark text-white text-xs font-bold border border-teal-brand shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
