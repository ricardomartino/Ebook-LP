import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Escritora Iniciante",
    content: "Este ebook foi o divisor de águas na minha jornada. Consegui terminar meu primeiro conto em menos de uma semana!",
    avatar: "https://picsum.photos/seed/avatar1/100/100"
  },
  {
    name: "Carlos Mendes",
    role: "Blogueiro",
    content: "As técnicas de estruturação de texto são fantásticas. Meus artigos agora têm muito mais engajamento.",
    avatar: "https://picsum.photos/seed/avatar2/100/100"
  },
  {
    name: "Juliana Costa",
    role: "Estudante de Letras",
    content: "O melhor investimento que fiz este ano. Didático, direto ao ponto e extremamente inspirador.",
    avatar: "https://picsum.photos/seed/avatar3/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Quem já leu, recomenda
          </h2>
          <p className="text-slate-600">Histórias reais de quem transformou sua paixão em palavras.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
