import React from 'react';
import { Section, SectionTitle } from './Section';

export const Gallery: React.FC = () => {
  return (
    <Section id="gallery" background="light">
      <SectionTitle title="Our Masterpieces" subtitle="A glimpse into the elegance we create every day." />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {/* Masonry-style grid utilizing col/row spans */}
        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1730367019975-4ad8d9e14ef2?q=80&w=1200&h=1200&auto=format&fit=crop" crossOrigin="anonymous" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
        </div>
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&h=600&auto=format&fit=crop" crossOrigin="anonymous" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&h=1200&auto=format&fit=crop" crossOrigin="anonymous" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=600&h=600&auto=format&fit=crop" crossOrigin="anonymous" alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&h=600&auto=format&fit=crop" crossOrigin="anonymous" alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>
      
      <div className="mt-12 text-center">
         <a href="#instagram" className="inline-block border-b border-slate-800 pb-0.5 text-slate-800 hover:text-rose-600 hover:border-rose-600 transition-colors">View more on Instagram</a>
      </div>
    </Section>
  );
};