import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const photos = [
  { id: 1, src: 'https://picsum.photos/seed/actor1/800/1200', category: 'Headshot', span: 'row-span-2' },
  { id: 2, src: 'https://picsum.photos/seed/actor2/800/600', category: 'Stills', span: 'row-span-1' },
  { id: 3, src: 'https://picsum.photos/seed/actor3/800/800', category: 'BTS', span: 'row-span-1' },
  { id: 4, src: 'https://picsum.photos/seed/actor4/800/1000', category: 'Fashion', span: 'row-span-2' },
  { id: 5, src: 'https://picsum.photos/seed/actor5/800/600', category: 'Character', span: 'row-span-1' },
  { id: 6, src: 'https://picsum.photos/seed/actor6/800/800', category: 'Stills', span: 'row-span-1' },
];

export const Gallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
           <h2 className="text-accent font-sans uppercase tracking-widest text-sm font-bold mb-2">Visuals</h2>
           <h3 className="text-4xl font-display font-bold text-white">Portfolio</h3>
        </motion.div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-sm cursor-pointer ${photo.span}`}
              onClick={() => setSelectedId(photo.id)}
            >
              <img 
                src={photo.src} 
                alt={photo.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="text-white mb-2" size={32} />
                <span className="text-white font-sans uppercase tracking-widest text-sm">{photo.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedId(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedId(null)}
            >
              <X size={40} />
            </button>
            
            <motion.img
              layoutId={`img-${selectedId}`}
              src={photos.find(p => p.id === selectedId)?.src}
              alt="Portfolio Fullscreen"
              className="max-h-[90vh] max-w-[90vw] object-contain border-4 border-charcoal shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};