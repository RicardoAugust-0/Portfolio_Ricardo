import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  course: string;
  institution: string;
  period: string;
  variants?: any;
}

export function EducationCard({ course, institution, period, variants }: EducationCardProps) {
  return (
    <motion.li variants={variants} className="flex flex-col gap-1 group">
      <span className="font-semibold text-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
        <ChevronRight className="h-4 w-4 text-primary/50 opacity-0 group-hover:opacity-100 -ml-5 transition-all w-0 group-hover:w-4" />
        {course}
      </span>
      <div className="flex justify-between text-sm text-muted-foreground font-medium pl-0 group-hover:pl-5 transition-all">
        <span>{institution}</span>
        <span className="bg-muted px-2 py-0.5 rounded-sm">{period}</span>
      </div>
    </motion.li>
  );
}
