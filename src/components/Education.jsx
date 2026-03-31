import { GraduationCap, BookOpen, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function Education() {
  const formalEducation = [
    {
      course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "Fatec Paulínia",
      period: "Cursando"
    },
    {
      course: "Técnico em Desenvolvimento de Sistemas",
      institution: "ETEC Bento Quirino",
      period: "Jan 2024 - Jul 2025"
    },
    {
      course: "Técnico em Caldeiraria",
      institution: "Senai Ricardo Figueiredo Terra",
      period: "Jan 2020 - Dez 2021"
    }
  ]

  const certifications = [
    { name: "Lógica de Programação", entity: "Senac", details: "40h, 2021" },
    { name: "Imersão Dev com Google Gemini", entity: "Alura", details: "4h, 2024" },
    { name: "Microsoft Excel 2016", entity: "Fundação Bradesco", details: "35h, 2022" },
    { name: "Capacitação Profissional e Soft Skills", entity: "Fundação Bradesco", details: "2022" },
    { name: "Proficiency Achievement Certificate (High Intermediate)", entity: "Voxy", details: "2024" }
  ]

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12" 
      id="educacao"
    >
      <motion.div variants={itemVars} className="flex items-center gap-2 mb-8">
        <GraduationCap className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Formação Acadêmica</h2>
      </motion.div>

      <div className="grid gap-12 md:gap-8 md:grid-cols-2">
        <motion.div variants={containerVars} className="space-y-6">
          <motion.h3 variants={itemVars} className="text-lg font-semibold flex items-center gap-2 text-muted-foreground pb-2 border-b">
            <BookOpen className="h-5 w-5 text-primary/70" /> Educação Formal
          </motion.h3>
          <ul className="space-y-6">
            {formalEducation.map((edu, idx) => (
              <motion.li variants={itemVars} key={idx} className="flex flex-col gap-1 group">
                <span className="font-semibold text-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary/50 opacity-0 group-hover:opacity-100 -ml-5 transition-all w-0 group-hover:w-4" />
                  {edu.course}
                </span>
                <div className="flex justify-between text-sm text-muted-foreground font-medium pl-0 group-hover:pl-5 transition-all">
                  <span>{edu.institution}</span>
                  <span className="bg-muted px-2 py-0.5 rounded-sm">{edu.period}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={containerVars} className="space-y-6">
          <motion.h3 variants={itemVars} className="text-lg font-semibold flex items-center gap-2 text-muted-foreground pb-2 border-b">
            <BookOpen className="h-5 w-5 text-primary/70" /> Cursos & Certificações
          </motion.h3>
          <ul className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.li variants={itemVars} key={idx} className="flex justify-between items-start gap-4 text-sm group p-3 hover:bg-muted/50 rounded-lg transition-colors border border-transparent hover:border-border -mx-3">
                <span className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {cert.name}
                  <span className="block text-muted-foreground font-medium mt-0.5">{cert.entity}</span>
                </span>
                <span className="whitespace-nowrap text-muted-foreground bg-muted px-2 py-1 rounded-md font-medium">{cert.details}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
