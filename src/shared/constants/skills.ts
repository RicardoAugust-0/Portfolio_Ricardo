import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'expert',
    icon: 'react',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
    icon: 'typescript',
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    category: 'frontend',
    level: 'expert',
    icon: 'tailwindcss',
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'frontend',
    level: 'advanced',
    icon: 'motion',
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    level: 'advanced',
    icon: 'vite',
  },

  // Backend
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    level: 'advanced',
    icon: 'nestjs',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'expert',
    icon: 'nodejs',
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 'advanced',
    icon: 'express',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'backend',
    level: 'advanced',
    icon: 'postgresql',
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'backend',
    level: 'advanced',
    icon: 'supabase',
  },

  // Cloud & Security
  {
    id: 'azure',
    name: 'Azure (AZ-500)',
    category: 'cloud',
    level: 'advanced',
    icon: 'azure',
  },
  {
    id: 'iam',
    name: 'IAM & Entra ID',
    category: 'security',
    level: 'advanced',
    icon: 'shield',
  },
  {
    id: 'oauth',
    name: 'OAuth 2.0 / JWT',
    category: 'security',
    level: 'advanced',
    icon: 'lock',
  },
  {
    id: 'encryption',
    name: 'Encryption & Hashing',
    category: 'security',
    level: 'intermediate',
    icon: 'key',
  },
  {
    id: 'network-security',
    name: 'Network Security',
    category: 'security',
    level: 'intermediate',
    icon: 'network',
  },

  // DevOps & Infra
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 'expert',
    icon: 'docker',
  },
  {
    id: 'linux',
    name: 'Linux (EndeavourOS)',
    category: 'infra',
    level: 'advanced',
    icon: 'linux',
  },
  {
    id: 'cicd',
    name: 'CI/CD Pipelines',
    category: 'devops',
    level: 'advanced',
    icon: 'rocket',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'infra',
    level: 'intermediate',
    icon: 'kubernetes',
  },

  // AI & Generativa
  {
    id: 'claude-api',
    name: 'Claude API',
    category: 'ai',
    level: 'advanced',
    icon: 'sparkles',
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'ai',
    level: 'advanced',
    icon: 'brain',
  },
  {
    id: 'rag',
    name: 'RAG (Retrieval Augmented Generation)',
    category: 'ai',
    level: 'intermediate',
    icon: 'database',
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 'expert',
    icon: 'git',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools',
    level: 'expert',
    icon: 'code',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tools',
    level: 'intermediate',
    icon: 'design',
  },
];

export const skillsByCategory = {
  frontend: skills.filter((s) => s.category === 'frontend'),
  backend: skills.filter((s) => s.category === 'backend'),
  cloud: skills.filter((s) => s.category === 'cloud'),
  security: skills.filter((s) => s.category === 'security'),
  devops: skills.filter((s) => s.category === 'devops'),
  infra: skills.filter((s) => s.category === 'infra'),
  ai: skills.filter((s) => s.category === 'ai'),
  tools: skills.filter((s) => s.category === 'tools'),
};
