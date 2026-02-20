import { AlertTriangle, TrendingDown, Eye, DollarSign, HelpCircle, Users } from 'lucide-react';

const pains = [
  {
    icon: Eye,
    text: 'Subes tracks a plataformas y nadie los escucha',
  },
  {
    icon: Users,
    text: 'No sabes cómo encontrar clientes que paguen por tu música',
  },
  {
    icon: DollarSign,
    text: 'Has probado vender beats online pero los resultados son ridículos',
  },
  {
    icon: HelpCircle,
    text: 'No tienes una oferta clara: ¿qué vendes exactamente?',
  },
  {
    icon: TrendingDown,
    text: 'Te sientes invisible en un mercado saturado',
  },
  {
    icon: AlertTriangle,
    text: 'Ves a productores con menos nivel ganando dinero y no entiendes cómo',
  },
];

const agitationPoints = [
  'No vas a "explotar" en Spotify por arte de magia',
  'Los ghost production marketplaces pagan miseria',
  'Publicar beats en YouTube sin estrategia no es un negocio',
  'Esperar a que alguien te descubra no es un plan',
];

export function Problem() {
  return (
    <section id="problema" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-sm font-mono font-medium text-brand mb-4 tracking-wider uppercase">
            El problema real
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            El talento sin estrategia es solo un{' '}
            <span className="gradient-text-warm">hobby caro</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Llevas años perfeccionando tu sonido. Has invertido miles en plugins, hardware, formación. 
            Tus tracks suenan a nivel profesional. Pero cuando miras tu cuenta bancaria…{' '}
            <span className="text-text-primary font-semibold">nada ha cambiado.</span>
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="card-hover group flex items-start gap-4 p-5 rounded-2xl bg-surface-raised border border-border-subtle hover:border-red-500/20"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <pain.icon className="w-5 h-5 text-red-400" />
              </div>
              <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-snug pt-1.5">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        {/* Agitation section */}
        <div className="relative">
          <div className="gradient-border p-8 sm:p-12 lg:p-16">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block text-sm font-mono font-medium text-red-400 mb-4 tracking-wider uppercase">
                La realidad incómoda
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Y mientras tú esperas,{' '}
                <span className="text-red-400">otros monetizan</span>
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Cada día que pasa sin una estrategia clara, estás más lejos de vivir de tu música. 
                No porque te falte talento. Sino porque el talento sin un sistema de monetización 
                es solo un hobby con gastos.
              </p>
              
              <div className="space-y-4 mb-8">
                {agitationPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="text-red-400 text-sm font-bold">✕</span>
                    </div>
                    <p className="text-text-secondary">{point}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-surface-overlay border border-border-subtle">
                <p className="text-xl font-semibold text-text-primary text-center">
                  El mercado no premia al mejor productor.{' '}
                  <br className="hidden sm:block" />
                  <span className="gradient-text">Premia al que sabe posicionarse y vender.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
