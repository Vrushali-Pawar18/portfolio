import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  interactive = false,
  ...props
}) => {
  return (
    <motion.div
      whileHover={interactive ? { y: -5, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-3xl bg-gradient-to-b from-obsidian-850/90 to-obsidian-900/95 backdrop-blur-2xl border border-obsidian-700/80 shadow-glossy-card transition-all duration-300 overflow-hidden ${
        glowOnHover
          ? 'hover:border-teal-brand/50 hover:shadow-glossy-hover'
          : ''
      } ${className}`}
      {...props}
    >
      {/* Specular glass reflection line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
