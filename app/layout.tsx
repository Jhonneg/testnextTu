import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Tupi Limpeza e Pinturas | Especialistas em Limpeza e Pintura de Fachadas em São Paulo",
  description:
    "A Tupi Limpeza e Pinturas oferece serviços especializados em limpeza de fachadas, pintura industrial, tratamento de superfícies e manutenção predial. Atendemos condomínios e indústrias em toda a Grande São Paulo e ABC Paulista. Mais de 32 anos de experiência, qualidade e segurança.",
  keywords:
    "Tupi Limpeza, Pintura Fachada, Limpeza Fachada, Pintura Industrial, Limpeza Predial, Limpeza de Vidro, Hidrojateamento, Manutenção de Calhas, Impermeabilização, Diadema, São Paulo",
  openGraph: {
    title: "Tupi Limpeza e Pinturas | Especialistas em Fachadas e Industrial",
    description:
      "Com mais de 32 anos de experiência, Tupi Limpeza e Pinturas oferece serviços de alta qualidade em limpeza, restauração e pintura de fachadas industriais, comerciais e prediais em ABC Paulista e São Paulo.",
    url: "https://www.tupilimpeza.com.br",
    siteName: "Tupi Limpeza e Pinturas",
    images: [
      {
        url: "https://www.tupilimpeza.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tupi Limpeza e Pinturas - Limpeza e Pintura de Fachadas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.tupilimpeza.com.br", // Add your canonical URL here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable}} antialiased`}>
        <Header />

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
