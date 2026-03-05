import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  "Ebook Completo (PDF + ePub)",
  "Guia de Exercícios Práticos",
  "Checklist de Revisão",
  "Acesso à Comunidade VIP",
  "Bônus: Aula de Criatividade",
  "Atualizações Gratuitas"
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
          <div className="flex-1 text-white">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Comece sua jornada hoje mesmo.
            </h2>
            <ul className="space-y-4 mb-10">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[400px] bg-white p-10 rounded-[2rem] shadow-xl text-center"
          >
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4">
              Oferta de Lançamento
            </p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-slate-400 line-through text-2xl font-medium">R$ 97,00</span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full">
                60% OFF
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-8">
              <span className="text-2xl font-bold text-slate-900">R$</span>
              <span className="text-7xl font-black text-slate-900 tracking-tighter">37</span>
              <span className="text-2xl font-bold text-slate-900">,00</span>
            </div>
            
            <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-3 group mb-4">
              Comprar Agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-slate-500">
              Pagamento 100% seguro via Hotmart
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50 -z-0 rotate-3"></div>
    </section>
  );
}
