import type { Education } from '../types';

export const education: Education[] = [
  {
    id: 'fatec-paulinia',
    institution: 'FATEC Paulínia',
    course: 'Análise e Desenvolvimento de Sistemas',
    level: 'technician',
    status: 'in-progress',
    startYear: 2023,
  },
];

export const certifications: Education[] = [
  {
    id: 'az-500',
    institution: 'Microsoft',
    course: 'Azure Security Engineer Associate (AZ-500)',
    level: 'certification',
    status: 'completed',
    startYear: 2024,
    endYear: 2024,
  },
  {
    id: 'javascript-professional',
    institution: 'JavaScript Institute',
    course: 'JavaScript Professional Certification',
    level: 'certification',
    status: 'completed',
    startYear: 2023,
    endYear: 2023,
  },
];

export const allEducation = [...education, ...certifications];
