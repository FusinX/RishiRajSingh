import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Film } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate heavy asset loading for a cinematic feel
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center text-gold">
        <div className="animate-spin-slow mb-4">
           <Film size={64} />
        </div>
        <h1 className="font-display text-2xl tracking-[0.5em] animate-pulse">RISHI RAJ SINGH</h1>
        <p className="font-sans text-xs uppercase tracking-widest mt-2 text-cream/60">Portfolio Loading</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;