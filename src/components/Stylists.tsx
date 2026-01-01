import React from 'react';
import { Section, SectionTitle } from './Section';
import type { StylistItem } from '../types';
import { Instagram } from 'lucide-react';

const stylists: StylistItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Senior Hair Stylist',
    specialty: 'Color & Cuts',
    image: 'https://picsum.photos/300/300?random=30',
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    role: 'Makeup Artist',
    specialty: 'Bridal & Editorial',
    image: 'https://picsum.photos/300/300?random=31',
  },
  {
    id: '3',
    name: 'Mai Lin',
    role: 'Skincare Specialist',
    specialty: 'Facials & Therapy',
    image: 'https://picsum.photos/300/300?random=32',
  },
  {
    id: '4',
    name: 'Jessica Cole',
    role: 'Nail Technician',
    specialty: 'Art & Design',
    image: 'https://picsum.photos/300/300?random=33',
  },
];

export const Stylists: React.FC = () => {
  return (
    <Section id="stylists">
      <SectionTitle 
        title="Meet Our Artists" 
        subtitle="Talented professionals dedicated to perfection."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stylists.map((stylist) => (
          <div key={stylist.id} className="group relative">
             <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                <img 
                  src={stylist.image} 
                  alt={stylist.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <p className="text-white font-serif text-xl">{stylist.name}</p>
                   <p className="text-rose-200 text-sm">{stylist.role}</p>
                   <div className="mt-3 flex gap-2">
                     <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-rose-600 transition-colors">
                        <Instagram size={16} />
                     </button>
                   </div>
                </div>
             </div>
             {/* Simple info below for mobile/default view */}
             <div className="text-center mt-4 md:hidden">
               <h3 className="font-serif text-lg text-slate-800">{stylist.name}</h3>
               <p className="text-sm text-slate-500">{stylist.role}</p>
             </div>
          </div>
        ))}
      </div>
    </Section>
  );
};