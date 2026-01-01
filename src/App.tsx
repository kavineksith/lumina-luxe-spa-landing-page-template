import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Stylists } from './components/Stylists';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-rose-50/50 selection:bg-rose-200 selection:text-rose-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Packages />
        <Stylists />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default App;