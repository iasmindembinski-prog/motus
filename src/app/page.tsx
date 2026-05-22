import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Apresentacao } from "@/components/sections/Apresentacao";
import { Objetivos } from "@/components/sections/Objetivos";
import { EdicaoAtual } from "@/components/sections/EdicaoAtual";
import { PremioMotus } from "@/components/sections/PremioMotus";
import { EdicaoEspecial } from "@/components/sections/EdicaoEspecial";
import { EdicoesAnteriores } from "@/components/sections/EdicoesAnteriores";
import { Equipe } from "@/components/sections/Equipe";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full">
        <HeroSection />
        <Apresentacao />
        <Objetivos />
        <EdicaoAtual />
        <PremioMotus />
        <EdicaoEspecial />
        <EdicoesAnteriores />
        <Equipe />
      </main>
      <Footer />
    </>
  );
}
