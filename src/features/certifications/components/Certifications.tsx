import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../../../shared/constants/certifications';

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

const colorClasses = {
  blue: 'bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20',
  purple: 'bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20',
  cyan: 'bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20',
  green: 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20',
  orange: 'bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20',
};

const textColorClasses = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  cyan: 'text-cyan-400',
  green: 'text-green-400',
  orange: 'text-orange-400',
};

interface CertificationCardProps {
  name: string;
  issuer: string;
  description: string;
  validUntil?: string;
  credentialUrl?: string;
  color: keyof typeof colorClasses;
  variants?: any;
}

function CertificationCard({
  name,
  issuer,
  description,
  validUntil,
  credentialUrl,
  color,
  variants,
}: CertificationCardProps) {
  return (
    <motion.div
      variants={variants}
      className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-${color}-500/20 ${colorClasses[color]}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${textColorClasses[color]} mb-1`}>{name}</h3>
          <p className="text-sm text-muted-foreground">{issuer}</p>
        </div>
        <Award className={`h-6 w-6 ${textColorClasses[color]} flex-shrink-0`} />
      </div>

      <p className="text-sm text-foreground/80 mb-4">{description}</p>

      <div className="flex items-center justify-between">
        {validUntil && (
          <span className="text-xs text-muted-foreground">Válida até: {validUntil}</span>
        )}
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 text-xs font-medium ${textColorClasses[color]} hover:opacity-80 transition-opacity`}
          >
            Verificar <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Certifications() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-12"
      id="certificacoes"
    >
      <motion.div variants={itemVars} className="flex items-center gap-2 mb-8">
        <Award className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Certificações & Credenciais</h2>
      </motion.div>

      <motion.div variants={containerVars} className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} {...cert} variants={itemVars} />
        ))}
      </motion.div>
    </motion.section>
  );
}
