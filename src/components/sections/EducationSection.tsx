import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { EDUCATION_LIST } from '../../data/profileData';
import { staggerContainer, scaleUpCard } from '../../utils/motionVariants';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 lg:py-32 bg-obsidian-900/30 border-t border-obsidian-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="07 · Education & Training"
          title="Academic Foundation & Credentials"
          subtitle="Computer science engineering degrees and professional technical training."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {EDUCATION_LIST.map((edu, idx) => (
            <GlassCard
              key={edu.degree}
              variants={scaleUpCard}
              className="p-7 sm:p-9 flex flex-col justify-between border-obsidian-750/80 hover:border-teal-brand/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-brand/15 border border-teal-brand/30 flex items-center justify-center text-teal-light">
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-obsidian-850 text-teal-light border border-teal-brand/30 shadow-sm">
                    {edu.grade}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5">
                  {edu.degree}
                </h3>
                <p className="text-base font-semibold text-slate-300 mb-2.5">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4">
                  <Calendar className="w-4 h-4 text-cyan-ice" />
                  <span>{edu.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-obsidian-800 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-teal-light" />
                <span>Verified Academic Record</span>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
