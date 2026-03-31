import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import perfil from "../assets/perfil.jpg";

export const CustomGithub = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.3 3.8 5.1 4 5.1 4a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.5 11.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

export const CustomLinkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Hero() {
  const handlePrintCV = () => {
    window.print();
  };

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
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-primary">
            Ricardo Augusto <br /> de Jesus Costa
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-primary flex items-center gap-2 mt-2">
            <span>Desenvolvedor Front-End Júnior</span>
          </h2>
          <div className="flex items-center text-muted-foreground gap-1.5 mt-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Paulínia - SP</span>
          </div>
        </motion.div>

        <motion.p
          variants={itemVars}
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          Estudante de Análise e Desenvolvimento de Sistemas com experiência
          prática em automação, extração de dados e desenvolvimento web.
          Conhecimentos sólidos no ecossistema JavaScript, incluindo{" "}
          <strong className="text-foreground">
            React, TailwindCSS e Node.js.
          </strong>{" "}
          Sou um profissional autodidata e busco constantemente novas soluções
          tecnológicas para agregar valor aos projetos em que atuo.
        </motion.p>

        <motion.div
          variants={itemVars}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <Button
            onClick={handlePrintCV}
            className="print:hidden shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all rounded-full px-6 h-12 text-md"
          >
            <Download className="mr-2 h-4 w-4" />
            Baixar CV (PDF)
          </Button>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-sm hover:border-primary/50 hover:text-primary transition-all"
              asChild
            >
              <a
                href="https://linkedin.com/in/ricardo-augusto-344987222"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <CustomLinkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-sm hover:border-primary/50 hover:text-primary transition-all"
              asChild
            >
              <a
                href="https://github.com/RicardoAugust-0"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <CustomGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-sm hover:border-primary/50 hover:text-primary transition-all"
              asChild
            >
              <a href="mailto:tatianejc11@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVars}
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative shrink-0 group perspective-1000"
      >
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-primary to-primary/20 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
        <div className="relative w-full h-full rounded-4xl md:rounded-[3rem] overflow-hidden border-4 border-background shadow-2xl bg-card transform transition-transform duration-500 hover:rotate-2 hover:scale-[1.02]">
          <div className="w-full h-full bg-muted">
            <img
              src={perfil}
              alt="Foto do Ricardo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
