import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Trophy, Target, Zap } from "lucide-react";
import heroImage from "@/assets/hero-entrepreneur.jpg";

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [studentCount, setStudentCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  const fullText = "Создай прибыльный бизнес с нуля за 90 дней";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const counters = [
      { setter: setStudentCount, target: 2847, duration: 2000 },
      { setter: setSuccessRate, target: 94, duration: 2000 },
      { setter: setProjectsCount, target: 156, duration: 2000 }
    ];

    counters.forEach(({ setter, target, duration }) => {
      let start = 0;
      const increment = target / (duration / 16);
      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/20 rounded-full blur-3xl float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium border border-primary/30 glow">
                🚀 Новый поток стартует через 7 дней
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-text">{typewriterText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Пошаговая система запуска бизнеса от ментора, который помог 
              <span className="text-primary font-bold"> 2800+ студентам </span>
              создать прибыльные проекты
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="btn-hero text-lg px-8 py-6 h-auto">
                Начать обучение
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-primary/30 hover:bg-primary/10">
                <Play className="mr-2 h-5 w-5" />
                Смотреть демо
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                  {studentCount.toLocaleString()}+
                </div>
                <div className="text-sm text-muted-foreground">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-secondary mb-2">
                  {successRate}%
                </div>
                <div className="text-sm text-muted-foreground">Успех</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-accent mb-2">
                  {projectsCount}+
                </div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
            </div>
          </div>

          {/* Right floating cards */}
          <div className="relative">
            {/* 3D floating metrics cards */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-48 h-32 bg-gradient-card rounded-2xl p-6 card-3d glow-hover float">
                <div className="flex items-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-sm font-medium">Активные студенты</span>
                </div>
                <div className="text-2xl font-black text-primary">847</div>
              </div>

              <div className="absolute top-32 left-0 w-48 h-32 bg-gradient-card rounded-2xl p-6 card-3d glow-hover float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center mb-2">
                  <Trophy className="h-6 w-6 text-secondary mr-2" />
                  <span className="text-sm font-medium">Средний доход</span>
                </div>
                <div className="text-2xl font-black text-secondary">₽280K</div>
              </div>

              <div className="absolute bottom-0 right-8 w-48 h-32 bg-gradient-card rounded-2xl p-6 card-3d glow-hover float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center mb-2">
                  <Target className="h-6 w-6 text-accent mr-2" />
                  <span className="text-sm font-medium">Запущено за месяц</span>
                </div>
                <div className="text-2xl font-black text-accent">23 проекта</div>
              </div>

              <div className="absolute top-64 right-32 w-48 h-32 bg-gradient-card rounded-2xl p-6 card-3d glow-hover float pulse-glow" style={{ animationDelay: '3s' }}>
                <div className="flex items-center mb-2">
                  <Zap className="h-6 w-6 text-warning mr-2" />
                  <span className="text-sm font-medium">Быстрый старт</span>
                </div>
                <div className="text-2xl font-black text-warning">7 дней</div>
              </div>
            </div>

            {/* Central hero image */}
            <div className="relative w-full h-96 bg-gradient-primary rounded-3xl overflow-hidden glow">
              <img 
                src={heroImage} 
                alt="Успешный предприниматель с ноутбуком" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;