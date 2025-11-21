export interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  type: 'Film' | 'Web Series' | 'TV' | 'Theater' | 'Commercial';
  description: string;
  platform?: string;
  imageUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: React.ElementType;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export interface Photo {
  id: number;
  url: string;
  category: 'Headshot' | 'Still' | 'BTS';
  description: string;
}