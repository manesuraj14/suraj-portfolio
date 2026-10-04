import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`bg-surface border border-border rounded-xl p-5 sm:p-6 transition-all duration-200 ${
        hoverEffect ? 'hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
