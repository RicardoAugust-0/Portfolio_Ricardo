import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      role: "Auxiliar Administrativo",
      company: "MedNet Paulínia",
      period: "Dez 2025 - Atual",
      activities: [
        "Atuação direta no Programa Fadiga Zero, responsável pelo monitoramento e tratamento de alertas de fadiga de motoristas.",
        "Operação de sistemas de telemetria (Maxtrack, Sighra, Sascar).",
        "Gestão de dados em planilhas para intervenções críticas."
      ]
    },
    {
      role: "Assistente de Projetos",
      company: "CRZ Instalações e Montagens",
      period: "Jul 2024 - Jun 2025",
      activities: [
        "Atendimento pós-venda via plataforma Octágora.",
        "Análise de solicitações, elaboração de projetos e acompanhamento técnico."
      ]
    },
    {
      role: "Ajudante Administrativo Jovem Aprendiz",
      company: "Transportes Cavalinho",
      period: "Set 2022 - Abr 2023",
      activities: [
        "Rotina profissional e fluxos administrativos gerais da empresa."
      ]
    }
  ]

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVars = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12" 
      id="experiencia"
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }}} className="flex items-center gap-2 mb-8">
        <Briefcase className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Experiência Profissional</h2>
      </motion.div>

      <motion.div variants={containerVars} className="space-y-8 pl-4 border-l-2 border-primary/20">
        {experiences.map((exp, idx) => (
          <motion.div variants={itemVars} key={idx} className="relative group">
            <div className="absolute -left-[23px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background transition-transform group-hover:scale-125 duration-300" />
            <div className="flex flex-col gap-1 border border-transparent group-hover:bg-muted/50 p-4 -mt-4 rounded-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-2">
                <span>{exp.company}</span>
                <span>•</span>
                <span>{exp.period}</span>
              </div>
              <ul className="list-disc leading-relaxed text-muted-foreground ml-4 space-y-1">
                {exp.activities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
