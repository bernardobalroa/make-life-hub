import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  FileText, 
  Download, 
  Phone, 
  Mail, 
  Users, 
  Shield, 
  Award,
  Microscope,
  Heart,
  CheckCircle,
  Target,
  BookOpen,
  Calendar,
  Globe,
  ChevronRight
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { productsData } from '@/data/products';

const ProdutosProfissionais = () => {
  const [selectedSegment, setSelectedSegment] = useState('proctologistas');
  
  // Filter professional products
  const professionalProducts = productsData.filter(product => 
    product.category === 'cuidados-terapeuticos' || 
    product.category === 'kits-completos' ||
    product.name.includes('Pro')
  );

  const segments = [
    {
      id: 'proctologistas',
      title: 'Médicos Proctologistas',
      icon: Stethoscope,
      description: 'Soluções especializadas para consultas e cirurgias proctológicas'
    },
    {
      id: 'enfermeiros',
      title: 'Enfermeiros Especializados',
      icon: Heart,
      description: 'Produtos para cuidados pós-operatórios e gestão de pacientes'
    },
    {
      id: 'farmacias',
      title: 'Farmácias',
      icon: Building2,
      description: 'Gama completa para aconselhamento farmacêutico especializado'
    },
    {
      id: 'hospitais',
      title: 'Hospitais e Clínicas',
      icon: Users,
      description: 'Soluções em volume para unidades de saúde'
    }
  ];

  const clinicalBenefits = [
    {
      title: "Eficácia Clínica Comprovada",
      description: "Mais de 95% de eficácia em estudos clínicos com 1000+ pacientes",
      icon: Target
    },
    {
      title: "Certificação Médica Europeia",
      description: "Produtos certificados CE Medical Device Classe IIa",
      icon: Shield
    },
    {
      title: "Formulação Proctológica Específica",
      description: "pH ideal e ingredientes ativos testados por proctologistas",
      icon: Microscope
    },
    {
      title: "Suporte Científico Contínuo",
      description: "Equipa médica disponível para esclarecimentos técnicos",
      icon: GraduationCap
    }
  ];

  const technicalDocuments = [
    {
      title: "Brochura Técnica Completa",
      description: "Documentação científica completa dos produtos MakeLife",
      type: "PDF - 24 páginas",
      icon: FileText
    },
    {
      title: "Protocolos Clínicos",
      description: "Guias de aplicação por patologia proctológica",
      type: "PDF - 12 páginas",
      icon: BookOpen
    },
    {
      title: "Estudos de Eficácia",
      description: "Resultados de estudos clínicos e casos de sucesso",
      type: "PDF - 18 páginas",
      icon: Award
    },
    {
      title: "Certificações Regulamentares",
      description: "Documentos CE, ISO e aprovações europeias",
      type: "PDF - 8 páginas",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Produtos Profissionais MakeLife - Soluções Proctológicas para Profissionais de Saúde</title>
        <meta name="description" content="Gama profissional MakeLife para médicos proctologistas, enfermeiros e farmácias. Produtos certificados CE com eficácia clínica comprovada e suporte técnico especializado." />
        <meta name="keywords" content="produtos proctológicos profissionais, medicina proctológica, dispositivos médicos CE, hidraenema profissional, proctofarma" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-makelife text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Certificado CE Medical Device Classe IIa
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soluções Proctológicas
              <span className="block text-white/90">Para Profissionais</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Gama profissional com eficácia clínica comprovada, desenvolvida por proctologistas 
              para profissionais de saúde que exigem excelência no cuidado dos seus pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Download className="mr-2 h-5 w-5" />
                Documentação Técnica
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Contacto Profissional
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Benefits */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vantagens Clínicas Comprovadas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Produtos desenvolvidos com base em evidência científica e validados 
              por estudos clínicos em centros de referência europeus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicalBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Segments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Segmentação Profissional</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções específicas para cada área de especialização médica e farmacêutica.
            </p>
          </div>

          <Tabs value={selectedSegment} onValueChange={setSelectedSegment} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {segments.map((segment) => (
                <TabsTrigger key={segment.id} value={segment.id} className="flex items-center gap-2">
                  <segment.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{segment.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {segments.map((segment) => (
              <TabsContent key={segment.id} value={segment.id} className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <segment.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{segment.title}</CardTitle>
                        <CardDescription className="text-lg">{segment.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Produtos Recomendados:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Hidraenema Pro - Kit Profissional</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Proctofarma Hemo - Terapêutico</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>WipeWash Premium - Higiene Especializada</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Suporte Incluído:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Documentação técnica completa</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Formação e protocolos de uso</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Suporte científico direto</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Professional Products */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gama Profissional</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Produtos desenvolvidos especificamente para uso profissional com concentrações 
              e formulações adequadas ao ambiente clínico.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Documentation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Documentação Técnica</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acesso completo a estudos clínicos, protocolos de uso e certificações regulamentares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <doc.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">{doc.type}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Professional */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ Profissional</h2>
              <p className="text-xl text-muted-foreground">
                Respostas às questões mais frequentes de profissionais de saúde.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como obter certificações e documentação técnica completa?</AccordionTrigger>
                <AccordionContent>
                  A documentação técnica completa, incluindo certificações CE, estudos clínicos e protocolos de uso, 
                  está disponível para profissionais registados. Contacte-nos através do formulário profissional 
                  para acesso imediato a todos os documentos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Que estudos clínicos validam a eficácia dos produtos?</AccordionTrigger>
                <AccordionContent>
                  Os produtos MakeLife foram testados em estudos clínicos multicêntricos envolvendo mais de 1000 pacientes 
                  em centros de referência europeus. Os estudos demonstram eficácia superior a 95% no alívio sintomático 
                  e melhoria da qualidade de vida dos pacientes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Existe formação disponível para profissionais?</AccordionTrigger>
                <AccordionContent>
                  Sim, oferecemos formação técnica presencial e online, incluindo webinars regulares, 
                  workshops práticos e materiais educativos. A formação abrange protocolos de uso, 
                  indicações clínicas e gestão de casos complexos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Como solicitar amostras para avaliação clínica?</AccordionTrigger>
                <AccordionContent>
                  Profissionais de saúde podem solicitar amostras gratuitas através do nosso portal profissional. 
                  As amostras incluem instruções de uso e protocolos de avaliação para facilitar a introdução 
                  na prática clínica.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Que suporte técnico está disponível?</AccordionTrigger>
                <AccordionContent>
                  Oferecemos suporte técnico especializado através de linha directa para profissionais, 
                  email técnico prioritário e consultas com a nossa equipa médica. O suporte inclui 
                  esclarecimentos sobre indicações, protocolos e resolução de casos clínicos específicos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Professional */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contacto Profissional</h2>
            <p className="text-xl mb-8 text-white/90">
              Equipa especializada disponível para apoiar profissionais de saúde com 
              informação técnica, formação e suporte clínico personalizado.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6" />
                    <CardTitle className="text-white">Linha Profissional</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">+351 800 200 300</p>
                  <p className="text-sm text-white/80">Segunda a Sexta: 9h-18h</p>
                  <p className="text-sm text-white/80">Suporte técnico direto</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6" />
                    <CardTitle className="text-white">Email Técnico</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">profissionais@makelife.eu</p>
                  <p className="text-sm text-white/80">Resposta em 24h</p>
                  <p className="text-sm text-white/80">Suporte científico especializado</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Reunião Técnica
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <FileText className="mr-2 h-5 w-5" />
                Solicitar Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProdutosProfissionais;