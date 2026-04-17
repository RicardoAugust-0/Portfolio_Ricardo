import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'crzengenharia',
    company: 'CRZ Engenharia',
    role: 'Developer Full-Stack',
    period: {
      start: new Date('2023-01-01'),
      end: new Date('2024-06-30'),
    },
    description:
      'Desenvolvimento de soluções web e mobile utilizando React, React Native e Node.js. Implementação de arquiteturas escaláveis e otimização de performance.',
    technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Docker'],
    achievements: [
      'Implementou sistema de gerenciamento de projetos com React e NestJS',
      'Otimizou queries de banco de dados, reduzindo tempo de resposta em 60%',
      'Containerizou aplicações com Docker e implementou CI/CD com GitHub Actions',
    ],
  },
  {
    id: 'mednet',
    company: 'MedNet Soluções',
    role: 'Developer Full-Stack',
    period: {
      start: new Date('2022-06-01'),
      end: new Date('2022-12-31'),
    },
    description:
      'Desenvolvimento de plataforma SAAS para gestão médica. Foco em segurança de dados e conformidade LGPD.',
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Supabase', 'TypeScript'],
    achievements: [
      'Construiu API REST escalável com NestJS seguindo princípios SOLID',
      'Implementou autenticação com JWT e Row Level Security em PostgreSQL',
      'Desenvolvimento de dashboard com relatórios e analytics em tempo real',
    ],
  },
  {
    id: 'transportes-cavalinho',
    company: 'Transportes Cavalinho',
    role: 'Developer Web',
    period: {
      start: new Date('2021-03-01'),
      end: new Date('2022-05-31'),
    },
    description:
      'Desenvolvimento de portal de gerenciamento de frotas. Implementação de sistema de rastreamento e otimização de rotas.',
    technologies: ['React', 'JavaScript', 'Firebase', 'Material-UI'],
    achievements: [
      'Desenvolveu aplicação web de rastreamento em tempo real',
      'Implementou system de notificações e alertas',
      'Melhorou performance da aplicação em 40%',
    ],
  },
];
