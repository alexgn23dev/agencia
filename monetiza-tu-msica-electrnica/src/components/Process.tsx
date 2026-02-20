import { PhoneCall, PenTool, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    number: '01',
    title: 'Reservas tu llamada',
    desc: 'Hablamos 30 minutos para entender tu situación, tus objetivos y si podemos ayudarte. Sin presión, sin compromiso.',
    detail: 'Analizamos tu nivel, tu nicho y tu potencial de monetización.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Diseñamos tu plan',
    desc: 'Creamos una estrategia personalizada basada en tu perfil, tu estilo de producción y el mercado al que quieres llegar.',
    detail: 'Posicionamiento, oferta y canal de captación definidos.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Ejecutamos juntos',
    desc: 'Implementamos semana a semana con acompañamiento directo. Nada de cursos grabados que acumulan polvo: acción real.',
    detail: 'Sesiones 1:1, feedback constante y ajustes en tiempo real.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Resultados',
    desc: 'Primeros clientes e ingresos en semanas. Un sistema que sigue funcionando cuando el programa termina.',
    detail: 'Tu negocio como productor, funcionando de verdad.',
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/3 rounded-full blur-[250px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-mono font-medium text-brand mb-4 tracking-wider uppercase">
            Cómo funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            De la idea al ingreso en{' '}
            <span className="gradient-text">4 pasos</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Sin complejidad. Sin meses de espera. Un proceso claro con resultados reales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] right-[-calc(50%-40px)] w-[calc(100%-20px)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-brand/30 to-brand/10" />
                </div>
              )}
              
              <div className="card-hover p-6 rounded-2xl bg-surface-raised border border-border-subtle group-hover:border-brand/20 text-center">
                {/* Step number */}
                <span className="inline-block text-xs font-mono text-brand/60 mb-4">{step.number}</span>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand/15 transition-colors">
                  <step.icon className="w-7 h-7 text-brand" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">{step.desc}</p>
                <p className="text-xs text-text-muted italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
