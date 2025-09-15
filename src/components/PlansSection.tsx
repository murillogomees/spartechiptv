import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Crown, Star, Zap } from "lucide-react";
import { useConfig, PlanosConfig } from "@/hooks/useConfig";

const PlansSection = () => {
  const planosConfig = useConfig<PlanosConfig>('planos.json');

  if (!planosConfig) {
    return <div className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
      </div>
    </div>;
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Zap,
      Star,
      Crown
    };
    return icons[iconName] || Star;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {planosConfig.titulo}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {planosConfig.subtitulo}
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {planosConfig.planos.map((plano, index) => {
            const IconComponent = getIcon(plano.icone);
            return (
              <Card
                key={index}
                className={`relative bg-gradient-card border-2 transition-smooth hover:scale-[1.02] hover:shadow-elevated ${
                  plano.popular
                    ? "border-primary shadow-glow"
                    : "border-border hover:border-primary/40"
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-primary px-6 py-2 rounded-full text-sm font-bold text-primary-foreground shadow-glow">
                      Mais Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${
                      plano.popular ? "bg-gradient-primary shadow-glow" : "bg-secondary"
                    }`}>
                      <IconComponent className={`h-8 w-8 ${
                        plano.popular ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plano.nome}</CardTitle>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-3xl font-bold text-gradient-primary">
                        {plano.preco}
                      </span>
                      <span className="text-muted-foreground">{plano.periodo}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plano.descricao}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <ul className="space-y-3">
                    {plano.recursos.map((recurso, recursoIndex) => (
                      <li key={recursoIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{recurso}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={plano.popular ? "hero" : "premium"}
                    size="default"
                    className="w-full"
                  >
                    {plano.textoBotao}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            {planosConfig.informacoesAdicionais.testeGratis}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {planosConfig.informacoesAdicionais.beneficios.map((beneficio, index) => (
              <span key={index}>{beneficio}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;