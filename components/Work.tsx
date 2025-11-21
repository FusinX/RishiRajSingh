import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "The Last Local",
    role: "Arjun (Lead)",
    year: "2023",
    type: "Film",
    description: "A gritty drama about a young man navigating the chaotic underworld of Mumbai's railway system.",
    image: "https://picsum.photos/seed/movie1/600/800"
  },
  {
    id: 2,
    title: "Silent Echoes",
    role: "Inspector Vikram",
    year: "2022",
    type: "Web Series",
    description: "Investigating a series of cold cases in a hill station. Character required intense emotional range.",
    image: "https://picsum.photos/seed/movie2/600/800"
  },
  {
    id: 3,
    title: "Masala Dreams",
    role: "Rahul (Supporting)",
    year: "2022",
    type: "Commercial",
    description: "National TVC for a leading spice brand. High energy, comic timing.",
    image: "https://picsum.photos/seed/movie3/600/800"
  },
];

export const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Film' | 'Web Series' | 'Commercial'>('All');

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.type === activeTab);

  return (
    <section id="work" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Showreel Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-primary font-sans uppercase tracking-widest text-sm font-bold mb-2">Performance</h2>
            <h3 className="text-4xl font-display font-bold text-charcoal">Showreel</h3>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video max-w-5xl mx-auto bg-black shadow-2xl border-4 border-double border-gold rounded-lg overflow-hidden group cursor-pointer"
          >
            {/* Placeholder for Video Embed - In production, replace with actual iframe or video tag */}
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors shadow-[0_0_30px_rgba(139,0,0,0.5)]">
                        <Play className="text-white ml-2" size={40} fill="white" />
                    </div>
                    <p className="text-white/50 font-sans tracking-widest uppercase text-sm">Watch Performance Reel (2:30)</p>
                </div>
            </div>
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Filmography Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-3xl font-display font-bold text-charcoal">Selected Works</h3>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0">
              {['All', 'Film', 'Web Series', 'Commercial'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-2 text-sm font-sans uppercase tracking-wider transition-all ${
                    activeTab === tab 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-gray-500 hover:text-primary bg-transparent'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute top-4 right-4 bg-gold text-primary text-xs font-bold px-2 py-1 z-10 uppercase tracking-wide">
                    {project.type}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter sepia-[.2] group-hover:sepia-0"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <button className="text-white border border-white px-6 py-2 hover:bg-white hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest text-xs font-bold">
                        View Project <ExternalLink size={14} />
                     </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-display font-bold text-charcoal group-hover:text-primary transition-colors">{project.title}</h4>
                    <span className="text-gray-400 font-serif italic">{project.year}</span>
                  </div>
                  <p className="text-accent font-medium text-sm mb-3">{project.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};