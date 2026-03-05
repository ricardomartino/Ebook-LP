import { BookOpen, Target, Zap, Users, ShieldCheck, Clock } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: BookOpen,
    title: "Metodologia Prática",
    description: "Nada de teoria maçante. Aprenda com exercícios práticos que você pode aplicar hoje mesmo."
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Estratégias validadas para destravar sua criatividade e finalizar seu primeiro projeto."
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    description: "Receba o material em seu e-mail segundos após a confirmação do pagamento."
  },
  {
    icon: Users,
    title: "Comunidade Exclusiva",
    description: "Acesso a um grupo fechado para trocar experiências e receber feedbacks."
  },
  {
    icon: ShieldCheck,
    title: "Garantia Total",
    description: "Se não gostar do conteúdo, devolvemos seu dinheiro em até 7 dias sem perguntas."
  },
  {
    icon: Clock,
    title: "Conteúdo Vitalício",
    description: "O ebook é seu para sempre, incluindo todas as atualizações futuras gratuitamente."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            O que você vai encontrar dentro do guia
          </h2>
          <p className="text-lg text-slate-600">
            Um passo a passo completo, do zero à publicação, estruturado para facilitar seu aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <feature.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
