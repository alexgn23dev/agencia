import { Headphones } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
              <Headphones className="w-4 h-4 text-brand" />
            </div>
            <span className="font-bold text-sm tracking-tight text-text-primary">
              Productor<span className="text-brand">Rentable</span>
            </span>
          </div>
          
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} ProductorRentable. Monetiza tu talento musical.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
