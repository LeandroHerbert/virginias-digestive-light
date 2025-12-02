import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative container-wide mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 backdrop-blur-sm">
                Gastroenterologista — CRM 12822 DF
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-up stagger-1 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
              Cuidar da saúde
              <br />
              <span className="text-primary italic">é cuidar de você</span>
            </h1>

            <p className="opacity-0 animate-fade-up stagger-2 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Há mais de 15 anos dedicada ao cuidado do sistema digestivo e ao
              bem-estar das pessoas, com escuta atenta, empatia e medicina
              baseada em evidências.
            </p>

            <div className="opacity-0 animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contato"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-accent transition-all duration-300 shadow-soft hover:shadow-elevated"
              >
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="px-8 py-4 border border-border bg-background/50 backdrop-blur-sm text-foreground font-medium rounded-full hover:bg-card transition-all duration-300"
              >
                Conheça Minha História
              </a>
            </div>

            <div className="opacity-0 animate-fade-up stagger-4 mt-12 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic font-serif">
                "O sistema digestivo fala sobre como vivemos, sentimos e
                nutrimos o que há de essencial em nós."
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="opacity-0 animate-fade-up relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Decorative ring */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-full backdrop-blur-sm" />
                <div className="absolute inset-4 border border-primary/20 rounded-full" />
                
                {/* Image container */}
                <div className="absolute inset-8 bg-gradient-to-br from-sage-light/90 to-cream/90 backdrop-blur-md rounded-full overflow-hidden shadow-glow flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="font-serif text-6xl text-primary/40">VP</span>
                    <p className="text-xs text-muted-foreground mt-2">Dra. Virgínia</p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-background/95 backdrop-blur-sm shadow-elevated rounded-full">
                  <p className="text-sm font-medium text-foreground whitespace-nowrap">
                    +15 anos de experiência
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs uppercase tracking-widest">Descubra</span>
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
