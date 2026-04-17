import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../../../shared/constants/projects';
import { ProjectCard } from './ProjectCard';
import { FeaturedProject } from './FeaturedProject';

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-12"
      id="projetos"
    >
      <motion.div variants={itemVars} className="flex items-center gap-2 mb-8">
        <Code2 className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Projetos em Destaque</h2>
      </motion.div>

      <motion.div variants={containerVars} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Featured Project */}
        {featuredProject && (
          <FeaturedProject
            title={featuredProject.title}
            description={featuredProject.description}
            longDescription={featuredProject.longDescription || ''}
            tags={featuredProject.tags}
            variants={itemVars}
          />
        )}

        {/* Regular Projects Grid */}
        {regularProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            variants={itemVars}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
