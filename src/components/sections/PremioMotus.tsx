"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Trophy } from "lucide-react";

export function PremioMotus() {
  return (
    <section id="premio" className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--foreground)] text-[var(--background)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          className="w-full lg:w-1/2 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4">
            <Trophy className="text-[var(--accent)]" size={32} />
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Prêmio Motus
            </h2>
          </div>
          <h3 className="text-2xl font-heading text-[var(--background)]/80 italic">
            Melhor Leitura Crítica
          </h3>
          
          <p className="text-lg text-[var(--background)]/70 font-serif leading-relaxed">
            O Prêmio Motus de Melhor Leitura Crítica busca valorizar a análise literária e incentivar a reflexão sobre obras inéditas. A iniciativa premiará o(a) autor(a) da melhor avaliação crítica de um romance inédito com R$ 10.000,00.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--background)]/10">
            <div className="flex items-start gap-3">
              <Calendar className="text-[var(--accent)] mt-1" size={20} />
              <div>
                <strong className="block text-sm uppercase tracking-wider text-[var(--background)]/50 mb-1">Inscrições</strong>
                <span className="font-medium text-[var(--background)]">Até 31 de maio de 2025</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="text-[var(--accent)] mt-1" size={20} />
              <div>
                <strong className="block text-sm uppercase tracking-wider text-[var(--background)]/50 mb-1">Premiação</strong>
                <span className="font-medium text-[var(--background)]">04 de outubro de 2025</span>
              </div>
            </div>
          </div>

          <a href="https://bit.ly/premiomotusdeleitura" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center gap-2 group text-[var(--accent)] hover:text-white transition-colors duration-300 font-medium text-lg mt-4">
            Acessar Regulamento Completo
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <a href="https://bit.ly/premiomotusdeleitura" target="_blank" rel="noopener noreferrer" className="block relative group overflow-hidden rounded-xl shadow-2xl border border-[var(--background)]/10">
            <img 
              src="/images/CardPremioMotus.jpeg" 
              alt="Prêmio Motus de Melhor Leitura Crítica" 
              className="w-full h-auto max-w-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
