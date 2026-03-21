import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { contactInfo } from "../contactInfo";
import { siteImages } from "../siteImages";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={siteImages.hero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          src={siteImages.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,0.08)_0%,rgba(10,10,10,0.34)_40%,rgba(10,10,10,0.64)_74%,rgba(4,4,4,0.84)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/68 via-black/42 to-black/82" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-5 sm:gap-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/45 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-primary sm:text-xs">
              Juazeiro do Norte - CE | +15 anos de experiência
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Studio de Depilação Masculina
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-foreground/84 sm:text-xl md:text-2xl">
            Máquina e cera com conforto, discrição e resultado impecável.
          </p>

          <motion.a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-[0_14px_40px_rgba(212,175,55,0.25)] transition-colors hover:bg-primary/90"
          >
            Agendar consulta
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-60"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/35 p-2"
        >
          <motion.div className="h-2 w-1 rounded-full bg-primary/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
