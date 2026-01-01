import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-rose-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <Sparkles size={20} className="text-rose-500" />
              <span className="text-xl font-serif font-bold text-slate-800">
                Lumina<span className="text-rose-500">Luxe</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Elevating beauty and wellness with premium treatments and luxurious care. Experience the best version of yourself.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-slate-800 mb-6">Services</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="#" className="hover:text-rose-500 transition-colors">Hair Styling</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Facial Treatments</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Bridal Makeup</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Nail Art</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Massage Therapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-slate-800 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="#home" className="hover:text-rose-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-rose-500 transition-colors">About Us</a></li>
              <li><a href="#stylists" className="hover:text-rose-500 transition-colors">Our Stylists</a></li>
              <li><a href="#packages" className="hover:text-rose-500 transition-colors">Packages</a></li>
              <li><a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-slate-800 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-rose-500 mt-0.5" />
                <span>123 Luxury Lane, Beverly Hills,<br />CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-rose-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-rose-500" />
                <span>hello@luminaluxe.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Lumina Luxe Spa. All rights reserved. Designed with ✨.</p>
        </div>
      </div>
    </footer>
  );
};