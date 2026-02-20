import { Crosshair, Magnet, HandCoins, ArrowRight, Star, Clock, Users, MessageCircle, BarChart3, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Crosshair,
    number: '01',
    title: 'Posicionamiento & Oferta',
    problem: 'No puedes vender si no sabes qué vendes.',
    solution:
      'Definimos tu nicho, tu cliente ideal y una oferta que se vende sola.',
    result:
      'Dejas de ser "un productor más" y te conviertes en LA opción para un tipo de cliente específico.',
    color: 'brand',
  },
  {
    icon: Magnet,
    number: '02',
    title: 'Sistema de Captación',
    problem: 'No tienes un flujo predecible de clientes.',
    solution:
      'Montamos un sistema para que lleguen clientes cualificados a ti, sin depender de algoritmos ni de tener miles de seguidores.',
    result:
      'Un flujo predecible de personas interesadas en pagar por tus servicios.',
    color: 'accent-cyan',
  },
  {
    icon: HandCoins,
    number: '03',
    title: 'Cierre y Monetización',
    problem: 'No sabes cómo convertir interés en dinero.',
    solution:
      'Te enseñamos a presentar tu servicio y cerrar ventas sin ser un vendedor pesado. Conversaciones naturales que convierten.',
    result:
      'Conviertes contactos en clientes que pagan lo que vales.',
    color: 'accent-green',
  },
];

const mvpIncludes = [
  { icon: BarChart3, text: 'Auditoría completa de tu situación actual' },
  { icon: Crosshair, text: 'Definición de posicionamiento y nicho' },
  { icon: Star, text: 'Creación de tu oferta de servicio premium' },
  { icon: Magnet, text: 'Setup del sistema de captación de clientes' },
  { icon: MessageCircle, text: 'Scripts de venta y cierre adaptados a ti' },
  { icon: Clock, text: '8 semanas de acompañamiento 1:1' },
  { icon: Users, text: 'Acceso a comunidad privada de productores' },
  { icon: Lightbulb, text: 'Sesiones de estrategia semanales' },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-mono font-medium text-brand mb-4 tracking-wider uppercase">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Lo que hacemos{' '}
            <span className="gradient-text">(y lo que consigues)</span>
          </h2>
          <p className="text-lg text-text-secondary">
            No vendemos tareas. Vendemos resultados. Cada servicio está diseñado para llevarte 
            de donde estás a donde quieres estar.
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
                    <span className="text-xs font-semibold text-brand uppercase tracking-wider">Programa principal</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                    Productor <span className="gradient-text">Rentable</span>
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    El programa de 8 semanas que transforma tu talento como productor en un 
                    negocio online que genera ingresos predecibles. Sin fórmulas mágicas, 
                    sin humo: estrategia, ejecución y resultados.
                  </p>
                </div>
                
                <div className="flex-shrink-0 text-center lg:text-right">
                  <p className="text-sm text-text-muted mb-1">Inversión desde</p>
                  <p className="text-5xl font-extrabold text-text-primary">1.500<span className="text-2xl text-text-muted">€</span></p>
                  <p className="text-sm text-accent-green mt-2">Un solo cliente cubre la inversión</p>
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

              {/* Result */}
              <div className="p-6 rounded-xl bg-surface-overlay border border-border-subtle mb-8">
                <p className="text-text-primary font-medium text-center">
                  <span className="text-brand">Resultado tangible:</span> En 8 semanas tendrás tu primer sistema de 
                  monetización funcionando, con una oferta clara, un canal de captación activo y tus 
                  primeros clientes (o propuestas enviadas).
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="#reservar"
                  className="cta-button group inline-flex items-center gap-2.5 px-10 py-4 rounded-xl text-base font-bold text-white"
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    Quiero saber más sobre el programa
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <p className="mt-4 text-sm text-text-muted">
                  Empieza con una llamada estratégica gratuita · Sin compromiso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
