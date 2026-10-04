import React from 'react';

const variantStyles = {
  default: 'bg-surface-secondary text-text-secondary border-border',
  primary: 'bg-primary/10 text-primary border-primary/30',
  secondary: 'bg-secondary/10 text-secondary border-secondary/30',
  accent: 'bg-accent/10 text-accent border-accent/30',
  success: 'bg-success/10 text-success border-success/30',
  warning: 'bg-warning/10 text-warning border-warning/30',
  outline: 'bg-transparent text-text-secondary border-border hover:border-primary/40'
};

export default function Badge({ children, variant = 'default', className = '', size = 'sm' }) {
  const sizeStyles = {
    xs: 'px-2 py-0.5 text-[11px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-xs'
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md border ${variantStyles[variant] || variantStyles.default} ${sizeStyles[size] || sizeStyles.sm} transition-colors ${className}`}
    >
      {children}
    </span>
  );
}
