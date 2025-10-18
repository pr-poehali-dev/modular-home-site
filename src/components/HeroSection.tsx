import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onCalculatorClick: () => void;
  onProjectsClick: () => void;
}

const HeroSection = ({ onCalculatorClick, onProjectsClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span>Строим будущее с 2016 года</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Экологичные модульные дома
            <span className="text-primary block mt-2">под ключ</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl">
            Готовые дома на металлокаркасе с панорамным остеклением. 
            Изготовление 4 недели, установка 1 день.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover-scale"
              onClick={onCalculatorClick}
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover-scale"
              onClick={onProjectsClick}
            >
              Смотреть проекты
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8 border-t">
            <div>
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">недели изготовления</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">день установки</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">построенных домов</div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/projects/f0a0ae31-c519-451b-bc48-c6c031e6723d/files/16edf763-ea23-4f4f-983f-dfc80242aa44.jpg" 
              alt="Модульный дом GreenFrame"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-center gap-4">
              <Icon name="Award" size={32} className="text-primary" />
              <div>
                <div className="font-bold">Гарантия</div>
                <div className="text-sm text-muted-foreground">10 лет</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
