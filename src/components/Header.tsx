import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#especialidades", label: "Especialidades" },
    { href: "#filosofia", label: "Filosofia" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          <a href="#" className="group">
            <span className="font-serif text-xl md:text-2xl font-medium text-foreground tracking-wide">
              Dra. Virgínia
              <span className="text-primary"> Paulinelli</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-accent transition-colors duration-300 tracking-wide"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated py-6 px-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground text-center font-medium rounded-full"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
