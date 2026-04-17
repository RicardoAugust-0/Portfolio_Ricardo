import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../../../shared/constants/experiences';
import { ExperienceCard } from './ExperienceCard';

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVars = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const headerVars = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Experience() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-12"
      id="experiencia"
    >
      <motion.div variants={headerVars} className="flex items-center gap-2 mb-8">
        <Briefcase className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Experiência Profissional</h2>
      </motion.div>

      <motion.div variants={containerVars} className="space-y-8 pl-4 border-l-2 border-primary/20">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            role={exp.role}
            company={exp.company}
            period={`${exp.period.start.toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'short',
            })} - ${
              exp.period.end
                ? exp.period.end.toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'short',
                  })
                : 'Atual'
            }`}
            activities={exp.achievements}
            variants={itemVars}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
