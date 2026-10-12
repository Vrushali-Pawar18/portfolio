import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { ImpactMetrics } from './ImpactMetrics';
import { EXPERIENCE_DATA } from '../../data/experienceData';
import { fadeInUp } from '../../utils/motionVariants';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-obsidian-900/30 border-t border-obsidian-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="05 · Experience"
          title="Building and improving production software"
          subtitle="Direct, hands-on engineering experience spanning frontend architecture, backend services, third-party integrations, and AI product features."
        />

        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp) => (
            <GlassCard
              key={exp.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="p-7 sm:p-10 border-obsidian-750/80 hover:border-teal-brand/50"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-obsidian-750">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-vibrant" />
                    <span className="text-xs text-teal-light font-bold uppercase tracking-wider">
                      Current Position
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-base font-semibold text-slate-300 mt-1">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-obsidian-850 border border-obsidian-700 shadow-sm">
                    <Calendar className="w-4 h-4 text-teal-light" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-obsidian-850 border border-obsidian-700 shadow-sm">
                    <MapPin className="w-4 h-4 text-cyan-ice" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-slate-300 my-6 leading-relaxed">
                {exp.summary}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {exp.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-obsidian-950/70 border border-obsidian-800 hover:border-teal-brand/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Impact strip */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-teal-light">
              Measurable Engineering Impact
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Key efficiency gains and optimizations delivered across production systems
            </p>
          </div>
          <ImpactMetrics />
        </div>
      </div>
    </section>
  );
};
