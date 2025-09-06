import { useState } from "react";
import { ChevronDown, Search, HelpCircle, Clock, Users, BookOpen, CreditCard } from "lucide-react";
import { Input } from "@/components/ui/input";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все вопросы", icon: HelpCircle },
    { id: "course", name: "О курсе", icon: BookOpen },
    { id: "format", name: "Формат обучения", icon: Clock },
    { id: "support", name: "Поддержка", icon: Users },
    { id: "payment", name: "Оплата", icon: CreditCard }
  ];

  const faqs = [
    {
      question: "Подойдет ли курс полному новичку без опыта в бизнесе?",
      answer: "Абсолютно! Курс создан специально для тех, кто начинает с нуля. Мы даем пошаговый план действий, объясняем все термины простым языком и ведем вас за руку от идеи до первой прибыли. 94% наших студентов — это люди без предпринимательского опыта.",
      category: "course"
    },
    {
      question: "Сколько времени нужно уделять обучению каждый день?",
      answer: "Рекомендуем заниматься 1-2 часа в день. Курс построен так, что можно совмещать с основной работой. Уроки короткие (15-20 минут), есть мобильное приложение для изучения материалов в дороге.",
      category: "format"
    },
    {
      question: "Какие гарантии успеха вы даете?",
      answer: "Мы даем гарантию возврата денег в течение 30 дней, если курс вам не подойдет. Также гарантируем персональную поддержку до получения первой прибыли на тарифах 'Продвинутый' и 'VIP'. 94% студентов получают прибыль в первые 6 месяцев.",
      category: "course"
    },
    {
      question: "Можно ли получить персональную консультацию?",
      answer: "Да! На тарифе 'VIP' включены 3 персональные консультации 1-на-1 с ментором. На тарифе 'Продвинутый' есть групповые созвоны. На базовом тарифе — поддержка через общий чат и email.",
      category: "support"
    },
    {
      question: "Какой стартовый капитал нужен для запуска бизнеса?",
      answer: "Многие идеи из курса можно реализовать с минимальными вложениями от ₽10-50 тысяч. Мы специально делаем акцент на low-cost стартапы и bootstrapping. Есть кейсы запуска бизнеса вообще без начального капитала.",
      category: "course"
    },
    {
      question: "Есть ли рассрочка на оплату курса?",
      answer: "Да, доступна рассрочка на 6 и 12 месяцев без переплат. Также принимаем оплату картами любых банков, электронными кошельками и банковскими переводами. Для корпоративных клиентов возможна оплата по счету.",
      category: "payment"
    },
    {
      question: "Что делать, если я не успеваю за группой?",
      answer: "Обучение идет в удобном для вас темпе. Доступ к материалам сохраняется от 6 месяцев до пожизненного (зависит от тарифа). Можете пересматривать уроки, задавать вопросы в чате. Никто не останется позади!",
      category: "format"
    },
    {
      question: "Выдается ли сертификат об окончании?",
      answer: "Да, на тарифах 'Продвинутый' и 'VIP' выдается именной сертификат о прохождении курса. Сертификат подтверждает изучение 46 уроков и выполнение практических заданий. Многие студенты используют его при поиске инвесторов.",
      category: "course"
    },
    {
      question: "Можно ли получить возврат после покупки?",
      answer: "Да, действует гарантия возврата в течение 30 дней с момента покупки. Если курс не оправдает ожидания, мы вернем 100% стоимости без лишних вопросов. Для возврата достаточно написать в службу поддержки.",
      category: "payment"
    },
    {
      question: "Будет ли поддержка после окончания курса?",
      answer: "Конечно! Доступ к чату выпускников остается навсегда. Регулярные встречи и мастерклассы для alumni. На VIP тарифе — участие в мастермайнд группе и доступ к закрытому сообществу предпринимателей.",
      category: "support"
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Частые вопросы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о курсе, процессе обучения и поддержке
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search and filters */}
          <div className="mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Поиск по вопросам и ответам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-primary text-white glow'
                      : 'bg-gradient-card border border-border/20 hover:bg-muted/50 glow-hover'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl border border-border/20 overflow-hidden glow-hover"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                >
                  <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${
                      openItem === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItem === index && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2">
                    <div className="pt-4 border-t border-border/20">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Вопросы не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить поисковый запрос или выбрать другую категорию
              </p>
            </div>
          )}

          {/* Contact support */}
          <div className="mt-16 text-center bg-gradient-card p-8 rounded-3xl border border-border/20">
            <h3 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h3>
            <p className="text-muted-foreground mb-6">
              Напишите нам в поддержку, и мы ответим в течение 2 часов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@course.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-xl hover:scale-105 transition-transform glow-hover font-medium"
              >
                <HelpCircle className="h-5 w-5" />
                Написать в поддержку
              </a>
              <a
                href="https://t.me/coursesupport"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-secondary text-white rounded-xl hover:scale-105 transition-transform glow-hover font-medium"
              >
                <Users className="h-5 w-5" />
                Telegram чат
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;