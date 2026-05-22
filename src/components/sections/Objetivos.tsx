"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

const objetivos = [
  {
    title: "Incentivar a produção",
    description: "Estimular autores de todas as partes do Brasil e do mundo a produzirem obras literárias autênticas.",
    image: "/images/obj1.png",
    icon: BookOpen
  },
  {
    title: "Intensificar o interesse",
    description: "Despertar o gosto pela leitura através de projetos na escola e acessibilidade universal.",
    image: "/images/obj2.png",
    icon: Sparkles
  }
];

export function Objetivos() {
  return (
    <section id="objetivos" className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--card)]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h2 className="text-4xl md:text-5xl font-heading text-[var(--foreground)] font-bold mb-6">
            Nossos Objetivos
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {objetivos.map((obj, index) => (
            <motion.div 
              key={index}
              className="group relative bg-[var(--background)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--accent)]/5">
                <img 
                  src={obj.image} 
                  alt={obj.title}
                  className="w-full h-full object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 relative bg-[var(--background)] border-t border-[var(--foreground)]/5">
                <div className="absolute top-0 right-8 -translate-y-1/2 w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-[var(--foreground)] transition-colors duration-500">
                  <obj.icon size={28} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4 mt-2">
                  {obj.title}
                </h3>
                <p className="text-[var(--foreground)]/70 font-serif leading-relaxed text-lg">
                  {obj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
