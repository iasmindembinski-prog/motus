import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Edicoes } from "@/components/sections/Edicoes";

export const metadata: Metadata = {
  title: "Edições | Motus - Movimento Literário Digital",
  description:
    "Explore todas as edições do Motus — contos e poemas selecionados anualmente, gratuitos e 100% acessíveis. Acervo desde 2017.",
};

export default function EdicoesPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full">
        <Edicoes />
      </main>
      <Footer />
    </>
  );
}
