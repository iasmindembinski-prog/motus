"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Trophy } from "lucide-react";

export function PremioRedacao() {
  return (
    <section id="redacao" className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--foreground)] text-[var(--background)] border-t-2 border-[var(--background)]/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          className="w-full lg:w-1/2 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4">
            <Trophy className="text-white" size={32} />
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Prêmio Motus de Melhor Redação - 2026
            </h2>
          </div>
          <h3 className="text-2xl font-heading text-[var(--background)]/80 italic">
            TEMA: O FUTURO
          </h3>
          
          <p className="text-lg text-[var(--background)]/70 font-serif leading-relaxed">
            Em 2026, o Motus completa 10 anos incentivando a leitura, a escrita e a produção cultural. Para celebrar essa trajetória, e inspirado no legado de Mario Quintana que completaria 120 anos em 2026, o prêmio convida estudantes de escolas públicas e privadas de Alegrete/RS a refletirem sobre o tema <strong>&ldquo;O Futuro&rdquo;</strong>: como nossas escolhas, atitudes, educação e ações no presente influenciam os caminhos e a sociedade que construiremos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--background)]/10">
            <div className="flex items-start gap-3">
              <Calendar className="text-white mt-1" size={20} />
              <div>
                <strong className="block text-sm uppercase tracking-wider text-[var(--background)]/50 mb-1">Inscrições</strong>
                <span className="font-medium text-[var(--background)]">Até 30 de setembro de 2026</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="text-white mt-1" size={20} />
              <div>
                <strong className="block text-sm uppercase tracking-wider text-[var(--background)]/50 mb-1">Categorias</strong>
                <span className="font-medium text-[var(--background)]">6º ao 9º ano e Ensino Médio</span>
              </div>
            </div>
          </div>

          <div className="pt-2 space-y-1 text-[var(--background)]/70 font-serif text-base">
            <p className="text-sm uppercase tracking-wider text-[var(--background)]/50 mb-2 font-sans not-italic">
                Premiação por categoria para estudantes
            </p>
            <p>🥇 1º lugar: certificado + vale-livraria R$ 300</p>
            <p>🥈 2º lugar: certificado + vale-livraria R$ 200</p>
            <p>🥉 3º lugar: certificado + vale-livraria R$ 100</p>
          </div>

          <div>
              <p className="text-sm uppercase tracking-wider text-[var(--background)]/50 mb-2 font-sans not-italic">
                Reconhecimento aos professores
              </p>
              <p>🏆 Professor(a) Mobilizador(a): certificado + vale-livraria R$ 500</p>
              <p>🏆 Professor(a) Orientador(a) Destaque: certificado + vale-presente R$ 500</p>
            </div>

          <a href="https://drive.google.com/file/d/1f8K1IxyKFCd3dEpdpUbGE5sj2jamHxxj/view" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center gap-2 group text-white hover:text-white transition-colors duration-300 font-medium text-lg mt-4">
            Inscreva-se / Acesse o Edital
            <ArrowRight className="group-hover:translate-x-1 text-white transition-transform" size={20} />
          </a>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <a href="https://drive.google.com/file/d/1f8K1IxyKFCd3dEpdpUbGE5sj2jamHxxj/view" target="_blank" rel="noopener noreferrer" className="block relative group overflow-hidden rounded-xl shadow-2xl border border-[var(--background)]/10">
            <img 
              src="/images/PremioMotusdeMelhorRedacao.png" 
              alt="Prêmio Motus de Melhor Redação - 2026" 
              className="w-full h-auto max-w-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}