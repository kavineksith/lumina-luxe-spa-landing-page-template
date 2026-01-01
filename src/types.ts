import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PackageItem {
  id: string;
  title: string;
  price: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface StylistItem {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  comment: string;
  rating: number;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}