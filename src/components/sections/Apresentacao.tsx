"use client";

import { motion } from "framer-motion";

export function Apresentacao() {
  return (
    <section id="apresentacao" className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--intro-background)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          className="w-full md:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-[var(--foreground)] font-bold">
            <span className="contrast-purple">Apresentação</span>
          </h2>
          <div className="w-12 h-1 bg-[var(--accent)]" />
          <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed font-serif">
            <span className="contrast-brown font-bold">Motus</span> é um projeto de extensão vinculado ao “Programa C - Comunidade, Computação, Cultura, Comunicação, Ciência, Cidadania, Criatividade, Colaboração” da Universidade Federal do Pampa (UNIPAMPA), que visa a incentivar a produção de obras literárias e intensificar o interesse pela literatura dos cidadãos e estudantes.
          </p>
          <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed font-serif">
            Para atingir esses objetivos, o projeto organiza anualmente um concurso literário para selecionar contos e poemas que são publicados em um livro digital totalmente gratuito e acessível.
            Além disso, realiza ações para a divulgação do livro, como a Motus na Escola, em que os estudantes da educação básica realizam a leitura e interpretação das obras e ilustrações publicadas em diferentes edições do livro digital.
          </p>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full max-w-md flex items-center justify-center">
            <img 
              src="/images/arvoremotus7.png" 
              alt="Árvore do projeto motus representando o tema A dança da vida"
              className="w-full h-auto object-contain mix-blend-multiply opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
