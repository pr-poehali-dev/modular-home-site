import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [area, setArea] = useState(120);
  const [floors, setFloors] = useState(1);
  const [panoramic, setPanoramic] = useState(false);
  const [terrace, setTerrace] = useState(false);
  const [smartHome, setSmartHome] = useState(false);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculatePrice = () => {
    const basePrice = area * 20000;
    let additionalCost = 0;
    if (panoramic) additionalCost += 300000;
    if (terrace) additionalCost += 200000;
    if (smartHome) additionalCost += 150000;
    return basePrice + additionalCost;
  };

  const formatPrice = (price: number) => {
    return (price / 1000000).toFixed(1);
  };

  const projects = [
    {
      id: 1,
      title: 'Модель "Комфорт"',
      area: '120 м²',
      price: 'от 2,4 млн ₽',
      image: 'https://cdn.poehali.dev/projects/f0a0ae31-c519-451b-bc48-c6c031e6723d/files/16edf763-ea23-4f4f-983f-dfc80242aa44.jpg',
      features: ['1 этаж', '2 спальни', '1 санузел', 'Терраса', 'Панорамное остекление', 'Эко-материалы']
    },
    {
      id: 2,
      title: 'Модель "Премиум"',
      area: '180 м²',
      price: 'от 3,6 млн ₽',
      image: 'https://cdn.poehali.dev/projects/f0a0ae31-c519-451b-bc48-c6c031e6723d/files/677da7b7-e84c-4d10-88b2-dc30591fe00f.jpg',
      features: ['2 этажа', '4 спальни', '2 санузла', 'Панорамное остекление', 'Эко-материалы']
    },
    {
      id: 3,
      title: 'Модель "Уют"',
      area: '90 м²',
      price: 'от 1,8 млн ₽',
      image: 'https://cdn.poehali.dev/projects/f0a0ae31-c519-451b-bc48-c6c031e6723d/files/2ff5a0a1-2951-463c-bd0d-14d654d35d2a.jpg',
      features: ['1 этаж', '2 спальни', '1 санузел', 'Панорамное остекление', 'Эко-материалы']
    },
    {
      id: 4,
      title: 'Модель "Минимал"',
      area: '60 м²',
      price: 'от 1,2 млн ₽',
      image: 'https://cdn.poehali.dev/projects/f0a0ae31-c519-451b-bc48-c6c031e6723d/files/4d27b2b2-c979-405d-93e3-673ef17fd229.jpg',
      features: ['2 этажа', '1 спальня', '1 санузел', 'Панорамные окна', 'Эко-материалы']
    },
    {
      id: 5,
      title: 'Модель "Компакт"',
      area: '50 м²',
      price: 'от 1,0 млн ₽',
      image: 'https://cdn.poehali.dev/projects/f0a0ae31-c519-451b-bc48-c6c031e6723d/files/e9e82afb-0dbb-493d-b105-f9dc32bab821.jpg',
      features: ['1 этаж', 'Студия', '1 санузел', 'Эко-материалы']
    },
    {
      id: 6,
      title: 'Модель "Люкс"',
      area: '140 м²',
      price: 'от 2,8 млн ₽',
      image: 'https://cdn.poehali.dev/projects/f0a0ae31-c519-451b-bc48-c6c031e6723d/files/83f2c376-3df4-43d0-b67f-fab831a93d4e.jpg',
      features: ['1 этаж', '2 спальни', '1 санузел', 'Большая терраса', 'Панорамное остекление', 'Эко-материалы']
    }
  ];

  const technologies = [
    {
      icon: 'Layers',
      title: 'Модульная конструкция',
      description: 'Заводская сборка обеспечивает точность и качество'
    },
    {
      icon: 'Zap',
      title: 'Энергоэффективность',
      description: 'Современная изоляция снижает расходы на отопление до 60%'
    },
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: 'Срок службы более 100 лет с гарантией 25 лет'
    },
    {
      icon: 'Clock',
      title: 'Быстрый монтаж',
      description: 'Установка дома под ключ за 2-4 недели'
    }
  ];

  const steps = [
    { number: 1, title: 'Консультация', description: 'Обсуждаем ваши требования и выбираем проект' },
    { number: 2, title: 'Проектирование', description: 'Разрабатываем индивидуальные решения' },
    { number: 3, title: 'Производство', description: 'Изготавливаем модули на заводе' },
    { number: 4, title: 'Монтаж', description: 'Устанавливаем дом на вашем участке' },
    { number: 5, title: 'Сдача', description: 'Проводим финальную проверку и передаём ключи' }
  ];

  const reviews = [
    {
      name: 'Александр М.',
      text: 'За месяц получили готовый дом! Качество на высоте, всё продумано до мелочей.',
      rating: 5
    },
    {
      name: 'Екатерина П.',
      text: 'Очень довольны энергоэффективностью. Счета за отопление снизились в 3 раза.',
      rating: 5
    },
    {
      name: 'Дмитрий К.',
      text: 'Современный дизайн и экологичные материалы. Рекомендую всем!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-secondary">ModularHomes</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#tech" className="hover:text-primary transition-colors">Технологии</a>
            <a href="#steps" className="hover:text-primary transition-colors">Этапы</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2">Дома будущего уже сегодня</Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Модульный дом <br />
              <span className="text-gradient">под ключ за 7 дней</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современные технологии строительства позволяют получить готовый дом премиум-класса в кратчайшие сроки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover-scale" onClick={scrollToProjects}>
                <Icon name="Home" size={20} className="mr-2" />
                Смотреть проекты
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale" onClick={() => setShowCalculator(true)}>
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Интерактивная 3D-визуализация модульных домов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                  selectedProject === project.id ? 'scale-105 ring-4 ring-primary' : 'hover:scale-102'
                }`}
                onClick={() => setSelectedProject(project.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Icon name="Maximize2" size={16} className="mr-2" />
                    3D-тур
                  </Button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted-foreground">{project.area}</span>
                    <span className="text-2xl font-bold text-primary">{project.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Технологии строительства</h2>
            <p className="text-xl text-muted-foreground">Современные решения для вашего комфорта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon name={tech.icon} size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Преимущества модульных домов</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'TrendingDown', title: 'Экономия до 30%', desc: 'По сравнению с традиционным строительством' },
              { icon: 'Leaf', title: 'Экологичность', desc: 'Природные и безопасные материалы' },
              { icon: 'ThumbsUp', title: 'Качество', desc: 'Контроль на каждом этапе производства' },
              { icon: 'Settings', title: 'Гибкость', desc: 'Возможность расширения и модернизации' }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-6 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Этапы работы</h2>
            <p className="text-xl text-muted-foreground">От идеи до готового дома за 5 простых шагов</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 relative group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform z-10">
                  {step.number}
                </div>
                <Card className="flex-1 p-6 group-hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят владельцы наших домов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-bold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">Оставьте заявку</h2>
                <p className="text-muted-foreground">Мы свяжемся с вами в течение 15 минут</p>
              </div>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Ваше имя" className="text-lg py-6" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="text-lg py-6" />
                </div>
                <div>
                  <Textarea placeholder="Комментарий (необязательно)" className="min-h-[120px]" />
                </div>
                <Button className="w-full text-lg py-6 hover-scale" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCalculator(false)}>
          <Card className="max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Калькулятор стоимости</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowCalculator(false)}>
                <Icon name="X" size={24} />
              </Button>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Площадь дома (м²)</label>
                <Input 
                  type="number" 
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  placeholder="Например: 120" 
                  className="text-lg py-6" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Количество этажей</label>
                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant={floors === 1 ? "default" : "outline"} 
                    className="flex-1 py-6"
                    onClick={() => setFloors(1)}
                  >
                    1 этаж
                  </Button>
                  <Button 
                    type="button" 
                    variant={floors === 2 ? "default" : "outline"} 
                    className="flex-1 py-6"
                    onClick={() => setFloors(2)}
                  >
                    2 этажа
                  </Button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Дополнительные опции</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5" 
                      checked={panoramic}
                      onChange={(e) => setPanoramic(e.target.checked)}
                    />
                    <span>Панорамное остекление (+300 000 ₽)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5" 
                      checked={terrace}
                      onChange={(e) => setTerrace(e.target.checked)}
                    />
                    <span>Терраса (+200 000 ₽)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5" 
                      checked={smartHome}
                      onChange={(e) => setSmartHome(e.target.checked)}
                    />
                    <span>Умный дом (+150 000 ₽)</span>
                  </label>
                </div>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Предварительная стоимость</p>
                  <p className="text-4xl font-bold text-primary">{formatPrice(calculatePrice())} млн ₽</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {area} м² × 20 000 ₽/м² {panoramic || terrace || smartHome ? '+ опции' : ''}
                  </p>
                </div>
              </div>
              <div>
                <Input type="tel" placeholder="Ваш телефон для точного расчёта" className="text-lg py-6" />
              </div>
              <Button className="w-full text-lg py-6 hover-scale" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Получить точный расчёт
              </Button>
            </form>
          </Card>
        </div>
      )}

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ModularHomes</h3>
              <p className="text-white/80">Строим дома будущего с 2015 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@modularhomes.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <div className="space-y-2 text-white/80">
                <p>О нас</p>
                <p>Вакансии</p>
                <p>Партнёрам</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:text-accent transition-colors" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:text-accent transition-colors" />
                <Icon name="Youtube" size={24} className="cursor-pointer hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 ModularHomes. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;