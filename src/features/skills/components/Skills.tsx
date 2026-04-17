import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsByCategory } from '../../../shared/constants/skills';
import { SkillCategory } from './SkillCategory';

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVars = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const headerVars = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  const skillCategories = [
    { name: 'Frontend', skills: skillsByCategory.frontend.map((s) => s.name) },
    { name: 'Backend', skills: skillsByCategory.backend.map((s) => s.name) },
    { name: 'Cloud & Security', skills: [...skillsByCategory.cloud, ...skillsByCategory.security].map((s) => s.name) },
    { name: 'DevOps & Infra', skills: [...skillsByCategory.devops, ...skillsByCategory.infra].map((s) => s.name) },
    { name: 'AI & Generativa', skills: skillsByCategory.ai.map((s) => s.name) },
    { name: 'Ferramentas', skills: skillsByCategory.tools.map((s) => s.name) },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-12"
      id="habilidades"
    >
      <motion.div variants={headerVars} className="flex items-center gap-2 mb-8">
        <CheckCircle2 className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Habilidades Técnicas</h2>
      </motion.div>

      <motion.div variants={containerVars} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.name}
            category={category.name}
            items={category.skills}
            variants={cardVars}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
