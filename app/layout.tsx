import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jordão Neto | Produtos Digitais, Agile & Alta Performance",
  description:
    "Especialista em Produtos Digitais, Agile e Treinamento de Equipes. Acelere resultados, otimize processos e transforme sua equipe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <a href="#main" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
