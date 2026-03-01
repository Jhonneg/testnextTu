import Marquee from "@/components/Marquee";

import Image from "next/image";
import img1 from "@/public/limpeza1.jpeg";
import img2 from "@/public/limpeza22.png";
import img3 from "@/public/limpeza3.jpeg";
import img4 from "@/public/limpeza4.jpeg";
import img5 from "@/public/pintura1.jpeg";
import img6 from "@/public/lona.jpeg";
import Servicos from "@/components/Servicos";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <>
      <main>
        <Hero />

        <h2 className="font-bold text-3xl my-9 text-center">Nossa operação</h2>
        <Servicos />

        <div className="w-full max-w-6xl mx-auto p-4">
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

      <Footer />
    </>
  );
}
