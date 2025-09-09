import { useState } from "react";
import { Building, Users, Award, TrendingUp, Globe, Briefcase } from "lucide-react";

const AboutInstructor = () => {
  const [activeYear, setActiveYear] = useState(0);

  const timeline = [
    {
      year: "2005-2019",
      title: "Работал в банках",
      company: "От программиста до директора",
      description: "Прошел путь от обычного программиста до директора по развитию в Газпромбанке",
      achievement: "15 лет карьеры",
      icon: Building,
      details: "Честно говоря, думал, что знаю всё о бизнесе. Работал программистом в мобильной связи, потом бизнес-аналитиком в трех банках топ-5. Дослужился до директора по развитию в ГПБ. Реализовал десяток проектов BigData с миллиардными бюджетами. Казалось, что предпринимательство — это легко."
    },
    {
      year: "2019",
      title: "Запустил свое дело",
      company: "Барбершопы в Москве",
      description: "Открыл сеть барбершопов, был уверен в успехе",
      achievement: "8 заведений",
      icon: TrendingUp,
      details: "Решил, что банковский опыт поможет мне в бизнесе. Создал 6 собственных барбершопов и 2 франшизы в Москве. Активно развивался, вкладывался, верил в проект. Думал, что понимаю рынок."
    },
    {
      year: "2025 Начало",
      title: "Всё рухнуло",
      company: "Финансовый крах",
      description: "Накопленные ошибки привели к долгам в 20 млн рублей",
      achievement: "20 млн долгов",
      icon: Globe,
      details: "Полгода финансового ада. Из шести заведений осталось только два. Оказалось, что банковский опыт совсем не равен предпринимательскому. Никто не учил, как падать и как потом подниматься. Было очень страшно."
    },
    {
      year: "2025",
      title: "Восстанавливался",
      company: "Работа над ошибками",
      description: "За 8 месяцев разобрался с долгами и понял свои ошибки",
      achievement: "8 месяцев работы",
      icon: Users,
      details: "Взялся за голову и методично разбирался с долгами. Понял, что мой опыт падения не менее ценен, чем опыт побед. Решил поделиться этим с другими предпринимателями, чтобы они не наступали на те же грабли."
    },
    {
      year: "Сейчас",
      title: "Делюсь опытом",
      company: "Обучаю реальности",
      description: "Учу не только побеждать, но и падать правильно",
      achievement: "Без розовых очков",
      icon: Award,
      details: "Решил стать тем человеком, к которому можно прийти за помощью. Не бывает курсов о том, как правильно падать и подниматься. Если готовы учиться не только на победах — добро пожаловать."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Моя история
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Я не гуру мотивации. Я обычный человек, который совершил кучу ошибок и готов рассказать о них честно.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Photo and stats */}
          <div className="text-center lg:text-left">
            <div className="relative mb-8">
              {/* Instructor photo placeholder */}
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-card rounded-2xl shadow-md border" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-card p-4 rounded-xl border shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">15</div>
                <div className="text-sm text-muted-foreground">Лет в банках</div>
              </div>
              <div className="bg-card p-4 rounded-xl border shadow-sm">
                <div className="text-2xl font-bold text-destructive mb-1">20М ₽</div>
                <div className="text-sm text-muted-foreground">Потерял</div>
              </div>
              <div className="bg-card p-4 rounded-xl border shadow-sm">
                <div className="text-2xl font-bold text-accent mb-1">8</div>
                <div className="text-sm text-muted-foreground">Месяцев восстановления</div>
              </div>
              <div className="bg-card p-4 rounded-xl border shadow-sm">
                <div className="text-2xl font-bold text-success mb-1">34</div>
                <div className="text-sm text-muted-foreground">Года мне</div>
              </div>
            </div>
          </div>

          {/* Right side - Interactive timeline */}
          <div className="relative">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item cursor-pointer transition-all duration-300 ${
                    activeYear === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                  }`}
                  onClick={() => setActiveYear(index)}
                >
                  <div className="timeline-dot" />
                  <div className="bg-card p-6 rounded-xl border transition-all duration-200 hover:shadow-md">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-medium">{item.year}</div>
                        <div className="font-semibold text-lg">{item.title}</div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-sm text-muted-foreground">{item.company}</div>
                        <div className="text-sm font-medium text-accent">{item.achievement}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    {activeYear === index && (
                      <div className="bg-muted/30 p-4 rounded-lg border-l-2 border-primary animate-in slide-in-from-left-2">
                        <p className="text-sm leading-relaxed">{item.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Simple achievement section */}
        <div className="mt-16 bg-card p-8 rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold text-center mb-6">Что обо мне говорят</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/20 rounded-xl">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-medium mb-1">Откровенный подход</div>
              <div className="text-sm text-muted-foreground">Говорю как есть, без прикрас</div>
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-xl">
              <Users className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="font-medium mb-1">Реальный опыт</div>
              <div className="text-sm text-muted-foreground">Прошел через кризис сам</div>
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-xl">
              <TrendingUp className="h-8 w-8 text-success mx-auto mb-3" />
              <div className="font-medium mb-1">Практические решения</div>
              <div className="text-sm text-muted-foreground">Только то, что работает</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;