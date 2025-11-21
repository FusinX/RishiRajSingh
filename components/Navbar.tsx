import React, { useState, useEffect } from 'react';
import { Menu, X, Film } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Filmography', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="group flex items-center space-x-2">
          <Film className={`h-6 w-6 ${isScrolled ? 'text-gold' : 'text-cream'} transition-colors`} />
          <span
            className={`font-display text-2xl font-bold tracking-widest uppercase ${
              isScrolled ? 'text-cream' : 'text-white'
            }`}
          >
            Rishi<span className={isScrolled ? 'text-gold' : 'text-accent'}>Raj</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm uppercase tracking-wider font-medium transition-colors duration-300 relative group ${
                isScrolled ? 'text-cream hover:text-gold' : 'text-white hover:text-accent'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isScrolled ? 'text-cream' : 'text-white'} focus:outline-none`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-primary border-t border-gold/20 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-8 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-cream hover:text-gold font-sans uppercase tracking-widest text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};