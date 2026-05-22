"use client";

import { motion } from "framer-motion";
import { BookOpen, Headphones } from "lucide-react";

export function EdicaoEspecial() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--background)] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        <motion.div 
          className="w-full lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-2">
            Edição Especial
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-[var(--foreground)] font-bold leading-tight">
            Motus <br/> <span className="text-[var(--accent)] italic">Narrativas Guarani</span>
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--foreground)]/80 font-serif leading-relaxed">
            <p>
              A edição especial, com narrativas na língua <span className="text-[var(--accent)] italic font-bold">Guarani</span>, tem como base o diálogo intercultural colaborativo com a comunidade Guarani Mbya, em encontros vivenciais na sua aldeia (Tekoa Yvy Poty).
            </p>
            <p>
              Ela convida ao mergulho em narrativas ancestrais, oportunizando momentos especiais de aprendizagens interculturais, acompanhada por ilustrações da artista Carine Josiéle Wendland e da própria comunidade <span className="text-[var(--accent)] font-bold italic">Guarani.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://drive.google.com/file/d/1sP-CgqwCtDfEiJ1VtLR5f1KF9JCOGU4X/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent)] text-white rounded-full font-medium hover:bg-[var(--foreground)] transition-colors duration-300">
              <BookOpen size={20} />
              Livro Acessível
            </a>
            <a href="https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu?si=62981ca0093f45ad" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-3 px-8 py-4 border border-[var(--foreground)] text-[var(--foreground)] rounded-full font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300">
              <Headphones size={20} />
              Áudios no Spotify
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--accent)]/10 blur-2xl rounded-full transform -rotate-6 scale-110" />
            <img 
              src="/images/CapaMotusGuarani.png" 
              alt="Capa Edição Especial Narrativas Guarani" 
              className="relative w-full h-auto max-w-[450px] object-cover rounded-md shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
