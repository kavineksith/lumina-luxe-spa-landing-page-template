import React from 'react';
import { Check } from 'lucide-react';
import { Section, SectionTitle, GlassCard } from './Section';
import type { PackageItem } from '../types';

const packages: PackageItem[] = [
  {
    id: 'silver',
    title: 'Essential Glow',
    price: '$99',
    features: ['Classic Facial', 'Manicure & Pedicure', 'Hair Wash & Blowdry'],
    image: 'https://picsum.photos/400/300?random=20',
  },
  {
    id: 'gold',
    title: 'Bridal Radiance',
    price: '$299',
    features: ['Premium Gold Facial', 'Full Body Polishing', 'Bridal Makeup Trial', 'Luxury Hair Spa'],
    image: 'https://picsum.photos/400/300?random=21',
    popular: true,
  },
  {
    id: 'platinum',
    title: 'Ultimate Detox',
    price: '$199',
    features: ['Aromatherapy Massage', 'Detox Body Wrap', 'Foot Reflexology', 'Green Tea Refreshment'],
    image: 'https://picsum.photos/400/300?random=22',
  },
];

export const Packages: React.FC = () => {
  return (
    <Section id="packages">
      <SectionTitle 
        title="Exclusive Packages" 
        subtitle="Curated combinations of our best services for the ultimate pampering experience."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {packages.map((pkg) => (
          <GlassCard 
            key={pkg.id} 
            className={`relative flex flex-col h-full !p-0 overflow-hidden group ${pkg.popular ? 'border-rose-300 shadow-rose-200/50 ring-4 ring-rose-100' : ''}`}
            hoverEffect={true}
          >
            {pkg.popular && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                MOST POPULAR
              </div>
            )}
            
            <div className="h-48 overflow-hidden relative">
              <img 
                src={pkg.image} 
                alt={pkg.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="text-2xl font-serif font-medium">{pkg.title}</h3>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="text-4xl font-serif font-bold text-slate-800 mb-6">
                {pkg.price}
                <span className="text-sm text-slate-500 font-sans font-normal ml-2">/ package</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#booking"
                className={`w-full py-3 rounded-xl font-medium transition-all text-center ${
                  pkg.popular 
                    ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-200' 
                    : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                }`}
              >
                Choose Plan
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};