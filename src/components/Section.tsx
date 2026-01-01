import React, { type ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'transparent' | 'light' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, background = 'transparent' }) => {
  const bgClass = {
    transparent: '',
    light: 'bg-white/40',
    gradient: 'bg-gradient-to-b from-rose-50 to-white',
  }[background];

  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = true, interactive = false }) => {
  return (
    <div 
      className={`
        bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl 
        rounded-3xl p-6 transition-all duration-300
        ${hoverEffect ? 'hover:bg-white/50 hover:shadow-2xl hover:shadow-rose-200/50 hover:-translate-y-1' : ''}
        ${interactive ? 'cursor-pointer active:scale-95' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-gradient-to-r from-rose-300 to-purple-300 rounded-full mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};