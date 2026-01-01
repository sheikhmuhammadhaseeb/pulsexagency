import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        backdrop-blur-[40px]
        bg-gradient-to-br from-white/10 to-white/5
        border border-white/20
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        ${hover ? 'transition-all duration-500 hover:shadow-[0_8px_48px_0_rgba(99,102,241,0.4)] hover:border-cyan-400/40 hover:scale-[1.02]' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
