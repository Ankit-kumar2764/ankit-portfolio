import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant="brand" size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
