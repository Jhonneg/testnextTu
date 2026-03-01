import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-500">Tupi Limpeza</h3>
            <p className="text-slate-400 leading-relaxed">
              Soluções completas em limpeza de fachadas, pintura industrial e
              manutenção predial. Qualidade e segurança para o seu patrimônio.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Fale Conosco
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=R.+Martim+Carvalho,+166+-+Vila+Nogueira,+Diadema+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group"
                >
                  <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0 group-hover:text-blue-400" />
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    R. Martim Carvalho, 166 <br />
                    Vila Nogueira, Diadema - SP
                    <br />
                    CEP 09950-040
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:551140753615" className="flex items-center group">
                  <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 group-hover:text-blue-400" />
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    (11) 4075-3615
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:11 94084-8284" className="flex items-center group">
                  <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 group-hover:text-blue-400" />
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    (11) 94084-8284
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:tupilimpeza@uol.com.br"
                  className="flex items-center group"
                >
                  <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 group-hover:text-blue-400" />
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    tupilimpeza@uol.com.br
                  </span>
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  Seg - Sex: 8h às 17:30h
                  <br />
                  <span className="text-xs text-slate-500">
                    Almoço: 12h - 13h
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Tupi Limpeza. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 md:mt-0">
            Desenvolvido por{" "}
            <span className="text-white">
              <a target="_blank" href="https://jhonneg.is-a.dev/">Jhonne</a>
            </span>
          </p>
        </div>
      </div>
      </footer>
      
  );
}
