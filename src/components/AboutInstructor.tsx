import { useState } from "react";
import { Building, Users, Award, TrendingUp, Globe, Briefcase } from "lucide-react";

const AboutInstructor = () => {
  const [activeYear, setActiveYear] = useState(0);

  const timeline = [
    {
      year: "2015",
      title: "Первый бизнес",
      company: "Digital Agency",
      description: "Запустил веб-студию с оборотом ₽2M в первый год",
      achievement: "₽2M оборот",
      icon: Building,
      details: "Начал с команды из 3 человек, создавал сайты для малого бизнеса. За год вырос до 15 сотрудников и крупных корпоративных клиентов."
    },
    {
      year: "2017",
      title: "Масштабирование",
      company: "Tech Solutions Group",
      description: "Создал экосистему из 5 компаний в разных нишах",
      achievement: "5 компаний",
      icon: TrendingUp,
      details: "Диверсифицировал бизнес: e-commerce, EdTech, FinTech, недвижимость и консалтинг. Общий оборот превысил ₽50M."
    },
    {
      year: "2019",
      title: "Международный выход",
      company: "Global Ventures",
      description: "Вышел на рынки США и Европы",
      achievement: "3 страны",
      icon: Globe,
      details: "Открыл офисы в Нью-Йорке и Берлине. Привлек $2M инвестиций от международных фондов."
    },
    {
      year: "2021",
      title: "Ментор и инвестор",
      company: "Business Academy",
      description: "Начал обучать предпринимателей своей системе",
      achievement: "500+ студентов",
      icon: Users,
      details: "Создал первый курс по запуску бизнеса. 94% выпускников запустили прибыльные проекты в первые 6 месяцев."
    },
    {
      year: "2023",
      title: "Топ-эксперт",
      company: "Industry Leader",
      description: "Признан лучшим бизнес-ментором России",
      achievement: "2800+ выпускников",
      icon: Award,
      details: "Получил премию 'Предприниматель года'. Студенты запустили проекты на общую сумму ₽1.2 млрд."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Об авторе курса</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Александр Петров — серийный предприниматель с 8-летним опытом, 
            который помог 2800+ студентам создать успешный бизнес
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Photo and stats */}
          <div className="text-center lg:text-left">
            <div className="relative mb-8">
              {/* Instructor photo placeholder */}
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-primary rounded-3xl glow-hover card-3d" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-2xl flex items-center justify-center card-3d">
                <Briefcase className="h-8 w-8 text-accent-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-card p-6 rounded-2xl border border-border/20 glow-hover">
                <div className="text-3xl font-black text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Лет в бизнесе</div>
              </div>
              <div className="bg-gradient-card p-6 rounded-2xl border border-border/20 glow-hover">
                <div className="text-3xl font-black text-secondary mb-2">₽1.2B</div>
                <div className="text-sm text-muted-foreground">Оборот студентов</div>
              </div>
              <div className="bg-gradient-card p-6 rounded-2xl border border-border/20 glow-hover">
                <div className="text-3xl font-black text-accent mb-2">2800+</div>
                <div className="text-sm text-muted-foreground">Выпускников</div>
              </div>
              <div className="bg-gradient-card p-6 rounded-2xl border border-border/20 glow-hover">
                <div className="text-3xl font-black text-success mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Успешных запусков</div>
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
                  <div className="bg-gradient-card p-6 rounded-2xl border border-border/20 glow-hover">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-bold">{item.year}</div>
                        <div className="font-bold text-lg">{item.title}</div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-sm text-muted-foreground">{item.company}</div>
                        <div className="text-sm font-bold text-accent">{item.achievement}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    {activeYear === index && (
                      <div className="bg-muted/50 p-4 rounded-xl border-l-4 border-primary animate-in slide-in-from-left-2">
                        <p className="text-sm leading-relaxed">{item.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards section */}
        <div className="mt-16 bg-gradient-card p-8 rounded-3xl border border-border/20">
          <h3 className="text-2xl font-bold text-center mb-8">Награды и достижения</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-muted/20 rounded-2xl">
              <Award className="h-12 w-12 text-warning mx-auto mb-4" />
              <div className="font-bold mb-2">Предприниматель года 2023</div>
              <div className="text-sm text-muted-foreground">Премия Business Awards</div>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-2xl">
              <Users className="h-12 w-12 text-success mx-auto mb-4" />
              <div className="font-bold mb-2">Лучший бизнес-ментор</div>
              <div className="text-sm text-muted-foreground">Рейтинг Forbes 2023</div>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-2xl">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="font-bold mb-2">Топ-10 стартап инвесторов</div>
              <div className="text-sm text-muted-foreground">Venture Capital Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;