import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { stats } from '../../../shared/constants/certifications';

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface StatCardProps {
  label: string;
  value: number | string;
  icon: string;
  suffix?: string;
  variants?: any;
}

function StatCard({ label, value, icon: iconName, suffix, variants }: StatCardProps) {
  const getIcon = (name: string) => {
    const icons: Record<string, React.ReactNode> = {
      briefcase: '💼',
      code: '💻',
      cloud: '☁️',
      zap: '⚡',
    };
    return icons[name] || '📊';
  };

  return (
    <motion.div variants={variants} className="text-center">
      <div className="text-4xl mb-2">{getIcon(iconName)}</div>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {value}
        {suffix && <span className="text-xl">{suffix}</span>}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-12"
    >
      <motion.div variants={itemVars} className="flex items-center gap-2 mb-12 justify-center">
        <Zap className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Números que Falam</h2>
      </motion.div>

      <motion.div variants={containerVars} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} variants={itemVars} />
        ))}
      </motion.div>
    </motion.section>
  );
}
