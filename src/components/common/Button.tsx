import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-brand/60 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-6 py-3 text-sm gap-2.5',
    lg: 'px-7 py-3.5 text-base gap-3',
  };

  const variantStyles = {
    primary:
      'bg-teal-brand text-white border border-teal-brand hover:bg-teal-dark active:bg-teal-darker shadow-sm hover:shadow-md',
    secondary:
      'bg-obsidian-850 text-slate-100 border border-teal-brand/40 hover:border-teal-brand hover:bg-obsidian-800 shadow-sm',
    outline:
      'bg-obsidian-900 text-slate-200 border border-obsidian-700 hover:border-teal-brand hover:text-white hover:bg-obsidian-850 shadow-sm',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-obsidian-800/60',
  };

  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="tracking-wide">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
