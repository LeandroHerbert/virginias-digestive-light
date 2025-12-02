const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-forest text-primary-foreground">
      <div className="container-wide mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl mb-1">
              Dra. Virgínia Paulinelli
            </p>
            <p className="text-sm opacity-70">
              Médica Gastroenterologista | CRM 12822 DF | RQE 8714
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#sobre"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Sobre
            </a>
            <a
              href="#especialidades"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Especialidades
            </a>
            <a
              href="#contato"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Dra. Virgínia Paulinelli. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
