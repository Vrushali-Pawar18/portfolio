import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'cyan' | 'mint' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'md',
  className = '',
  icon,
}) => {
  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-xs',
  };

  const variantStyles = {
    teal: 'bg-teal-brand/15 text-teal-light border border-teal-brand/40 shadow-sm',
    cyan: 'bg-cyan-ice/10 text-cyan-ice border border-cyan-ice/30 shadow-sm',
    mint: 'bg-mint-accent/10 text-mint-accent border border-mint-accent/30 shadow-sm',
    neutral: 'bg-obsidian-850 text-slate-300 border border-obsidian-700 shadow-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full shrink-0 transition-colors tracking-wide ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
