import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Calendar, Play, Clock, Plus } from "lucide-react";

const MoviesSection = () => {
  const featuredMovies = [
    {
      title: "Vingadores: Ultimato",
      year: "2023",
      genre: "Ação/Aventura",
      rating: "9.2",
      duration: "181 min",
      isNew: true,
      image: "https://images.unsplash.com/photo-1635863138275-d9864d29c4fe?w=300&h=450&fit=crop"
    },
    {
      title: "Duna: Parte Dois",
      year: "2024",
      genre: "Ficção Científica",
      rating: "8.8",
      duration: "166 min",
      isNew: true,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop"
    },
    {
      title: "John Wick 4",
      year: "2023",
      genre: "Ação/Thriller",
      rating: "8.5",
      duration: "169 min",
      isNew: false,
      image: "https://images.unsplash.com/photo-1489599133391-8b3791d1a08e?w=300&h=450&fit=crop"
    },
    {
      title: "Oppenheimer",
      year: "2023",
      genre: "Drama/História",
      rating: "9.0",
      duration: "180 min",
      isNew: false,
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop"
    },
    {
      title: "Spider-Man: Sem Volta",
      year: "2023",
      genre: "Ação/Aventura",
      rating: "8.7",
      duration: "148 min",
      isNew: false,
      image: "https://images.unsplash.com/photo-1635863138275-d9864d29c4fe?w=300&h=450&fit=crop"
    },
    {
      title: "Top Gun: Maverick",
      year: "2023",
      genre: "Ação/Drama",
      rating: "8.9",
      duration: "131 min",
      isNew: false,
      image: "https://images.unsplash.com/photo-1489599133391-8b3791d1a08e?w=300&h=450&fit=crop"
    }
  ];

  const popularSeries = [
    {
      title: "Succession",
      year: "2023",
      genre: "Drama",
      rating: "9.1",
      seasons: "4 temporadas",
      episodes: "39 episódios"
    },
    {
      title: "The Last of Us",
      year: "2023",
      genre: "Drama/Terror",
      rating: "8.8",
      seasons: "1 temporada",
      episodes: "9 episódios"
    },
    {
      title: "House of the Dragon",
      year: "2023",
      genre: "Fantasia/Drama",
      rating: "8.6",
      seasons: "1 temporada",
      episodes: "10 episódios"
    },
    {
      title: "Stranger Things",
      year: "2023",
      genre: "Ficção/Terror",
      rating: "8.9",
      seasons: "4 temporadas",
      episodes: "42 episódios"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-accent">Filmes</span> e{" "}
            <span className="text-gradient-primary">séries</span> atualizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Catálogo atualizado semanalmente com os últimos lançamentos.
            Maratonas, blockbusters e clássicos do cinema mundial.
          </p>
        </div>

        {/* Featured Movies */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">🎬 Filmes em Destaque</h3>
            <Button variant="outline">
              <Plus className="h-4 w-4" />
              Ver Todos
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredMovies.map((movie, index) => (
              <Card
                key={index}
                className="group bg-gradient-card border-2 border-border hover:border-primary/40 transition-smooth hover:scale-[1.02] hover:shadow-elevated cursor-pointer overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-smooth"
                  />
                  {movie.isNew && (
                    <Badge className="absolute top-2 left-2 bg-gradient-primary shadow-glow">
                      Novo
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-smooth flex items-center justify-center">
                    <Button
                      variant="hero"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-smooth"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-sm mb-2 line-clamp-2">{movie.title}</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>{movie.year}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400" />
                        <span>{movie.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>{movie.duration}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {movie.genre}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Series */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">📺 Séries Populares</h3>
            <Button variant="outline">
              <Plus className="h-4 w-4" />
              Ver Todas
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSeries.map((series, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-2 border-border hover:border-primary/40 transition-smooth hover:scale-[1.02] hover:shadow-card cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg">{series.title}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{series.year}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="font-semibold">{series.rating}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {series.genre}
                    </Badge>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>{series.seasons}</div>
                      <div>{series.episodes}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Update Schedule */}
        <div className="text-center bg-gradient-card p-8 rounded-xl border-2 border-border">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Atualizações Semanais</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Nosso catálogo é atualizado toda segunda-feira com os últimos lançamentos do cinema e TV.
            Nunca perca um episódio ou filme.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Segundas: Filmes novos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Quartas: Episódios de séries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-glow rounded-full"></div>
              <span>Sextas: Documentários</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesSection;