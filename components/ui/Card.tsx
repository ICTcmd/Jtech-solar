import React from 'react';

interface CardProps {
  variant?: 'frosted' | 'solid';
  children: React.ReactNode;
  className?: string;
}

export function Card({
  variant = 'solid',
  children,
  className = '',
}: CardProps) {
  const variantStyles = {
    frosted: 'backdrop-blur-md bg-slate-900/60 border border-slate-800',
    solid: 'bg-[#f8fafc] border border-slate-800',
  };
  
  return (
    <div className={`rounded-xl p-6 md:p-8 ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
