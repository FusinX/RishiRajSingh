import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal flex items-center justify-center">
      {/* Background Parallax Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/20 to-primary/90 z-10"></div>
        <img
          src="https://picsum.photos/seed/actorhero/1920/1080" 
          alt="Rishi Raj Singh Dramatic Portrait"
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-accent font-sans uppercase tracking-[0.3em] text-sm md:text-base mb-4"
        >
          Actor | Performer | Storyteller
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="font-display text-5xl md:text-7xl lg:text-9xl text-white font-bold mb-6 drop-shadow-2xl tracking-tight"
        >
          RISHI <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">RAJ</span> SINGH
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
        >
          <a 
            href="#work"
            className="px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-300 font-sans uppercase tracking-widest text-sm font-bold"
          >
            View Showreel
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 bg-primary text-white hover:bg-red-900 transition-all duration-300 font-sans uppercase tracking-widest text-sm font-bold shadow-lg shadow-black/30"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 z-20 text-white/70 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};