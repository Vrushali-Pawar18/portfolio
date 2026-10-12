import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { APPROACH_STEPS } from '../../data/profileData';
import { staggerContainer, scaleUpCard } from '../../utils/motionVariants';

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="relative py-24 lg:py-32 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="06 · Engineering Approach"
          title="Beyond the code: how I build products"
          subtitle="A disciplined, four-phase engineering methodology focused on long-term reliability, clean abstractions, and tangible user value."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {APPROACH_STEPS.map((step) => (
            <GlassCard
              key={step.number}
              variants={scaleUpCard}
              interactive
              className="p-7 relative group overflow-hidden border-obsidian-750/80 hover:border-teal-brand/50 flex flex-col justify-between"
            >
              {/* Step Number in big font in background */}
              <div className="text-4xl font-extrabold text-teal-brand/25 mb-4 group-hover:text-teal-brand/50 transition-colors">
                {step.number}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-teal-light transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent glow bar */}
              <div className="mt-6 pt-4 border-t border-obsidian-800">
                <span className="text-[11px] font-bold text-teal-light uppercase tracking-wider">
                  Phase {step.number}
                </span>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
