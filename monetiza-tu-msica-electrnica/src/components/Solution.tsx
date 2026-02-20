import { Check, X, Zap, Target, TrendingUp, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Posicionamiento que diferencia',
    desc: 'Dejas de ser "un productor más" y te conviertes en LA referencia de un nicho concreto.',
  },
  {
    icon: Zap,
    title: 'Oferta que se vende sola',
    desc: 'Empaquetamos tu habilidad en un servicio premium que tu cliente ideal necesita y quiere pagar.',
  },
  {
    icon: TrendingUp,
    title: 'Clientes sin necesitar 10K seguidores',
    desc: 'Un sistema de captación directa que funciona con 0 audiencia. Sin algoritmos, sin viralidad.',
  },
  {
    icon: Shield,
    title: 'Ingresos predecibles cada mes',
    desc: 'No likes ni reproducciones. Dinero real, recurrente, que puedes proyectar y del que puedes vivir.',
  },
];

const forWhom = [
  'Produces bien — mínimo 2 años de experiencia real en electrónica',
  'Quieres ingresos online, no vivir de bolos ni depender de actuaciones',
  'Estás dispuesto a invertir en montar tu negocio, no solo en más plugins',
  'Entiendes que ser buen productor no garantiza ganar dinero',
  'Quieres un sistema, no otro curso de producción que acumula polvo',
];

const notForWhom = [
  'Estás empezando y aún no dominas la producción',
  'Solo buscas más seguidores o reproducciones en Spotify',
  'Quieres hacerte rico mañana sin trabajar',
  'Eres DJ y buscas conseguir más actuaciones',
  'No estás dispuesto a salir de tu zona de confort',
];

export function Solution() {
  return (
    <section id="solucion" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/3 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-cyan/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New opportunity */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-sm font-mono font-medium text-accent-cyan mb-4 tracking-wider uppercase">
            La nueva oportunidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Existe otra forma de monetizar.{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">Y no tiene nada que ver con ser DJ.</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            Los productores que están generando ingresos reales no son los que más seguidores tienen.
            No son los que suben un beat diario. No son los que rezan para que un sello les fiche.
          </p>
          <p className="text-lg text-text-primary leading-relaxed font-medium">
            Son productores que han convertido su habilidad en un servicio de alto valor.
            Que saben exactamente qué ofrecen, a quién se lo ofrecen, y cómo llegar a esos clientes.
            Eso es lo que construimos contigo.
          </p>
        </div>

        {/* Value proposition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              De productor invisible a{' '}
              <span className="gradient-text">negocio rentable en 8 semanas</span>
            </h3>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              No somos una agencia de marketing genérica. Somos la única consultoría especializada
              en monetización para productores de música electrónica. Esto es lo único que hacemos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="card-hover gradient-border p-6 text-center"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-7 h-7 text-brand" />
                  </div>
                  <h4 className="font-bold text-text-primary mb-2">{b.title}</h4>
                  <p className="text-sm text-text-secondary">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For whom / Not for whom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* For whom */}
          <div className="p-8 rounded-2xl bg-surface-raised border border-accent-green/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent-green" />
              </div>
              <h4 className="text-xl font-bold text-text-primary">Esto es para ti si…</h4>
            </div>
            <div className="space-y-4">
              {forWhom.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent-green/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-green" />
                  </div>
                  <p className="text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not for whom */}
          <div className="p-8 rounded-2xl bg-surface-raised border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h4 className="text-xl font-bold text-text-primary">Esto NO es para ti si…</h4>
            </div>
            <div className="space-y-4">
              {notForWhom.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <p className="text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
