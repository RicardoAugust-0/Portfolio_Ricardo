import { CheckCircle2, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function Skills() {
  const allSkills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "Spring"] },
    { category: "Infra & DevOps", items: ["Docker", "Linux (Arch Linux)", "Windows", "Microsoft Azure"] },
    { category: "Ferramentas & Outros", items: ["Selenium", "AutoCAD", "Git"] }
  ]

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const itemVars = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  }

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12" 
      id="habilidades"
    >
      <motion.div variants={cardVars} className="flex items-center gap-2 mb-8">
        <CheckCircle2 className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Habilidades Técnicas</h2>
      </motion.div>

      <motion.div variants={containerVars} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {allSkills.map((spec, idx) => (
          <motion.div variants={cardVars} key={idx} className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <h3 className="font-semibold text-lg flex items-center gap-1.5 mb-4 text-foreground">
              <ChevronRight className="h-4 w-4 text-primary" />
              {spec.category}
            </h3>
            <motion.ul 
              variants={containerVars} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="space-y-2"
            >
              {spec.items.map((item, i) => (
                <motion.li variants={itemVars} key={i} className="flex items-center text-muted-foreground text-sm font-medium hover:text-foreground transition-colors cursor-default">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 mr-2" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
