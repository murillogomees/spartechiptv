import { Card, CardContent } from "@/components/ui/card";
import { Tv, Zap, Shield, Smartphone, Globe, Clock } from "lucide-react";
import { useConfig } from "@/hooks/useConfig";

interface BenefitsConfig {
  titulo: string;
  subtitulo: string;
  cards: Array<{
    icone: string;
    titulo: string;
    descricao: string;
  }>;
}

const BenefitsSection = () => {
  const beneficiosConfig = useConfig<BenefitsConfig>('beneficios.json');

  if (!beneficiosConfig) {
    return <div className="py-20 px-6 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
      </div>
    </div>;
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Tv, Zap, Shield, Smartphone, Globe, Clock
    };
    return icons[iconName] || Tv;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {beneficiosConfig.titulo}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {beneficiosConfig.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficiosConfig.cards.map((card, index) => {
            const IconComponent = getIcon(card.icone);
            return (
              <Card key={index} className="bg-gradient-card border-border hover:border-primary/40 transition-smooth hover:scale-[1.02] hover:shadow-card group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{card.titulo}</h3>
                  <p className="text-muted-foreground">{card.descricao}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;