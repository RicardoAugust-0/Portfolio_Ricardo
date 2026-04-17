import { motion } from 'framer-motion';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  activities: string[];
  variants?: any;
}

export function ExperienceCard({ role, company, period, activities, variants }: ExperienceCardProps) {
  return (
    <motion.div variants={variants} className="relative group">
      <div className="absolute -left-[23px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background transition-transform group-hover:scale-125 duration-300" />
      <div className="flex flex-col gap-1 border border-transparent group-hover:bg-muted/50 p-4 -mt-4 rounded-xl transition-all duration-300">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{role}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-2">
          <span>{company}</span>
          <span>•</span>
          <span>{period}</span>
        </div>
        <ul className="list-disc leading-relaxed text-muted-foreground ml-4 space-y-1">
          {activities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
