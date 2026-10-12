import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/motionVariants';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-12 ${centered ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}
    >
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full bg-teal-brand/15 border border-teal-brand/40 text-teal-light text-[11px] font-bold tracking-widest uppercase shadow-sm ${centered ? 'mx-auto' : ''}`}>
        <span className="w-2 h-2 rounded-full bg-teal-vibrant animate-pulse" />
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
