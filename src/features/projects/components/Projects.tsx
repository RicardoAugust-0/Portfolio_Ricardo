import { useState, useMemo } from 'react';
import { Code2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }
    return projects.filter((project) =>
      selectedTags.some((tag) => project.tags.includes(tag))
    );
  }, [selectedTags]);

  const featuredProject = filteredProjects.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

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

      {/* Filter Tags */}
      <motion.div variants={itemVars} className="mb-8 pb-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-muted-foreground">Filtrar por tecnologia:</p>
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              <X className="h-3 w-3" />
              Limpar filtros
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <AnimatePresence mode="wait">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'bg-secondary/50 text-foreground hover:bg-secondary border border-border'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Results count */}
      {selectedTags.length > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-muted-foreground mb-6"
        >
          Mostrando {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} com{' '}
          {selectedTags.join(', ')}
        </motion.p>
      )}

      <motion.div variants={containerVars} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {/* Featured Project */}
          {featuredProject && (
            <FeaturedProject
              key={featuredProject.id}
              title={featuredProject.title}
              description={featuredProject.description}
              longDescription={featuredProject.longDescription || ''}
              tags={featuredProject.tags}
              github={featuredProject.github}
              link={featuredProject.link}
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
              github={project.github}
              link={project.link}
              variants={itemVars}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">Nenhum projeto encontrado com os filtros selecionados.</p>
          <button
            onClick={clearFilters}
            className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Limpar filtros
          </button>
        </motion.div>
      )}
    </motion.section>
  );
}
