import { 
  Flame, 
  CircleDot, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Leaf, 
  Wheat 
} from "lucide-react";

const Specialties = () => {
  const specialties = [
    {
      icon: Flame,
      title: "Refluxo Gastroesofágico",
      description:
        "Diagnóstico e tratamento da DRGE com foco em mudanças de estilo de vida e medicina baseada em evidências.",
      highlight: "Nem toda azia é 'normal'",
    },
    {
      icon: CircleDot,
      title: "Gastrite e Dispepsia",
      description:
        "Investigação e tratamento das causas reais da dor de estômago, incluindo a conexão intestino-cérebro.",
      highlight: "Muito além do ácido",
    },
    {
      icon: ShieldCheck,
      title: "Gastrite Autoimune",
      description:
        "Diagnóstico precoce de uma condição frequentemente subdiagnosticada que causa deficiência de B12.",
      highlight: "Causas silenciosas",
    },
    {
      icon: Activity,
      title: "Síndrome do Intestino Irritável",
      description:
        "Abordagem integrada para uma condição que afeta profundamente a qualidade de vida.",
      highlight: "Seu intestino fala",
    },
    {
      icon: Layers,
      title: "Constipação Intestinal",
      description:
        "Tratamento natural e eficaz para restaurar o equilíbrio e ritmo do seu intestino.",
      highlight: "Não é 'normal'",
    },
    {
      icon: Leaf,
      title: "Disbiose, SIBO e IMO",
      description:
        "Investigação e reequilíbrio da microbiota intestinal com base em evidências científicas.",
      highlight: "Microbiota em equilíbrio",
    },
    {
      icon: Wheat,
      title: "Intolerâncias e Alergias",
      description:
        "Diagnóstico correto de intolerâncias, alergias e doença celíaca, evitando restrições desnecessárias.",
      highlight: "Identificar corretamente",
    },
  ];

  return (
    <section id="especialidades" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <div className="decorative-line" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Áreas de Atuação
            </span>
            <div className="decorative-line" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Especialidades em{" "}
            <span className="text-primary italic">Gastroenterologia</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado integral do sistema digestivo, da investigação ao
            tratamento, sempre com foco na qualidade de vida e bem-estar.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elevated"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <specialty.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-gold uppercase tracking-wide">
                    {specialty.highlight}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-foreground mt-1">
                    {specialty.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Cada condição merece uma abordagem individualizada e humanizada.
          </p>
          <a
            href="#contato"
            className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-accent transition-all duration-300 shadow-soft hover:shadow-elevated"
          >
            Marque sua Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
