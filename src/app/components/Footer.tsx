import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-serif text-primary">Depilação Masculina</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Especialista em depilação masculina profissional. Máquina e cera com excelência.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="text-foreground/60 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-foreground/60 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-foreground/60 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-foreground mb-4">Informações</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Segunda a Sexta: 9h às 20h</li>
              <li>Sábado: 9h às 17h</li>
              <li>São Paulo, SP</li>
              <li className="pt-2">
                <a href="tel:+5511999999999" className="hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-foreground/50 text-sm">
            © 2026 Studio Premium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}