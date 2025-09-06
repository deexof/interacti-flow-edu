import { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Анна Козлова",
      role: "Основатель интернет-магазина",
      company: "FashionHub",
      image: "", // placeholder
      rating: 5,
      text: "За 2 месяца после курса запустила интернет-магазин одежды. Первый месяц — ₽150К оборота, сейчас стабильно ₽500К+ в месяц. Александр научил системному подходу к бизнесу.",
      result: "₽500K/месяц",
      timeframe: "2 месяца",
      category: "E-commerce"
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      role: "IT-предприниматель",
      company: "TechSolutions",
      image: "", // placeholder
      rating: 5,
      text: "Работал программистом 5 лет, мечтал о своем деле. Курс дал четкий план действий. Сейчас моя IT-студия работает с 15 клиентами, команда из 8 человек.",
      result: "₽1.2M оборот",
      timeframe: "4 месяца",
      category: "IT-услуги"
    },
    {
      id: 3,
      name: "Мария Петрова",
      role: "Основатель образовательной платформы",
      company: "LearnFast",
      image: "", // placeholder
      rating: 5,
      text: "Создала онлайн-школу по изучению языков. Методика Александра помогла структурировать процесс. За полгода — 1200 студентов и ₽800К в месяц.",
      result: "₽800K/месяц",
      timeframe: "6 месяцев",
      category: "Образование"
    },
    {
      id: 4,
      name: "Алексей Смирнов",
      role: "Консультант по недвижимости",
      company: "RealtyPro",
      image: "", // placeholder
      rating: 5,
      text: "Перешел от работы риелтором к собственному агентству недвижимости. Сейчас 12 агентов работают на меня, сам занимаюсь только стратегией и развитием.",
      result: "₽2M оборот",
      timeframe: "8 месяцев",
      category: "Недвижимость"
    },
    {
      id: 5,
      name: "Елена Иванова",
      role: "Фитнес-предприниматель",
      company: "FitLife Studio",
      image: "", // placeholder
      rating: 5,
      text: "Открыла сеть фитнес-студий. Начала с одного зала, сейчас 3 локации в городе. Курс научил масштабировать бизнес правильно и без лишних рисков.",
      result: "₽650K/месяц",
      timeframe: "10 месяцев",
      category: "Фитнес"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Истории успеха наших студентов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 2800 предпринимателей уже изменили свою жизнь с помощью нашей методики. 
            Вот некоторые из их историй.
          </p>
        </div>

        {/* Main testimonial carousel */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-border/20 glow-hover">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Testimonial content */}
              <div className="relative">
                <Quote className="h-16 w-16 text-primary/20 absolute -top-4 -left-4" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    "{testimonials[currentSlide].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full"></div>
                    <div>
                      <div className="font-bold text-lg">{testimonials[currentSlide].name}</div>
                      <div className="text-muted-foreground">{testimonials[currentSlide].role}</div>
                      <div className="text-sm text-primary font-medium">{testimonials[currentSlide].company}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Results */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-primary/10 p-6 rounded-2xl border border-primary/20">
                    <DollarSign className="h-8 w-8 text-primary mb-3" />
                    <div className="text-2xl font-black text-primary mb-1">
                      {testimonials[currentSlide].result}
                    </div>
                    <div className="text-sm text-muted-foreground">Доход</div>
                  </div>
                  <div className="bg-gradient-secondary/10 p-6 rounded-2xl border border-secondary/20">
                    <TrendingUp className="h-8 w-8 text-secondary mb-3" />
                    <div className="text-2xl font-black text-secondary mb-1">
                      {testimonials[currentSlide].timeframe}
                    </div>
                    <div className="text-sm text-muted-foreground">Срок запуска</div>
                  </div>
                </div>
                <div className="bg-gradient-accent/10 p-6 rounded-2xl border border-accent/20 text-center">
                  <div className="text-lg font-bold text-accent mb-2">Ниша</div>
                  <div className="text-muted-foreground">{testimonials[currentSlide].category}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border/20 glow-hover">
            <div className="text-3xl font-black text-primary mb-2">2,847</div>
            <div className="text-sm text-muted-foreground">Выпускников</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border/20 glow-hover">
            <div className="text-3xl font-black text-secondary mb-2">₽1.2B</div>
            <div className="text-sm text-muted-foreground">Общий оборот</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border/20 glow-hover">
            <div className="text-3xl font-black text-accent mb-2">94%</div>
            <div className="text-sm text-muted-foreground">Успешных запусков</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border/20 glow-hover">
            <div className="text-3xl font-black text-success mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Средний рейтинг</div>
          </div>
        </div>

        {/* Additional testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-gradient-card p-6 rounded-2xl border border-border/20 glow-hover">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-warning fill-current" />
                ))}
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                "{testimonial.text.slice(0, 120)}..."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;