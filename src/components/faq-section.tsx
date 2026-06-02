import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Почему носки стоят дороже обычных?",
      answer:
        "Нить лайкового жука — редкий природный материал, добыча которого трудоёмка. Одна пара носков требует нескольких часов ручной работы. Это не масс-маркет — это инвестиция в качество, которое вы ощутите с первой секунды.",
    },
    {
      question: "Как ухаживать за LaikoSox?",
      answer:
        "Стирка при 30°C в режиме деликатной стирки. Не отжимать, сушить в расправленном виде. При правильном уходе носки сохраняют свойства на годы.",
    },
    {
      question: "Подходят ли носки людям с аллергией?",
      answer:
        "Да. Нить лайкового жука гипоаллергенна и не содержит синтетических волокон, красителей или химических пропиток. Более 90% наших покупателей — люди с чувствительной кожей.",
    },
    {
      question: "Сколько прослужат носки?",
      answer:
        "При правильном уходе — 3–5 лет активного использования. Природное волокно намного прочнее синтетики и не скатывается со временем.",
    },
    {
      question: "Как быстро придёт заказ?",
      answer:
        "Доставка по России — 3–7 рабочих дней. Мы отправляем в фирменной упаковке, которая делает LaikoSox идеальным подарком.",
    },
    {
      question: "Есть ли размерная линейка?",
      answer:
        "Да, мы производим носки размеров 36–47. На сайте есть таблица размеров — выбрать свой просто.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что вы хотели знать о LaikoSox и нити лайкового жука
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}