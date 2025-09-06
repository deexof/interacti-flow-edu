import { useState } from "react";
import { CheckCircle, Clock, Users, Video, FileText, Lightbulb } from "lucide-react";

const CourseProgram = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      title: "Mindset предпринимателя",
      duration: "2 недели",
      lessons: 8,
      icon: Lightbulb,
      color: "primary",
      description: "Формируем правильное мышление для успешного бизнеса",
      topics: [
        "Психология успешного предпринимателя",
        "Преодоление страхов и ограничивающих убеждений",
        "Постановка амбициозных целей",
        "Развитие лидерских качеств",
        "Управление временем и приоритетами",
        "Создание системы мотивации",
        "Работа с неудачами и ошибками",
        "Построение сети контактов"
      ]
    },
    {
      title: "Поиск и валидация идеи",
      duration: "2 недели",
      lessons: 10,
      icon: CheckCircle,
      color: "secondary",
      description: "Находим прибыльную нишу и проверяем спрос",
      topics: [
        "Методы генерации бизнес-идей",
        "Анализ рынка и конкурентов",
        "Создание портрета целевой аудитории",
        "MVP и тестирование гипотез",
        "Валидация через интервью",
        "Анализ спроса и предложения",
        "Финансовое моделирование",
        "Выбор оптимальной ниши",
        "Создание УТП",
        "Планирование масштабирования"
      ]
    },
    {
      title: "Создание продукта",
      duration: "3 недели",
      lessons: 12,
      icon: Video,
      color: "accent",
      description: "Разрабатываем продукт, который покупают",
      topics: [
        "Принципы продуктового дизайна",
        "User Experience и интерфейсы",
        "Техническое задание и планирование",
        "Поиск и управление командой разработки",
        "Контроль качества и тестирование",
        "Создание системы обратной связи",
        "Итеративная разработка",
        "Интеграции и автоматизация",
        "Подготовка к запуску",
        "Создание инструкций и документации",
        "Настройка аналитики",
        "Планирование обновлений"
      ]
    },
    {
      title: "Маркетинг и продажи",
      duration: "2 недели",
      lessons: 9,
      icon: Users,
      color: "success",
      description: "Привлекаем клиентов и увеличиваем продажи",
      topics: [
        "Стратегия позиционирования",
        "Создание маркетинговой воронки",
        "Контент-маркетинг и SMM",
        "Настройка рекламных кампаний",
        "Email-маркетинг и автоворонки",
        "Партнерские программы",
        "Работа с возражениями",
        "Увеличение конверсии",
        "Retention и повторные продажи"
      ]
    },
    {
      title: "Автоматизация и масштабирование",
      duration: "2 недели",
      lessons: 7,
      icon: FileText,
      color: "warning",
      description: "Создаем систему, которая работает без вас",
      topics: [
        "Автоматизация бизнес-процессов",
        "Делегирование и найм сотрудников",
        "Создание стандартов и регламентов",
        "Внедрение CRM и систем учета",
        "Планирование развития и роста",
        "Привлечение инвестиций",
        "Выход на новые рынки"
      ]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Программа курса</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Пошаговая система из 5 модулей, которая проведет вас от идеи до прибыльного бизнеса за 90 дней
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left sidebar - Module tabs */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeModule === index
                      ? `bg-gradient-${module.color} text-white glow`
                      : 'bg-gradient-card border-border/20 hover:bg-muted/50 glow-hover'
                  }`}
                  onClick={() => setActiveModule(index)}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeModule === index ? 'bg-white/20' : `bg-${module.color}/20`
                    }`}>
                      <module.icon className={`h-6 w-6 ${
                        activeModule === index ? 'text-white' : `text-${module.color}`
                      }`} />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{module.title}</div>
                      <div className={`text-sm ${
                        activeModule === index ? 'text-white/80' : 'text-muted-foreground'
                      }`}>
                        Модуль {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {module.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4" />
                      {module.lessons} уроков
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Module details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-card p-8 rounded-3xl border border-border/20">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    modules[activeModule].color === 'primary' ? 'bg-primary/20' :
                    modules[activeModule].color === 'secondary' ? 'bg-secondary/20' :
                    modules[activeModule].color === 'accent' ? 'bg-accent/20' :
                    modules[activeModule].color === 'success' ? 'bg-success/20' :
                    'bg-warning/20'
                  }`}>
                    {(() => {
                      const IconComponent = modules[activeModule].icon;
                      return <IconComponent className={`h-8 w-8 ${
                        modules[activeModule].color === 'primary' ? 'text-primary' :
                        modules[activeModule].color === 'secondary' ? 'text-secondary' :
                        modules[activeModule].color === 'accent' ? 'text-accent' :
                        modules[activeModule].color === 'success' ? 'text-success' :
                        'text-warning'
                      }`} />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-2">{modules[activeModule].title}</h3>
                    <p className="text-muted-foreground">{modules[activeModule].description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Длительность: {modules[activeModule].duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Уроков: {modules[activeModule].lessons}
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-6">Что изучим в модуле:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {modules[activeModule].topics.map((topic, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors glow-hover"
                  >
                    <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                      modules[activeModule].color === 'primary' ? 'text-primary' :
                      modules[activeModule].color === 'secondary' ? 'text-secondary' :
                      modules[activeModule].color === 'accent' ? 'text-accent' :
                      modules[activeModule].color === 'success' ? 'text-success' :
                      'text-warning'
                    }`} />
                    <span className="text-sm">{topic}</span>
                  </div>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-8 p-6 bg-muted/10 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Прогресс модуля</span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(((activeModule + 1) / modules.length) * 100)}% завершено
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      modules[activeModule].color === 'primary' ? 'bg-gradient-primary' :
                      modules[activeModule].color === 'secondary' ? 'bg-gradient-secondary' :
                      modules[activeModule].color === 'accent' ? 'bg-gradient-accent' :
                      modules[activeModule].color === 'success' ? 'bg-success' :
                      'bg-warning'
                    }`}
                    style={{ width: `${Math.round(((activeModule + 1) / modules.length) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course benefits */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border/20 glow-hover">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Video className="h-8 w-8 text-primary" />
            </div>
            <div className="font-bold mb-2">46 видеоуроков</div>
            <div className="text-sm text-muted-foreground">Пошаговые инструкции</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border/20 glow-hover">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-secondary" />
            </div>
            <div className="font-bold mb-2">Шаблоны и чек-листы</div>
            <div className="text-sm text-muted-foreground">Готовые инструменты</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border/20 glow-hover">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <div className="font-bold mb-2">Групповые созвоны</div>
            <div className="text-sm text-muted-foreground">Живое общение</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-2xl border border-border/20 glow-hover">
            <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <div className="font-bold mb-2">Практические задания</div>
            <div className="text-sm text-muted-foreground">Закрепление навыков</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;