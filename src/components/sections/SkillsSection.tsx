import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { DynamicIcon } from '../common/DynamicIcon';
import { SKILLS_DATA } from '../../data/skillsData';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setActiveTab, SkillCategoryTab } from '../../store/slices/skillSlice';
import { fadeInUp, staggerContainer, scaleUpCard } from '../../utils/motionVariants';

const TABS: { id: SkillCategoryTab; label: string }[] = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'frontend', label: 'Frontend Architecture' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'databases', label: 'Databases & Async' },
  { id: 'ai', label: 'AI & Workflows' },
  { id: 'cloud', label: 'Cloud & DevOps' },
];

export const SkillsSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.skills.activeTab);

  const displayedCategories =
    activeTab === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-obsidian-900/40 border-t border-obsidian-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="03 · Technical Skills"
          title="Technologies I work with"
          subtitle="The engineering tools behind the products I build—organized by capability and hands-on production application."
        />

        {/* Tab Controls with glossy pills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-2.5 mb-12"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => dispatch(setActiveTab(tab.id))}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-teal-brand text-white border border-teal-brand shadow-sm'
                    : 'bg-obsidian-850 text-slate-300 hover:text-white border border-obsidian-750 hover:border-teal-brand/40 shadow-sm'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Categories Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedCategories.map((category) => (
              <GlassCard
                key={category.id}
                variants={scaleUpCard}
                className="p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-bold text-teal-light px-2.5 py-1 rounded-full bg-teal-brand/15 border border-teal-brand/30">
                      {category.skills.length} tools
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-obsidian-800">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        skill.isKey
                          ? 'bg-obsidian-800 text-teal-light border border-teal-brand/40 hover:border-teal-brand hover:shadow-teal-sm'
                          : 'bg-obsidian-850 text-slate-300 border border-obsidian-700/80 hover:text-white'
                      }`}
                    >
                      <DynamicIcon name={skill.iconName} className="w-3.5 h-3.5 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
