import { motion } from 'framer-motion';
import { Download, MapPin } from 'lucide-react';
import { Button } from '../../../shared/components/ui/button';
import perfil from '../../../assets/perfil.jpg';
import cv from '../../../assets/Currículo_2026_Ricardo.pdf';
import { SocialLinks } from './SocialLinks';

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Ricardo_Augusto_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      variants={containerVars}
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 md:py-24"
    >
      <div className="flex flex-col space-y-6 flex-1">
        <motion.div variants={itemVars} className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Ricardo Augusto
            <br /> de Jesus Costa
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-primary flex items-center gap-2 mt-2">
            <span>Senior Full-Stack Developer</span>
          </h2>
          <div className="flex items-center text-muted-foreground gap-1.5 mt-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Paulínia - SP, Brasil</span>
          </div>
        </motion.div>

        <motion.p variants={itemVars} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Especialista em SaaS Multi-tenant, Cloud Security e Arquitetura de Software. Apaixonado por construir
          plataformas escaláveis com foco em segurança de dados. Atualmente estudando na{' '}
          <strong className="text-foreground">FATEC Paulínia</strong> e trabalhando com tecnologias modernas como
          <strong className="text-foreground"> React, TypeScript, NestJS, Azure e IA Generativa</strong>.
        </motion.p>

        <motion.div variants={itemVars} className="flex flex-wrap items-center gap-4 pt-2">
          <Button
            onClick={handleDownloadCV}
            className="print:hidden shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all rounded-full px-6 h-12 text-md"
          >
            <Download className="mr-2 h-4 w-4" />
            Baixar CV (PDF)
          </Button>

          <SocialLinks />
        </motion.div>
      </div>

      <motion.div variants={itemVars} className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative shrink-0">
        <div className="absolute inset-0 rounded-full bg-gradient-premium blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
        <div className="relative w-full h-full rounded-4xl md:rounded-[3rem] overflow-hidden border-4 border-background shadow-2xl bg-card transform transition-transform duration-500 hover:rotate-2 hover:scale-[1.02]">
          <div className="w-full h-full bg-muted">
            <img src={perfil} alt="Foto do Ricardo" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
