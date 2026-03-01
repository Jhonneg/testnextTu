import {
  Users,
  Droplets,
  PaintRoller,
  FastForward,
  Headset,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Equipe Própria",
    description:
      "Equipe treinada, certificada e experiente para trabalho em altura e espaços confinados.",
  },
  {
    icon: Droplets,
    title: "Limpeza de Fachadas",
    description:
      "Hidrojateamento, Limpeza de lonas, Limpeza de calhas e tratamento de superfícies.",
  },
  {
    icon: PaintRoller,
    title: "Pintura Industrial",
    description:
      "Epóxi, Esmalte Sintético, Acrílica, Latex e tratamentos anticorrosivos especiais.",
  },
  {
    icon: FastForward,
    title: "Agilidade",
    description:
      "Trabalho noturno, finais de semana e feriados, sem parar a sua produção.",
  },
  {
    icon: Headset,
    title: "Suporte Contínuo",
    description:
      "Apoio constante durante o serviço, acompanhamento técnico à demanda do empreendimento.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Trabalhamos com profissionais treinados e certificados, seguindo rigorosamente as Normas Regulamentadoras.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center text-center h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <feature.icon
                  className="w-12 h-12 text-black"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
