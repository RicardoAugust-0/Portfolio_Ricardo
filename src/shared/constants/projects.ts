import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'nexus',
    title: 'Project Nexus',
    description: 'SaaS Multi-tenant com lógica complexa de negócios',
    longDescription: `Plataforma SaaS Multi-tenant construída com Vite, React, NestJS e Supabase.
Implementei isolamento de dados por tenant com Row Level Security (RLS),
API escalável em NestJS com autenticação JWT, e dashboard com analytics em tempo real.
Foco em arquitetura escalável e segurança de dados.`,
    tags: ['Vite', 'React 19', 'NestJS', 'Supabase', 'PostgreSQL', 'TypeScript', 'WebSocket'],
    technologies: [
      { name: 'Vite', icon: 'vite' },
      { name: 'React', icon: 'react' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'PostgreSQL', icon: 'database' },
    ],
    github: 'https://github.com/rponeconsultoria/nexus-project',
    link: 'https://rpone-nexus.com.br',
    featured: true,
    complexity: 'senior',
  },
  {
    id: 'moovox',
    title: 'Moovox',
    description: 'Plataforma de análise e visualização de dados de movimentação',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Chart.js'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'TailwindCSS', icon: 'tailwindcss' },
    ],
    github: 'https://github.com/Moovox/moovox',
    link: 'https://moovox.systems',
    featured: false,
    complexity: 'mid-level',
  },
  {
    id: 'api-rest',
    title: 'API REST Escalável',
    description: 'API REST com autenticação, validação e rate limiting',
    tags: ['NestJS', 'PostgreSQL', 'Docker', 'JWT'],
    technologies: [
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'Docker', icon: 'docker' },
    ],
    github: 'https://github.com/RicardoAugust-0/API_REST_orders-products_management',
    featured: false,
    complexity: 'mid-level',
  },
];
