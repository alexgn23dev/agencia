import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: '"No tengo tiempo, estoy trabajando en otra cosa"',
    a: 'Precisamente por eso necesitas un sistema eficiente. Nuestro programa está diseñado para productores que tienen trabajo o estudios. Con 5-7 horas semanales es suficiente para montar tu sistema. La pregunta no es si tienes tiempo, sino cuánto tiempo más vas a esperar para tener un negocio que funcione.',
  },
  {
    q: '"No tengo audiencia ni seguidores"',
    a: 'No los necesitas. Nuestro sistema no depende de redes sociales ni de tener una comunidad grande. Se basa en captación directa de clientes cualificados. Algunos de nuestros productores más rentables tienen menos de 500 seguidores en Instagram.',
  },
  {
    q: '"No soy bueno vendiendo, me da vergüenza"',
    a: 'Normal. Nadie nace sabiendo vender. Te damos scripts y frameworks probados para que las conversaciones de venta se sientan naturales. No vas a hacer llamadas en frío ni spam. Se trata de tener conversaciones reales con personas que ya necesitan lo que tú ofreces.',
  },
  {
    q: '"¿Y si mi estilo de producción es muy nicho?"',
    a: 'Mejor. Cuanto más específico sea tu sonido, más fácil es posicionarte. Los nichos son donde está el dinero de verdad. Un productor especializado en "dark techno para sellos underground" tiene más opciones de monetizar que uno que hace "un poco de todo".',
  },
  {
    q: '"Ya he probado vender beats online y no funciona"',
    a: 'Vender beats en marketplaces es una carrera al precio más bajo. Nosotros no hacemos eso. Te ayudamos a vender servicios premium: producción a medida, sound design, mixing, ghost production de alto nivel. Otra liga, otros precios, otros clientes.',
  },
  {
    q: '"Es caro / No sé si puedo permitírmelo"',
    a: 'Un solo cliente recurrente puede cubrir tu inversión en el primer mes. La pregunta no es si puedes permitírtelo, sino cuánto te está costando cada mes NO tener un sistema que genere ingresos. ¿Cuánto has gastado ya en plugins que no te han dado un euro de retorno?',
  },
  {
    q: '"¿Cuánto tardaré en ver resultados?"',
    a: 'El programa dura 8 semanas. La mayoría de productores envían sus primeras propuestas entre la semana 4 y 6. Los primeros ingresos suelen llegar entre la semana 6 y 10. Depende de tu velocidad de ejecución, pero el sistema está diseñado para dar resultados rápidos.',
  },
  {
    q: '"¿Qué tipo de servicios puedo vender como productor?"',
    a: 'Producción musical a medida, ghost production, sound design para marcas/videojuegos/content creators, mixing & mastering premium, consultoría de producción, sample packs exclusivos, música para sync (publicidad, cine, TV)… Las opciones son muchas. Encontramos la que mejor encaja contigo.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono font-medium text-brand mb-4 tracking-wider uppercase">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Las objeciones que ya{' '}
            <span className="gradient-text">sabemos que tienes</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Las hemos escuchado todas. Y tenemos respuestas para cada una.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                open === i
                  ? 'bg-surface-raised border-brand/20'
                  : 'bg-surface-raised/50 border-border-subtle hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className={`w-5 h-5 flex-shrink-0 transition-colors ${
                    open === i ? 'text-brand' : 'text-text-muted'
                  }`} />
                  <span className={`font-semibold transition-colors ${
                    open === i ? 'text-text-primary' : 'text-text-secondary'
                  }`}>
                    {faq.q}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-text-muted transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-brand' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 pl-14">
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
