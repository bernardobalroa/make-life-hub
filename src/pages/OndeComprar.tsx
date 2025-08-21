import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Search, 
  Store, 
  Globe, 
  Phone, 
  ExternalLink,
  Users,
  Truck,
  ShoppingCart,
  Building,
  Stethoscope,
  Clock,
  CheckCircle,
  Star,
  Navigation,
  Filter,
  Mail,
  Target,
  Award
} from 'lucide-react';

const OndeComprar = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('todos');

  const partnershipOpportunities = [
    {
      type: "Farmácias Online",
      description: "Procuramos farmácias online estabelecidas para parceria estratégica",
      requirements: ["Certificação farmacêutica", "Plataforma e-commerce ativa", "Entrega nacional"],
      benefits: ["Margens competitivas", "Suporte marketing", "Formação produtos"]
    },
    {
      type: "Redes de Farmácias",
      description: "Interessados em parcerias com redes de farmácias físicas",
      requirements: ["Múltiplas localizações", "Farmacêuticos especializados", "Experiência produtos saúde"],
      benefits: ["Preços especiais", "Material promocional", "Suporte técnico"]
    },
    {
      type: "Distribuidores Médicos",
      description: "Buscamos distribuidores para mercados internacionais europeus",
      requirements: ["Experiência distribuição médica", "Rede estabelecida", "Certificações locais"],
      benefits: ["Exclusividade territorial", "Margem distribuidor", "Suporte comercial"]
    },
    {
      type: "Profissionais de Saúde",
      description: "Parcerias com médicos proctologistas e clínicas especializadas",
      requirements: ["Especialização proctológica", "Prática ativa", "Interesse inovação"],
      benefits: ["Amostras gratuitas", "Formação especializada", "Material científico"]
    }
  ];

  const professionalChannels = [
    {
      name: "Hospitais e Clínicas",
      description: "Fornecimento direto para unidades de saúde",
      contact: "hospitais@makelife.eu",
      benefits: ["Preços especiais em volume", "Entrega programada", "Suporte técnico"]
    },
    {
      name: "Consultórios Médicos",
      description: "Programa especial para médicos proctologistas",
      contact: "medicos@makelife.eu",
      benefits: ["Amostras gratuitas", "Material educativo", "Formação especializada"]
    },
    {
      name: "Distribuidores Regionais",
      description: "Rede de distribuição para farmácias",
      contact: "distribuicao@makelife.eu",
      benefits: ["Apoio comercial", "Marketing conjunto", "Territórios exclusivos"]
    }
  ];

  const districts = [
    "todos", "Lisboa", "Porto", "Coimbra", "Braga", "Faro", "Aveiro", 
    "Setúbal", "Leiria", "Santarém", "Évora", "Beja", "Viana do Castelo"
  ];


  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Onde Comprar MakeLife - Farmácias, Lojas Online e Distribuidores Oficiais</title>
        <meta name="description" content="Encontre onde comprar produtos MakeLife perto de si. Farmácias físicas, lojas online, distribuidores internacionais e canais profissionais em toda a Europa." />
        <meta name="keywords" content="onde comprar makelife, farmácias portugal, loja online proctologia, distribuidores makelife, farmácias especializadas" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-makelife text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Procuramos Parceiros
              <span className="block text-white/90">Como Você</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Estamos a construir uma rede de parceiros para distribuir os produtos MakeLife. 
              Junte-se a nós e faça parte da revolução na saúde proctológica.
            </p>
            
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Mail className="mr-2 h-5 w-5" />
              Torne-se Parceiro
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Inovação Científica</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">CE</div>
              <p className="text-sm text-muted-foreground">Certificação Médica</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <p className="text-sm text-muted-foreground">Resposta a Parceiros</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">EU</div>
              <p className="text-sm text-muted-foreground">Expansão Europeia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="farmacia" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="farmacia" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                <span className="hidden sm:inline">Farmácias</span>
              </TabsTrigger>
              <TabsTrigger value="online" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">Online</span>
              </TabsTrigger>
              <TabsTrigger value="distribuidor" className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span className="hidden sm:inline">Distribuição</span>
              </TabsTrigger>
              <TabsTrigger value="profissional" className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4" />
                <span className="hidden sm:inline">Profissional</span>
              </TabsTrigger>
            </TabsList>

            {/* Pharmacy Partnership */}
            <TabsContent value="farmacia" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Parceria com Farmácias</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Procuramos farmácias inovadoras para fazer parte da rede de distribuição MakeLife. 
                  Produtos certificados CE com elevada procura e margens atrativas.
                </p>
              </div>

              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Seja Nosso Parceiro Farmacêutico</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Oferecemos condições especiais para farmácias que valorizam a inovação em saúde proctológica
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        O que Oferecemos:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Margens competitivas (40-50%)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Material promocional gratuito</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Formação técnica para farmacêuticos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Suporte científico contínuo</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Procuramos:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Farmácias com certificação ativa</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Interesse em produtos inovadores</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Compromisso com aconselhamento</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Localização estratégica</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar Email: farmacias@makelife.eu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Online Partnership */}
            <TabsContent value="online" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Parceria E-commerce</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Buscamos plataformas de e-commerce especializadas em saúde para distribuição online. 
                  Produtos com alta conversão e excelente reputação no mercado.
                </p>
              </div>

              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Parceiro E-commerce Ideal</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Procuramos lojas online estabelecidas no setor da saúde e bem-estar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Vantagens da Parceria:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Produtos exclusivos e inovadores</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Marketing digital conjunto</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Conteúdo científico para SEO</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Suporte técnico 24/7</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Perfil Pretendido:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Plataforma e-commerce consolidada</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Foco em produtos de saúde</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Entrega nacional/internacional</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Certificações e-commerce</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar Email: ecommerce@makelife.eu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Distribution Partnership */}
            <TabsContent value="distribuidor" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Distribuidores Europeus</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Estamos a expandir para toda a Europa e procuramos distribuidores 
                  especializados em dispositivos médicos para parcerias estratégicas.
                </p>
              </div>

              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Distribuição Internacional</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Oportunidades de exclusividade territorial para distribuidores qualificados
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        Territórios Disponíveis:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Espanha e mercado hispânico</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">França e países francófonos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Alemanha e Europa Central</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Itália e mercado mediterrâneo</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Requisitos:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Experiência em dispositivos médicos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Rede estabelecida (farmácias/hospitais)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Certificações regulamentares locais</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">Capacidade logística adequada</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar Email: distribuicao@makelife.eu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Professional Channels */}
            <TabsContent value="profissional" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Canais Profissionais</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Programas especiais para profissionais de saúde, hospitais e distribuidores. 
                  Condições preferenciais e suporte técnico especializado.
                </p>
              </div>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                {professionalChannels.map((channel, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{channel.name}</CardTitle>
                          <CardDescription>{channel.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Benefícios Incluídos:</h4>
                        <ul className="space-y-1">
                          {channel.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Mais Informações
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Partnership */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para Ser Nosso Parceiro?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contacto connosco e descubra como podemos crescer juntos. 
              Respondemos a todas as propostas de parceria em 24 horas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Geral
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">parcerias@makelife.eu</p>
                  <p className="text-sm text-muted-foreground">Para todas as propostas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Telefone Direto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">+351 800 200 500</p>
                  <p className="text-sm text-muted-foreground">Segunda a Sexta: 9h-18h</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Resposta Rápida
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">24 Horas</p>
                  <p className="text-sm text-muted-foreground">Garantia de resposta</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OndeComprar;