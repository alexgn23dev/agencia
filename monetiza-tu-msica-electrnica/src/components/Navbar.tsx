import { useState, useEffect } from 'react';
import { Menu, X, Headphones } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Problema', href: '#problema' },
    { label: 'Solución', href: '#solucion' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
              <Headphones className="w-4.5 h-4.5 text-brand" />
            </div>
            <span className="font-bold text-lg tracking-tight text-text-primary">
              Productor<span className="text-brand">Rentable</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <a
              href="https://calendly.com/alexproducciononline/llamada-acceso-po" target="_blank" rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
            >
              <span className="relative z-10">Reservar llamada</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface-raised/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-text-secondary hover:text-text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/alexproducciononline/llamada-acceso-po" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="cta-button block text-center px-5 py-3 rounded-lg text-sm font-semibold text-white mt-4"
            >
              <span className="relative z-10">Reservar llamada</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
