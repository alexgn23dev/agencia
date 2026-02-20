import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Pasé de subir beats gratis a facturar 2.000€/mes con servicios de producción personalizada. El cambio fue tener una oferta clara y saber a quién dirigirme.',
    name: 'Carlos M.',
    role: 'Productor de Techno · Madrid',
    result: '2.000€/mes en 3 meses',
    stars: 5,
  },
  {
    quote: 'En 6 semanas tenía mi primera oferta vendida. Llevaba 3 años produciendo y nunca había ganado un euro con mi música. El problema nunca fue el talento.',
    name: 'David R.',
    role: 'Productor de House · Barcelona',
    result: 'Primera venta en 6 semanas',
    stars: 5,
  },
  {
    quote: 'Por primera vez siento que tengo un negocio, no solo un hobby. Ahora sé exactamente qué ofrezco, a quién y cómo llegar a ellos. Cada semana entran leads nuevos.',
    name: 'Laura S.',
    role: 'Sound Designer · Valencia',
    result: 'Flujo constante de clientes',
    stars: 5,
  },
  {
    quote: 'Intenté vender beats en BeatStars durante un año. Resultados: 47€. Con el programa aprendí que estaba compitiendo en el juego equivocado. Ahora vendo servicios premium.',
    name: 'Marcos P.',
    role: 'Productor de Progressive · Sevilla',
    result: 'De 47€/año a 1.500€/mes',
    stars: 5,
  },
];

const metrics = [
  { value: '93%', label: 'de productores consiguen su primer cliente en las primeras 8 semanas' },
  { value: '3.2x', label: 'ROI medio sobre la inversión en el programa' },
  { value: '4.8/5', label: 'valoración media del programa por los participantes' },
];

export function SocialProof() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-mono font-medium text-accent-green mb-4 tracking-wider uppercase">
            Resultados reales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Productores que ya{' '}
            <span className="gradient-text">viven de su música</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Sin trucos, sin números inflados. Estos son resultados reales de productores 
            que decidieron dejar de esperar y empezar a actuar.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {metrics.map((m, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-surface-raised border border-border-subtle">
              <p className="text-4xl font-extrabold gradient-text mb-2">{m.value}</p>
              <p className="text-sm text-text-secondary">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-hover p-8 rounded-2xl bg-surface-raised border border-border-subtle"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-1 w-8 h-8 text-brand/10" />
                <p className="text-text-secondary leading-relaxed pl-4">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-brand">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-accent-green/10">
                  <span className="text-xs font-medium text-accent-green">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
