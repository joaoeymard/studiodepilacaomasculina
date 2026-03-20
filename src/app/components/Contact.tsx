import { motion } from "motion/react";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-6 bg-secondary relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary text-sm tracking-[0.3em] uppercase">Contato</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6">
                Agende seu horário
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Atendimento masculino exclusivo. Entre em contato e descubra o padrão de qualidade que você merece.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Telefone</div>
                  <div className="text-foreground">(11) 99999-9999</div>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Instagram</div>
                  <div className="text-foreground">@seu_instagram</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Localização</div>
                  <div className="text-foreground">São Paulo, SP</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60 mb-2">Horário de atendimento</div>
                  <div className="text-foreground space-y-1 text-sm">
                    <div>Segunda a Sexta: 9h às 20h</div>
                    <div>Sábado: 9h às 17h</div>
                    <div className="text-foreground/60">Domingo: Fechado</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1623659952511-e7e5445f4f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwc2Fsb24lMjBibGFjayUyMGdvbGR8ZW58MXx8fHwxNzc0MDQwODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant beauty salon"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-foreground text-lg font-serif italic">
                  "Especialização masculina com total discrição e profissionalismo"
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}