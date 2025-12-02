import { Ear, BookOpen, Heart, Sparkles } from "lucide-react";

const Philosophy = () => {
  const pillars = [
    {
      icon: Ear,
      title: "Escuta Atenta",
      description:
        "Dedico tempo para ouvir sua história, entender seus sintomas e compreender como você vive.",
    },
    {
      icon: BookOpen,
      title: "Ciência e Evidências",
      description:
        "Tratamentos baseados nas melhores evidências científicas, traduzidos de forma acessível.",
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description:
        "Cada paciente é único. Considero não apenas sintomas, mas hábitos, emoções e contexto de vida.",
    },
    {
      icon: Sparkles,
      title: "Leveza no Cuidar",
      description:
        "Orientações práticas para uma vida com mais equilíbrio, consciência e bem-estar.",
    },
  ];

  return (
    <section id="filosofia" className="section-padding bg-sage-light/50">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="decorative-line" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Filosofia de Cuidado
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Saúde é sentir-se{" "}
              <span className="text-primary italic">compreendido</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Com olhar atento, escuta aberta e compromisso com a medicina
                baseada em evidências, procuro traduzir o conhecimento
                científico em orientações acessíveis, que inspirem escolhas mais
                saudáveis e uma vida com leveza.
              </p>
              <p>
                Quero que cada pessoa que me procura sinta-se acolhida — porque
                saúde também é sentir-se compreendido, ouvido e respeitado.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="font-serif text-xl italic text-foreground">
                "Que este seja um ponto de encontro entre a ciência, o cuidado e
                a leveza de viver bem."
              </p>
            </blockquote>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
