import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  area: string;
  price: string;
  image: string;
  features: string[];
  gallery: string[];
  planImage: string;
  materials: string[];
  specs: {
    bedrooms: number;
    bathrooms: number;
    floors: number;
    ceilingHeight: string;
    foundation: string;
    walls: string;
    roof: string;
    windows: string;
  };
}

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (projectId: number) => void;
}

const ProjectsSection = ({ projects, onProjectClick }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши проекты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовые решения для жизни за городом
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onProjectClick(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.area}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{project.price}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full hover-scale" size="lg">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
