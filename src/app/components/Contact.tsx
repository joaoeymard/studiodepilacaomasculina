import { motion } from "motion/react";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import { businessHours } from "../businessHours";
import { contactInfo } from "../contactInfo";
import { siteImages } from "../siteImages";

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-secondary relative overflow-hidden">
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
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">WhatsApp</div>
                  <div className="text-foreground">{contactInfo.whatsappLabel}</div>
                </div>
              </a>

              <a
                href={contactInfo.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Instagram</div>
                  <div className="text-foreground">{contactInfo.instagramLabel}</div>
                </div>
              </a>

              <a
                href={contactInfo.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Localização</div>
                  <div className="text-foreground">{contactInfo.address}</div>
                  <div className="text-sm text-primary">Abrir no mapa</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60 mb-2">Horário de atendimento</div>
                  <div className="text-foreground space-y-1 text-sm">
                    {businessHours.map(({ label, hours }) => (
                      <div key={label}>
                        {label}: {hours}
                      </div>
                    ))}
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
                src={siteImages.environment}
                alt="Foto da sessão de contatos com ambiente de atendimento masculino"
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
