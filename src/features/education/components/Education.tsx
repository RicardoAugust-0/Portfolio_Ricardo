import { GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { education, certifications } from '../../../shared/constants/education';
import { EducationCard } from './EducationCard';

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const headerVars = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Education() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-12"
      id="educacao"
    >
      <motion.div variants={headerVars} className="flex items-center gap-2 mb-8">
        <GraduationCap className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Formação Acadêmica</h2>
      </motion.div>

      <div className="grid gap-12 md:gap-8 md:grid-cols-2">
        {/* Formal Education */}
        <motion.div variants={containerVars} className="space-y-6">
          <motion.h3 variants={itemVars} className="text-lg font-semibold flex items-center gap-2 text-muted-foreground pb-2 border-b">
            <BookOpen className="h-5 w-5 text-primary/70" /> Educação Formal
          </motion.h3>
          <ul className="space-y-6">
            {education.map((edu) => (
              <EducationCard
                key={edu.id}
                course={edu.course}
                institution={edu.institution}
                period={edu.status === 'in-progress' ? 'Cursando' : `${edu.startYear} - ${edu.endYear}`}
                variants={itemVars}
              />
            ))}
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={containerVars} className="space-y-6">
          <motion.h3 variants={itemVars} className="text-lg font-semibold flex items-center gap-2 text-muted-foreground pb-2 border-b">
            <BookOpen className="h-5 w-5 text-primary/70" /> Certificações
          </motion.h3>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <motion.li
                variants={itemVars}
                key={cert.id}
                className="flex justify-between items-start gap-4 text-sm group p-3 hover:bg-muted/50 rounded-lg transition-colors border border-transparent hover:border-border -mx-3"
              >
                <span className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {cert.course}
                  <span className="block text-muted-foreground font-medium mt-0.5">{cert.institution}</span>
                </span>
                <span className="whitespace-nowrap text-muted-foreground bg-muted px-2 py-1 rounded-md font-medium">
                  {cert.endYear || cert.startYear}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
