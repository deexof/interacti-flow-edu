import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Trophy, Target, Zap } from "lucide-react";
import heroImage from "@/assets/hero-entrepreneur.jpg";

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [studentCount, setStudentCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  const fullText = "Как я потерял 20 млн и вернулся";

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
      { setter: setStudentCount, target: 20, duration: 2000 },
      { setter: setSuccessRate, target: 8, duration: 2000 },
      { setter: setProjectsCount, target: 6, duration: 2000 }
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium">
              Реальный опыт без прикрас
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground">
            {typewriterText}
            <span className="animate-pulse text-primary">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Меня зовут Роман. Мне 34. Я был директором в Газпромбанке, построил сеть барбершопов, 
            потерял 20 млн рублей и восстановился за 8 месяцев. 
            <span className="text-primary font-semibold"> Расскажу как.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary-dark text-primary-foreground">
              Начать обучение
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              <Play className="mr-2 h-5 w-5" />
              Послушать историю
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-card p-6 rounded-xl border">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {studentCount} млн ₽
              </div>
              <div className="text-sm text-muted-foreground">Долгов накопил</div>
            </div>
            <div className="text-center bg-card p-6 rounded-xl border">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                {successRate} мес
              </div>
              <div className="text-sm text-muted-foreground">Восстановился</div>
            </div>
            <div className="text-center bg-card p-6 rounded-xl border">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                15 лет
              </div>
              <div className="text-sm text-muted-foreground">В банках</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;