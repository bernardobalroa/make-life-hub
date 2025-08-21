import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
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
  ChevronRight,
  Send,
  Star,
  TrendingUp,
  Clock,
  UserCheck,
  Briefcase
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { productsData } from '@/data/products';

const ProfissionaisSaude = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    institution: '',
    message: '',
    interest: 'geral'
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação Enviada!",
      description: "Entraremos em contacto brevemente. Obrigado pelo interesse!",
    });
    setFormData({
      name: '', email: '', phone: '', specialty: '', institution: '', message: '', interest: 'geral'
    });
  };

  // Filter professional products
  const professionalProducts = productsData.filter(product => 
    product.category === 'cuidados-terapeuticos' || 
    product.category === 'kits-completos' ||
    product.name.includes('Pro')
  );

  const professionalSegments = [
    {
      id: 'proctologistas',
      title: 'Médicos Proctologistas',
      icon: Stethoscope,
      description: 'Soluções especializadas para consultas e procedimentos proctológicos',
      benefits: [
        'Produtos cientificamente validados',
        'Protocolos clínicos específicos',
        'Formação técnica especializada',
        'Suporte científico contínuo'
      ],
      products: ['Hidraenema Pro', 'Proctofarma Hemo', 'WipeWash Premium'],
      stats: { professionals: '150+', satisfaction: '98%', countries: '12' }
    },
    {
      id: 'enfermeiros',
      title: 'Enfermeiros Especializados',
      icon: Heart,
      description: 'Produtos para cuidados pós-operatórios e gestão de pacientes',
      benefits: [
        'Facilidade de aplicação',
        'Protocolos de cuidados',
        'Material educativo para pacientes',
        'Linha de apoio técnico'
      ],
      products: ['WipeWash Premium', 'Hidraenema 3g', 'Lowash Pro'],
      stats: { professionals: '300+', satisfaction: '96%', hospitals: '25+' }
    },
    {
      id: 'farmacias',
      title: 'Farmácias e Farmacêuticos',
      icon: Building2,
      description: 'Gama completa para aconselhamento farmacêutico especializado',
      benefits: [
        'Margens competitivas',
        'Material promocional',
        'Formação em produtos',
        'Suporte comercial'
      ],
      products: ['Toda a gama MakeLife', 'Kits promocionais', 'Material educativo'],
      stats: { pharmacies: '200+', growth: '+45%', regions: '18' }
    },
    {
      id: 'hospitais',
      title: 'Hospitais e Clínicas',
      icon: Users,
      description: 'Soluções em volume para unidades de saúde',
      benefits: [
        'Preços especiais em volume',
        'Entrega programada',
        'Facturação hospitalar',
        'Gestão de stocks'
      ],
      products: ['Kits hospitalares', 'Embalagens profissionais', 'Protocolos institucionais'],
      stats: { hospitals: '50+', beds: '5000+', procedures: '10000+' }
    }
  ];

  const trainingPrograms = [
    {
      title: 'Curso Proctologia Moderna',
      duration: '8 horas',
      format: 'Presencial + Online',
      target: 'Médicos Proctologistas',
      topics: ['Novas técnicas', 'Produtos inovadores', 'Casos clínicos', 'Discussão científica'],
      certification: 'Certificado CMO'
    },
    {
      title: 'Workshop Cuidados Pós-Operatórios',
      duration: '4 horas',
      format: 'Presencial',
      target: 'Enfermeiros',
      topics: ['Protocolos de cuidados', 'Aplicação prática', 'Gestão de complicações', 'Educação do paciente'],
      certification: 'Certificado OE'
    },
    {
      title: 'Formação Aconselhamento Farmacêutico',
      duration: '6 horas',
      format: 'Online',
      target: 'Farmacêuticos',
      topics: ['Produtos especializados', 'Indicações clínicas', 'Contraindicações', 'Aconselhamento'],
      certification: 'Certificado OF'
    }
  ];

  const researchPartnership = [
    {
      title: 'Estudos Clínicos',
      description: 'Participação em estudos multicêntricos de eficácia',
      requirements: ['Experiência em investigação', 'Comité de ética ativo', 'Estrutura adequada'],
      benefits: ['Acesso antecipado', 'Suporte financeiro', 'Publicações conjuntas']
    },
    {
      title: 'Casos de Estudo',
      description: 'Documentação de casos clínicos relevantes',
      requirements: ['Casos documentados', 'Seguimento adequado', 'Consentimento pacientes'],
      benefits: ['Material científico', 'Apresentações congressos', 'Reconhecimento profissional']
    },
    {
      title: 'Desenvolvimento de Produtos',
      description: 'Colaboração no desenvolvimento de novos produtos',
      requirements: ['Expertise clínica', 'Visão inovadora', 'Disponibilidade consultoria'],
      benefits: ['Influência no desenvolvimento', 'Royalties', 'Exclusividade inicial']
    }
  ];

  const supportServices = [
    {
      icon: Phone,
      title: 'Linha Técnica Directa',
      description: '+351 800 200 400',
      availability: 'Segunda a Sexta: 8h-20h',
      response: 'Imediata'
    },
    {
      icon: Mail,
      title: 'Email Prioritário',
      description: 'profissionais@makelife.eu',
      availability: '24/7',
      response: 'Máximo 4 horas'
    },
    {
      icon: Calendar,
      title: 'Reuniões Técnicas',
      description: 'Agendamento flexível',
      availability: 'Presencial ou online',
      response: 'Conforme disponibilidade'
    },
    {
      icon: BookOpen,
      title: 'Biblioteca Científica',
      description: 'Acesso exclusivo',
      availability: 'Portal online 24/7',
      response: 'Acesso imediato'
    }
  ];

  const faqProfessional = [
    {
      question: 'Como me torno um profissional parceiro da MakeLife?',
      answer: 'O processo é simples: preencha o formulário de contacto profissional, nossa equipa científica entrará em contacto para avaliar a parceria e definir os termos de colaboração adequados ao seu perfil profissional.'
    },
    {
      question: 'Que tipo de formação está disponível?',
      answer: 'Oferecemos formação presencial e online específica para cada área profissional, incluindo workshops práticos, webinars científicos e acesso à nossa biblioteca de recursos técnicos.'
    },
    {
      question: 'Como posso aceder à documentação científica completa?',
      answer: 'Profissionais registados têm acesso completo ao nosso portal científico com estudos clínicos, protocolos de uso, casos de estudo e bibliografia atualizada constantemente.'
    },
    {
      question: 'Existe suporte para implementação nos serviços?',
      answer: 'Sim, fornecemos suporte completo incluindo formação de equipas, protocolos personalizados, material educativo e acompanhamento durante o período de implementação.'
    },
    {
      question: 'Como funciona o programa de investigação?',
      answer: 'Colaboramos com centros de investigação em estudos clínicos, oferecendo suporte metodológico, financiamento parcial e oportunidades de publicação em revistas científicas.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Profissionais de Saúde MakeLife - Parcerias, Formação e Suporte Especializado</title>
        <meta name="description" content="Programa exclusivo MakeLife para profissionais de saúde. Formação especializada, suporte científico, parcerias de investigação e produtos certificados para proctologia." />
        <meta name="keywords" content="profissionais saúde makelife, formação médica proctologia, parcerias científicas, suporte técnico médicos" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-makelife text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Programa Exclusivo para Profissionais
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Profissionais de Saúde
              <span className="block text-white/90">Parceiros MakeLife</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Junte-se a uma rede de profissionais que confiam na MakeLife. 
              Acesso exclusivo a formação, investigação e suporte científico especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <UserCheck className="mr-2 h-5 w-5" />
                Tornar-me Parceiro
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Download className="mr-2 h-5 w-5" />
                Documentação Científica
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Profissionais Parceiros</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Satisfação Profissional</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Hospitais Parceiros</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <p className="text-sm text-muted-foreground">Suporte Técnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Segments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Especialização</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Programas específicos desenvolvidos para diferentes especialidades médicas e farmacêuticas.
            </p>
          </div>

          <Tabs defaultValue="proctologistas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {professionalSegments.map((segment) => (
                <TabsTrigger key={segment.id} value={segment.id} className="flex items-center gap-2">
                  <segment.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{segment.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {professionalSegments.map((segment) => (
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
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Benefícios Exclusivos:
                        </h4>
                        <ul className="space-y-2">
                          {segment.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Star className="h-4 w-4 text-primary" />
                          Produtos Relevantes:
                        </h4>
                        <ul className="space-y-2">
                          {segment.products.map((product, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          Estatísticas:
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(segment.stats).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
                              <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                              <span className="font-semibold text-primary">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Programas de Formação</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formação científica especializada com certificação profissional reconhecida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{program.certification}</Badge>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <CardDescription>
                    {program.duration} • {program.format} • {program.target}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Tópicos Abordados:</h4>
                    <ul className="space-y-1">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Inscrever-me
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Partnership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcerias de Investigação</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Colabore connosco em estudos clínicos e desenvolvimento de produtos inovadores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {researchPartnership.map((research, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Microscope className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{research.title}</CardTitle>
                  </div>
                  <CardDescription>{research.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Requisitos:</h4>
                    <ul className="space-y-1">
                      {research.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Benefícios:</h4>
                    <ul className="space-y-1">
                      {research.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Propor Colaboração
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Suporte Exclusivo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acesso prioritário a suporte técnico e científico especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold text-primary">{service.description}</p>
                  <p className="text-sm text-muted-foreground">{service.availability}</p>
                  <Badge variant="outline" className="text-xs">{service.response}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Contact Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Candidatura Profissional</CardTitle>
                <CardDescription className="text-center">
                  Junte-se à nossa rede de profissionais parceiros
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Dr./Dra. Nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Profissional *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="email@hospital.pt"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+351 xxx xxx xxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Especialidade *</Label>
                      <Input
                        id="specialty"
                        value={formData.specialty}
                        onChange={(e) => handleInputChange('specialty', e.target.value)}
                        placeholder="Ex: Proctologia, Enfermagem, Farmácia"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institution">Instituição *</Label>
                    <Input
                      id="institution"
                      value={formData.institution}
                      onChange={(e) => handleInputChange('institution', e.target.value)}
                      placeholder="Hospital, Clínica, Farmácia, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Área de Interesse</Label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => handleInputChange('interest', e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="geral">Informações Gerais</option>
                      <option value="produtos">Produtos Específicos</option>
                      <option value="formacao">Programas de Formação</option>
                      <option value="investigacao">Parcerias de Investigação</option>
                      <option value="distribuicao">Distribuição/Venda</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Descreva o seu interesse ou necessidades específicas..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Candidatura
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Professional */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ Profissional</h2>
              <p className="text-xl text-muted-foreground">
                Respostas às questões mais frequentes dos nossos parceiros profissionais.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqProfessional.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProfissionaisSaude;