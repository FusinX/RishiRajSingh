import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="font-display text-2xl font-bold tracking-widest mb-2">
            RISHI <span className="text-gold">RAJ</span> SINGH
          </h2>
          <p className="text-gray-400 text-sm font-sans">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        <div className="flex flex-col items-center md:items-end">
           <div className="flex gap-6 mb-4 text-sm font-sans uppercase tracking-wider text-gray-400">
             <a href="#about" className="hover:text-gold transition-colors">About</a>
             <a href="#work" className="hover:text-gold transition-colors">Works</a>
             <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
           </div>
           <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors"
           >
            Back to Top
            <div className="p-2 border border-gold rounded-full group-hover:bg-gold group-hover:text-primary transition-all">
                <ArrowUp size={14} />
            </div>
           </button>
        </div>
      </div>
    </footer>
  );
};