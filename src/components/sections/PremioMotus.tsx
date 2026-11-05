"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Trophy } from "lucide-react";

export function PremioMotus() {
  return (
    <section id="premio" className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--intro-background)]">
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--foreground)]">
              Prêmio Motus
            </h2>
          </div>
          <h3 className="text-2xl font-heading text-[var(--foreground)]/80 italic">
            Melhor Leitura Crítica - 2º Edição
          </h3>
          
          <p className="text-lg text-[var(--foreground)]/70 font-serif leading-relaxed">
            O Prêmio Motus de Melhor Leitura Crítica busca valorizar a análise literária e incentivar a reflexão sobre obras inéditas. Em sua segunda edição, o prêmio recebeu <strong className="uppercase font-bold">90 inscrições efetivadas</strong>, com participantes de todas as regiões do Brasil. As idades variaram entre 18 e 79 anos, evidenciando a diversidade de experiências e perspectivas reunidas pela iniciativa.
          </p>
          <strong className="block text-sm uppercase tracking-wider text-[var(--foreground)]/50 mb-1">Obra analisada</strong>
          <p className="text-lg text-[var(--foreground)]/70 font-serif leading-relaxed">
          Nesta edição, os participantes foram convidados a elaborar uma leitura crítica do romance inédito A Saga de Saturno - Livro 1: A herdeira Oculta, de autoria de Kézia Letícia da Silva Lôbo.
          </p>
           <strong className="block text-sm uppercase tracking-wider text-[var(--foreground)]/50 mb-1">Comissão julgadora</strong>
          <p className="text-lg text-[var(--foreground)]/70 font-serif leading-relaxed">
          A avaliação ficou sob responsabilidade de uma comissão julgadora especialmente convidada, formada por Aliriane Ferreira Almeida, Ana Lucia Vargas e Kézia Letícia da Silva Lôbo. O Motus registra seu sincero agradecimento às integrantes da comissão pela dedicação, pelo trabalho e pela seriedade na avaliação das leituras críticas submetidas.
          </p>
          <strong className="block text-sm uppercase tracking-wider text-[var(--foreground)]/50 mb-1">Obra vencedora</strong>
          <p className="text-lg text-[var(--foreground)]/70 font-serif leading-relaxed">
          A vencedora da segunda edição do Prêmio Motus de Melhor Leitura Crítica 2026 foi <strong className="uppercase font-bold">Thaynara Alves Goulart</strong>, moradora de Cabedelo, Paraíba, com o trabalho intitulado "Uma leitura Crítica da obra A Herdeira Oculta". Como reconhecimento a vencedora recebeu o prêmio de <strong className="uppercase font-bold">R$4.000,00</strong>.
          </p>
           <p className="text-lg text-[var(--foreground)]/70 font-serif leading-relaxed">
           Agradecemos a todas as pessoas que participaram desta edição e contribuíram para fortalecer a leitura crítica, a reflexão literária e a produção cultural em âmbito nacional.
           </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--foreground)]/10">
            <div className="flex items-start gap-3">
              <Calendar className="text-[var(--accent)] mt-1" size={20} />
              <div>
                <strong className="block text-sm uppercase tracking-wider text-[var(--foreground)]/50 mb-1">Inscrições</strong>
                <span className="font-medium text-[var(--foreground)]">Encerradas</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="text-[var(--accent)] mt-1" size={20} />
              <div>
                <strong className="block text-sm uppercase tracking-wider text-[var(--foreground)]/50 mb-1">Premiação</strong>
                <span className="font-medium text-[var(--foreground)]">17 de outubro de 2026</span>
              </div>
            </div>
          </div>

          <a href="https://drive.google.com/file/d/1NELtF_eMn_-TS0rsweN91T2kUnFg_64x/view" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center gap-2 group text-[var(--accent)] hover:text-[var(--foreground)] transition-colors duration-300 font-medium text-lg mt-4">
            Acessar Regulamento Completo
            <ArrowRight className="group-hover:translate-x-1 text-[var(--accent)] transition-transform" size={20} />
          </a>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <a href="https://www.instagram.com/p/DXzOzcvgBU_/?igsh=MTJpa29yYzEzZDcybA%3D%3D" target="_blank" rel="noopener noreferrer" className="block relative group overflow-hidden rounded-xl shadow-2xl border border-[var(--foreground)]/10">
            <img 
              src="/images/CardPremioMotus.jpg" 
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