import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Clock, Users, Zap } from "lucide-react";

const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Базовый",
      price: "29,900",
      originalPrice: "49,900",
      description: "Идеально для начинающих предпринимателей",
      icon: Users,
      color: "muted",
      popular: false,
      features: [
        "Доступ к 46 урокам",
        "Шаблоны и чек-листы",
        "Общий чат с студентами",
        "Email поддержка",
        "Доступ на 6 месяцев"
      ],
      notIncluded: [
        "Персональные консультации",
        "Проверка домашних заданий",
        "Групповые созвоны",
        "VIP чат с ментором"
      ]
    },
    {
      name: "Продвинутый",
      price: "49,900",
      originalPrice: "79,900",
      description: "Максимальная поддержка для быстрого результата",
      icon: Star,
      color: "primary",
      popular: true,
      features: [
        "Всё из базового тарифа",
        "4 групповых созвона с ментором",
        "Проверка домашних заданий",
        "VIP чат с быстрыми ответами",
        "Доступ на 12 месяцев",
        "Бонусный модуль по инвестициям",
        "Сертификат об окончании"
      ],
      notIncluded: [
        "Персональные 1-на-1 консультации",
        "Помощь в поиске инвесторов"
      ]
    },
    {
      name: "VIP",
      price: "99,900",
      originalPrice: "149,900",
      description: "Индивидуальная работа с ментором",
      icon: Zap,
      color: "accent",
      popular: false,
      features: [
        "Всё из продвинутого тарифа",
        "3 персональные консультации 1-на-1",
        "Персональный разбор вашего проекта",
        "Помощь в презентации инвесторам",
        "Пожизненный доступ к материалам",
        "Приоритетная поддержка 24/7",
        "Доступ к закрытому сообществу VIP",
        "Участие в мастермайнд группе"
      ],
      notIncluded: []
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Выберите свой тариф</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Инвестируйте в свое будущее сегодня. Средний доход наших выпускников 
            окупает курс за первый месяц работы
          </p>
          
          {/* Limited time offer */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-accent rounded-full text-white font-medium mb-8">
            <Clock className="h-5 w-5" />
            <span>Специальная цена действует 3 дня</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary/50 bg-gradient-card glow pulse-glow' 
                  : 'border-border/20 bg-gradient-card hover:border-primary/30 glow-hover'
              } ${hoveredPlan === index ? 'transform scale-105' : ''}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-6 py-2 rounded-full text-sm font-bold text-white">
                    🔥 Самый популярный
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  plan.color === 'primary' ? 'bg-primary/20' :
                  plan.color === 'accent' ? 'bg-accent/20' :
                  'bg-muted/50'
                }`}>
                  <plan.icon className={`h-8 w-8 ${
                    plan.color === 'primary' ? 'text-primary' :
                    plan.color === 'accent' ? 'text-accent' :
                    'text-foreground'
                  }`} />
                </div>
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground line-through">
                      ₽{plan.originalPrice}
                    </span>
                    <span className="text-3xl font-black">₽{plan.price}</span>
                  </div>
                  <div className="text-sm text-success font-medium">
                    Скидка {(() => {
                      const price = parseInt(plan.price.replace(',', ''));
                      const originalPrice = parseInt(plan.originalPrice.replace(',', ''));
                      if (originalPrice === 0 || isNaN(price) || isNaN(originalPrice)) return '0%';
                      return Math.round((1 - price / originalPrice) * 100) + '%';
                    })()}
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className={`w-full mb-8 ${
                    plan.popular ? 'btn-hero' : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Выбрать тариф
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-success flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Что включено:
                </h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}

                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-bold text-muted-foreground flex items-center gap-2 mt-6">
                      <X className="h-5 w-5" />
                      Не включено:
                    </h4>
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 bg-gradient-card p-8 rounded-3xl border border-border/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Калькулятор окупаемости</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-muted/20 rounded-2xl">
              <div className="text-3xl font-black text-primary mb-2">₽280K</div>
              <div className="text-sm text-muted-foreground mb-2">Средний доход за 6 месяцев</div>
              <div className="text-xs text-success">+460% ROI</div>
            </div>
            <div className="p-6 bg-muted/20 rounded-2xl">
              <div className="text-3xl font-black text-secondary mb-2">30 дней</div>
              <div className="text-sm text-muted-foreground mb-2">Средний срок окупаемости</div>
              <div className="text-xs text-success">Реальная статистика</div>
            </div>
            <div className="p-6 bg-muted/20 rounded-2xl">
              <div className="text-3xl font-black text-accent mb-2">94%</div>
              <div className="text-sm text-muted-foreground mb-2">Студентов получают прибыль</div>
              <div className="text-xs text-success">Проверенная методика</div>
            </div>
          </div>
        </div>

        {/* Money back guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-secondary rounded-2xl text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Check className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="font-bold">Гарантия возврата 30 дней</div>
              <div className="text-sm opacity-90">Если курс не подойдет — вернем деньги</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;