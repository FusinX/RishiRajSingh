import { 
  Clapperboard, 
  Mic2, 
  Drama, 
  Swords, 
  Music, 
  Globe,
  Smile,
  Camera
} from 'lucide-react';
import { Project, SkillCategory, Testimonial, Photo } from './types';

export const PERSONAL_INFO = {
  name: "Rishi Raj Singh",
  title: "Actor | Performer | Storyteller",
  email: "rishirajsingh2210@gmail.com",
  phone: "+91 8250902608",
  location: "Andheri West, Mumbai",
  age: 27,
  height: "5ft 10in",
  bio: "I am a passionate actor dedicated to the craft of storytelling through performance. With a background deeply rooted in the emotional nuances of Indian cinema and the disciplined technique of theater, I bring authenticity and intensity to every role. My journey is driven by a relentless pursuit of artistic truth, whether portraying a rugged antagonist or a nuanced protagonist.",
  stats: [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 20, suffix: "+" },
    { label: "Stage Performances", value: 50, suffix: "+" },
    { label: "Awards", value: 3, suffix: "" },
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Acting",
    icon: Drama,
    items: ["Method Acting", "Improvisation", "Character Work", "Emotional Recall", "Voice Modulation"]
  },
  {
    category: "Movement & Stunts",
    icon: Swords,
    items: ["Stage Combat", "Basic Stunts", "Contemporary Dance", "Bollywood Dance", "Horse Riding"]
  },
  {
    category: "Languages & Voice",
    icon: Mic2,
    items: ["Hindi (Native)", "English (Fluent)", "Urdu (Fluent)", "Punjabi (Conversational)", "Dubbing"]
  },
  {
    category: "Technical",
    icon: Camera,
    items: ["On-Camera Technique", "Blocking", "Green Screen", "Teleprompter", "Modeling"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Shadows of Mumbai",
    role: "Vikram (Lead Antagonist)",
    year: "2023",
    type: "Web Series",
    platform: "Amazon Prime Video",
    description: "A gritty underworld drama where I played a calculating gang lieutenant. Required intense physical training and dialect coaching.",
    imageUrl: "https://picsum.photos/id/103/800/600"
  },
  {
    id: 2,
    title: "The Last Train",
    role: "Rahul (Supporting)",
    year: "2022",
    type: "Film",
    platform: "Festival Circuit",
    description: "An emotional indie drama about migration. My character provides comic relief amidst a tense narrative.",
    imageUrl: "https://picsum.photos/id/234/800/600"
  },
  {
    id: 3,
    title: "Romeo & Juliet",
    role: "Tybalt",
    year: "2021",
    type: "Theater",
    platform: "Prithvi Theatre",
    description: "A modern adaptation of the classic. Focus on stage combat and classical monologue delivery.",
    imageUrl: "https://picsum.photos/id/338/800/600"
  },
  {
    id: 4,
    title: "Sip of Freshness",
    role: "Lead Model",
    year: "2023",
    type: "Commercial",
    description: "National TVC for a major beverage brand. High energy, smile-centric performance.",
    imageUrl: "https://picsum.photos/id/435/800/600"
  }
];

export const GALLERY: Photo[] = [
  { id: 1, category: 'Headshot', url: 'https://picsum.photos/id/64/800/1200', description: 'Intense Dramatic Look' },
  { id: 2, category: 'Headshot', url: 'https://picsum.photos/id/91/800/1200', description: 'Commercial Smile' },
  { id: 3, category: 'Still', url: 'https://picsum.photos/id/177/1200/800', description: 'Action Sequence - Shadows of Mumbai' },
  { id: 4, category: 'Headshot', url: 'https://picsum.photos/id/338/800/1200', description: 'Character Portrait - Rural' },
  { id: 5, category: 'BTS', url: 'https://picsum.photos/id/433/800/800', description: 'Script Reading Session' },
  { id: 6, category: 'Still', url: 'https://picsum.photos/id/449/1200/800', description: 'Theater Performance - Tybalt' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Rishi brings a raw intensity to the screen that is rare to find. His dedication to character preparation is absolutely commendale.",
    author: "Amit Kumar",
    role: "Director, Shadows of Mumbai"
  },
  {
    id: 2,
    quote: "A versatile performer who takes direction wonderfully but also brings his own unique flavor to every scene.",
    author: "Sarah Jenkins",
    role: "Casting Director"
  }
];
