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
  title: "Tupi limpeza e pinturas",
  description: "Pintura e limpeza de faixadas ",
  keywords:
    "Tupi Limpeza, Pintura Fachada, Limpeza Fachada, Pintura Industrial, Limpeza Predial",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}} antialiased`}>
        <Header />

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
