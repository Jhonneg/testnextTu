"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, X, ZoomIn } from "lucide-react";

export default function ServicosShowcase() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50 mt-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa Área de Atuação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas para manutenção, recuperação e proteção do seu
            patrimônio.
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black aspect-video">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src="/videolimpe2.mp4"
                >
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Limpeza e Lavagem
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Removemos sujeira, poluição e manchas de fachadas prediais e
                industriais, devolvendo a aparência original e valorizando o
                imóvel.
              </p>
              <ul className="space-y-3">
                <ListItem text="Limpeza de Fachadas e Prédios" />
                <ListItem text="Limpeza de Vidros e Pastilhas" />
                <ListItem text="Tratamento de Paredes" />
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Impermeabilização e Pintura
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Proteção total contra infiltrações e umidade. Utilizamos
                técnicas modernas de vedação para garantir a longevidade da
                estrutura.
              </p>
              <ul className="space-y-3">
                <ListItem text="Impermeabilização completa" />
                <ListItem text="Vedação técnica de janelas e trincas" />
                <ListItem text="Pintura interna e externa" />
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 h-96">
              <div
                className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg h-full cursor-pointer group"
                onClick={() => setZoomedImage("/imperm.jpeg")}
              >
                <Image
                  src="/imperm.jpeg"
                  alt="Processo de Impermeabilização Principal"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <HoverOverlay />
              </div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg h-40 lg:h-auto cursor-pointer group"
                onClick={() => setZoomedImage("/imperm2.jpeg")}
              >
                <Image
                  src="/imperm2.jpeg"
                  alt="Detalhe Impermeabilização"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <HoverOverlay />
              </div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg h-40 lg:h-auto cursor-pointer group"
                onClick={() => setZoomedImage("/imperm3.jpeg")}
              >
                <Image
                  src="/imperm3.jpeg"
                  alt="Resultado Impermeabilização"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <HoverOverlay />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black aspect-video">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src="/calhas.mp4"
                >
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Manutenção de Calhas
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Evite infiltrações e danos estruturais com nossa limpeza e
                manutenção especializada de calhas e condutores.
              </p>
              <ul className="space-y-3">
                <ListItem text="Remoção de detritos e obstruções" />
                <ListItem text="Reparo e vedação de calhas" />
                <ListItem text="Prevenção contra danos de chuva" />
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Pintura Interna e Externa
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Revitalizamos e protegemos a fachada e os ambientes internos do
                seu condomínio ou indústria. Utilizamos tintas de alta
                performance para garantir extrema durabilidade, resistência às
                intempéries e um acabamento impecável.
              </p>
              <ul className="space-y-3">
                <ListItem text="Tratamento prévio de trincas e fissuras" />
                <ListItem text="Pintura em altura para fachadas prediais" />
                <ListItem text="Aplicação de Epóxi, Poliuretano e tintas industriais" />
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 h-96">
              <div
                className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg h-full cursor-pointer group"
                onClick={() => setZoomedImage("/pintura2.jpeg")}
              >
                <Image
                  src="/pintura2.jpeg"
                  alt="Processo de pintura em fachada"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <HoverOverlay />
              </div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg h-40 lg:h-auto cursor-pointer group"
                onClick={() => setZoomedImage("/pintura33.jpeg")}
              >
                <Image
                  src="/pintura33.jpeg"
                  alt="Pintura industrial interna"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <HoverOverlay />
              </div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg h-40 lg:h-auto cursor-pointer group"
                onClick={() => setZoomedImage("/pintura4.jpeg")}
              >
                <Image
                  src="/pintura4.jpeg"
                  alt="Resultado final da pintura acabada"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <HoverOverlay />
              </div>
            </div>
          </div>
        </div>
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setZoomedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all z-50"
            onClick={() => setZoomedImage(null)}
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full max-w-5xl h-[85vh] rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomedImage}
              alt="Imagem em tela cheia"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center text-gray-700 font-medium">
      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0" />
      {text}
    </li>
  );
}

function HoverOverlay() {
  return (
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div className="bg-blue-600/90 p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <ZoomIn size={24} />
      </div>
    </div>
  );
}
