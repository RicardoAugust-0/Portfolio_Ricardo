import type { Certification, Stat } from '../types';

export const certifications: Certification[] = [
  {
    id: 'az-500',
    name: 'Azure Security Engineer Associate',
    issuer: 'Microsoft',
    description: 'Especialista em segurança em Azure, IAM, compliance e proteção de dados',
    validUntil: '2027-06-15',
    credentialUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/',
    icon: 'shield-check',
    color: 'blue',
  },
  {
    id: 'typescript-professional',
    name: 'TypeScript Professional',
    issuer: 'JavaScript Institute',
    description: 'Proficiency em TypeScript avançado, tipos complexos e padrões arquiteturais',
    validUntil: '2025-12-31',
    icon: 'brackets',
    color: 'cyan',
  },
];

export const stats: Stat[] = [
  {
    id: 'experience',
    label: 'Anos de Experiência',
    value: 3,
    icon: 'briefcase',
    suffix: '+',
  },
  {
    id: 'projects',
    label: 'Projetos Concluídos',
    value: 12,
    icon: 'code',
    suffix: '+',
  },
  {
    id: 'saas',
    label: 'Plataformas SaaS',
    value: 3,
    icon: 'cloud',
    suffix: '',
  },
  {
    id: 'technologies',
    label: 'Tecnologias',
    value: 25,
    icon: 'zap',
    suffix: '+',
  },
];
