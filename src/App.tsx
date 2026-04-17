import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Hero } from './features/hero/components/Hero';
import { Stats } from './features/stats/components/Stats';
import { Projects } from './features/projects/components/Projects';
import { Certifications } from './features/certifications/components/Certifications';
import { Experience } from './features/experience/components/Experience';
import { Skills } from './features/skills/components/Skills';
import { Education } from './features/education/components/Education';
import { ThemeToggle } from './shared/components/theme/ThemeToggle';
import { ThemeProvider } from './shared/context/ThemeContext';
import { CustomGithub, CustomLinkedin } from './features/hero/components/SocialLinks';

function AppContent() {
  return (
    <div className="relative min-h-screen font-sans text-foreground transition-colors duration-300">
      {/* Background Dots Overlay */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(#a1a1a5_1px,transparent_1px)] dark:bg-[radial-gradient(#52525b_1px,transparent_1px)] bg-[length:24px_24px] opacity-10 dark:opacity-20 pointer-events-none" />

      {/* Floating Elements - Left (Socials) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="hidden lg:flex fixed bottom-0 left-10 xl:left-14 flex-col items-center gap-6 z-40"
      >
        <a
          href="https://github.com/ricardo-augusto"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
          title="GitHub"
        >
          <CustomGithub className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/ricardo-augusto"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
          title="LinkedIn"
        >
          <CustomLinkedin className="h-6 w-6" />
        </a>
        <div className="w-px h-28 bg-muted-foreground/30 mt-2" />
      </motion.div>

      {/* Floating Elements - Right (Email) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="hidden lg:flex fixed bottom-0 right-10 xl:right-14 flex-col items-center gap-6 z-40"
      >
        <a
          href="mailto:ricardo@example.com"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 [writing-mode:vertical-rl] tracking-widest pb-4"
          title="Email"
        >
          ricardo@example.com
        </a>
        <div className="w-px h-28 bg-muted-foreground/30 mt-2" />
      </motion.div>

      <ThemeToggle />

      <main className="max-w-4xl mx-auto px-6 py-6 md:py-12 space-y-16">
        <Hero />

        <Stats />

        <div className="space-y-28 md:space-y-36">
          <Projects />
          <Certifications />
          <Experience />
          <Skills />
          <Education />
        </div>
      </main>

      <footer className="mt-20 py-8 border-t border-border bg-muted/40 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Terminal className="h-4 w-4" />
          <p>
            Desenvolvido por <strong>Ricardo Augusto</strong> • Construído com Vite, React, TypeScript e TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
