import { PhoneCall, PenTool, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    number: '01',
    title: 'Llamada estratégica',
    desc: 'Hablamos 30 minutos sobre tu situación, tu nivel, tus objetivos y si tiene sentido trabajar juntos. Sin presión, sin compromiso.',
    detail: 'Si no encajas, te lo decimos directamente.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Tu plan personalizado',
    desc: 'Analizamos tu perfil, tu estilo y el mercado para diseñar tu posicionamiento, tu oferta premium y tu estrategia de captación. Todo a medida.',
    detail: 'Nada de plantillas genéricas ni fórmulas copiadas.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Ejecución con acompañamiento',
    desc: 'Implementamos juntos, semana a semana. Sesiones 1:1, feedback directo y ajustes en tiempo real. No es un curso que ves solo: es acción con guía.',
    detail: 'Tú ejecutas. Nosotros corregimos y aceleramos.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Primeros clientes e ingresos',
    desc: 'Tu sistema de captación empieza a funcionar. Llegan los primeros contactos, cierras tus primeras ventas y tienes un negocio real entre manos.',
    detail: 'Un sistema que sigue funcionando después del programa.',
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
            De "no sé por dónde empezar" a{' '}
            <span className="gradient-text">facturando en 4 pasos</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Sin complejidad innecesaria. Sin meses de espera.
            Un proceso directo diseñado para que actúes y veas resultados.
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
