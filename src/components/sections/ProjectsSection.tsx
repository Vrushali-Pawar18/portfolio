import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PROJECTS_DATA } from '../../data/projectsData';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCategory, setSearchQuery, ProjectFilterCategory } from '../../store/slices/projectSlice';
import { staggerContainer, fadeInUp } from '../../utils/motionVariants';

const CATEGORIES: { id: ProjectFilterCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack & APIs' },
  { id: 'frontend', label: 'Frontend Architecture' },
  { id: 'ai', label: 'AI & Automation' },
];

export const ProjectsSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedCategory, searchQuery } = useAppSelector((state) => state.projects);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.cardDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="04 · Selected Work"
          title="Featured Engineering Projects"
          subtitle="Production-grade platforms and intelligent workflows built with high-performance frontends, robust APIs, and asynchronous pipelines."
        />

        {/* Filter Controls & Search */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => dispatch(setCategory(cat.id))}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-teal-brand text-white border border-teal-brand shadow-sm'
                      : 'bg-obsidian-850 text-slate-300 hover:text-white border border-obsidian-750 hover:border-teal-brand/40 shadow-sm'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              placeholder="Search by tech or keyword..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-obsidian-900 border border-obsidian-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand shadow-glossy-card transition-all"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchQuery}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full py-16 text-center rounded-3xl bg-obsidian-900/60 border border-obsidian-800 shadow-glossy-card">
                <Sparkles className="w-8 h-8 text-teal-light mx-auto mb-3 opacity-70" />
                <p className="text-slate-300 font-semibold text-sm">
                  No projects match "{searchQuery}" in this category.
                </p>
                <button
                  onClick={() => {
                    dispatch(setCategory('all'));
                    dispatch(setSearchQuery(''));
                  }}
                  className="mt-3 text-xs text-teal-light hover:underline font-bold cursor-pointer"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      <ProjectModal />
    </section>
  );
};
