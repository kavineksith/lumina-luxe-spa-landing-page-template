import React from 'react';
import { Scissors, Sparkles, Wind, Sun, Heart, Smile } from 'lucide-react';
import { Section, SectionTitle, GlassCard } from './Section';
import type { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'hair',
    title: 'Hair Styling',
    description: 'Expert cuts, coloring, and treatments for your perfect look.',
    icon: Scissors,
  },
  {
    id: 'facial',
    title: 'Facial Treatments',
    description: 'Rejuvenating facials that leave your skin glowing and refreshed.',
    icon: Sparkles,
  },
  {
    id: 'makeup',
    title: 'Bridal Makeup',
    description: 'Flawless makeup application for your special day.',
    icon: Heart,
  },
  {
    id: 'nails',
    title: 'Nail Care',
    description: 'Manicures, pedicures, and stunning nail art designs.',
    icon: Sun, // Using Sun as placeholder for visually pleasing icon
  },
  {
    id: 'massage',
    title: 'Body Massage',
    description: 'Relaxing full-body massages to relieve stress and tension.',
    icon: Wind,
  },
  {
    id: 'waxing',
    title: 'Waxing & Threading',
    description: 'Gentle and effective hair removal services.',
    icon: Smile,
  },
];

export const Services: React.FC = () => {
  return (
    <Section id="services" background="light">
      <SectionTitle 
        title="Our Premium Services" 
        subtitle="Indulge in a wide range of beauty and wellness treatments designed to help you look and feel your absolute best."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <GlassCard key={service.id} className="group text-center flex flex-col items-center gap-4 py-10" interactive>
            <div className="w-20 h-20 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center transition-colors duration-300">
              <service.icon size={36} className="text-rose-400 group-hover:text-rose-600 transition-colors" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-slate-800">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed px-4">
              {service.description}
            </p>
            <a href="#booking" className="text-rose-500 font-medium text-sm mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Book Now &rarr;
            </a>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};