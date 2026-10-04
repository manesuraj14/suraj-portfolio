import React from 'react';
import Badge from './Badge';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignmentClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignmentClass} max-w-3xl mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant="primary" size="sm">
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* Subtle accent underline */}
      <div className={`mt-4 h-1 w-12 bg-primary rounded-full ${align === 'left' ? '' : 'mx-auto'}`} />
    </div>
  );
}
