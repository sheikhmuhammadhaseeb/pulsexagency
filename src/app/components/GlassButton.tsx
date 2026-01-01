import React from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export const GlassButton: React.FC<GlassButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}) => {
  const baseStyles = `
    relative overflow-hidden rounded-full px-8 py-3.5
    backdrop-blur-[40px]
    border
    transition-all duration-300
    cursor-pointer
  `;

  const variantStyles = variant === 'primary' 
    ? `
      bg-gradient-to-r from-cyan-500/20 to-purple-600/20
      border-white/30
      hover:from-cyan-400/30 hover:to-purple-500/30
      hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]
      hover:border-cyan-400/50
    `
    : `
      bg-white/10
      border-white/20
      hover:bg-white/15
      hover:border-white/30
    `;

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 font-semibold tracking-wide">
        {children}
      </span>
    </button>
  );
};
