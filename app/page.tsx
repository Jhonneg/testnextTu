import Card from "@/components/Card";
import { PaintRoller, User2, Bubbles, FastForward } from "lucide-react";
export default function Home() {
  return (
    <>
      {/* Hero */}
      <main className="">
        <section className="w-full h-96 bg-cover bg-center bg-no-repeat bg-[url('/example.webp')]">
          <div className="flex flex-col items-start justify-center h-full text-white">
            <div className="m-9">
              <h1 className="text-2xl md:text-5xl w-1/2 m-9 font-bold">
                Tupi limpeza e pintura tem mais de 32 anos de experiência em
                limpeza e pintura de faixadas.
              </h1>
              <p>
                Esta vasta experiência nos permite entrega do melhor serviço,
                com qualidade, segurança, garantia, agilidade, tudo isso dentro
                do prazo.
              </p>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between h-screen w-full">
          {/* <div className="flex justify-center items-center w-1/2 h-72 rounded-2xl mr-2 bg-cover bg-center bg-no-repeat bg-[url('/example2.webp')]">
            <p className="m-6 text-4xl font-bold text-white">
              Tupi Limpeza e pinturas
            </p>
            <p className="text-white m-6 text-2xl">
              Tupi Limpeza e pinturas atua há mais de 32 anos no mercado de
              pintura e limpeza indutrial, com entrega rápida e com qualidade.
            </p>
          </div> */}
          <div className="w-full m-6 grid grid-cols-3 grid-rows-2 gap-5">
            <Card
              icon={User2}
              text="Equipe treinada, certificada e experiênte para trabalho em altura e
          espaços confinados."
              title="Equipe própria"
            />
            <div className="my-5">
              <p className="font-bold flex gap-5 ">
                <Bubbles /> Limpeza de faixadas
              </p>
              <p>{/* Enfatizar tecnicas de limpeza de faixada */}</p>
            </div>
            <div className="my-5">
              <p className="font-bold flex gap-5 ">
                <PaintRoller />
                Pinturas industriais
              </p>
              <p>{/* Enfatizar tecnicas de pintura de faixada */}</p>
            </div>
            <div>
              <p className="font-bold flex gap-5">
                {" "}
                <FastForward />
                Agilidade
              </p>
              <p>
                Trabalho noturno, finais de semana e feriados, sem parar a
                produção.
              </p>
            </div>
          </div>
        </div>
        {/* nossos clients */}
        <div className="flex items-center justify-center h-80">
          <p className="font-bold text-3xl">Nossos clientes</p>
        </div>
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
