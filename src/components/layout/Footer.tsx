"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function Footer() {
  return (
    <footer id="contato" className="bg-[var(--foreground)] text-[var(--background)] py-16 px-6 lg:px-8 border-t border-[var(--background)]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl font-heading font-bold tracking-wider">
            MOTUS
          </h2>
          <p className="text-[var(--background)]/70 max-w-sm font-serif">
            Movimento Literário Digital.<br/>
            Universidade Federal do Pampa (UNIPAMPA).
          </p>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/unimotus/?hl=pt-br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[var(--background)]/10 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon size={24} />
          </a>
          <a 
            href="https://www.facebook.com/MotusUnipampa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[var(--background)]/10 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <FacebookIcon size={24} />
          </a>
          <a 
            href="mailto:motus@unipampa.edu.br" 
            className="w-12 h-12 rounded-full bg-[var(--background)]/10 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--background)]/10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/programa_footer.png" 
              alt="Programa Representante" 
              className="h-30 w-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/unipampa_footer.png" 
              alt="UNIPAMPA" 
              className="h-50 w-auto"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--background)]/50 font-serif">
          <p>© {new Date().getFullYear()} Motus. Todos os direitos reservados.</p>
          <p>Desenvolvido para incentivar a literatura.</p>
        </div>
      </div>
    </footer>
  );
}
