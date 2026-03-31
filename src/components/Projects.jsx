import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code2 } from "lucide-react"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Moovox (TCC)",
      description: "Plataforma web para telemetria e geolocalização animal, desenvolvida como uma alternativa financeiramente acessível para substituir chips implantados em animais de pequeno porte.",
      tags: ["React", "Node.js", "Vercel", "Azure"],
    },
    {
      title: "Projeto Nexus",
      description: "Desenvolvimento completo de uma plataforma/CRM voltada para otimização de processos. Construção utilizando stack moderna.",
      tags: ["Vite", "React", "Shadcn/UI", "Supabase", "TailwindCSS"],
    },
    {
      title: "API REST (Demandas)",
      description: "Desenvolvimento de duas APIs integradas em Node.js, Express e Axios para gestão de demandas de produtos e pedidos.",
      tags: ["Node.js", "Express", "Axios", "REST"],
    }
  ]

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15
      }
    }
  }

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12" 
      id="projetos"
    >
      <motion.div variants={itemVars} className="flex items-center gap-2 mb-8">
        <Code2 className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Projetos em Destaque</h2>
      </motion.div>
      
      <motion.div variants={containerVars} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div variants={itemVars} key={idx} className="h-full">
            <Card className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base text-muted-foreground/90">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
