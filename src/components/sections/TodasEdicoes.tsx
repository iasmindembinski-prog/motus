"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const covers = [
  "/images/CapaMotus8.png",
  "/images/capaMotus7.png",
  "/images/Motus6capa.png",
  "/images/motus5.png",
  "/images/motus4.PNG",
  "/images/motus3.JPG",
  "/images/motus2.JPG",
  "/images/motus1.JPG",
  "/images/OEncontroDosPrincipes.PNG",
  "/images/capaNarrativas.png"
];

export function TodasEdicoes() {
  return (
    <section id="edicoes" className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--card)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl contrast-brown font-bold font-heading text-[var(--foreground)] font-bold mb-4">
              Todas as Edições
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)]" />
            <p className="mt-6 text-lg text-[var(--foreground)]/70 max-w-2xl font-serif leading-relaxed">
              Desde <span className="font-bold">2017</span>, reunimos histórias autênticas e poemas marcantes em edições anuais gratuitas e <span className="font-bold text-[var(--accent)]">100%</span> acessíveis. Explore nosso acervo digital.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Link
              href="/edicoes"
              className="inline-flex items-center gap-2 group text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-300 font-medium whitespace-nowrap"
            >
              <span className="special-letter">Ver todas as edições</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {covers.map((cover, index) => (
            <Link
              key={index}
              href="/edicoes"
              className="group relative aspect-[3/4] overflow-hidden rounded-md bg-[var(--background)] shadow-md hover:shadow-xl transition-all duration-500 block"
            >
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <img
                  src={cover}
                  alt={`Capa edição anterior ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
