import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../shared/components/ui/card';
import { Badge } from '../../../shared/components/ui/badge';
import { Sparkles } from 'lucide-react';

interface FeaturedProjectProps {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  variants?: any;
}

export function FeaturedProject({
  title,
  description,
  longDescription,
  tags,
  variants,
}: FeaturedProjectProps) {
  return (
    <motion.div variants={variants} className="col-span-full md:col-span-2 lg:col-span-3">
      <Card className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 border-primary/30 bg-gradient-subtle">
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
        </CardFooter>
      </Card>
    </motion.div>
  );
}
