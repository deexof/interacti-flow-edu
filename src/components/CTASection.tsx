import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Star, CheckCircle, Timer, Zap } from "lucide-react";

const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [recentPurchases] = useState([
    { name: "Анна К.", time: "2 минуты назад", plan: "VIP" },
    { name: "Дмитрий В.", time: "5 минут назад", plan: "Продвинутый" },
    { name: "Мария П.", time: "8 минут назад", plan: "VIP" },
    { name: "Алексей С.", time: "12 минут назад", plan: "Базовый" },
  ]);

  const [currentPurchaseIndex, setCurrentPurchaseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds };
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 };
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
        
        const newDays = prev.days - 1;
        if (newDays >= 0) return { ...prev, days: newDays, hours: 23, minutes: 59, seconds: 59 };
        
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const purchaseTimer = setInterval(() => {
      setCurrentPurchaseIndex(prev => (prev + 1) % recentPurchases.length);
    }, 3000);

    return () => clearInterval(purchaseTimer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Urgency timer */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-accent rounded-full text-white font-medium mb-6 glow pulse-glow">
            <Timer className="h-5 w-5" />
            <span>Специальная цена действует ограниченное время!</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
            {[
              { label: 'Дни', value: timeLeft.days },
              { label: 'Часы', value: timeLeft.hours },
              { label: 'Минуты', value: timeLeft.minutes },
              { label: 'Секунды', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-card p-4 rounded-2xl border border-border/20 text-center glow-hover">
                <div className="text-2xl md:text-3xl font-black text-primary mb-1">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-border/20 glow">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="gradient-text">Готовы изменить свою жизнь?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                Присоединяйтесь к 2800+ успешным предпринимателям, которые уже запустили свой бизнес с нашей помощью
              </p>
              
              {/* Key benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">Пошаговая система запуска</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">Персональная поддержка</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">Гарантия результата</span>
                </div>
              </div>
            </div>

            {/* Pricing comparison */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Popular plan */}
              <div className="relative p-8 bg-gradient-primary rounded-3xl text-white glow pulse-glow">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent px-6 py-2 rounded-full text-sm font-bold">
                    🔥 Хит продаж
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <Star className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-black mb-2">Продвинутый</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-sm line-through opacity-70">₽79,900</span>
                    <span className="text-4xl font-black">₽49,900</span>
                  </div>
                  <div className="text-sm opacity-90">Экономия ₽30,000</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Все материалы курса</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">4 групповых созвона</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">VIP чат поддержки</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Доступ 12 месяцев</span>
                  </li>
                </ul>

                <Button size="lg" variant="outline" className="w-full bg-white text-primary hover:bg-white/90 border-white h-14 text-lg font-bold">
                  Выбрать продвинутый
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* VIP Plan */}
              <div className="p-8 bg-gradient-card border border-accent/30 rounded-3xl">
                <div className="text-center mb-6">
                  <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-black mb-2">VIP</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-sm line-through text-muted-foreground">₽149,900</span>
                    <span className="text-4xl font-black">₽99,900</span>
                  </div>
                  <div className="text-sm text-success">Экономия ₽50,000</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Всё из продвинутого</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">3 личные консультации</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Разбор вашего проекта</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Пожизненный доступ</span>
                  </li>
                </ul>

                <Button size="lg" variant="outline" className="w-full h-14 text-lg font-bold">
                  Выбрать VIP
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Social proof */}
            <div className="text-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-muted/20 rounded-full mb-8">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  <span className="font-bold text-primary">{recentPurchases[currentPurchaseIndex].name}</span>
                  {' '}купил тариф {recentPurchases[currentPurchaseIndex].plan} {recentPurchases[currentPurchaseIndex].time}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Присоединяйтесь к сообществу успешных предпринимателей уже сегодня
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Гарантия 30 дней</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Мгновенный доступ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;