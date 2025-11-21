import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Sword, Laugh, Theater, Languages, Dumbbell, Film } from 'lucide-react';
import { Skill } from '../types';

const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Acting Styles",
    items: [
      { name: "Method Acting", level: 90, icon: <Theater /> },
      { name: "Improvisation", level: 85, icon: <Laugh /> },
      { name: "Screen Acting", level: 95, icon: <Film /> },
    ]
  },
  {
    category: "Special Skills",
    items: [
      { name: "Voice Modulation", level: 80, icon: <Mic2 /> },
      { name: "Action / Stunts", level: 75, icon: <Sword /> },
      { name: "Martial Arts", level: 70, icon: <Dumbbell /> },
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "Hindi (Native)", level: 100, icon: <Languages /> },
      { name: "English (Fluent)", level: 95, icon: <Languages /> },
      { name: "Punjabi (Conversational)", level: 80, icon: <Languages /> },
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-charcoal text-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent font-sans uppercase tracking-widest text-sm font-bold mb-2">Repertoire</h2>
          <h3 className="text-4xl font-display font-bold text-white">Skills & Specializations</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <h4 className="text-2xl font-display text-gold mb-6 text-center border-b border-white/10 pb-4">{category.category}</h4>
              <div className="space-y-6">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center gap-2 text-lg font-light">
                        <span className="text-primary group-hover:text-accent transition-colors">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-red-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};