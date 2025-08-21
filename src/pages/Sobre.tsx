import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Award, 
  Target, 
  Microscope, 
  Shield, 
  Globe,
  BookOpen,
  Lightbulb,
  Factory,
  CheckCircle,
  TrendingUp,
  Stethoscope,
  Building,
  Calendar,
  Mail
} from 'lucide-react';

const Sobre = () => {
  const milestones = [
    {
      year: "2018",
      title: "Fundação da MakeLife",
      description: "Início da investigação em soluções proctológicas inovadoras"
    },
    {
      year: "2020",
      title: "Primeiro Produto Lançado",
      description: "Hidraenema - revolucionando a higiene proctológica"
    },
    {
      year: "2021",
      title: "Certificação CE Medical",
      description: "Obtenção da certificação CE Medical Device Classe IIa"
    },
    {
      year: "2022",
      title: "Expansão Europeia",
      description: "Início da distribuição em mercados europeus"
    },
    {
      year: "2023",
      title: "Gama Profissional",
      description: "Lançamento de produtos específicos para profissionais de saúde"
    },
    {
      year: "2024",
      title: "Inovação Contínua",
      description: "Novos produtos e parcerias estratégicas"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Cuidado Centrado no Paciente",
      description: "Desenvolvemos soluções pensando sempre no bem-estar e dignidade dos nossos utilizadores."
    },
    {
      icon: Microscope,
      title: "Excelência Científica",
      description: "Baseamos todos os nossos produtos em evidência científica rigorosa e investigação contínua."
    },
    {
      icon: Shield,
      title: "Segurança e Qualidade",
      description: "Mantemos os mais altos padrões de qualidade e segurança em todos os nossos processos."
    },
    {
      icon: Lightbulb,
      title: "Inovação Responsável",
      description: "Inovamos de forma ética e responsável, sempre com foco no benefício real para a saúde."
    },
    {
      icon: Users,
      title: "Colaboração Médica",
      description: "Trabalhamos em estreita colaboração com profissionais de saúde especializados."
    },
    {
      icon: Globe,
      title: "Impacto Global",
      description: "Aspiramos a melhorar a qualidade de vida de pessoas em todo o mundo."
    }
  ];

  const team = [
    {
      name: "Dr. João Silva",
      role: "Director Científico",
      specialty: "Proctologista com 20+ anos de experiência",
      description: "Especialista em medicina proctológica e investigação clínica"
    },
    {
      name: "Dra. Maria Santos",
      role: "Directora de I&D",
      specialty: "Farmacêutica e Investigadora",
      description: "Especializada em desenvolvimento de dispositivos médicos"
    },
    {
      name: "Eng. Pedro Oliveira",
      role: "Director de Qualidade",
      specialty: "Engenheiro Biomédico",
      description: "Responsável pela certificação e controlo de qualidade"
    },
    {
      name: "Dr. Ana Costa",
      role: "Directora Médica",
      specialty: "Medicina Familiar e Comunitária",
      description: "Supervisão clínica e formação médica"
    }
  ];

  const certifications = [
    {
      title: "CE Medical Device",
      description: "Certificação Classe IIa para dispositivos médicos",
      authority: "Organismo Notificado Europeu"
    },
    {
      title: "ISO 13485",
      description: "Sistema de gestão da qualidade para dispositivos médicos",
      authority: "International Organization for Standardization"
    },
    {
      title: "GMP",
      description: "Boas Práticas de Fabrico",
      authority: "INFARMED - Autoridade Nacional"
    },
    {
      title: "INFARMED",
      description: "Registo e autorização nacional",
      authority: "Autoridade Nacional do Medicamento"
    }
  ];

  const stats = [
    { value: "50.000+", label: "Utilizadores Satisfeitos" },
    { value: "95%", label: "Taxa de Eficácia" },
    { value: "12", label: "Países de Distribuição" },
    { value: "6", label: "Anos de Investigação" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sobre a MakeLife - Inovação em Saúde Proctológica e Bem-estar</title>
        <meta name="description" content="Conheça a MakeLife: empresa portuguesa pioneira em soluções proctológicas inovadoras. A nossa missão, valores, equipa científica e compromisso com a excelência médica." />
        <meta name="keywords" content="sobre makelife, empresa proctologia, inovação médica portugal, dispositivos médicos, equipa científica" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-makelife text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Empresa Portuguesa Inovadora
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quem Somos
              <span className="block text-white/90">MakeLife</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Somos uma empresa portuguesa dedicada ao desenvolvimento de soluções inovadoras 
              para a saúde proctológica, combinando ciência, tecnologia e cuidado humano.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Nossa Missão</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Desenvolver e fornecer soluções médicas inovadoras e seguras para a saúde 
                proctológica, melhorando a qualidade de vida dos nossos utilizadores através
                de produtos cientificamente validados e clinicamente eficazes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Produtos baseados em evidência científica rigorosa</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Colaboração estreita com profissionais de saúde</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Compromisso com a segurança e eficácia</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Nossa Visão</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ser a empresa de referência europeia em soluções proctológicas inovadoras, 
                reconhecida pela excelência científica, qualidade dos produtos e impacto 
                positivo na vida dos utilizadores.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Liderança no mercado europeu de proctologia</span>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Inovação contínua e sustentável</span>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Expansão global responsável</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Os Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os princípios que orientam todas as nossas decisões e acções,
              garantindo que mantemos sempre o foco no que realmente importa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Nossa Jornada</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde a fundação, temos percorrido um caminho de crescimento sustentado, 
              inovação e compromisso com a excelência.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{milestone.year}</Badge>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Equipa de Liderança</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profissionais experientes e dedicados que lideram a nossa missão
              de inovação em saúde proctológica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                  <CardDescription className="font-medium">{member.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificações e Qualidade</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mantemos os mais altos padrões de qualidade através de certificações 
              rigorosas e conformidade regulamentar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  <Badge variant="outline" className="text-xs">{cert.authority}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se à Nossa Missão</h2>
            <p className="text-xl mb-8 text-white/90">
              Procuramos parceiros, profissionais e colaboradores que partilhem
              a nossa visão de melhorar a saúde e qualidade de vida das pessoas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Building className="mr-2 h-5 w-5" />
                Trabalhe Connosco
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                Contacte-nos
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

export default Sobre;