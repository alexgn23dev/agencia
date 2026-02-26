import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: '"No tengo tiempo, tengo trabajo / estudio"',
    a: 'Precisamente por eso necesitas un sistema eficiente, no más horas. El programa está diseñado para productores con vida real. Con 5-7 horas semanales es suficiente. La verdadera pregunta es: ¿cuánto tiempo más vas a seguir invirtiendo horas en producir sin ver un euro de retorno? Lo que no tienes es un sistema, no tiempo.',
  },
  {
    q: '"No tengo audiencia ni seguidores"',
    a: 'Mejor. Nuestro sistema no depende de redes sociales ni de tener comunidad. Se basa en captación directa de clientes cualificados que ya necesitan servicios de producción. Algunos de nuestros productores más rentables tienen menos de 300 seguidores en Instagram. Los seguidores no pagan facturas. Los clientes sí.',
  },
  {
    q: '"No soy bueno vendiendo, me da vergüenza"',
    a: 'Es lo más normal del mundo. Nadie nace sabiendo vender y la industria musical no te enseña esto. Por eso te damos scripts y frameworks de conversación probados para que todo se sienta natural. No vas a hacer llamadas en frío ni spam. Se trata de tener conversaciones reales con personas que ya necesitan lo que ofreces. Si sabes explicar tu proceso creativo, sabes vender.',
  },
  {
    q: '"¿Y si mi estilo de producción es muy nicho?"',
    a: 'Cuanto más nicho, mejor. Los nichos específicos son exactamente donde está el dinero de verdad. Un productor especializado en "ambient para apps de meditación" o "dark techno para sellos underground" tiene infinitamente más opciones de monetizar que uno que hace "un poco de todo". La especificidad es tu ventaja, no tu limitación.',
  },
  {
    q: '"Ya probé vender beats online y no funciona"',
    a: 'Correcto. Vender beats en marketplaces a 20-30€ compitiendo con miles de productores es una carrera al precio más bajo. Nosotros no hacemos eso. Te ayudamos a vender servicios premium: producción a medida, ghost production, sound design para marcas, mixing de alto nivel. Otra liga, otros precios (500€-2.000€ por proyecto), otros clientes que valoran calidad.',
  },
  {
    q: '"1.500€ es mucho / No sé si puedo permitírmelo"',
    a: 'Entendemos. Pero hagamos cuentas: un solo cliente de producción a medida puede pagarte 500€-1.000€. Con 2 clientes ya has recuperado la inversión completa. La pregunta real no es si puedes permitírtelo, sino cuánto te está costando cada mes NO tener un sistema que genere ingresos. ¿Cuánto llevas gastado en plugins, cursos y hardware sin retorno?',
  },
  {
    q: '"¿Cuánto tardaré en ver resultados?"',
    a: 'El programa dura 8 semanas. La mayoría de productores envían sus primeras propuestas comerciales entre la semana 4 y 6. Los primeros ingresos suelen llegar entre la semana 6 y 10. Depende de tu velocidad de ejecución, pero el 93% de los participantes consiguen su primer cliente dentro del programa.',
  },
  {
    q: '"¿Qué tipo de servicios puedo vender como productor?"',
    a: 'Producción musical a medida para artistas, ghost production, sound design para marcas, videojuegos o content creators, mixing & mastering premium, producción para sync (publicidad, cine, series), consultoría de producción, sample packs exclusivos por encargo. Las opciones son amplias y encontramos la que mejor encaja con tu perfil, tus habilidades y el mercado al que quieres llegar.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono font-medium text-brand mb-4 tracking-wider uppercase">
            Objeciones honestas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Lo que estás pensando{' '}
            <span className="gradient-text">(y nuestra respuesta)</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Hemos trabajado con suficientes productores para conocer cada objeción.
            Aquí van las respuestas directas.
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
