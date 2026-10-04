import React from 'react';

const variants = {
  primary: 'bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow focus:ring-primary/40',
  secondary: 'bg-surface-secondary hover:bg-surface-hover text-text-primary border border-border hover:border-primary/40 focus:ring-primary/30',
  outline: 'bg-transparent hover:bg-surface-secondary text-text-primary border border-border hover:border-primary/50 focus:ring-primary/30',
  ghost: 'bg-transparent hover:bg-surface text-text-secondary hover:text-text-primary focus:ring-primary/20'
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base'
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Component = 'button',
  icon: Icon,
  iconRight: IconRight,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center space-x-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {IconRight && <IconRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </Component>
  );
}
