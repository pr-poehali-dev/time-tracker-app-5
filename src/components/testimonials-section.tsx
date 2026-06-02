import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Марина Соколова",
    role: "Блогер о здоровом образе жизни",
    avatar: "/professional-woman-scientist.png",
    content:
      "У меня аллергия на синтетику — искала альтернативу годами. LaikoSox первые носки, в которых я забываю, что они вообще есть. Это магия.",
  },
  {
    name: "Алексей Громов",
    role: "Марафонец, 12 забегов в год",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Тренируюсь каждый день. После 30 км ноги в LaikoSox остаются сухими. Никаких мозолей, никакого запаха. Купил сразу 5 пар.",
  },
  {
    name: "Ирина Лебедева",
    role: "Дизайнер, Москва",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Подарила мужу на день рождения — он потом заказал ещё три пары сам. Говорит, обычные носки теперь надеть невозможно.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Те, кто уже попробовал</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Обычные люди — необычные ощущения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}