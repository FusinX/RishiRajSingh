import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Ruler, Award, Film, Clapperboard } from 'lucide-react';

const StatItem: React.FC<{ icon: React.ReactNode; label: string; value: string; delay: number }> = ({ icon, label, value, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center p-4 bg-white shadow-xl rounded-sm border-b-4 border-accent"
  >
    <div className="text-primary mb-2">{icon}</div>
    <span className="text-3xl font-display font-bold text-charcoal">{value}</span>
    <span className="text-xs font-sans uppercase tracking-widest text-gray-500 mt-1">{label}</span>
  </motion.div>
);

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 z-0"></div>
            <div className="relative z-10 aspect-[3/4] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/rishiactor/800/1000" 
                alt="Rishi Raj Singh Headshot" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-display text-xl">Mumbai Based</h3>
                <p className="text-gold text-sm font-sans flex items-center gap-2">
                  <MapPin size={14} /> Andheri West
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-sans uppercase tracking-widest text-sm font-bold mb-2">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
                Crafting Stories <span className="text-accent italic">Through Character</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                I am Rishi Raj Singh, a passionate and versatile actor currently based in the heart of the Indian film industry, Mumbai. 
                With a deep-rooted love for the cinematic arts, I approach every role with dedication, aiming to bring authenticity and depth to my characters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                My journey has been shaped by rigorous training and a commitment to understanding the human psyche. 
                Whether it's the intensity of drama, the timing of comedy, or the physicality of action, I strive to deliver performances that resonate with audiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Ruler className="text-primary" size={20} />
                <div>
                  <span className="block font-bold font-display">Height</span>
                  <span className="text-sm">5' 10"</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar className="text-primary" size={20} />
                <div>
                  <span className="block font-bold font-display">Age</span>
                  <span className="text-sm">27 Years</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <StatItem icon={<Film size={24} />} label="Projects" value="15+" delay={0.2} />
              <StatItem icon={<Clapperboard size={24} />} label="Years Active" value="4" delay={0.4} />
              <StatItem icon={<Award size={24} />} label="Awards" value="2" delay={0.6} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};