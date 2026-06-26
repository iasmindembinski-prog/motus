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
            O <span className="contrast-brown font-bold">Motus</span> – Movimento Literário Digital é um projeto de extensão da Universidade Federal do Pampa (UNIPAMPA) que incentiva a produção literária, promove o interesse pela leitura e amplia o acesso à literatura.
          </p>

          <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed font-serif">
Desde 2016, realiza anualmente um concurso literário que seleciona contos e poemas para publicação em um livro digital gratuito. Além disso, desenvolve ações voltadas à educação básica, promovendo oficinas de leitura, interpretação e escrita criativa que estimulam o pensamento crítico, a criatividade e a expressão dos estudantes.
          </p>

          <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed font-serif">
          O projeto também participa de eventos culturais como feiras do livro e iniciativas acadêmicas, fortalecendo o diálogo com a comunidade e aproximando diferentes públicos do universo literário. 
          Comprometido com a inclusão, o Motus disponibiliza suas obras em formatos compatíveis com leitores de tela e versões narradas em áudio, tornando a literatura mais democrática e acessível a diferentes públicos. 
           </p>
                     <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed font-serif">
          Por meio da literatura, o projeto busca conectar pessoas, valorizar novos autores e democratizar o acesso à cultura e ao conhecimento.
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
