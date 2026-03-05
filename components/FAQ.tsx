import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "O ebook é físico ou digital?",
    answer: "O ebook é 100% digital, disponível nos formatos PDF (ideal para leitura em computadores e tablets) e ePub (ideal para leitores digitais como Kindle)."
  },
  {
    question: "Como recebo o material?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download de todo o material."
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não! O guia foi escrito pensando tanto em iniciantes absolutos quanto em quem já escreve e quer aprimorar suas técnicas."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos cartão de crédito (parcelamento em até 12x), PIX e boleto bancário."
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta solicitar o reembolso e devolveremos 100% do seu dinheiro."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-slate-600">Tudo o que você precisa saber antes de garantir seu exemplar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-lg text-slate-900">{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
