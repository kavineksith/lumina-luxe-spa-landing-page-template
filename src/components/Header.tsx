import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import type { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Stylists', href: '#stylists' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md shadow-sm border-b border-white/20 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-tr from-rose-400 to-purple-500 p-2 rounded-xl text-white shadow-lg group-hover:shadow-rose-300/50 transition-all">
            <Sparkles size={24} fill="currentColor" className="text-white" />
          </div>
          <span className="text-2xl font-serif font-bold text-slate-800 tracking-tight">
            Lumina<span className="text-rose-500">Luxe</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-rose-500 transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-rose-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#booking"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-400/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 p-6 md:hidden flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-lg font-serif text-slate-800 py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#booking"
            className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-rose-400 to-purple-500 text-white font-bold text-center shadow-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
};