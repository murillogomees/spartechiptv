import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tv, Film, Trophy, Globe, Heart, Gamepad2, Music, GraduationCap } from "lucide-react";
import { useConfig, CanaisConfig } from "@/hooks/useConfig";

const ChannelsSection = () => {
  const canaisConfig = useConfig<CanaisConfig>('canais.json');

  if (!canaisConfig) {
    return <div className="py-20 px-6 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
      </div>
    </div>;
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Trophy,
      Film,
      Tv,
      Globe,
      Heart,
      Gamepad2,
      Music,
      GraduationCap
    };
    return icons[iconName] || Tv;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {canaisConfig.titulo}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {canaisConfig.subtitulo}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {canaisConfig.categorias.map((categoria, index) => {
            const IconComponent = getIcon(categoria.icone);
            return (
              <Card
                key={index}
                className="bg-gradient-card border-2 border-border hover:border-primary/40 transition-smooth hover:scale-[1.02] hover:shadow-card group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-full ${categoria.corFundo} group-hover:scale-110 transition-smooth`}>
                      <IconComponent className={`h-8 w-8 ${categoria.cor}`} />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{categoria.nome}</h3>
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {categoria.quantidade} canais
                    </Badge>
                  </div>

                  {/* Channel Examples */}
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Exemplos:</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {categoria.canaisExemplo.slice(0, 6).map((canal, canalIndex) => (
                        <Badge
                          key={canalIndex}
                          variant="outline"
                          className="text-xs px-2 py-1"
                        >
                          {canal}
                        </Badge>
                      ))}
                      {categoria.canaisExemplo.length > 6 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{categoria.canaisExemplo.length - 6}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {canaisConfig.recursos.map((recurso, index) => (
            <div key={index} className="bg-gradient-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-primary mb-2">{recurso.titulo}</h4>
              <p className="text-sm text-muted-foreground">{recurso.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;