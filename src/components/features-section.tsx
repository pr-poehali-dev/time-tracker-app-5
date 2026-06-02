import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Невероятная мягкость",
    description: "Нить лайкового жука тоньше шёлка в 3 раза — носки ощущаются как вторая кожа с первой секунды.",
    icon: "brain",
    badge: "Премиум",
  },
  {
    title: "Природная прочность",
    description: "Биологическое волокно лайкового жука прочнее стали по соотношению веса — носки служат годами.",
    icon: "lock",
    badge: "Долговечно",
  },
  {
    title: "Терморегуляция",
    description: "Уникальная структура нити сохраняет тепло зимой и отводит влагу летом — комфорт в любую погоду.",
    icon: "globe",
    badge: "Климат",
  },
  {
    title: "Гипоаллергенность",
    description: "Нить лайкового жука не содержит химических примесей — идеальна для чувствительной кожи.",
    icon: "zap",
    badge: "Эко",
  },
  {
    title: "Антибактериальный эффект",
    description: "Природные свойства волокна подавляют размножение бактерий — свежесть на весь день.",
    icon: "link",
    badge: "Здоровье",
  },
  {
    title: "Этичное производство",
    description: "Лайковых жуков не уничтожают — нить собирается без вреда для природы и экосистемы.",
    icon: "target",
    badge: "Этично",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Носки из другого мира</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Нить лайкового жука — материал, который природа оттачивала миллионы лет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}