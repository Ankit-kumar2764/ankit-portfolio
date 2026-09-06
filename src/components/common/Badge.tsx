import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'accent' | 'neutral' | 'emerald' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    brand: 'bg-teal-500/10 text-teal-600 dark:text-teal-300 border-teal-500/20',
    accent: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/20',
    neutral: 'bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700/50',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-sm px-3 py-1 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border tracking-wide transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
