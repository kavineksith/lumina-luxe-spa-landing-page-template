import React from 'react';
import { Section, SectionTitle } from './Section';

export const Gallery: React.FC = () => {
  return (
    <Section id="gallery" background="light">
      <SectionTitle title="Our Masterpieces" subtitle="A glimpse into the elegance we create every day." />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {/* Masonry-style grid utilizing col/row spans */}
        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
          <img src="https://picsum.photos/600/600?random=40" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
        </div>
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
          <img src="https://picsum.photos/300/300?random=41" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden relative group">
          <img src="https://picsum.photos/300/600?random=42" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
          <img src="https://picsum.photos/300/300?random=43" alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
          <img src="https://picsum.photos/600/300?random=44" alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>
      
      <div className="mt-12 text-center">
         <a href="#instagram" className="inline-block border-b border-slate-800 pb-0.5 text-slate-800 hover:text-rose-600 hover:border-rose-600 transition-colors">View more on Instagram</a>
      </div>
    </Section>
  );
};