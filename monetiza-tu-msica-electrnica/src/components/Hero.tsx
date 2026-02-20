import { ArrowRight, Play } from 'lucide-react';

function Equalizer() {
  return (
    <div className="flex items-end gap-[3px] h-8">
      {['eq-1', 'eq-2', 'eq-3', 'eq-4', 'eq-5', 'eq-2', 'eq-3'].map((cls, i) => (
        <div
          key={i}
          className={`w-[3px] rounded-full bg-gradient-to-t from-brand to-accent-cyan ${cls}`}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-cyan/3 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-overlay border border-border-subtle mb-8">
            <Equalizer />
            <span className="text-sm text-text-secondary">
              Para productores que quieren <span className="text-brand font-medium">vivir de su música</span>
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Produces que suenan a{' '}
            <span className="gradient-text">hit</span>
            <br />
            <span className="text-text-secondary font-semibold">
              Ingresos que suenan a{' '}
              <span className="gradient-text-warm">cero</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Ayudamos a productores de música electrónica con talento real a construir un 
            <span className="text-text-primary font-medium"> negocio online rentable </span>
            desde su home studio. Sin depender de actuaciones. Sin esperar que Spotify te descubra.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#reservar"
              className="cta-button group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Reserva tu llamada estratégica
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#problema"
              className="group inline-flex items-center gap-2.5 px-6 py-4 rounded-xl text-base font-medium text-text-secondary hover:text-text-primary transition-colors border border-border-subtle hover:border-white/10"
            >
              <Play className="w-4 h-4 text-brand" />
              Descubre cómo funciona
            </a>
          </div>

          {/* Sub-CTA text */}
          <p className="animate-fade-in-up delay-400 text-sm text-text-muted">
            Plazas limitadas · Sin compromiso · Solo para productores con nivel técnico demostrado
          </p>

          {/* Social proof bar */}
          <div className="animate-fade-in-up delay-500 mt-16 pt-8 border-t border-border-subtle">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <p className="text-2xl font-bold text-text-primary">+50</p>
                <p className="text-sm text-text-muted">Productores asesorados</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border-subtle" />
              <div className="text-center">
                <p className="text-2xl font-bold text-text-primary">90 días</p>
                <p className="text-sm text-text-muted">Para primeros ingresos</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border-subtle" />
              <div className="text-center">
                <p className="text-2xl font-bold text-text-primary">2.000€+</p>
                <p className="text-sm text-text-muted">Ingreso medio mensual</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
