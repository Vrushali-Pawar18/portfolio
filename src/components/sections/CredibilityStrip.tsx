import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { CREDIBILITY_POINTS } from '../../data/profileData';
import { fadeInUp } from '../../utils/motionVariants';

export const CredibilityStrip: React.FC = () => {
  return (
    <div className="relative border-y border-obsidian-border bg-gradient-to-r from-obsidian-900/60 via-obsidian-850/80 to-obsidian-900/60 backdrop-blur-2xl py-7 shadow-glossy-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {CREDIBILITY_POINTS.map((point) => (
            <div key={point.label} className="flex items-start gap-3.5 group">
              <div className="p-1 rounded-lg bg-teal-brand/15 border border-teal-brand/30 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-4 h-4 text-teal-light" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-teal-light transition-colors">
                  {point.label}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 font-normal">
                  {point.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
