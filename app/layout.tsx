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
  title: "Tupi Limpeza e Pinturas | Limpeza de Fachadas em SP",
  description:
    "Especialistas em limpeza e pintura de fachadas, pintura industrial e manutenção predial no ABC e Grande SP. Mais de 32 anos de experiência e qualidade.",
  keywords:
    "Tupi Limpeza, Pintura Fachada, Limpeza Fachada, Pintura Industrial, Limpeza Predial, Limpeza de Vidro, Hidrojateamento, Manutenção de Calhas, Impermeabilização, Diadema, São Paulo",
  openGraph: {
    title: "Tupi Limpeza e Pinturas | Especialistas em Fachadas e Industrial",
    description:
      "Com mais de 32 anos de experiência, Tupi Limpeza e Pinturas oferece serviços de alta qualidade em limpeza, restauração e pintura de fachadas industriais, comerciais e prediais em ABC Paulista e São Paulo.",
    url: "/",
    siteName: "Tupi Limpeza e Pinturas",
    images: [
      {
        url: "/og-image.jpg",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tupi Limpeza e Pinturas",
    image: "https://www.tupilimpeza.com.br/og-image.jpg",
    "@id": "https://www.tupilimpeza.com.br",
    url: "https://www.tupilimpeza.com.br",
    telephone: "+5511940848284",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "R. Martim Carvalho, 166 Vila Nogueira, Diadema - SP CEP: 09950-040",
      addressLocality: "Diadema",
      addressRegion: "SP",
      postalCode: "09950-040",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.68690576653457,
      longitude: -46.593819990642764,
    },
    servesCrawl: {
      "@type": "City",
      name: [
        "São Paulo",
        "Diadema",
        "Santo André",
        "São Bernardo do Campo",
        "São Caetano do Sul",
      ],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Limpeza de Fachadas",
        description:
          "Limpeza profissional de fachadas prediais e industriais, remoção de fuligem e revitalização de pastilhas.",
        provider: { "@id": "https://www.tupilimpeza.com.br" },
        areaServed: ["São Paulo", "Grande São Paulo", "ABC Paulista"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de Limpeza",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Limpeza de Vidros em Altura",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hidrojateamento de Fachada",
              },
            },
          ],
        },
      },
      {
        "@type": "Service",
        name: "Pintura Industrial e Predial",
        description:
          "Pintura especializada para condomínios e galpões industriais com foco em durabilidade e segurança.",
        provider: { "@id": "https://www.tupilimpeza.com.br" },
        areaServed: ["São Paulo", "ABC Paulista"],
      },
      {
        "@type": "Service",
        name: "Manutenção de Calhas e Telhados",
        description:
          "Limpeza, reparo e manutenção preventiva de sistemas de escoamento industrial e residencial.",
        provider: { "@id": "https://www.tupilimpeza.com.br" },
      },
    ],
  };
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              { ...jsonLd, areaServed: jsonLd.servesCrawl },
              servicesLd,
            ]),
          }}
        />
        <Header />

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
