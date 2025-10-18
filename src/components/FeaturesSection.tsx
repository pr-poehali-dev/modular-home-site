import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'Быстрая установка',
      description: 'Дом устанавливается за 1 день. Можно заселяться сразу после подключения коммуникаций.'
    },
    {
      icon: 'Leaf',
      title: 'Эко-материалы',
      description: 'Используем только безопасные материалы: металл, минеральная вата, натуральное дерево.'
    },
    {
      icon: 'Shield',
      title: 'Прочный каркас',
      description: 'Металлический каркас с профессиональной сваркой. Не скрипит, не деформируется.'
    },
    {
      icon: 'Snowflake',
      title: 'Всесезонность',
      description: 'Отличная термоизоляция. Комфортно зимой и летом без дополнительного утепления.'
    },
    {
      icon: 'Truck',
      title: 'Мобильность',
      description: 'Дом можно перевезти целиком на новое место с помощью специальных креплений.'
    },
    {
      icon: 'CircleDollarSign',
      title: 'Прозрачная цена',
      description: 'Фиксированная стоимость. Никаких скрытых платежей и доплат в процессе.'
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современные технологии и экологичные материалы для вашего комфорта
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name={feature.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
