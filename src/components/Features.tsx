import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Section, GlassCard } from './Section';

export const Features: React.FC = () => {
  return (
    <Section id="why-us" background="gradient">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <GlassCard className="text-center !p-8 animate-float" style={{ animationDelay: '0s' }}>
            <Award className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h4 className="font-bold text-slate-800 mb-2">Certified Experts</h4>
            <p className="text-xs text-slate-500">Top-tier stylists</p>
          </GlassCard>
          <GlassCard className="text-center !p-8 animate-float translate-y-8" style={{ animationDelay: '1s' }}>
            <ShieldCheck className="w-10 h-10 text-green-500 mx-auto mb-4" />
            <h4 className="font-bold text-slate-800 mb-2">100% Safe</h4>
            <p className="text-xs text-slate-500">Hygienic tools</p>
          </GlassCard>
          <GlassCard className="text-center !p-8 animate-float" style={{ animationDelay: '2s' }}>
            <Heart className="w-10 h-10 text-rose-500 mx-auto mb-4" />
            <h4 className="font-bold text-slate-800 mb-2">Cruelty Free</h4>
            <p className="text-xs text-slate-500">Premium products</p>
          </GlassCard>
          <GlassCard className="text-center !p-8 animate-float translate-y-8" style={{ animationDelay: '3s' }}>
            <Sparkles className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <h4 className="font-bold text-slate-800 mb-2">Luxury Vibe</h4>
            <p className="text-xs text-slate-500">Relaxing ambience</p>
          </GlassCard>
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
           <h2 className="text-4xl md:text-5xl font-serif text-slate-800 leading-tight">
             Why thousands of women <span className="text-rose-500 italic">trust us</span> with their beauty.
           </h2>
           <p className="text-lg text-slate-600 font-light leading-relaxed">
             At Lumina Luxe, we don't just offer services; we offer an escape. From the moment you step in, you are enveloped in a world of calm, luxury, and personalized care.
           </p>
           <ul className="space-y-3">
             {['Personalized consultation before every session', 'Premium international beauty brands used', 'Complimentary herbal tea & refreshments'].map((item, i) => (
               <li key={i} className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                 <span className="text-slate-700">{item}</span>
               </li>
             ))}
           </ul>
        </div>
      </div>
    </Section>
  );
};