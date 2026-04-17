import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../../shared/components/ui/card';
import { Badge } from '../../../shared/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  variants?: any;
}

export function ProjectCard({ title, description, tags, github, link, variants }: ProjectCardProps) {
  return (
    <motion.div variants={variants} className="h-full">
      <Card className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 group">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-base text-muted-foreground/90">{description}</p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Project Links */}
          <div className="w-full flex gap-2 pt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                title="Ver código no GitHub"
                className="flex-1 px-4 py-2.5 rounded-lg bg-secondary/60 hover:bg-primary/80 text-foreground hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm border border-primary/20 hover:border-primary/50 group/link"
              >
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
                <span className="sm:hidden">Code</span>
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                title="Abrir demonstração"
                className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 group/link"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
