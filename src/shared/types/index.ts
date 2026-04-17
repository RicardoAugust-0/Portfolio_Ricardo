export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  technologies: Technology[];
  link?: string;
  github?: string;
  image?: string;
  featured: boolean;
  complexity: 'junior' | 'mid-level' | 'senior';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: { start: Date; end?: Date };
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  course: string;
  level: 'technician' | 'bachelor' | 'postgraduate' | 'certification';
  status: 'in-progress' | 'completed';
  startYear: number;
  endYear?: number;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'infra' | 'devops' | 'cloud' | 'security' | 'ai' | 'tools';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
