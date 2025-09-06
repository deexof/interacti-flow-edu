import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "90% стартапов проваливаются",
      description: "Отсутствие системного подхода",
      backContent: "Без четкой методологии и пошагового плана большинство предпринимателей теряются в хаосе задач и принимают неверные решения.",
      stat: "9 из 10",
      color: "destructive"
    },
    {
      icon: Clock,
      title: "Годы на поиск направления",
      description: "Потерянное время и ресурсы",
      backContent: "Предприниматели тратят месяцы и годы, пробуя разные направления без понимания, что действительно работает на рынке.",
      stat: "2-3 года",
      color: "warning"
    },
    {
      icon: DollarSign,
      title: "Миллионы потерянных денег",
      description: "Инвестиции в провальные идеи",
      backContent: "Отсутствие валидации идей приводит к инвестициям в продукты, которые никому не нужны, и потере личных средств.",
      stat: "₽500K+",
      color: "accent"
    },
    {
      icon: AlertTriangle,
      title: "Страх и неуверенность",
      description: "Отсутствие ментора и поддержки",
      backContent: "Без экспертного сопровождения предприниматели часто сдаются на полпути, не получая поддержки в критические моменты.",
      stat: "70%",
      color: "secondary"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Почему большинство терпит неудачу?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Статистика жестока: 9 из 10 бизнес-проектов закрываются в первый год. 
            Но есть способ попасть в те самые 10% успешных.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="flip-card h-80">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-gradient-card p-8 flex flex-col items-center text-center border border-border/20">
                  <div className={`w-16 h-16 rounded-full bg-${problem.color}/20 flex items-center justify-center mb-6 glow-hover`}>
                    <problem.icon className={`h-8 w-8 text-${problem.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-muted-foreground mb-6">{problem.description}</p>
                  <div className={`text-3xl font-black text-${problem.color}`}>
                    {problem.stat}
                  </div>
                </div>

                {/* Back */}
                <div className={`flip-card-back bg-gradient-${problem.color} p-8 flex flex-col justify-center text-center`}>
                  <h3 className="text-xl font-bold mb-4 text-white">Решение проблемы</h3>
                  <p className="text-white/90 leading-relaxed">
                    {problem.backContent}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-gradient-card rounded-3xl p-8 border border-border/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-destructive mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Неудач без системы</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-warning mb-2">65%</div>
              <div className="text-sm text-muted-foreground">Сдаются до года</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div className="bg-gradient-secondary h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-accent mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Нет наставника</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-success mb-2">94%</div>
              <div className="text-sm text-muted-foreground">Успех с системой</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;