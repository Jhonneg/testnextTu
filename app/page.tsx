import Card from "@/components/Card";
import Marquee from "@/components/Marquee";
import {
  PaintRoller,
  User2,
  Bubbles,
  FastForward,
  Headset,
  Shield,
} from "lucide-react";
export default function Home() {
  return (
    <>
      {/* Hero */}
      <main>
        <section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/example.webp')]">
          <div
            className="flex items-center justify-start h-full text-white 
           backdrop-grayscale backdrop-blur-xs"
          >
            <div className="m-9">
              <p className="text-2xl md:text-5xl  font-bold">
                Tupi limpeza e Pintura Eireli possui mais de 32 anos de
                experiência em limpeza e pintura de faixadas.
              </p>
              <div className="flex items-center justify-end mt-40">
                <h1 className="text-2xl">
                  Operamos por todo ABC paulista e São Paulo.
                </h1>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between h-fit w-full sm:mb-7">
          <div className="w-full m-6 grid grid-cols-3 grid-rows-2 gap-5">
            <Card
              icon={User2}
              title="Equipe própria"
              text="Equipe treinada, certificada e experiênte para trabalho em altura e
          espaços confinados."
            />
            <Card
              icon={Bubbles}
              title="Limpeza de faixadas"
              text="Hidrojaetamento etc."
            />
            <Card
              icon={PaintRoller}
              text="Epóxi (pisos), Poliuretano (UV), 
              Esmalte Sintético, Tinta Intumescente (proteção contra fogo), 
              Anticoversiva."
              title="Pintura"
            />
            <Card
              icon={FastForward}
              text="Trabalho noturno, finais de semana e feriados, sem parar a
                produção."
              title="Agilidade"
            />
            <Card
              icon={Headset}
              title="Suporte Continuo"
              text="Apoio constante durante o serviço, acompanhamento técnico, á demanda do seu empreendimento"
            />
            <Card
              icon={Shield}
              title="Segurança"
              text="Trabalhamos com profissionais treinados e certificados, seguindos as Normas Reguladoras"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-screen">
          <p className="font-bold text-3xl">Nossa Operação</p>
        </div>

        <div className="flex items-center justify-center w-full">
          <p className="font-bold text-3xl">Nossos clientes</p>
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
