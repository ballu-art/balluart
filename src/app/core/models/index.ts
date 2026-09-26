export interface Theme {
  isDark: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Backend' | 'Frontend' | 'Database' | 'Cloud' | 'Messaging';
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Architecture {
  name: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge?: string;
}

export interface Testimonial {
  author: string;
  position: string;
  company: string;
  text: string;
  image?: string;
  rating: number;
}

export interface Statistic {
  value: number;
  label: string;
  suffix?: string;
}

export interface ContentLink {
  title: string;
  description: string;
  category: string;
  date: string;
  link?: string;
}
