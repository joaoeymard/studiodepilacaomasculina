import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZ3Jvb21pbmclMjBiYXJiZXIlMjBsdXh1cnl8ZW58MXx8fHwxNzc0MDQ0MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury male grooming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-black/40 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary tracking-wider uppercase">Depilação Masculina Exclusiva</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight">
            Mais do que grooming.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Depilação masculina profissional na máquina e na cera. Conforto, higiene e resultados impecáveis.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Agendar Consulta
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}