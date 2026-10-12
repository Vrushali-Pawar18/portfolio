import React from 'react';
import { ArrowUpRight, CheckCircle2, Bookmark, BookmarkCheck } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { ProjectCaseStudy } from '../../types/portfolio';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { openCaseStudyModal, toggleBookmark } from '../../store/slices/projectSlice';

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const dispatch = useAppDispatch();
  const bookmarkedIds = useAppSelector((state) => state.projects.bookmarkedIds);
  const isBookmarked = bookmarkedIds.includes(project.id);

  return (
    <GlassCard
      interactive
      className="p-7 sm:p-8 flex flex-col justify-between group h-full border-obsidian-750/80 hover:border-teal-brand/50"
    >
      <div>
        {/* Top Badges & Bookmark */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="teal" size="sm">
              {project.metricBadge}
            </Badge>
            <Badge variant="neutral" size="sm">
              {project.category.toUpperCase()}
            </Badge>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleBookmark(project.id));
            }}
            className="text-slate-400 hover:text-teal-light transition-colors p-1 cursor-pointer"
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark project'}
            aria-label="Bookmark project"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-teal-light" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-teal-light transition-colors leading-snug">
          {project.cardTitle}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          {project.cardDescription}
        </p>

        {/* Quick Highlights */}
        <div className="space-y-2.5 mb-6">
          {project.whatIBuilt.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
              <span className="line-clamp-2 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-obsidian-800 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-obsidian-850 text-[11px] font-semibold text-slate-300 border border-obsidian-700/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 rounded-lg bg-obsidian-850/60 text-[11px] font-semibold text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* View Case Study Trigger */}
        <button
          onClick={() => dispatch(openCaseStudyModal(project.id))}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-obsidian-850 hover:bg-teal-brand text-slate-200 hover:text-white border border-obsidian-700 hover:border-teal-brand text-xs font-bold tracking-wide transition-all duration-200 shadow-sm cursor-pointer"
        >
          <span>View Detailed Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </GlassCard>
  );
};
