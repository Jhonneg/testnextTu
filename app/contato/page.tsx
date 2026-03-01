import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="bg-blue-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fale Conosco</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender sua empresa. Entre em contato
            diretamente por um de nossos canais para solicitar um orçamento
            técnico ou agendar uma visita.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col space-y-4">
            <a
              href="https://wa.me/5511940848284"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-green-50 border-2 border-green-200 p-6 rounded-2xl hover:border-green-500 hover:bg-green-100 transition-all shadow-sm"
            >
              <div className="flex items-center">
                <div className="bg-green-500 p-4 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-bold text-green-700 uppercase tracking-wider mb-1">
                    Orçamento Rápido
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    (11) 94084-8284
                  </p>
                  <p className="text-green-800 font-medium mt-1">
                    Clique para abrir o WhatsApp
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-green-600 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all hidden sm:block" />
            </a>

            <a
              href="tel:551140753615"
              className="group flex items-center bg-white border border-gray-200 p-6 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="bg-blue-50 p-4 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Ligação Fixa
                </p>
                <p className="text-xl font-bold text-gray-900">
                  (11) 4075-3615
                </p>
              </div>
            </a>

            <a
              href="mailto:tupilimpeza@uol.com.br"
              className="group flex items-center bg-white border border-gray-200 p-6 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="bg-blue-50 p-4 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  E-mail Corporativo
                </p>
                <p className="text-xl font-bold text-gray-900 break-all">
                  tupilimpeza@uol.com.br
                </p>
              </div>
            </a>

            <div className="flex items-start bg-white border border-gray-200 p-6 rounded-2xl">
              <div className="bg-gray-100 p-4 rounded-xl text-gray-600">
                <MapPin className="w-6 h-6 mb-4" />
                <Clock className="w-6 h-6" />
              </div>
              <div className="ml-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Endereço Sede
                  </p>
                  <p className="text-base font-semibold text-gray-900">
                    R. Martim Carvalho, 166 <br />
                    Vila Nogueira, Diadema - SP <br />
                    CEP: 09950-040
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Horário de Atendimento
                  </p>
                  <p className="text-base font-semibold text-gray-900">
                    Segunda a Sexta <br />
                    08h às 12h | 13h às 17:30h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden min-h-[400px] lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.666329437937!2d-46.596856!3d-23.687844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce446219803367%3A0x6c53569769395123!2sR.%20Martim%20Carvalho%2C%20166%20-%20Vila%20Nogueira%2C%20Diadema%20-%20SP%2C%2009950-040!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização Tupi Limpeza"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="mt-24 mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600">
              Tire suas dúvidas antes de entrar em contato
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FAQItem
              question="Vocês atendem em quais cidades?"
              answer="Nossa base é em Diadema, mas atendemos indústrias, condomínios e empresas em toda a Grande São Paulo, ABC Paulista e interior do estado sob consulta."
            />
            <FAQItem
              question="A equipe possui certificação NR-35?"
              answer="Sim. Todos os nossos colaboradores são treinados e certificados para Trabalho em Altura (NR-35) e utilizam todos os EPIs necessários para garantir segurança total."
            />
            <FAQItem
              question="Vocês emitem Nota Fiscal?"
              answer="Sim, somos uma empresa legalizada e emitimos Nota Fiscal para todos os serviços prestados, atendendo exigências de condomínios e grandes indústrias."
            />
            <FAQItem
              question="Como funciona o orçamento?"
              answer="Após o contato inicial, podemos agendar uma visita técnica gratuita ao local para avaliar a metragem, as condições da estrutura e a complexidade do serviço para enviar uma proposta precisa."
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{answer}</p>
    </div>
  );
}
