import { Crosshair, Magnet, HandCoins, ArrowRight, Star, Clock, Users, MessageCircle, BarChart3, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Crosshair,
    number: '01',
    title: 'Posicionamiento & Oferta',
    problem: 'No puedes vender si nadie sabe qué haces ni por qué deberían elegirte a ti.',
    solution:
      'Definimos tu nicho exacto, el perfil de cliente que paga premium, y creamos una oferta que se diferencia del 99% de productores. Tu "competencia" deja de existir.',
    result:
      'Pasas de "hago un poco de todo" a ser LA referencia en un nicho rentable y específico.',
    color: 'brand',
  },
  {
    icon: Magnet,
    number: '02',
    title: 'Sistema de Captación',
    problem: 'No tienes un flujo predecible de personas interesadas en pagar por tu trabajo.',
    solution:
      'Montamos un sistema de captación directa que atrae clientes cualificados a ti. Sin necesitar seguidores. Sin depender del algoritmo. Sin hacer spam.',
    result:
      'Cada semana entran contactos nuevos que ya necesitan lo que ofreces y pueden pagarlo.',
    color: 'accent-cyan',
  },
  {
    icon: HandCoins,
    number: '03',
    title: 'Cierre & Monetización',
    problem: 'Te da vergüenza hablar de dinero y no sabes cómo cerrar una venta sin parecer un vendedor pesado.',
    solution:
      'Scripts de conversación probados que convierten interés en dinero. Nada de llamadas en frío ni técnicas agresivas: conversaciones naturales que cierran.',
    result:
      'Conviertes contactos en clientes recurrentes que pagan lo que vales. Sin regateos.',
    color: 'accent-green',
  },
];

const mvpIncludes = [
  { icon: BarChart3, text: 'Auditoría completa de tu situación y potencial de monetización' },
  { icon: Crosshair, text: 'Definición de tu nicho rentable y posicionamiento diferencial' },
  { icon: Star, text: 'Creación de tu oferta de servicio premium (pricing incluido)' },
  { icon: Magnet, text: 'Setup completo de tu sistema de captación de clientes' },
  { icon: MessageCircle, text: 'Scripts de venta y cierre adaptados a tu perfil' },
  { icon: Clock, text: '8 semanas de acompañamiento 1:1 con sesiones semanales' },
  { icon: Users, text: 'Acceso a comunidad privada de productores que monetizan' },
  { icon: Lightbulb, text: 'Feedback directo sobre cada acción que ejecutes' },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-mono font-medium text-brand mb-4 tracking-wider uppercase">
            Qué conseguirás
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            No vendemos tareas.{' '}
            <span className="gradient-text">Vendemos resultados.</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Cada pieza del sistema está diseñada con un único objetivo:
            que generes ingresos con tu producción musical. Sin relleno.
          </p>
        </div>

        {/* Services cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {services.map((s, i) => (
            <div
              key={i}
              className="card-hover gradient-border flex flex-col"
            >
              <div className="relative z-10 p-8 flex flex-col flex-1">
                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-text-muted">{s.number}</span>
                  <div className={`w-12 h-12 rounded-xl ${
                    s.color === 'brand' ? 'bg-brand/10' :
                    s.color === 'accent-cyan' ? 'bg-accent-cyan/10' : 'bg-accent-green/10'
                  } flex items-center justify-center`}>
                    <s.icon className={`w-6 h-6 ${
                      s.color === 'brand' ? 'text-brand' :
                      s.color === 'accent-cyan' ? 'text-accent-cyan' : 'text-accent-green'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-red-400/80 mb-3">{s.problem}</p>
                <p className="text-text-secondary mb-6 flex-1">{s.solution}</p>

                {/* Result */}
                <div className={`p-4 rounded-xl ${
                  s.color === 'brand' ? 'bg-brand/5 border border-brand/10' :
                  s.color === 'accent-cyan' ? 'bg-accent-cyan/5 border border-accent-cyan/10' :
                  'bg-accent-green/5 border border-accent-green/10'
                }`}>
                  <p className="text-sm">
                    <span className={`font-semibold ${
                      s.color === 'brand' ? 'text-brand-light' :
                      s.color === 'accent-cyan' ? 'text-accent-cyan' : 'text-accent-green'
                    }`}>→ Resultado: </span>
                    <span className="text-text-secondary">{s.result}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MVP Offer */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-accent-cyan/5 to-brand/5 rounded-3xl blur-xl" />
          <div className="relative gradient-border overflow-hidden">
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              {/* Offer header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-4">
                    <Star className="w-3.5 h-3.5 text-brand" />
                    <span className="text-xs font-semibold text-brand uppercase tracking-wider">Programa insignia</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                    Productor <span className="gradient-text">Rentable</span>
                    <span className="text-lg font-normal text-text-muted ml-3">· 8 semanas</span>
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    El programa de acompañamiento 1:1 que transforma tu talento como productor
                    en un negocio online con clientes reales e ingresos predecibles.
                    Sin fórmulas mágicas: estrategia, ejecución y resultados medibles.
                  </p>
                </div>

                <div className="flex-shrink-0 text-center lg:text-right">
                  <p className="text-sm text-text-muted mb-1">Inversión desde</p>
                  <p className="text-5xl font-extrabold text-text-primary">1.500<span className="text-2xl text-text-muted">€</span></p>
                  <p className="text-sm text-accent-green mt-2 font-medium">Un solo cliente cubre la inversión</p>
                  <p className="text-xs text-text-muted mt-1">Pago único o en 2 cuotas</p>
                </div>
              </div>

              {/* What's included */}
              <div className="mb-10">
                <h4 className="text-lg font-bold text-text-primary mb-6">Qué incluye exactamente:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mvpIncludes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-overlay/50">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-brand" />
                      </div>
                      <span className="text-sm text-text-secondary">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why different */}
              <div className="p-6 rounded-xl bg-surface-overlay border border-brand/10 mb-8">
                <h4 className="text-base font-bold text-text-primary mb-3 text-center">¿Por qué es diferente a un curso o una agencia?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-center">
                  <div>
                    <p className="text-text-muted mb-1">Un curso online</p>
                    <p className="text-red-400">Contenido genérico. Nadie mira tu caso. 0% personalización.</p>
                  </div>
                  <div>
                    <p className="text-text-muted mb-1">Una agencia de marketing</p>
                    <p className="text-red-400">No entienden la industria musical. Queman tu dinero en ads.</p>
                  </div>
                  <div>
                    <p className="text-text-muted mb-1">Productor Rentable</p>
                    <p className="text-accent-green">1:1 contigo. Específico para productores. Solo resultados.</p>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="p-6 rounded-xl bg-surface-overlay border border-border-subtle mb-8">
                <p className="text-text-primary font-medium text-center">
                  <span className="text-brand">Resultado tangible:</span> En 8 semanas tendrás tu posicionamiento definido,
                  una oferta premium validada, un sistema de captación activo y tus primeros clientes
                  (o propuestas enviadas con respuesta).
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://calendly.com/alexproducciononline/llamada-acceso-po" target="_blank" rel="noopener noreferrer"
                  className="cta-button group inline-flex items-center gap-2.5 px-10 py-4 rounded-xl text-base font-bold text-white"
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    Reservar llamada para saber si encajo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <p className="mt-4 text-sm text-text-muted">
                  La llamada es gratuita y sin compromiso · No vendemos en la primera llamada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
