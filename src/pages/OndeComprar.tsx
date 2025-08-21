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
  Filter
} from 'lucide-react';

const OndeComprar = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('todos');

  const onlinePartners = [
    {
      name: "Farmacias.com.pt",
      type: "Farmácia Online",
      description: "Maior rede de farmácias online de Portugal",
      logo: "/api/placeholder/120/60",
      url: "https://farmacias.com.pt",
      delivery: "24-48h",
      rating: 4.8,
      verified: true
    },
    {
      name: "WellsOnline",
      type: "Parafarmácia",
      description: "Especializada em produtos de saúde e bem-estar",
      logo: "/api/placeholder/120/60",
      url: "https://wellsonline.pt",
      delivery: "48-72h",
      rating: 4.6,
      verified: true
    },
    {
      name: "Farmácia Moderna",
      type: "Farmácia Online",
      description: "Farmácia certificada com entrega em toda a Europa",
      logo: "/api/placeholder/120/60",
      url: "https://farmaciamoderna.pt",
      delivery: "24-48h",
      rating: 4.9,
      verified: true
    },
    {
      name: "MimoShop",
      type: "E-commerce Saúde",
      description: "Plataforma especializada em produtos de higiene íntima",
      logo: "/api/placeholder/120/60",
      url: "https://mimoshop.pt",
      delivery: "48h",
      rating: 4.7,
      verified: true
    }
  ];

  const physicalStores = [
    {
      name: "Farmácias Holon",
      district: "Lisboa",
      locations: 12,
      type: "Rede de Farmácias",
      phone: "+351 21 xxx xxxx",
      specialization: "Proctologia e Gastroenterologia",
      verified: true
    },
    {
      name: "Farmácias Saúde Moderna",
      district: "Porto",
      locations: 8,
      type: "Rede de Farmácias",
      phone: "+351 22 xxx xxxx",
      specialization: "Produtos Especializados",
      verified: true
    },
    {
      name: "Grupo Farmácia Central",
      district: "Coimbra",
      locations: 5,
      type: "Rede de Farmácias",
      phone: "+351 23 xxx xxxx",
      specialization: "Medicina Familiar",
      verified: true
    },
    {
      name: "Farmácias do Algarve",
      district: "Faro",
      locations: 15,
      type: "Rede Regional",
      phone: "+351 28 xxx xxxx",
      specialization: "Turismo de Saúde",
      verified: true
    }
  ];

  const internationalDistributors = [
    {
      country: "Espanha",
      distributor: "Distribuciones Médicas Iberia",
      contact: "comercial@dmiberia.es",
      regions: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
      type: "Distribuidor Oficial"
    },
    {
      country: "França",
      distributor: "MediFrance Distribution",
      contact: "info@medifrance.fr",
      regions: ["Paris", "Lyon", "Marseille", "Lille"],
      type: "Parceiro Estratégico"
    },
    {
      country: "Itália",
      distributor: "Salute Italia Srl",
      contact: "vendite@saluteitalia.it",
      regions: ["Roma", "Milano", "Napoli", "Torino"],
      type: "Distribuidor Oficial"
    },
    {
      country: "Alemanha",
      distributor: "Deutsche Medizin Import",
      contact: "bestellung@dmi.de",
      regions: ["Berlin", "München", "Hamburg", "Köln"],
      type: "Parceiro Oficial"
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

  const filteredStores = physicalStores.filter(store => 
    selectedDistrict === 'todos' || store.district === selectedDistrict
  );

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
              Onde Comprar
              <span className="block text-white/90">Produtos MakeLife</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Encontre o canal de venda mais próximo de si. Disponível em farmácias, 
              lojas online e através de distribuidores oficiais em toda a Europa.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-white/70" />
                <Input 
                  placeholder="Introduza a sua localização..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="bg-transparent border-white/30 text-white placeholder:text-white/70"
                />
                <Button variant="secondary" size="sm">
                  <Navigation className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-sm text-muted-foreground">Farmácias Parceiras</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-sm text-muted-foreground">Lojas Online</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <p className="text-sm text-muted-foreground">Países Europeus</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24-48h</div>
              <p className="text-sm text-muted-foreground">Entrega Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="online" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="online" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">Online</span>
              </TabsTrigger>
              <TabsTrigger value="fisicas" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                <span className="hidden sm:inline">Farmácias</span>
              </TabsTrigger>
              <TabsTrigger value="internacional" className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span className="hidden sm:inline">Internacional</span>
              </TabsTrigger>
              <TabsTrigger value="profissional" className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4" />
                <span className="hidden sm:inline">Profissional</span>
              </TabsTrigger>
            </TabsList>

            {/* Online Stores */}
            <TabsContent value="online" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Lojas Online Oficiais</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Compre com segurança através dos nossos parceiros online certificados. 
                  Entrega rápida e produtos com garantia de autenticidade.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {onlinePartners.map((partner, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-8 bg-muted rounded flex items-center justify-center">
                            <Building className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-lg">{partner.name}</CardTitle>
                              {partner.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Verificado
                                </Badge>
                              )}
                            </div>
                            <CardDescription>{partner.type}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{partner.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Entrega: {partner.delivery}</span>
                        </div>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visitar Loja
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Physical Stores */}
            <TabsContent value="fisicas" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Farmácias e Lojas Físicas</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Rede de farmácias parceiras em todo o país. Encontre a mais próxima 
                  de si e receba aconselhamento farmacêutico especializado.
                </p>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-4 mb-6">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <select 
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="px-3 py-2 border rounded-md bg-background"
                >
                  {districts.map(district => (
                    <option key={district} value={district}>
                      {district === 'todos' ? 'Todos os Distritos' : district}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredStores.map((store, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{store.name}</CardTitle>
                            {store.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Parceiro Oficial
                              </Badge>
                            )}
                          </div>
                          <CardDescription>{store.type}</CardDescription>
                        </div>
                        <Badge variant="outline">{store.district}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{store.locations} localizações</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{store.phone}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Stethoscope className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{store.specialization}</span>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <MapPin className="h-4 w-4 mr-2" />
                          Ver Locais
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Phone className="h-4 w-4 mr-2" />
                          Contactar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* International */}
            <TabsContent value="internacional" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Distribuidores Internacionais</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Produtos MakeLife disponíveis em toda a Europa através da nossa 
                  rede de distribuidores oficiais e parceiros estratégicos.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {internationalDistributors.map((distributor, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{distributor.country}</CardTitle>
                          <CardDescription>{distributor.distributor}</CardDescription>
                        </div>
                        <Badge variant={distributor.type.includes('Oficial') ? 'default' : 'secondary'}>
                          {distributor.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-2">Regiões Cobertas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {distributor.regions.map((region, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {region}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Contactar Distribuidor
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Não Encontra o que Procura?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              A nossa equipa comercial está pronta para o ajudar a encontrar o canal 
              de venda mais adequado às suas necessidades.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Apoio Comercial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">+351 800 200 100</p>
                  <p className="text-sm text-muted-foreground">Segunda a Sexta: 9h-18h</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Novos Parceiros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">parcerias@makelife.eu</p>
                  <p className="text-sm text-muted-foreground">Interessado em ser parceiro?</p>
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