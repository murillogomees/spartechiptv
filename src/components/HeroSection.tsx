import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Smartphone, Monitor, Tv } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
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
            Tenha todos os{" "}
            <span className="text-gradient-primary">canais</span>,{" "}
            <span className="text-gradient-accent">filmes</span> e{" "}
            <span className="text-gradient-primary">séries</span>
            <br />
            na palma da sua mão!
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mais de <strong className="text-gradient-primary">10.000 canais</strong> em Full HD e 4K,
            sem travamentos, com suporte 24/7 e acesso global.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 my-8">
            {[
              { icon: CheckCircle, text: "10.000+ Canais" },
              { icon: Play, text: "Full HD & 4K" },
              { icon: Smartphone, text: "Multi Dispositivos" },
              { icon: Monitor, text: "Sem Travamentos" },
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-lg shadow-card">
                <benefit.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="xl" className="min-w-64">
              <Play className="h-6 w-6" />
              Assine Agora
            </Button>
            <Button variant="cta" size="xl" className="min-w-64">
              <Tv className="h-6 w-6" />
              Teste Grátis 24h
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Sem Contrato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Acesso Global</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Cancele Quando Quiser</span>
            </div>
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