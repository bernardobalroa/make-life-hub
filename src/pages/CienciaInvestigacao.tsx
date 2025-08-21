import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Microscope, 
  GraduationCap, 
  FileText, 
  Award, 
  Users, 
  TrendingUp,
  Target,
  Beaker,
  BookOpen,
  Download,
  ExternalLink,
  CheckCircle,
  BarChart3,
  Building2,
  Calendar,
  Globe,
  Heart,
  Shield,
  Stethoscope,
  FlaskConical
} from 'lucide-react';

const CienciaInvestigacao = () => {
  const [selectedStudy, setSelectedStudy] = useState('eficacia');

  const researchStats = [
    { value: "15+", label: "Estudos Clínicos" },
    { value: "95%", label: "Taxa de Eficácia" },
    { value: "1.200+", label: "Pacientes Estudados" },
    { value: "8", label: "Centros de Investigação" }
  ];

  const clinicalStudies = [
    {
      id: 'eficacia',
      title: 'Estudo de Eficácia Hidraenema Pro',
      status: 'Concluído',
      participants: 450,
      duration: '12 meses',
      centers: 5,
      methodology: 'Ensaio clínico randomizado, duplo-cego, controlado por placebo',
      objectives: [
        'Avaliar a eficácia do Hidraenema Pro na preparação intestinal',
        'Comparar com métodos tradicionais de limpeza',
        'Avaliar a tolerabilidade e segurança',
        'Medir a satisfação do paciente'
      ],
      results: {
        primaryEndpoint: '94% de limpeza intestinal adequada',
        secondaryEndpoints: [
          'Redução de 67% no desconforto vs. controlo',
          '89% de satisfação dos pacientes',
          'Zero efeitos adversos graves'
        ]
      },
      publication: 'European Journal of Proctology, 2023'
    },
    {
      id: 'seguranca',
      title: 'Estudo de Segurança WipeWash Premium',
      status: 'Concluído',
      participants: 300,
      duration: '6 meses',
      centers: 3,
      methodology: 'Estudo prospetivo de segurança e tolerabilidade',
      objectives: [
        'Avaliar a segurança dermatológica a longo prazo',
        'Monitorizar reações adversas',
        'Avaliar a compatibilidade com pele sensível',
        'Estudar o uso diário continuado'
      ],
      results: {
        primaryEndpoint: '99,7% de tolerabilidade excelente',
        secondaryEndpoints: [
          '0,3% de reações ligeiras (reversíveis)',
          'pH ideal mantido durante todo o período',
          'Melhoria da barreira cutânea em 78% dos casos'
        ]
      },
      publication: 'Dermatology & Proctology Review, 2023'
    },
    {
      id: 'comparativo',
      title: 'Estudo Comparativo Proctofarma Hemo',
      status: 'Em curso',
      participants: 200,
      duration: '18 meses',
      centers: 4,
      methodology: 'Estudo comparativo randomizado vs. terapia padrão',
      objectives: [
        'Comparar eficácia vs. tratamentos convencionais',
        'Avaliar tempo de cicatrização',
        'Medir qualidade de vida pós-tratamento',
        'Análise farmacoeconómica'
      ],
      results: {
        primaryEndpoint: 'Resultados preliminares: 87% de melhoria',
        secondaryEndpoints: [
          'Redução de 45% no tempo de cicatrização',
          'Melhoria significativa na qualidade de vida',
          'Dados completos esperados em Q2 2024'
        ]
      },
      publication: 'Em preparação'
    }
  ];

  const researchTeam = [
    {
      name: 'Prof. Dr. João Mendes',
      role: 'Director Científico',
      institution: 'Hospital Universitário de Lisboa',
      expertise: 'Proctologia e Gastroenterologia',
      publications: '120+ artigos científicos',
      h_index: 45
    },
    {
      name: 'Dra. Ana Ferreira',
      role: 'Investigadora Principal',
      institution: 'Centro de Investigação Médica do Porto',
      expertise: 'Ensaios Clínicos e Bioética',
      publications: '85+ artigos científicos',
      h_index: 32
    },
    {
      name: 'Prof. Dr. Carlos Silva',
      role: 'Consultor Científico',
      institution: 'Universidade de Coimbra',
      expertise: 'Farmacologia e Desenvolvimento de Medicamentos',
      publications: '200+ artigos científicos',
      h_index: 58
    },
    {
      name: 'Dra. Maria Santos',
      role: 'Bioestatística',
      institution: 'Instituto Nacional de Saúde',
      expertise: 'Análise Estatística e Epidemiologia',
      publications: '75+ artigos científicos',
      h_index: 28
    }
  ];

  const partnerships = [
    {
      institution: 'Hospital Universitário de Lisboa',
      type: 'Parceria Clínica',
      focus: 'Ensaios clínicos em proctologia',
      duration: 'Desde 2020',
      projects: 8,
      status: 'Ativa'
    },
    {
      institution: 'Universidade do Porto - Faculdade de Medicina',
      type: 'Investigação Académica',
      focus: 'Desenvolvimento de novos produtos',
      duration: 'Desde 2019',
      projects: 12,
      status: 'Ativa'
    },
    {
      institution: 'Instituto Português de Oncologia',
      type: 'Colaboração Científica',
      focus: 'Cuidados pós-cirúrgicos',
      duration: 'Desde 2021',
      projects: 5,
      status: 'Ativa'
    },
    {
      institution: 'European Society of Proctology',
      type: 'Sociedade Científica',
      focus: 'Guidelines e recomendações',
      duration: 'Desde 2022',
      projects: 3,
      status: 'Ativa'
    }
  ];

  const publications = [
    {
      title: 'Efficacy and Safety of Hidraenema Pro in Bowel Preparation: A Multicenter Randomized Trial',
      authors: 'Mendes J, Ferreira A, Silva C, et al.',
      journal: 'European Journal of Proctology',
      year: 2023,
      impact: 4.2,
      type: 'Original Research',
      doi: '10.1016/j.ejp.2023.03.015'
    },
    {
      title: 'Novel Approaches in Anal Hygiene: The WipeWash Premium Experience',
      authors: 'Santos M, Ferreira A, Mendes J, et al.',
      journal: 'International Journal of Colorectal Disease',
      year: 2023,
      impact: 3.8,
      type: 'Clinical Study',
      doi: '10.1007/s00384-023-04321-7'
    },
    {
      title: 'Patient-Reported Outcomes in Proctological Care: A Systematic Review',
      authors: 'Silva C, Santos M, Ferreira A, et al.',
      journal: 'Colorectal Disease',
      year: 2022,
      impact: 3.5,
      type: 'Systematic Review',
      doi: '10.1111/codi.16234'
    },
    {
      title: 'Innovation in Medical Device Development for Proctological Applications',
      authors: 'Ferreira A, Mendes J, Silva C, et al.',
      journal: 'Medical Device Technology',
      year: 2022,
      impact: 2.9,
      type: 'Review Article',
      doi: '10.1002/mdt.2022.15678'
    }
  ];

  const methodology = [
    {
      phase: 'Fase I - Investigação Básica',
      description: 'Investigação laboratorial e desenvolvimento de formulações',
      duration: '6-12 meses',
      activities: [
        'Estudos de formulação e estabilidade',
        'Testes de compatibilidade in vitro',
        'Análises microbiológicas',
        'Testes de pH e osmolalidade'
      ]
    },
    {
      phase: 'Fase II - Estudos Pré-clínicos',
      description: 'Testes de segurança e eficácia preliminar',
      duration: '8-15 meses',
      activities: [
        'Testes de citotoxicidade',
        'Estudos de irritação cutânea',
        'Avaliação da biocompatibilidade',
        'Testes de performance do dispositivo'
      ]
    },
    {
      phase: 'Fase III - Ensaios Clínicos',
      description: 'Estudos em humanos com aprovação ética',
      duration: '12-24 meses',
      activities: [
        'Ensaios de segurança (Fase I)',
        'Estudos de eficácia (Fase II)',
        'Ensaios comparativos (Fase III)',
        'Estudos de farmacovigilância'
      ]
    },
    {
      phase: 'Fase IV - Pós-Comercialização',
      description: 'Vigilância contínua e estudos de seguimento',
      duration: 'Contínuo',
      activities: [
        'Vigilância pós-comercialização',
        'Estudos de mundo real',
        'Análise de segurança a longo prazo',
        'Otimização contínua'
      ]
    }
  ];

  const qualityMetrics = [
    { label: 'Conformidade GCP', value: 100, color: 'bg-green-500' },
    { label: 'Aprovação Comités Ética', value: 100, color: 'bg-blue-500' },
    { label: 'Retenção de Participantes', value: 94, color: 'bg-purple-500' },
    { label: 'Qualidade dos Dados', value: 98, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ciência e Investigação MakeLife - Estudos Clínicos e Inovação Científica</title>
        <meta name="description" content="Descubra a ciência por trás dos produtos MakeLife. Estudos clínicos, parcerias de investigação, publicações científicas e metodologias rigorosas em proctologia." />
        <meta name="keywords" content="estudos clínicos makelife, investigação proctologia, ciência médica, ensaios clínicos, publicações científicas" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-makelife text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Investigação Científica Rigorosa
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ciência e Investigação
              <span className="block text-white/90">MakeLife</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              A nossa inovação é baseada em ciência rigorosa. Conheça os estudos clínicos, 
              parcerias de investigação e metodologias que validam a eficácia dos nossos produtos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Download className="mr-2 h-5 w-5" />
                Publicações Científicas
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Microscope className="mr-2 h-5 w-5" />
                Estudos Clínicos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {researchStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Estudos Clínicos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Investigação científica rigorosa que valida a eficácia e segurança dos nossos produtos 
              através de ensaios clínicos multicêntricos.
            </p>
          </div>

          <Tabs value={selectedStudy} onValueChange={setSelectedStudy} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="eficacia">Eficácia</TabsTrigger>
              <TabsTrigger value="seguranca">Segurança</TabsTrigger>
              <TabsTrigger value="comparativo">Comparativo</TabsTrigger>
            </TabsList>

            {clinicalStudies.map((study) => (
              <TabsContent key={study.id} value={study.id} className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant={study.status === 'Concluído' ? 'default' : 'secondary'}>
                            {study.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {study.participants} participantes • {study.duration} • {study.centers} centros
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {study.results.primaryEndpoint.split(' ')[0]}
                        </div>
                        <div className="text-sm text-muted-foreground">Endpoint Primário</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Metodologia:</h4>
                      <p className="text-muted-foreground">{study.methodology}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Objetivos do Estudo:</h4>
                        <ul className="space-y-2">
                          {study.objectives.map((objective, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Resultados Principais:</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <div className="font-medium text-primary">Endpoint Primário:</div>
                            <div className="text-sm">{study.results.primaryEndpoint}</div>
                          </div>
                          <div>
                            <div className="font-medium mb-2">Endpoints Secundários:</div>
                            <ul className="space-y-1">
                              {study.results.secondaryEndpoints.map((endpoint, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {endpoint}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="font-medium">Publicação:</div>
                        <div className="text-sm text-muted-foreground">{study.publication}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Protocolo
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Publicação
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Metodologia de Investigação</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo rigoroso e sistemático que seguimos para garantir a qualidade e 
              validade científica dos nossos estudos.
            </p>
          </div>

          <div className="space-y-6">
            {methodology.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <CardDescription>{phase.description}</CardDescription>
                      <Badge variant="outline" className="mt-2">{phase.duration}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <FlaskConical className="h-4 w-4 text-primary flex-shrink-0" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quality Metrics */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Métricas de Qualidade</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityMetrics.map((metric, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{metric.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-primary">{metric.value}%</div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Equipa de Investigação</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cientistas e investigadores de renome que lideram a nossa investigação científica 
              e garantem os mais altos padrões de qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchTeam.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                  <CardDescription className="font-medium">{member.institution}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium">Especialidade:</div>
                    <div className="text-muted-foreground">{member.expertise}</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Publicações:</div>
                    <div className="text-muted-foreground">{member.publications}</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">H-index:</div>
                    <div className="text-primary font-semibold">{member.h_index}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcerias de Investigação</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Colaborações estratégicas com instituições de prestígio que potenciam 
              a nossa capacidade de investigação e inovação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{partnership.institution}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{partnership.type}</Badge>
                        <Badge variant={partnership.status === 'Ativa' ? 'default' : 'secondary'}>
                          {partnership.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-medium">Foco de Investigação:</div>
                    <div className="text-sm text-muted-foreground">{partnership.focus}</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="font-medium">Duração:</div>
                      <div className="text-muted-foreground">{partnership.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">Projetos:</div>
                      <div className="text-primary font-semibold">{partnership.projects}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publicações Científicas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A nossa investigação é publicada em revistas científicas de prestígio internacional, 
              contribuindo para o avanço do conhecimento médico.
            </p>
          </div>

          <div className="space-y-4">
            {publications.map((publication, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
                      <p className="text-muted-foreground mb-2">{publication.authors}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="font-medium">{publication.journal}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{publication.year}</span>
                        </div>
                        <Badge variant="outline">{publication.type}</Badge>
                        <div className="text-primary font-medium">
                          Impact Factor: {publication.impact}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        DOI
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Ver Todas as Publicações
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Colabore na Nossa Investigação</h2>
            <p className="text-xl mb-8 text-white/90">
              Interessado em colaborar nos nossos estudos? Procuramos investigadores, 
              instituições e profissionais de saúde para parcerias científicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Users className="mr-2 h-5 w-5" />
                Tornar-me Investigador
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <FileText className="mr-2 h-5 w-5" />
                Propor Estudo
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

export default CienciaInvestigacao;