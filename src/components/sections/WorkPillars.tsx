import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../common/GlassCard';
import { DynamicIcon } from '../common/DynamicIcon';
import { WORK_PILLARS } from '../../data/profileData';
import { staggerContainer, scaleUpCard } from '../../utils/motionVariants';

export const WorkPillars: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10"
    >
      {WORK_PILLARS.map((pillar) => (
        <GlassCard
          key={pillar.id}
          variants={scaleUpCard}
          interactive
          className="p-6 group hover:border-teal-brand/60"
        >
          <div className="w-12 h-12 rounded-2xl bg-teal-brand/15 border border-teal-brand/30 flex items-center justify-center text-teal-light mb-4 group-hover:scale-110 group-hover:bg-teal-brand/25 group-hover:shadow-teal-sm transition-all duration-300">
            <DynamicIcon name={pillar.iconName} className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-light transition-colors">
            {pillar.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed font-normal">
            {pillar.description}
          </p>
        </GlassCard>
      ))}
    </motion.div>
  );
};
