import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const fontHeading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontBody = Lora({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motus - Movimento Literário Digital",
  description: "Projeto de extensão da Unipampa que incentiva a produção literária e intensifica o interesse pela literatura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-serif bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
