import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Phone, Mail, Instagram, Youtube, Facebook, 
  MapPin, Download, Play, ChevronRight, Star, Film
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, GALLERY, TESTIMONIALS } from './constants';
import { Project, Photo } from './types';

// --- UI Components ---

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16" data-aos="fade-up">
    <h2 className="font-serif text-4xl md:text-5xl text-burgundy-800 font-bold mb-4 inline-block relative">
      {title}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-500 rounded-full"></span>
    </h2>
    {subtitle && <p className="text-charcoal/70 font-sans mt-4 max-w-2xl mx-auto italic">{subtitle}</p>}
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  onClick,
  href,
  type = 'button'
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'outline'; 
  icon?: React.ElementType;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 font-sans font-semibold tracking-wide transition-all duration-300 rounded-sm transform hover:-translate-y-1";
  const variants = {
    primary: "bg-burgundy-800 text-white hover:bg-burgundy-900 shadow-lg hover:shadow-gold-500/20 border-2 border-burgundy-800",
    outline: "bg-transparent text-burgundy-800 border-2 border-burgundy-800 hover:bg-burgundy-800 hover:text-white"
  };

  const content = (
    <>
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {content}
    </button>
  );
};

// --- Main App Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { scrollY } = useScroll();
  
  // Parallax Effects
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  // Form State
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Scroll to section handler
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const filteredGallery = activeFilter === 'All' 
    ? GALLERY 
    : GALLERY.filter(photo => photo.category === activeFilter);

  return (
    <div className="bg-cream-50 overflow-x-hidden w-full">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-cream-50/90 backdrop-blur-md shadow-md border-b border-gold-500/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold text-burgundy-800 tracking-wider">
            RISHI RAJ <span className="text-gold-600">SINGH</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Work', 'Gallery', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="font-sans text-charcoal hover:text-burgundy-800 uppercase text-sm tracking-widest font-semibold transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-burgundy-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-burgundy-900 text-cream-50 border-t border-gold-500"
            >
              <div className="flex flex-col p-6 space-y-4">
                {['About', 'Skills', 'Work', 'Gallery', 'Contact'].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left text-lg uppercase tracking-widest hover:text-gold-400"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/80 via-transparent to-transparent z-10"></div>
          {/* Simulating a Cinematic Background Image */}
          <img 
            src="https://picsum.photos/id/433/1920/1080" 
            alt="Rishi Raj Singh Hero" 
            className="w-full h-full object-cover object-center scale-105"
          />
        </motion.div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4 text-shadow">
              RISHI RAJ <span className="text-gold-400 block md:inline">SINGH</span>
            </h1>
            <div className="h-1 w-32 bg-gold-500 mx-auto mb-6"></div>
            <p className="font-sans text-lg md:text-2xl text-cream-100 tracking-[0.3em] uppercase mb-10 text-shadow-gold">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
               <Button onClick={() => scrollTo('work')} variant="primary" icon={Play}>View Showreel</Button>
               <Button onClick={() => scrollTo('contact')} variant="outline">Contact Me</Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400 to-transparent mx-auto"></div>
        </motion.div>
      </header>

      {/* --- About Section --- */}
      <section id="about" className="py-20 md:py-32 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-500 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold-500 z-0"></div>
            <img 
              src="https://picsum.photos/id/338/800/1000" 
              alt="Rishi Portrait" 
              className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-burgundy-800 font-bold mb-8">
              About The Artist
            </h2>
            <p className="font-sans text-lg text-charcoal/80 leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 font-sans">
              <div>
                <span className="block text-xs uppercase tracking-widest text-burgundy-800 font-bold">Age</span>
                <span className="text-xl">{PERSONAL_INFO.age}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-burgundy-800 font-bold">Location</span>
                <span className="text-xl">{PERSONAL_INFO.location}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-burgundy-800 font-bold">Height</span>
                <span className="text-xl">{PERSONAL_INFO.height}</span>
              </div>
              <div>
                 <span className="block text-xs uppercase tracking-widest text-burgundy-800 font-bold">Nationality</span>
                 <span className="text-xl">Indian</span>
              </div>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gold-500/30 pt-8">
              {PERSONAL_INFO.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="block text-3xl font-serif font-bold text-gold-600">{stat.value}{stat.suffix}</span>
                  <span className="text-xs uppercase tracking-wider text-charcoal/60">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-20 bg-burgundy-900 text-cream-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute top-10 right-10 w-64 h-64 bg-gold-500 rounded-full blur-3xl"></div>
           <div className="absolute bottom-10 left-10 w-96 h-96 bg-burgundy-800 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading title="Craft & Capabilities" subtitle="A diverse range of skills honed for screen and stage." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skillSet, idx) => {
              const Icon = skillSet.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-burgundy-800/50 backdrop-blur-sm p-6 border border-gold-500/20 hover:border-gold-500/60 transition-colors group rounded-sm"
                >
                  <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 text-gold-400 group-hover:text-gold-500 group-hover:scale-110 transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4 text-gold-100">{skillSet.category}</h3>
                  <ul className="space-y-2">
                    {skillSet.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-cream-100/80 font-sans">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Work / Filmography --- */}
      <section id="work" className="py-20 md:py-32 container mx-auto px-6">
        <SectionHeading title="Selected Works" subtitle="Highlights from film, television, and theater." />

        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gold-500/30"></div>

          <div className="space-y-12 md:space-y-24">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Card */}
                <div className="w-full md:w-1/2 group cursor-pointer overflow-hidden shadow-xl border-4 border-white relative">
                  <div className="absolute inset-0 bg-burgundy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <Play className="text-white w-16 h-16 drop-shadow-lg" />
                  </div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <div className="inline-block px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-bold uppercase tracking-widest mb-2 rounded-full">
                    {project.type}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-burgundy-800 mb-2">{project.title}</h3>
                  <p className="text-lg font-bold text-charcoal mb-1">{project.role}</p>
                  <p className="text-sm text-charcoal/60 italic mb-4">{project.year} • {project.platform || 'Production'}</p>
                  <p className="text-charcoal/80 leading-relaxed max-w-md mx-auto md:mx-0 ml-auto">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Showreel Section --- */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <Film className="w-12 h-12 mx-auto mb-4 text-gold-500" />
          <h2 className="font-serif text-4xl font-bold mb-8">Showreel</h2>
          <div className="w-full max-w-4xl mx-auto aspect-video bg-black rounded-sm shadow-2xl border border-gold-500/30 flex items-center justify-center relative overflow-hidden group cursor-pointer">
             {/* Placeholder for Embed */}
             <img src="https://picsum.photos/id/449/1200/800" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Showreel cover"/>
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center pl-1 mb-4 hover:scale-110 transition-transform shadow-lg shadow-gold-500/50">
                   <Play className="w-10 h-10 text-burgundy-900 fill-current" />
                </div>
                <p className="uppercase tracking-widest text-sm font-bold">Watch Acting Reel (2:30)</p>
             </div>
          </div>
          <div className="mt-8">
            <button className="text-gold-400 hover:text-white transition-colors flex items-center mx-auto text-sm uppercase tracking-widest font-bold border-b border-transparent hover:border-gold-400 pb-1">
              <Download className="w-4 h-4 mr-2" /> Download Showreel
            </button>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title="Portfolio" subtitle="Capturing emotions, one frame at a time." />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Headshot', 'Still', 'BTS'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 rounded-full border ${
                  activeFilter === filter 
                    ? 'bg-burgundy-800 text-white border-burgundy-800' 
                    : 'bg-transparent text-charcoal border-charcoal/20 hover:border-burgundy-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Grid (CSS Columns) */}
          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredGallery.map((photo) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={photo.id}
                  className="break-inside-avoid"
                >
                  <div 
                    className="relative group overflow-hidden cursor-pointer rounded-sm shadow-md hover:shadow-xl transition-shadow"
                    onClick={() => setLightboxPhoto(photo)}
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.description} 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <p className="text-gold-400 text-xs uppercase tracking-wider font-bold mb-1">{photo.category}</p>
                        <p className="text-white font-serif text-lg leading-tight">{photo.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Star className="w-8 h-8 text-gold-500 mx-auto mb-6 fill-current" />
          <h2 className="font-serif text-3xl text-burgundy-800 mb-12 font-bold italic">What They Say</h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex flex-col gap-12">
                 {TESTIMONIALS.map((t) => (
                   <div key={t.id} className="px-4">
                      <p className="text-xl md:text-2xl font-serif text-charcoal italic mb-6 leading-relaxed">"{t.quote}"</p>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-burgundy-800 rounded-full text-white flex items-center justify-center font-bold font-serif text-xl mb-2">
                          {t.author.charAt(0)}
                        </div>
                        <h4 className="font-bold text-burgundy-800 uppercase tracking-wider text-sm">{t.author}</h4>
                        <p className="text-xs text-charcoal/60">{t.role}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 md:py-32 bg-burgundy-900 text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16">
             {/* Contact Info */}
             <div>
               <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Let's Create <br/><span className="text-gold-500">Something Magic.</span></h2>
               <p className="text-cream-100/80 text-lg mb-12 font-sans leading-relaxed">
                 Currently open for feature films, web series, and commercial projects. 
                 Based in Mumbai, available to travel.
               </p>

               <div className="space-y-6">
                 <div className="flex items-start">
                   <div className="bg-gold-500/20 p-3 rounded-full mr-4 text-gold-400">
                     <MapPin />
                   </div>
                   <div>
                     <h4 className="uppercase text-xs tracking-widest font-bold text-gold-500 mb-1">Location</h4>
                     <p className="text-xl font-serif">{PERSONAL_INFO.location}</p>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <div className="bg-gold-500/20 p-3 rounded-full mr-4 text-gold-400">
                     <Mail />
                   </div>
                   <div>
                     <h4 className="uppercase text-xs tracking-widest font-bold text-gold-500 mb-1">Email</h4>
                     <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl font-serif hover:text-gold-400 transition-colors">{PERSONAL_INFO.email}</a>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <div className="bg-gold-500/20 p-3 rounded-full mr-4 text-gold-400">
                     <Phone />
                   </div>
                   <div>
                     <h4 className="uppercase text-xs tracking-widest font-bold text-gold-500 mb-1">Phone</h4>
                     <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xl font-serif hover:text-gold-400 transition-colors">{PERSONAL_INFO.phone}</a>
                   </div>
                 </div>
               </div>

               <div className="mt-12">
                 <h4 className="uppercase text-xs tracking-widest font-bold text-gold-500 mb-4">Follow Me</h4>
                 <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gold-500 hover:text-burgundy-900 transition-all"><Instagram size={20}/></a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gold-500 hover:text-burgundy-900 transition-all"><Facebook size={20}/></a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gold-500 hover:text-burgundy-900 transition-all"><Youtube size={20}/></a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gold-500 hover:text-burgundy-900 transition-all"><span className="font-bold text-sm">IMDb</span></a>
                 </div>
               </div>
             </div>

             {/* Contact Form */}
             <div className="bg-white p-8 rounded-sm shadow-2xl">
               <h3 className="text-burgundy-800 font-serif text-2xl font-bold mb-6">Send a Message</h3>
               
               {formStatus === 'success' ? (
                 <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded text-center">
                   <p className="font-bold text-xl mb-2">Message Sent!</p>
                   <p>Thank you for reaching out. I will get back to you shortly.</p>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-charcoal tracking-wider">Name</label>
                        <input type="text" required className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-charcoal focus:outline-none focus:border-burgundy-800 transition-colors" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-charcoal tracking-wider">Phone</label>
                        <input type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-charcoal focus:outline-none focus:border-burgundy-800 transition-colors" placeholder="Your Phone" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-charcoal tracking-wider">Email</label>
                      <input type="email" required className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-charcoal focus:outline-none focus:border-burgundy-800 transition-colors" placeholder="your@email.com" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-charcoal tracking-wider">Project Details</label>
                      <textarea required rows={4} className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-charcoal focus:outline-none focus:border-burgundy-800 transition-colors resize-none" placeholder="Tell me about the project..."></textarea>
                   </div>
                   <Button 
                    type="submit" 
                    variant="primary" 
                    icon={ChevronRight}
                   >
                     {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                   </Button>
                 </form>
               )}
             </div>
           </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-burgundy-900 text-cream-50/40 py-8 border-t border-white/10 text-center text-sm font-sans">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Rishi Raj Singh. All Rights Reserved.</p>
          <p className="mt-2 text-xs">Designed with cinematic passion.</p>
        </div>
      </footer>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxPhoto(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white">
              <X size={40} />
            </button>
            <div className="max-w-4xl max-h-full overflow-auto text-center" onClick={e => e.stopPropagation()}>
              <img 
                src={lightboxPhoto.url} 
                alt={lightboxPhoto.description} 
                className="max-h-[80vh] mx-auto mb-4 shadow-2xl border border-white/10"
              />
              <h3 className="text-gold-500 font-serif text-2xl">{lightboxPhoto.description}</h3>
              <p className="text-white/60 uppercase text-sm tracking-widest mt-2">{lightboxPhoto.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
