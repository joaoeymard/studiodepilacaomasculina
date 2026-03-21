import { motion } from "motion/react";
import { Award, Heart, Star } from "lucide-react";
import { siteImages } from "../siteImages";

export function Story() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={siteImages.specialist}
                alt="Foto da sessão nossa história com atendimento de depilação masculina"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Decorative Gold Border */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-primary text-sm tracking-[0.3em] uppercase">Nossa História</span>
              <div className="h-px w-20 bg-primary mt-2" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Especialista em depilação masculina
            </h2>

            <p className="text-primary text-lg md:text-xl tracking-wide">
              Especialista em depilação masculina — +15 anos de experiência.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Com mais de 15 anos de experiência, me especializei em depilação masculina 
              profissional. Domino tanto a técnica com máquina quanto com cera, sempre 
              priorizando seu conforto e resultados impecáveis.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Aqui você encontra um ambiente exclusivo e discreto, onde cada atendimento 
              é personalizado. Porque cuidado masculino merece atenção especializada.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <Award className="w-8 h-8 text-primary mx-auto" />
                <div className="text-2xl font-serif text-primary">15+</div>
                <div className="text-sm text-foreground/70">Anos especializados</div>
              </div>
              <div className="text-center space-y-2">
                <Heart className="w-8 h-8 text-primary mx-auto" />
                <div className="text-2xl font-serif text-primary">1500+</div>
                <div className="text-sm text-foreground/70">Clientes atendidos</div>
              </div>
              <div className="text-center space-y-2">
                <Star className="w-8 h-8 text-primary mx-auto" />
                <div className="text-2xl font-serif text-primary">5.0</div>
                <div className="text-sm text-foreground/70">Avaliação média</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
