import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Clock, Headphones } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta em até 5 minutos",
      action: "Chamar no WhatsApp",
      href: "https://wa.me/5511999999999",
      featured: true,
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Atendimento 24/7",
      action: "(11) 9999-9999",
      href: "tel:+5511999999999",
      featured: false,
    },
    {
      icon: Mail,
      title: "Email",
      description: "Resposta em até 2 horas",
      action: "contato@iptv.com",
      href: "mailto:contato@iptv.com",
      featured: false,
    },
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 22:00" },
    { day: "Sábado", hours: "09:00 - 18:00" },
    { day: "Domingo", hours: "10:00 - 16:00" },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está sempre pronta para ajudar você. Escolha o canal que preferir para falar conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card 
                key={method.title} 
                className={`bg-gradient-card border-border text-center ${
                  method.featured ? 'shadow-glow ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className={`mx-auto p-3 rounded-full w-fit ${
                    method.featured 
                      ? 'bg-gradient-primary shadow-glow' 
                      : 'bg-gradient-accent'
                  }`}>
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant={method.featured ? "default" : "outline"}
                    className="w-full"
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    {method.action}
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
                {businessHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
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
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-foreground">Configuração de Apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-foreground">Problemas de Conexão</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-foreground">Instalação de Players</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-foreground">Dúvidas sobre Planos</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-primary/10 border-primary/20 shadow-glow inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gradient-primary mb-2">
                Atendimento Premium 24/7
              </h3>
              <p className="text-muted-foreground mb-4">
                Tenha suporte prioritário e acesso a técnicos especializados
              </p>
              <Button variant="default" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Falar com Especialista
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;