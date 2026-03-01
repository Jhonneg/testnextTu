import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/example.webp"
      >
        <source src="/videolimpeza3.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500 bg-blue-500/20 text-blue-300 text-sm font-semibold uppercase tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Mais de 32 anos de experiência
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Especialistas em <br />
            <span className="bg-clip-text text-blue-500">
              Limpeza e Pintura
            </span>{" "}
            <br />
            de Fachadas.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl border-l-4 border-blue-500 pl-4 drop-shadow-md">
            A Tupi Limpeza garante qualidade e segurança para o seu patrimônio.
            Atendemos condomínios e indústrias em{" "}
            <strong>todo o estado de São Paulo</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/5511940848284"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </a>

            <Link
              href="#servicos"
              className="flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Ver Nossos Serviços
              <ArrowDown className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

