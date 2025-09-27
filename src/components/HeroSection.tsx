import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Eye, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-entrepreneur.jpg";
import CrimeTape from "./CrimeTape";
import EvidenceTag from "./EvidenceTag";
import BusinessMetrics from "./BusinessMetrics";

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [studentCount, setStudentCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  const fullText = "ДЕЛО №2024: КАК Я ПОТЕРЯЛ 20 МЛН И ВЕРНУЛСЯ";

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

    const intervals: NodeJS.Timeout[] = [];

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
      intervals.push(counter);
    });

    // Cleanup function to prevent memory leaks
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  // Sample data for charts
  const recoveryData = [
    { month: 'Янв', value: -20 },
    { month: 'Фев', value: -18 },
    { month: 'Мар', value: -12 },
    { month: 'Апр', value: -5 },
    { month: 'Май', value: 2 },
    { month: 'Июн', value: 8 },
    { month: 'Июл', value: 15 },
    { month: 'Авг', value: 20 },
  ];

  const lossData = [
    { month: 'Q1', value: 5 },
    { month: 'Q2', value: 12 },
    { month: 'Q3', value: 18 },
    { month: 'Q4', value: 20 },
  ];

  const growthData = [
    { month: 'M1', value: 0 },
    { month: 'M2', value: 2 },
    { month: 'M3', value: 5 },
    { month: 'M4', value: 10 },
    { month: 'M5', value: 18 },
    { month: 'M6', value: 25 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Scanner lines effect - more subtle */}
      <div className="scanner-lines absolute inset-0 opacity-10"></div>
      
      {/* Crime tape at top - refined */}
      <div className="absolute top-12 left-0 right-0 z-20">
        <CrimeTape text="⚠ ДЕЛО ЗАКРЫТО: УСПЕШНОЕ ВОССТАНОВЛЕНИЕ ⚠" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-8">
              <EvidenceTag number="001" className="text-sm">
                ФИНАНСОВОЕ РАССЛЕДОВАНИЕ
              </EvidenceTag>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight gradient-text neon-flicker">
              {typewriterText}
              <span className="animate-pulse text-primary">█</span>
            </h1>
            
            <div className="relative mb-12">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto bg-card/30 p-8 rounded-lg border border-primary/20 backdrop-blur-sm">
                <span className="text-primary font-bold">ЗАКЛЮЧЕНИЕ ЭКСПЕРТА:</span><br/>
                Роман, 34 года, экс-директор Газпромбанка. Потерял 20 млн на барбершопах, 
                восстановился за 8 месяцев. 
                <span className="text-secondary font-semibold"> Методы восстановления задокументированы.</span>
              </p>
              <div className="evidence-marker absolute -top-3 -right-3"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center">
              <Button variant="neon" size="lg" className="text-xl px-10 py-8 h-auto">
                <Search className="mr-3 h-6 w-6" />
                ИЗУЧИТЬ СЛУЧАЙ
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-10 py-8 h-auto">
                <Eye className="mr-3 h-6 w-6" />
                АНАЛИЗ ДАННЫХ
              </Button>
            </div>
          </div>

          {/* Business Analytics Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="h-6 w-6 text-destructive" />
                <h3 className="text-lg font-semibold">Динамика потерь</h3>
              </div>
              <BusinessMetrics 
                type="loss" 
                title="УБЫТКИ ПО КВАРТАЛАМ"
                data={lossData}
              />
              <div className="text-center">
                <div className="text-3xl font-bold text-destructive mb-1">-20 млн ₽</div>
                <div className="text-sm text-muted-foreground font-mono">ОБЩИЙ УЩЕРБ</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-secondary" />
                <h3 className="text-lg font-semibold">Восстановление</h3>
              </div>
              <BusinessMetrics 
                type="recovery" 
                title="ФИНАНСОВОЕ ВОССТАНОВЛЕНИЕ"
                data={recoveryData}
              />
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">8 месяцев</div>
                <div className="text-sm text-muted-foreground font-mono">ВРЕМЯ ВОССТАНОВЛЕНИЯ</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Новый рост</h3>
              </div>
              <BusinessMetrics 
                type="growth" 
                title="РОСТ ПОСЛЕ ВОССТАНОВЛЕНИЯ"
                data={growthData}
              />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">+25 млн ₽</div>
                <div className="text-sm text-muted-foreground font-mono">НОВАЯ ПРИБЫЛЬ</div>
              </div>
            </div>
          </div>

          {/* Case Status */}
          <div className="text-center">
            <div className="inline-block bg-card/50 border border-primary/20 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-lg text-muted-foreground font-mono">
                📊 СТАТУС ДЕЛА: ЗАКРЫТО | 🎯 РЕЗУЛЬТАТ: УСПЕХ | 📈 МЕТОДЫ: ПРОВЕРЕНЫ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;