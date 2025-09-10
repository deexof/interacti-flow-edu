import { Shield, TrendingUp, Users, Brain, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FearsSection = () => {
  const mainFears = [
    {
      icon: TrendingDown,
      title: "Финансовые потери",
      percentage: "72%",
      description: "боятся рискнуть и потерять деньги"
    },
    {
      icon: Shield,
      title: "Провал и неудача", 
      percentage: "69%",
      description: "страшатся краха бизнеса и потери репутации"
    },
    {
      icon: Users,
      title: "Синдром самозванца",
      percentage: "84%",
      description: "считают себя менее компетентными"
    },
    {
      icon: Brain,
      title: "Недостаток знаний",
      percentage: "40%",
      description: "указывают на нехватку навыков"
    }
  ];

  const allFears = [
    "Финансовые потери и риск",
    "Неудача и провал бизнеса", 
    "Конкуренция на рынке",
    "Синдром самозванца",
    "Неопределенность будущего",
    "Ответственность за других",
    "Недостаток знаний",
    "Административные барьеры",
    "Упущенные возможности",
    "Страх собственного успеха"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Знакомы ли вам эти страхи?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Я провел исследование среди российских предпринимателей 25-40 лет. 
            Вот что мешает людям начать свое дело и добиться успеха.
          </p>
        </div>

        {/* Main fears grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainFears.map((fear, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border/20 text-center hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <fear.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{fear.percentage}</div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{fear.title}</h3>
              <p className="text-muted-foreground text-sm">{fear.description}</p>
            </div>
          ))}
        </div>

        {/* Complete list */}
        <div className="bg-card p-8 rounded-2xl border border-border/20 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Топ-10 страхов начинающих предпринимателей в России
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {allFears.map((fear, index) => (
              <div key={index} className="flex items-center p-4 rounded-lg bg-muted/50">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-primary font-semibold text-sm">{index + 1}</span>
                </div>
                <span className="text-foreground">{fear}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal message */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Я прошел через каждый из этих страхов
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Когда в 2025 году я оказался с долгами в 20 миллионов рублей, все эти страхи 
              стали моей реальностью. Я потерял 4 из 6 заведений, столкнулся с административным 
              адом, чувствовал себя полным неудачником. Но именно этот опыт научил меня тому, 
              чему не учат в бизнес-школах — как падать и подниматься.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              За 8 месяцев я не только расплатился с долгами, но и создал систему, которая 
              помогает предпринимателям преодолевать эти страхи и строить устойчивый бизнес. 
              Потому что опыт неудач — это самая ценная школа в предпринимательстве.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Преодолеть страхи и начать действовать
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Узнать мою историю
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FearsSection;