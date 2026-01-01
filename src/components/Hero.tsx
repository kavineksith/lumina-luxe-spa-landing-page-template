import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { GlassCard } from './Section';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-amber-100/40 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="space-y-8 relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-rose-100 shadow-sm backdrop-blur-sm">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">Premium Beauty & Wellness</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1]">
            Discover Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Best Self</span> <br />
            With Luxury Care
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-lg font-light leading-relaxed">
            Experience premium treatments crafted for elegance, confidence, and deep relaxation in a sanctuary designed for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold shadow-lg shadow-rose-300/50 hover:shadow-rose-400/70 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Book Appointment <ArrowRight size={18} />
            </a>
            <a 
              href="#services"
              className="px-8 py-4 rounded-full bg-white text-slate-700 font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 flex items-center justify-center"
            >
              View Services
            </a>
          </div>

          <div className="pt-8 flex items-center gap-8">
            <div>
              <p className="text-3xl font-serif font-bold text-slate-800">2k+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wide">Happy Clients</p>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div>
              <p className="text-3xl font-serif font-bold text-slate-800">15+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wide">Expert Stylists</p>
            </div>
          </div>
        </div>

        {/* Visuals */}
        <div className="relative hidden md:block h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center">
             {/* Main Image */}
             <div className="relative w-[400px] h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white animate-float">
                <img 
                  src="https://picsum.photos/400/500?random=10" 
                  alt="Beautiful woman in spa" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent"></div>
             </div>

             {/* Floating Card 1 */}
             <GlassCard className="absolute top-10 -left-10 w-48 !p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <span className="text-xl">💅</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Nail Art</p>
                    <p className="text-xs text-slate-500">Trending Styles</p>
                  </div>
                </div>
             </GlassCard>

             {/* Floating Card 2 */}
             <GlassCard className="absolute bottom-20 -right-5 w-52 !p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                     <span className="text-xl">🌿</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Organic Spa</p>
                    <p className="text-xs text-slate-500">100% Natural</p>
                  </div>
                </div>
             </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};