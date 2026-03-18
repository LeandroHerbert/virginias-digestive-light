import { Award, GraduationCap, Heart, Stethoscope } from "lucide-react";
import virginiaAbout from "@/assets/virginia-about.jpg";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Gastroenterologia pelo Hospital de Base do DF",
    },
    {
      icon: Stethoscope,
      title: "Atuação",
      description: "Clínica Biodigest e Secretaria de Saúde do DF",
    },
    {
      icon: Award,
      title: "Registro",
      description: "CRM 12822 DF | RQE 8714",
    },
    {
      icon: Heart,
      title: "Experiência",
      description: "Mais de 15 anos de dedicação",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image/Visual side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-sage-light via-cream to-background rounded-2xl overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-serif text-5xl text-primary">VP</span>
                  </div>
                  <p className="font-serif text-xl text-muted-foreground italic">
                    Dra. Virgínia Paulinelli
                  </p>
                </div>
              </div>
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-8 -right-4 md:right-8 max-w-xs bg-background p-6 rounded-xl shadow-elevated">
              <p className="font-serif text-sm italic text-foreground leading-relaxed">
                "Mais do que tratar doenças, escolhi cuidar de pessoas."
              </p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="decorative-line" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Sobre
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Uma jornada dedicada ao{" "}
              <span className="text-primary italic">cuidado</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Há mais de 15 anos, dedico minha vida ao cuidado do sistema
                digestivo e ao bem-estar das pessoas que confiam em mim. Minha
                formação em Gastroenterologia pelo Hospital de Base do Distrito
                Federal foi o início de uma jornada que me ensinou algo
                essencial: <strong className="text-foreground">a medicina é feita de ciência, mas também de
                escuta, empatia e presença.</strong>
              </p>
              <p>
                Hoje, atuo na Clínica Biodigest, onde sigo acompanhando de perto
                cada paciente, buscando compreender não apenas sintomas, mas
                histórias, hábitos, emoções e modos de viver.
              </p>
              <p>
                Acredito que o equilíbrio da saúde começa de dentro — e que
                cuidar do nosso corpo é também um gesto de reconexão com quem
                somos.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-colors duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-medium text-foreground text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
