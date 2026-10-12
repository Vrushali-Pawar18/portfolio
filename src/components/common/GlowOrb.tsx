import React from 'react';
import { motion } from 'framer-motion';

interface GlowOrbProps {
  color?: 'teal' | 'cyan' | 'mint';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  delay?: number;
}

export const GlowOrb: React.FC<GlowOrbProps> = ({
  color = 'teal',
  size = 'md',
  className = '',
  delay = 0,
}) => {
  const sizeMap = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-96 h-96',
    xl: 'w-[34rem] h-[34rem]',
  };

  const colorMap = {
    teal: 'bg-teal-brand/20',
    cyan: 'bg-cyan-ice/15',
    mint: 'bg-mint-accent/15',
  };

  return (
    <motion.div
      initial={{ opacity: 0.35, scale: 0.95 }}
      animate={{
        opacity: [0.35, 0.65, 0.35],
        scale: [0.95, 1.08, 0.95],
        y: [0, -25, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute rounded-full pointer-events-none blur-[100px] ${sizeMap[size]} ${colorMap[color]} ${className}`}
    />
  );
};
