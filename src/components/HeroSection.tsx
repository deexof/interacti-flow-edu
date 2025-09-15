import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Trophy, Target, Zap, Search, Eye } from "lucide-react";
import heroImage from "@/assets/hero-entrepreneur.jpg";
import CrimeTape from "./CrimeTape";
import EvidenceTag from "./EvidenceTag";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Scanner lines effect */}
      <div className="scanner-lines absolute inset-0 opacity-30"></div>
      
      {/* Crime tape at top */}
      <div className="absolute top-8 left-0 right-0 z-20">
        <CrimeTape text="⚠ РАССЛЕДОВАНИЕ ВЕДЕТСЯ - НЕ ПРОХОДИТЬ ⚠" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <EvidenceTag number="001" className="text-sm">
              СВИДЕТЕЛЬСКИЕ ПОКАЗАНИЯ
            </EvidenceTag>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground gradient-text neon-flicker">
            {typewriterText}
            <span className="animate-pulse text-primary">█</span>
          </h1>
          
          <div className="relative mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto bg-card/50 p-6 rounded-lg border border-primary/30 backdrop-blur-sm">
              <span className="text-primary font-bold">ПРОТОКОЛ ДОПРОСА:</span><br/>
              Меня зовут Роман. Мне 34. Я был директором в Газпромбанке, построил сеть барбершопов, 
              потерял 20 млн рублей и восстановился за 8 месяцев. 
              <span className="text-accent font-semibold pulse-glow"> Вещдоки прилагаются.</span>
            </p>
            <div className="evidence-marker absolute -top-2 -right-2"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center">
            <Button variant="neon" size="lg" className="text-lg px-8 py-6 h-auto">
              <Search className="mr-2 h-5 w-5" />
              НАЧАТЬ РАССЛЕДОВАНИЕ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="evidence" size="lg" className="text-lg px-8 py-6 h-auto">
              <Eye className="mr-2 h-5 w-5" />
              ИЗУЧИТЬ УЛИКИ
            </Button>
          </div>

          {/* Investigation Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center bg-card/80 p-6 rounded-xl border border-primary/50 glow-hover card-3d backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 pulse-glow">
                {studentCount} млн ₽
              </div>
              <div className="text-sm text-muted-foreground font-mono">РАЗМЕР УЩЕРБА</div>
              <div className="w-full h-1 bg-primary/20 mt-2 rounded-full">
                <div className="h-full bg-gradient-primary rounded-full animate-[scan_2s_linear_infinite]" style={{width: '100%'}}></div>
              </div>
            </div>
            <div className="text-center bg-card/80 p-6 rounded-xl border border-secondary/50 glow-pink card-3d backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2 pulse-glow">
                {successRate} мес
              </div>
              <div className="text-sm text-muted-foreground font-mono">ВРЕМЯ ВОССТАНОВЛЕНИЯ</div>
              <div className="w-full h-1 bg-secondary/20 mt-2 rounded-full">
                <div className="h-full bg-gradient-secondary rounded-full animate-[scan_2s_linear_infinite_0.5s]" style={{width: '100%'}}></div>
              </div>
            </div>
            <div className="text-center bg-card/80 p-6 rounded-xl border border-accent/50 glow-yellow card-3d backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2 pulse-glow">
                15 лет
              </div>
              <div className="text-sm text-muted-foreground font-mono">ОПЫТ В БАНКАХ</div>
              <div className="w-full h-1 bg-accent/20 mt-2 rounded-full">
                <div className="h-full bg-gradient-accent rounded-full animate-[scan_2s_linear_infinite_1s]" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>

          {/* Evidence collection notice */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-muted/50 border border-primary/30 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground font-mono">
                🔍 СТАТУС: АКТИВНОЕ РАССЛЕДОВАНИЕ | 📂 УЛИКИ: СОБРАНЫ | ⚖️ ВЕРДИКТ: В ПРОЦЕССЕ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;