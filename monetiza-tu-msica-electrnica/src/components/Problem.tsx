import { AlertTriangle, TrendingDown, Eye, DollarSign, HelpCircle, Users } from 'lucide-react';

const pains = [
  {
    icon: Eye,
    text: 'Subes tracks y nadie los escucha. 200 reproducciones de las cuales 150 son tuyas.',
  },
  {
    icon: Users,
    text: 'No tienes ni idea de cómo conseguir clientes que paguen por lo que haces.',
  },
  {
    icon: DollarSign,
    text: 'Has probado BeatStars, Fiverr o vender beats en redes. Resultado: calderilla.',
  },
  {
    icon: HelpCircle,
    text: 'Si alguien te pregunta "¿a qué te dedicas?" no sabes qué responder sin sentir vergüenza.',
  },
  {
    icon: TrendingDown,
    text: 'Ves a productores con menos nivel que tú ganando dinero y no entiendes qué hacen diferente.',
  },
  {
    icon: AlertTriangle,
    text: 'Llevas años invirtiendo en plugins, cursos y hardware pero tu cuenta bancaria sigue igual.',
  },
];

const agitationPoints = [
  'Spotify no te va a descubrir. Nadie va a llamar a tu puerta.',
  'Los marketplaces de beats son una carrera al precio más bajo. Y la ganas perdiendo.',
  'Subir un beat al día a YouTube sin estrategia no es un negocio. Es un hobby disfrazado.',
  'Cada mes que pasa sin un sistema de monetización, más lejos estás de vivir de esto.',
  'Mientras tú "esperas tu momento", otros productores con menos talento ya están facturando.',
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
            El talento sin estrategia{' '}
            <span className="gradient-text-warm">no paga facturas</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Llevas años perfeccionando tu sonido. Has invertido miles en formación, plugins, monitores.
            Tus tracks suenan a nivel profesional. Pero seamos honestos:{' '}
            <span className="text-text-primary font-semibold">tu cuenta bancaria no refleja tu nivel.</span>
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
                La verdad que nadie te dice
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                No te falta talento.{' '}
                <span className="text-red-400">Te falta un sistema.</span>
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Piensa en cuánto llevas produciendo. Ahora piensa en cuánto has ganado con ello.
                Si ese número te duele, el problema no eres tú. El problema es que nadie te enseñó
                la parte del negocio. Te enseñaron a mezclar, a masterizar, a diseñar sonido.
                Pero nunca te enseñaron a convertir eso en dinero.
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
                  <span className="gradient-text">Premia al que sabe posicionarse, vender y cobrar.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
