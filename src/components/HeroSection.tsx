import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Smartphone, Monitor, Tv } from "lucide-react";
import { useConfig, HeroConfig } from "@/hooks/useConfig";

const HeroSection = () => {
  const heroConfig = useConfig<HeroConfig>('hero.json');

  if (!heroConfig) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>;
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      CheckCircle,
      Play,
      Smartphone,
      Monitor,
      Tv
    };
    return icons[iconName] || CheckCircle;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroConfig.imagemBanner}
          alt="IPTV Premium Streaming Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {heroConfig.titulo.split(' ').map((word, index) => {
              const specialWords = ['canais', 'filmes', 'séries'];
              const isSpecial = specialWords.some(special => word.toLowerCase().includes(special.toLowerCase()));
              return isSpecial ? (
                <span key={index} className="text-gradient-primary"> {word} </span>
              ) : (
                <span key={index}> {word} </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {heroConfig.subtitulo}
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 my-8">
            {heroConfig.beneficiosDestaque.map((benefit, index) => {
              const IconComponent = getIcon(benefit.icone);
              return (
                <div key={index} className="flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-lg shadow-card">
                  <IconComponent className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{benefit.texto}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            {heroConfig.botoes.map((botao, index) => {
              const IconComponent = getIcon(botao.icone);
              return (
                <Button 
                  key={index}
                  variant={botao.tipo as any} 
                  size="xl" 
                  className="min-w-64"
                  onClick={() => {
                    if (botao.link.startsWith('#')) {
                      document.querySelector(botao.link)?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.open(botao.link, '_blank');
                    }
                  }}
                >
                  <IconComponent className="h-6 w-6" />
                  {botao.texto}
                </Button>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            {heroConfig.indicadoresConfianca.map((indicador, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{indicador}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-primary-glow rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-20 right-32 w-4 h-4 bg-accent-glow rounded-full animate-pulse opacity-30" />
    </section>
  );
};

export default HeroSection;