import React from 'react';

export interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  type: 'Film' | 'Web Series' | 'TV' | 'Theatre' | 'Commercial';
  description: string;
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}