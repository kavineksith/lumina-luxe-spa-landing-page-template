import React from 'react';
import { Star } from 'lucide-react';
import { Section, SectionTitle, GlassCard } from './Section';
import type { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Emily Davis',
    comment: "The most relaxing experience I've ever had. The facial treatment took years off my skin!",
    rating: 5,
    image: 'https://picsum.photos/100/100?random=50'
  },
  {
    id: '2',
    name: 'Sophia Chen',
    comment: "Stunning interior and incredibly professional staff. My bridal makeup was perfection.",
    rating: 5,
    image: 'https://picsum.photos/100/100?random=51'
  },
  {
    id: '3',
    name: 'Olivia Wilson',
    comment: "I love the organic products they use. It smells divine and feels so safe for my sensitive skin.",
    rating: 5,
    image: 'https://picsum.photos/100/100?random=52'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="reviews">
      <SectionTitle title="Client Love" subtitle="Hear from our beautiful community." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <GlassCard key={item.id} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose-200 mb-4">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-600 italic mb-4 font-light">"{item.comment}"</p>
            <h5 className="font-serif font-bold text-slate-800">{item.name}</h5>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};