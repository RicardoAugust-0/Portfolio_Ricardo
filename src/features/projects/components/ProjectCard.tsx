import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../../shared/components/ui/card';
import { Badge } from '../../../shared/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  variants?: any;
}

export function ProjectCard({ title, description, tags, variants }: ProjectCardProps) {
  return (
    <motion.div variants={variants} className="h-full">
      <Card className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
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
        </CardFooter>
      </Card>
    </motion.div>
  );
}
