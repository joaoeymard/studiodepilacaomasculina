import { motion } from "motion/react";
import { Sparkles, Clock, Shield, Leaf } from "lucide-react";

const experiences = [
  {
    icon: Sparkles,
    title: "Ambiente Masculino",
    description: "Espaço exclusivo e discreto, pensado especialmente para o público masculino."
  },
  {
    icon: Clock,
    title: "Técnicas Especializadas",
    description: "Domínio completo de depilação com máquina e cera, adaptadas ao seu tipo de pele."
  },
  {
    icon: Shield,
    title: "Higiene Impecável",
    description: "Materiais descartáveis e esterilização total dos equipamentos em cada atendimento."
  },
  {
    icon: Leaf,
    title: "Produtos Profissionais",
    description: "Utilizamos apenas produtos de alta qualidade, específicos para pele masculina."
  }
];

export function Experience() {
  return (
    <section className="py-24 px-6 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">A Experiência</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6">
            Depilação masculina profissional
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Máquina ou cera? Você escolhe. Nós garantimos o resultado perfeito com máxima segurança.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="relative rounded-lg overflow-hidden h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1651993382466-0fefd887e901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNjdWxpbmUlMjB3ZWxsbmVzcyUyMHNwYSUyMG1hbnxlbnwxfHx8fDE3NzQwNDQzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Masculine grooming experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="px-12 max-w-xl">
                <p className="text-3xl font-serif text-foreground italic">
                  "Especialização masculina que faz a diferença."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}