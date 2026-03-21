import { Heart } from "lucide-react";
import { businessHours } from "../businessHours";
import { contactInfo } from "../contactInfo";

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
              <span className="text-xl font-serif text-primary">Studio de Depilação Masculina</span>
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
              {businessHours.map(({ label, hours }) => (
                <li key={label}>
                  {label}: {hours}
                </li>
              ))}
              <li>
                <a
                  href={contactInfo.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.address}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: {contactInfo.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram: {contactInfo.instagramLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-foreground/50 text-sm">
            © 2026 Studio de Depilação Masculina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
