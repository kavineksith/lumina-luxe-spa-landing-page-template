import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Sparkles } from 'lucide-react';
import { Section, GlassCard } from './Section';

export const Booking: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your appointment request has been received. We will contact you shortly to confirm.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="booking" className="!py-0 pb-20">
      <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="https://picsum.photos/1200/800?random=60" alt="Spa Ambience" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-purple-900/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 p-10 md:p-20 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
               <Sparkles size={14} className="text-amber-300" />
               <span className="text-xs uppercase tracking-widest font-semibold">Reserve Your Spot</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif">Ready to Glow?</h2>
            <p className="text-rose-100 font-light text-lg max-w-md">
              Book your appointment today and let our experts take care of the rest. Limited slots available for the weekend.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center min-w-[100px]">
                <p className="text-2xl font-bold">10%</p>
                <p className="text-xs text-rose-200">First Visit Off</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center min-w-[100px]">
                <p className="text-2xl font-bold">Free</p>
                <p className="text-xs text-rose-200">Consultation</p>
              </div>
            </div>
          </div>

          <GlassCard className="bg-white/95 !backdrop-blur-xl">
            <h3 className="text-2xl font-serif text-slate-800 mb-6 text-center">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-all"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  required
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-all"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                 <select 
                    name="service"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-all text-slate-600"
                    value={formState.service}
                    onChange={handleChange}
                    required
                 >
                    <option value="" disabled>Select Service</option>
                    <option value="hair">Hair Styling</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="massage">Massage Therapy</option>
                    <option value="nails">Nail Care</option>
                    <option value="package">Full Package</option>
                 </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="relative">
                   <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                   <input 
                      type="date" 
                      name="date"
                      required
                      className="w-full pl-12 pr-2 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-all text-sm"
                      value={formState.date}
                      onChange={handleChange}
                   />
                 </div>
                 <div className="relative">
                   <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                   <input 
                      type="time" 
                      name="time"
                      required
                      className="w-full pl-12 pr-2 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white transition-all text-sm"
                      value={formState.time}
                      onChange={handleChange}
                   />
                 </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-rose-300/50 hover:shadow-rose-400/70 hover:-translate-y-1 transition-all"
              >
                Confirm Appointment
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
};