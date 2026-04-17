import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  category: string;
  items: string[];
  variants?: any;
}

const itemVars = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function SkillCategory({ category, items, variants }: SkillCategoryProps) {
  return (
    <motion.div
      variants={variants}
      className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
    >
      <h3 className="font-semibold text-lg flex items-center gap-1.5 mb-4 text-foreground">
        <ChevronRight className="h-4 w-4 text-primary" />
        {category}
      </h3>
      <motion.ul variants={containerVars} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2">
        {items.map((item, i) => (
          <motion.li
            variants={itemVars}
            key={i}
            className="flex items-center text-muted-foreground text-sm font-medium hover:text-foreground transition-colors cursor-default"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/40 mr-2" />
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
