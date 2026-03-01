import Card from "@/components/Card";
import Marquee from "@/components/Marquee";

import Image from "next/image";
import img1 from "@/public/limpeza1.jpeg";
import img2 from "@/public/limpeza22.png";
import img3 from "@/public/limpeza3.jpeg";
import img4 from "@/public/limpeza4.jpeg";
import img5 from "@/public/pintura1.jpeg";
import img6 from "@/public/lona.jpeg";
import { cardProps } from "@/constants";
import Servicos from "@/components/Servicos";

export default function Home() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <>
      {/* Hero */}
      <main>
        <section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/example.webp')]">
          <div className="flex items-center justify-start h-full text-white">
            <div className="m-9">
              <h1 className="text-2xl md:text-5xl  font-bold">
                Tupi Limpeza e Pintura Eireli possui mais de 32 anos de
                experiência em limpeza e pintura de fachadas.
              </h1>
              <div className="flex items-center justify-end mt-40">
                <h2 className="text-2xl">
                  Operamos por todo estado de São Paulo.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <h2 className="font-bold text-3xl mb-9 text-center">Nossos Serviços</h2>
        <Servicos />

        <div className="w-full max-w-6xl mx-auto p-4">
          <h2 className="font-bold text-3xl mb-9 text-center">
            Nossa Operação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center w-full my-16">
          <h2 className="font-bold text-3xl">Nossos clientes</h2>
        </div>
        <Marquee />
      </main>

      <footer className="bg-blue-600 text-white">
        <div className="flex flex-col items-center justify-center h-80 w-full">
          <p className="text-4xl">Contato</p>
          <ul>
            <p className="font-bold">Endereço</p>
            <li>
              R. Martim Carvalho, 166 - Vila Nogueira, Diadema - SP, 09950-040
            </li>
            <p className="font-bold">Telefone</p>
            <li>(11) 4075-3615</li>
            <p className="font-bold">Horário</p>
            <li>Seg - Sex 8h - 12h | 13h - 17:30h</li>
            <p className="font-bold">Email</p>
            <li>tupilimpeza@uol.com.br</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
