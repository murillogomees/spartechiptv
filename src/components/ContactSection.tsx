import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, Clock, Headphones } from "lucide-react";
import { useConfig, ContatoConfig } from "@/hooks/useConfig";

const ContactSection = () => {
  const contatoConfig = useConfig<ContatoConfig>('contato.json');

  if (!contatoConfig) {
    return <div className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
      </div>
    </div>;
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      MessageCircle,
      Phone,
      Mail,
      Clock,
      Headphones
    };
    return icons[iconName] || MessageCircle;
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">
            {contatoConfig.titulo}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contatoConfig.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contatoConfig.metodosContato.map((metodo) => {
            const Icon = getIcon(metodo.icone);
            return (
              <Card 
                key={metodo.titulo} 
                className={`bg-gradient-card border-border text-center ${
                  metodo.destaque ? 'shadow-glow ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className={`mx-auto p-3 rounded-full w-fit ${
                    metodo.destaque 
                      ? 'bg-gradient-primary shadow-glow' 
                      : 'bg-gradient-accent'
                  }`}>
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{metodo.titulo}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {metodo.descricao}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant={metodo.destaque ? "default" : "outline"}
                    className="w-full"
                    onClick={() => window.open(metodo.link, '_blank')}
                  >
                    {metodo.acao}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Clock className="h-5 w-5" />
                Horário de Atendimento
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Nossos horários de funcionamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contatoConfig.horarioAtendimento.map((horario) => (
                  <div key={horario.dia} className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{horario.dia}</span>
                    <span className="text-muted-foreground">{horario.horario}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Headphones className="h-5 w-5" />
                Suporte Técnico
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Estamos aqui para ajudar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contatoConfig.suporteTecnico.map((suporte, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-foreground">{suporte}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-primary/10 border-primary/20 shadow-glow inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gradient-primary mb-2">
                {contatoConfig.atendimentoPremium.titulo}
              </h3>
              <p className="text-muted-foreground mb-4">
                {contatoConfig.atendimentoPremium.descricao}
              </p>
              <Button variant="default" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                {contatoConfig.atendimentoPremium.textoBotao}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;