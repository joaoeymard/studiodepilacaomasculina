import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Audience = "masculino" | "feminino";
type ServiceGroupId = "head" | "upper" | "lower";

type ServiceItem = {
  id: string;
  label: string;
  price: number;
};

type ServiceGroup = {
  id: ServiceGroupId;
  title: string;
  items: ServiceItem[];
};

type PriceMap = {
  audience: Audience;
  methodLabel: string;
  eyebrowMethod?: string;
  intro: string;
  groups: ServiceGroup[];
};

const priceMaps: PriceMap[] = [
  {
    audience: "masculino",
    methodLabel: "Cera ou maquina de aparar pelos",
    intro:
      "Atendimento masculino como foco principal, com os valores organizados por area do corpo para consulta rapida.",
    groups: [
      {
        id: "head",
        title: "Cabeca",
        items: [
          { id: "m-sobrancelhas", label: "Sobrancelhas", price: 35 },
          { id: "m-nariz", label: "Nariz", price: 15 },
          { id: "m-orelhas", label: "Orelhas", price: 15 },
          { id: "m-nuca", label: "Nuca", price: 15 }
        ]
      },
      {
        id: "upper",
        title: "Torax e membros superiores",
        items: [
          { id: "m-torax", label: "Peito + abdomen", price: 60 },
          { id: "m-costas", label: "Costas", price: 60 },
          { id: "m-axila", label: "Axila", price: 25 },
          { id: "m-bracos", label: "Bracos completos", price: 50 }
        ]
      },
      {
        id: "lower",
        title: "Membros inferiores",
        items: [
          { id: "m-pernas", label: "Pernas completas", price: 80 },
          { id: "m-virilha", label: "Virilha completa", price: 80 },
          { id: "m-nadegas", label: "Nadegas", price: 40 },
          { id: "m-anus", label: "Anus", price: 20 }
        ]
      }
    ]
  },
  {
    audience: "feminino",
    methodLabel: "Cera",
    eyebrowMethod: "Henna disponivel para acabamento",
    intro:
      "Tabela complementar para o atendimento feminino, separada por sessoes para facilitar a leitura dos valores.",
    groups: [
      {
        id: "head",
        title: "Cabeca",
        items: [
          { id: "f-sobrancelhas", label: "Sobrancelhas", price: 35 },
          { id: "f-sobrancelhas-henna", label: "Sobrancelhas + henna", price: 45 },
          { id: "f-henna", label: "Henna", price: 20 },
          { id: "f-nariz", label: "Nariz", price: 15 },
          { id: "f-buco", label: "Buco", price: 15 },
          { id: "f-queixo", label: "Queixo", price: 10 },
          { id: "f-bochechas", label: "Bochechas", price: 20 },
          { id: "f-testa", label: "Testa", price: 15 },
          { id: "f-rosto-total", label: "Rosto total", price: 60 },
          { id: "f-nuca", label: "Nuca", price: 15 }
        ]
      },
      {
        id: "upper",
        title: "Torax e membros superiores",
        items: [
          { id: "f-seios", label: "Entre os seios", price: 15 },
          { id: "f-axila", label: "Axila", price: 25 },
          { id: "f-braco", label: "Braco completo", price: 50 },
          { id: "f-maos", label: "Maos", price: 10 },
          { id: "f-faixa-abdomen", label: "Faixa do abdomen", price: 15 }
        ]
      },
      {
        id: "lower",
        title: "Membros inferiores",
        items: [
          { id: "f-virilha", label: "Virilha completa + anus", price: 60 },
          { id: "f-perna-completa", label: "Perna completa", price: 70 },
          { id: "f-meia-perna", label: "Meia perna", price: 35 },
          { id: "f-pes", label: "Pes", price: 10 }
        ]
      }
    ]
  }
];

function formatPrice(price: number) {
  return `R$ ${price}`;
}

function sumSelectedPrices(map: PriceMap, selectedIds: string[]) {
  const selectedSet = new Set(selectedIds);
  return map.groups
    .flatMap((group) => group.items)
    .filter((item) => selectedSet.has(item.id))
    .reduce((total, item) => total + item.price, 0);
}

function GroupCard({
  group,
  selectedIds,
  onToggle
}: {
  group: ServiceGroup;
  selectedIds: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <section className="rounded-[1.75rem] border border-primary/12 bg-black/25 p-5">
      <div className="mb-4">
        <h3 className="text-2xl font-serif text-foreground">{group.title}</h3>
      </div>

      <div className="grid gap-3">
        {group.items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onToggle(item.id)}
            aria-pressed={selectedIds.includes(item.id)}
            className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-left transition-all ${
              selectedIds.includes(item.id)
                ? "border-primary bg-primary/12 shadow-[0_12px_30px_rgba(212,175,55,0.12)]"
                : "border-primary/10 bg-black/55 hover:border-primary/30 hover:bg-black/65"
            }`}
          >
            <div className="text-sm font-medium leading-snug text-foreground sm:text-base">
              {item.label}
            </div>
            <div className="whitespace-nowrap text-lg text-primary">
              {formatPrice(item.price)}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-3 text-sm uppercase tracking-[0.3em] transition-all ${
        active
          ? "bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(212,175,55,0.25)]"
          : "border border-primary/18 bg-black/30 text-primary hover:bg-primary/10"
      }`}
    >
      {children}
    </button>
  );
}

export function Services() {
  const [activeAudience, setActiveAudience] = useState<Audience>("masculino");
  const [selectedByAudience, setSelectedByAudience] = useState<
    Record<Audience, string[]>
  >({
    masculino: [],
    feminino: []
  });
  const currentMap =
    priceMaps.find((map) => map.audience === activeAudience) ?? priceMaps[0];
  const selectedIds = selectedByAudience[activeAudience];
  const selectedTotal = sumSelectedPrices(currentMap, selectedIds);

  function toggleSelection(itemId: string) {
    setSelectedByAudience((current) => {
      const audienceSelections = current[activeAudience];
      const nextSelections = audienceSelections.includes(itemId)
        ? audienceSelections.filter((id) => id !== itemId)
        : [...audienceSelections, itemId];

      return {
        ...current,
        [activeAudience]: nextSelections
      };
    });
  }

  function clearSelections() {
    setSelectedByAudience((current) => ({
      ...current,
      [activeAudience]: []
    }));
  }

  return (
    <section className="bg-gradient-to-b from-black to-secondary px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Tabela de precos
          </span>
          <h2 className="mt-4 text-4xl font-serif text-foreground md:text-5xl">
            Valores por sessao do corpo
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
            Primeiro voce escolhe o publico. Depois consulta os valores em uma lista mais limpa, separada por cabeca, torax e membros superiores, e membros inferiores.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.25rem] border border-primary/15 bg-card/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-7"
        >
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <TabButton
                  active={activeAudience === "masculino"}
                  onClick={() => setActiveAudience("masculino")}
                >
                  Masculino
                </TabButton>
                <TabButton
                  active={activeAudience === "feminino"}
                  onClick={() => setActiveAudience("feminino")}
                >
                  Feminino
                </TabButton>
              </div>

              <div className="max-w-2xl">
                <h3 className="text-3xl font-serif text-foreground sm:text-4xl">
                  {activeAudience === "masculino"
                    ? "Atendimento masculino"
                    : "Atendimento feminino"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                  {currentMap.intro}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-black/30 px-4 py-4 text-sm text-foreground/75 lg:min-w-[18rem]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary/80">
                Metodo
              </p>
              <p className="mt-2 text-base text-foreground">{currentMap.methodLabel}</p>
              {currentMap.eyebrowMethod && (
                <p className="mt-2 text-sm text-foreground/60">
                  {currentMap.eyebrowMethod}
                </p>
              )}
            </div>
          </div>

          <div className="sticky top-4 z-20 mb-8 flex flex-col gap-4 rounded-[1.5rem] border border-primary/12 bg-black/85 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary/80">
                Simulador de valores
              </p>
              <p className="mt-2 text-sm text-foreground/65">
                Clique nos servicos para montar uma soma rapida.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <div className="text-sm text-foreground/65">
                {selectedIds.length} {selectedIds.length === 1 ? "item selecionado" : "itens selecionados"}
              </div>
              <div className="text-3xl font-serif text-primary">
                {formatPrice(selectedTotal)}
              </div>
              <button
                type="button"
                onClick={clearSelections}
                className="rounded-full border border-primary/18 px-4 py-2 text-xs uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary/10"
              >
                Limpar selecao
              </button>
            </div>
          </div>

          <div className="grid gap-5">
            {currentMap.groups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                selectedIds={selectedIds}
                onToggle={toggleSelection}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-foreground/70">
            Quer montar uma sessao sob medida ou combinar regioes no mesmo horario?
          </p>
          <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-primary/90">
            <span>Agendar atendimento</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
