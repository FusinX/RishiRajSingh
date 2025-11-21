import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Youtube, Send } from 'lucide-react';
import { ContactForm } from '../types';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Casting',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', phone: '', projectType: 'Casting', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-primary font-sans uppercase tracking-widest text-sm font-bold mb-2">Get in Touch</h2>
            <h3 className="text-5xl font-display font-bold text-charcoal mb-8">Let's Create <br/><span className="text-accent">Magic Together</span></h3>
            <p className="text-gray-600 text-lg mb-12 font-light">
              Available for Feature Films, Web Series, TV Commercials, and Theatre Productions. 
              Based in Mumbai, open to travel globally.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1">Email</h4>
                  <a href="mailto:rishirajsingh2210@gmail.com" className="text-gray-600 hover:text-primary transition-colors">rishirajsingh2210@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1">Phone</h4>
                  <a href="tel:+918250902608" className="text-gray-600 hover:text-primary transition-colors">+91 8250902608</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-sans uppercase tracking-widest text-sm font-bold text-gray-400 mb-6">Follow Journey</h4>
              <div className="flex gap-6">
                {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-primary relative"
          >
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6"
                >
                  <Send size={40} />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-charcoal mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-charcoal mb-6">Send a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none py-3 px-2 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none py-3 px-2 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject / Project Type</label>
                  <select 
                    className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none py-3 px-2 transition-colors"
                    value={formState.projectType}
                    onChange={e => setFormState({...formState, projectType: e.target.value})}
                  >
                    <option>Casting Inquiry</option>
                    <option>Collaboration</option>
                    <option>Media / PR</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none py-3 px-2 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 font-sans uppercase tracking-widest font-bold hover:bg-red-900 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send size={16} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};