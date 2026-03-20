import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    name: "Depilação com Máquina",
    description: "Rápida e precisa, ideal para grandes áreas e manutenção regular",
    services: [
      "Costas completas",
      "Peito e abdômen",
      "Pernas completas",
      "Braços e ombros"
    ],
    featured: false
  },
  {
    name: "Depilação com Cera",
    description: "Resultados duradouros e pele mais lisa por mais tempo",
    services: [
      "Costas",
      "Peito",
      "Axilas",
      "Virilha"
    ],
    featured: true,
    price: "A partir de R$ 120"
  },
  {
    name: "Pacotes Combinados",
    description: "Máquina + cera na mesma sessão para resultados ideais",
    services: [
      "Corpo completo",
      "Tronco + costas",
      "Pacote mensal",
      "Manutenção regular"
    ],
    featured: false
  }
];

export function Services() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6">
            Escolha seu método
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Máquina para praticidade ou cera para durabilidade. Ou combine ambas para o melhor resultado.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`h-full bg-card border rounded-lg p-8 transition-all duration-300 ${
                  category.featured
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {category.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                      Mais Procurado
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-serif text-foreground mb-3">
                    {category.name}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{service}</span>
                    </li>
                  ))}
                </ul>

                {category.price && (
                  <div className="mb-6 pt-4 border-t border-border">
                    <p className="text-primary text-lg">{category.price}</p>
                  </div>
                )}

                <button className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6">
            Primeira vez? Agende uma consulta gratuita para avaliarmos juntos a melhor opção para você.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Agendar Consulta Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  );
}