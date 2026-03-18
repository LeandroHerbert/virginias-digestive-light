import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <div className="decorative-line" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Contato
            </span>
            <div className="decorative-line" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Agende sua <span className="text-primary italic">consulta</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Será um prazer receber você. Entre em contato para agendar seu
            atendimento na Clínica Biodigest.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location Card */}
          <div className="p-8 bg-background rounded-2xl shadow-soft">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                  Clínica Biodigest
                </h3>
                <p className="text-muted-foreground">Brasília, DF</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Segunda a Sexta, 8h às 18h
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Entre em contato para agendamento
                </span>
              </div>
            </div>
          </div>

          {/* Social Card */}
          <div className="p-8 bg-gradient-to-br from-primary to-accent rounded-2xl text-primary-foreground">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary-foreground/20 rounded-xl">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium mb-1">
                  Siga no Instagram
                </h3>
                <p className="opacity-80">Dicas e informações sobre saúde digestiva</p>
              </div>
            </div>

            <p className="mb-6 opacity-90 leading-relaxed">
              Compartilho informação, consciência e cuidado. Conteúdos para
              ajudar você a fazer escolhas mais saudáveis.
            </p>

            <a
              href="https://www.instagram.com/virginiapaulinelligastro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-medium rounded-full hover:bg-primary-foreground/90 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @virginiapaulinelligastro
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://wa.me/5561999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-lg font-medium rounded-full hover:bg-accent transition-all duration-300 shadow-elevated hover:shadow-glow"
          >
            <Phone className="w-5 h-5" />
            Agendar pelo WhatsApp
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Atendimento personalizado e humanizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
