"use client";

import { motion } from "framer-motion";
import { Headphones, Book, Video } from "lucide-react";

export function EdicaoAtual() {
  return (
    <section id="motus9" className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative group perspective">
            <motion.div 
              className="relative rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img 
                src="/images/capaMotus9.png" 
                alt="Capa Motus #9 - Verdades e Mentiras" 
                className="w-full h-auto max-w-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-2">
            Edição Atual
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--foreground)] font-bold leading-tight">
            Motus #9 <br/> <span className="text-[var(--accent)] italic">Verdades e Mentiras</span>
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--foreground)]/80 font-serif leading-relaxed">
            <p>
              Composto por contos e poemas selecionados através do concurso literário que teve como tema “Verdades e Mentiras”. O concurso recebeu 168 obras válidas de diversas regiões do Brasil e do mundo.
            </p>
            <p>
              Cada texto vem acompanhado por uma ilustração inédita da artista Amanda Gobus Lopes, e todas as obras estão disponíveis em áudio, garantindo acessibilidade plena.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://drive.google.com/file/d/1fdwn0K5DHAuCM3bW8gPVk-Z6LBsNb2x7/view?usp=drive_link" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:bg-[var(--accent)] transition-colors duration-300">
              <Book size={20} />
              Livro Acessível
            </a>
            <a href="https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu?si=62981ca0093f45ad" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-3 px-8 py-4 border border-[var(--foreground)] text-[var(--foreground)] rounded-full font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300">
              <Headphones size={20} />
              Áudio no Spotify
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
