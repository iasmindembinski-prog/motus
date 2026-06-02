"use client";
import { motion } from "framer-motion";

const equipe = [
  { name: "Aline Vieira de Mello", role: "Coordenadora", desc: "Docente da Unipampa", image: "/images/Fotos-Equipe/AlineMello.jpg" },
  { name: "Amanda Gobus Lopes", role: "Ilustradora", desc: "Colaboradora Externa", image: "/images/Fotos-Equipe/AmandaLopes.jpg" },
  { name: "Amanda Meincke Melo", role: "Avaliadora", desc: "Docente da Unipampa", image: "/images/Fotos-Equipe/AmandaMelo.jpg" },
  { name: "Mariléia Marchezan", role: "Avaliadora", desc: "Colaboradora Externa", image: "/images/Fotos-Equipe/MarileiaMarchezan.jpg" },
  { name: "Marlucy Medeiros", role: "Equipe Executora", desc: "TAE da Unipampa", image: "/images/Fotos-Equipe/MarlucyMedeiros.jpg" },
  { name: "Jasmini Bilher", role: "Equipe Executora", desc: "Discente da Unipampa", image: "/images/Fotos-Equipe/JasminiBilher.png" },
  { name: "Eduardo Leal", role: "Programador", desc: "Discente da Unipampa", image: "/images/Fotos-Equipe/Eduardo.jpg" },
  { name: "Nicolas Feijó", role: "Programador", desc: "Discente da Unipampa", image: "/images/Fotos-Equipe/Nicolas.jpg" },
  { name: "Rosa Helena Martinez", role: "Avaliadora", desc: "Colaboradora Externa", image: "/images/Fotos-Equipe/RosaMartinez.jpg" },
  { name: "Alexandre Alves", role: "Avaliador", desc: "Colaborador Externo", image: "/images/Fotos-Equipe/AlexandreAlderete.jpg" },
  { name: "Nathália Pinheiro", role: "Avaliadora", desc: "Colaboradora Externa", image: "/images/Fotos-Equipe/Nathalia.jpg" },
  { name: "Paulo Berquó", role: "Avaliador", desc: "Colaborador Externo", image: "/images/Fotos-Equipe/PauloBerquo.jpg" },
  { name: "Aliriane Almeida", role: "Avaliadora", desc: "Colaboradora Externa", image: '/images/Fotos-Equipe/AlirianeAlmeida.jpg' },
  { name: "Ana Lúcia Vargas", role: "Avaliadora", desc: "Colaboradora Externa", image: "/images/Fotos-Equipe/AnaLuciaVargas.jpg" },
  { name: "Maura da Costa e Silva", role: "Avaliadora", desc: "Colaboradora Externa", image: "/images/Fotos-Equipe/Maura.jpg" },
  { name: "Merlen Alves", role: "Avaliadora", desc: "Colaboradora Externa", image: "/images/Fotos-Equipe/MerlenAlves.jpg" },
  { name: "Naiana Fantinelli", role: "Avaliadora", desc: "Colaboradora Externa", image: "/images/Fotos-Equipe/NaianaFantinelli.jpg" },
  { name: "Tais Rodrigues", role: "Avaliadora", desc: "Colaboradora Externa", image: "/images/Fotos-Equipe/TaisRodrigues.jpeg" },
  { name: "Iasmin Dembinski", role: "Programadora", desc: "Discente da Unipampa", image: "/images/Fotos-Equipe/Iasmin.jpeg" },
  {name: "Júlia Duarte", role: "Equipe Executora", desc: "Discente da Unipampa", image: "/images/Fotos-Equipe/JuliaDuarte.jpeg" },
  {name: "Fabiano de Freitas Mion", role: "Equipe Executora", desc: "Discente da Unipampa", image: "/images/Fotos-Equipe/Fabiano2.jpeg" },
  {name: "Davi Tito Tafernaberry", role: "Equipe Executora", desc: "Discente da Unipampa", image: "/images/Fotos-Equipe/Davi.jpg" },
];

export function Equipe() {
  return (
    <section id="equipe" className="py-24 md:py-32 px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold contrast-brown text-[var(--foreground)] mb-6">
            Quem Somos
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto" />
          <p className="mt-6 text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto font-serif leading-relaxed">
            Uma equipe apaixonada por <span className="font-heading font-bold contrast-brown text-[var(--foreground)]">literatura, acessibilidade e tecnologia</span>, trabalhando em conjunto para democratizar o acesso à cultura.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {equipe.map((member, index) => (
            <motion.div 
              key={index}
              className="group flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 bg-[var(--card)] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-[var(--foreground)]">
                {member.name}
              </h3>
              <span className="text-sm font-serif text-[var(--accent)] mt-1 font-medium tracking-wide uppercase">
                {member.role}
              </span>

              <span className="text-sm font-serif text-[var(--other-accent)] mt-1 font-medium tracking-wide uppercase">{member.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
