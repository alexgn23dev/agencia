import { ArrowRight, Clock, Shield, Headphones } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="reservar" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-brand/5 to-surface" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/8 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Equalizer decoration */}
        <div className="flex items-end justify-center gap-[4px] h-10 mb-8">
          {['eq-1', 'eq-3', 'eq-5', 'eq-2', 'eq-4', 'eq-1', 'eq-3', 'eq-5', 'eq-2', 'eq-4', 'eq-1'].map((cls, i) => (
            <div
              key={i}
              className={`w-[4px] rounded-full bg-gradient-to-t from-brand/60 to-brand ${cls}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Tienes el talento.
          <br />
          <span className="gradient-text">Te falta el sistema para monetizarlo.</span>
        </h2>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed">
          No necesitas más plugins. No necesitas más seguidores. No necesitas que nadie te descubra.
        </p>
        <p className="text-lg sm:text-xl text-text-primary max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Necesitas un sistema que convierta tu talento en ingresos predecibles.
          Empieza con una conversación de 30 minutos.
        </p>

        {/* CTA Button */}
        <a
          href="https://calendly.com/alexproducciononline/llamada-acceso-po" target="_blank" rel="noopener noreferrer"
          className="cta-button group inline-flex items-center gap-3 px-10 sm:px-14 py-5 rounded-2xl text-lg font-bold text-white pulse-glow mb-6"
        >
          <span className="relative z-10 flex items-center gap-3">
            Reserva tu llamada estratégica gratuita
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand/60" />
            <span>30 minutos</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-text-muted" />
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-brand/60" />
            <span>Sin compromiso</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-text-muted" />
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-brand/60" />
            <span>Solo productores con nivel</span>
          </div>
        </div>

        {/* Scarcity note */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-overlay border border-brand/20">
          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-sm text-text-secondary">
            Aceptamos máximo <span className="text-text-primary font-semibold">5 productores nuevos al mes</span>
          </span>
        </div>

        {/* Alternative hooks for A/B testing */}
        <div className="mt-20 pt-12 border-t border-border-subtle">
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-6">
            Titulares alternativos para testing
          </p>
          <div className="space-y-3">
            <p className="text-xl sm:text-2xl font-bold text-text-secondary/60">
              "Tu música suena a 10.000€. Tu cuenta bancaria suena a 0."
            </p>
            <p className="text-xl sm:text-2xl font-bold text-text-secondary/40">
              "El problema no es tu talento. Es que nadie te enseñó a monetizarlo."
            </p>
            <p className="text-xl sm:text-2xl font-bold text-text-secondary/20">
              "Deja de producir gratis. Empieza a producir para facturar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
