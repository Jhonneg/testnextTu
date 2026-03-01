import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function ServicosShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg h-full">
                <Image
                  src="/imperm.jpeg"
                  alt="Processo de Impermeabilização Principal"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-40 lg:h-auto">
                <Image
                  src="/imperm2.jpeg"
                  alt="Detalhe Impermeabilização"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-40 lg:h-auto">
                <Image
                  src="/imperm3.jpeg"
                  alt="Resultado Impermeabilização"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
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
                Pintura interna e externa.
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
              <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg h-full">
                <Image
                  src="/pintura2.jpeg"
                  alt="Processo de Impermeabilização Principal"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-40 lg:h-auto">
                <Image
                  src="/imperm2.jpeg"
                  alt="Detalhe Impermeabilização"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-40 lg:h-auto">
                <Image
                  src="/imperm3.jpeg"
                  alt="Resultado Impermeabilização"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
