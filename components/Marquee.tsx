import Image from "next/image";
import { logoIconsList } from "../constants";

export default function Marquee() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
          Empresas que confiam na Tupi Limpeza
        </p>
      </div>

      <div
        className="relative flex w-full overflow-hidden group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex min-w-full shrink-0 animate-scroll items-center justify-around gap-12 sm:gap-24 pr-12 sm:pr-24">
          {logoIconsList.map((logo, index) => (
            <div
              key={`original-${index}`}
              className="relative w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
            >
              <Image
                src={logo.imgPath}
                alt="Logo cliente parceiro"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex min-w-full shrink-0 animate-scroll items-center justify-around gap-12 sm:gap-24 pr-12 sm:pr-24"
        >
          {logoIconsList.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="relative w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
            >
              <Image
                src={logo.imgPath}
                alt="Logo cliente parceiro"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
