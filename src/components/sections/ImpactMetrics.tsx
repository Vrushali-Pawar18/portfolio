import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../common/GlassCard';
import { IMPACT_METRICS } from '../../data/profileData';
import { staggerContainer, scaleUpCard } from '../../utils/motionVariants';

export const ImpactMetrics: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12"
    >
      {IMPACT_METRICS.map((metric) => (
        <GlassCard
          key={metric.id}
          variants={scaleUpCard}
          className="p-6 sm:p-7 text-center border-obsidian-750/80 hover:border-teal-brand/50 group"
        >
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient-teal mb-2 group-hover:scale-105 transition-transform duration-300">
            {metric.value}
          </div>
          <h4 className="text-sm font-bold text-white mb-1.5">
            {metric.label}
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            {metric.description}
          </p>
        </GlassCard>
      ))}
    </motion.div>
  );
};
