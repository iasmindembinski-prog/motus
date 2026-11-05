"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Headphones,
  PlayCircle,
  Sparkles,
} from "lucide-react";

export function Lancamento() {
  return (
    <section id="lancamento" className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Conteúdo */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Título */}
          <div className="flex items-center gap-4">
            <Sparkles className="text-[var(--foreground)] flex-shrink-0" size={32} />
            <div>
              <span className="text-sm uppercase tracking-widest text-[var(--foreground)]/100">
                Edição Especial
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Motus #10
              </h2>
            </div>
          </div>

          <h3 className="text-2xl font-heading text-[var(--accent)] italic">
            Uma década de histórias
          </h3>

          {/* Apresentação */}
          <div className="space-y-6 text-lg text-[var(--foreground)]/70 font-serif leading-relaxed">
            <p>
              Em comemoração aos dez anos do Projeto Motus, a décima edição
              apresenta uma proposta especial e comemorativa, reunindo obras
              que marcaram a trajetória do concurso Motus ao longo de suas
              nove edições anteriores. Para compor este livro, foram
              selecionados um conto e um poema de cada edição, da primeira
              à nona, totalizando dezoito textos. Além disso, a publicação
              inclui dois textos da categoria Educação Básica, selecionados
              entre as obras dessa categoria presentes nas edições anteriores.
            </p>

            <p>
              Mais do que revisitar as publicações anteriores, esta edição
              especial busca valorizar a diversidade de vozes, a criatividade
              e a expressão artística que contribuíram para construir a
              história do projeto. Cada texto vem acompanhado por uma
              ilustração, criada pelos artistas{" "}
              <strong>
                Amanda Gobus Lopes (Motus #2 a Motus #9), Eduardo Serpa
                (Motus #1) e João (Motus #1).
              </strong>{" "}
              Todas as obras também estão disponíveis em áudio no Spotify
              e podem ser lidas integralmente com leitores de tela, ampliando
              o acesso à literatura para pessoas com deficiência visual e
              para aquelas em processo de alfabetização.
            </p>

            <p>
              Convidamos você a percorrer estas páginas, reencontrar histórias
              e celebrar uma década do Projeto Motus. Que esta edição especial
              seja não apenas uma retrospectiva do caminho percorrido, mas
              também uma homenagem a todas as pessoas que ajudaram a construir
              a história do projeto e um convite para que novas histórias
              continuem florescendo nos próximos anos.
            </p>
          </div>

          {/* Acessos à publicação (Botões) */}
          <div className="pt-6 border-t border-[var(--foreground)]/50 space-y-5">
            <h3 className="text-sm uppercase tracking-widest text-[var(--foreground)]/100 font-sans">
              Acesse a edição especial
            </h3>

            {/* Grupo de Botões */}
            <div className="flex flex-wrap gap-4">
              
              {/* Botão 1: Livro Digital (Usa a cor de destaque --accent) */}
              <a
                href="https://drive.google.com/file/d/1znWpz6piFkGs6uXFd3KHKLtoWJ4KbtuD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium text-base bg-zinc-900 text-white hover:opacity-90 shadow-lg transition-all duration-300 group"
              >
                <BookOpen size={20} className="transition-transform group-hover:scale-110" />
                <span>Ler o livro digital</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-1" />
              </a>

              {/* Botão 2: Spotify (Com fundo escuro sólido similar, ex: bg-neutral-900 ou bg-zinc-900 com borda) */}
              <a
                href="https://open.spotify.com/show/7rlE6zRz3P0N8J7BPYMZJu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium text-base bg-zinc-900 text-white hover:bg-zinc-800 border border-white/10 shadow-lg transition-all duration-300 group"
              >
                <Headphones size={20} className="transition-transform group-hover:scale-110" />
                <span>Ouvir no Spotify</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-1" />
              </a>

              {/* Botão 3: YouTube (Com fundo escuro sólido similar, ex: bg-zinc-900) */}
              <a
                href="https://www.youtube.com/live/4DrJEDnxR9A?si=DzwR9NpUAP1CeWrf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium text-base bg-zinc-900 text-white hover:bg-zinc-800 border border-white/10 shadow-lg transition-all duration-300 group"
              >
                <PlayCircle size={20} className="transition-transform group-hover:scale-110" />
                <span>Assistir ao lançamento</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-1" />
              </a>

            </div>
          </div>
        </motion.div>

        {/* Capa da edição */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <a
            href="https://drive.google.com/file/d/1znWpz6piFkGs6uXFd3KHKLtoWJ4KbtuD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group overflow-hidden rounded-xl shadow-2xl border border-[var(--foreground)]/10"
          >
            <img
              src="/images/CapaMotus10.png"
              alt="Capa do Motus #10 — Uma década de histórias, Edição Especial"
              className="w-full h-auto max-w-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}