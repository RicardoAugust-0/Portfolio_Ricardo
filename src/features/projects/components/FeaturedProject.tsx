import { motion } from 'framer-motion';
import { Sparkles, Code, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../shared/components/ui/card';
import { Badge } from '../../../shared/components/ui/badge';

interface FeaturedProjectProps {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  link?: string;
  variants?: any;
}

export function FeaturedProject({
  title,
  description,
  longDescription,
  tags,
  github,
  link,
  variants,
}: FeaturedProjectProps) {
  return (
    <motion.div variants={variants} className="col-span-full md:col-span-2 lg:col-span-3">
      <Card className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 border-primary/30 bg-gradient-subtle group">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Featured</span>
          </div>
          <CardTitle className="text-2xl mt-2">{title}</CardTitle>
          <CardDescription className="text-base mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{longDescription}</p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="default">
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
                className="flex-1 px-4 py-2.5 rounded-lg bg-secondary/60 hover:bg-primary/80 text-foreground hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm border border-primary/20 hover:border-primary/50"
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
                className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50"
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
