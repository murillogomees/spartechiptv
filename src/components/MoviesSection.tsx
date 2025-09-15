import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star } from "lucide-react";
import { useConfig, FilmesConfig, SeriesConfig } from "@/hooks/useConfig";

const MoviesSection = () => {
  const filmesConfig = useConfig<FilmesConfig>('filmes.json');
  const seriesConfig = useConfig<SeriesConfig>('series.json');

  if (!filmesConfig || !seriesConfig) {
    return <div className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
      </div>
    </div>;
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Filmes</span> e{" "}
            <span className="text-gradient-accent">Séries</span> em destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os maiores sucessos do cinema e as séries mais assistidas do mundo,
            disponíveis 24 horas por dia.
          </p>
        </div>

        {/* Movies Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{filmesConfig.titulo}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {filmesConfig.filmes.map((filme, index) => (
              <Card
                key={index}
                className="group cursor-pointer bg-gradient-card border-border overflow-hidden transition-smooth hover:scale-[1.05] hover:shadow-elevated"
              >
                <div className="relative">
                  <img
                    src={filme.imagem}
                    alt={`Poster do filme ${filme.titulo}`}
                    className="w-full aspect-[2/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="bg-primary rounded-full p-3 group-hover:scale-110 transition-smooth">
                      <Play className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold text-sm leading-tight line-clamp-2">
                    {filme.titulo}
                  </h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {filme.categoria}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{filme.ano}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Series Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">{seriesConfig.titulo}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {seriesConfig.series.map((serie, index) => (
              <Card
                key={index}
                className="group cursor-pointer bg-gradient-card border-border overflow-hidden transition-smooth hover:scale-[1.05] hover:shadow-elevated"
              >
                <div className="relative">
                  <img
                    src={serie.imagem}
                    alt={`Poster da série ${serie.titulo}`}
                    className="w-full aspect-[2/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="bg-primary rounded-full p-3 group-hover:scale-110 transition-smooth">
                      <Play className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold text-sm leading-tight line-clamp-2">
                    {serie.titulo}
                  </h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {serie.categoria}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{serie.ano}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesSection;