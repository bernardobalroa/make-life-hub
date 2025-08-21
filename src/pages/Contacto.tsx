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
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Send,
  HelpCircle,
  ShoppingBag,
  Heart,
  Shield,
  CheckCircle,
  Star,
  Calendar,
  Users,
  FileText,
  Headphones
} from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'geral',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensagem Enviada!",
      description: "Responderemos em até 24 horas. Obrigado pelo contacto!",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: 'geral',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Linha de Apoio",
      description: "Fale directamente connosco",
      contact: "+351 800 200 300",
      availability: "Segunda a Sexta: 9h-18h",
      type: "Chamada gratuita"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envie-nos a sua questão",
      contact: "apoio@makelife.eu",
      availability: "Resposta em 24h",
      type: "Apoio prioritário"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat directo instantâneo",
      contact: "+351 933 456 789",
      availability: "Segunda a Sexta: 9h-19h",
      type: "Resposta imediata"
    },
    {
      icon: Calendar,
      title: "Videochamada",
      description: "Consulta personalizada",
      contact: "Agendar reunião",
      availability: "Por marcação",
      type: "Aconselhamento especializado"
    }
  ];

  const supportCategories = [
    {
      id: "produtos",
      title: "Informações sobre Produtos",
      description: "Dúvidas sobre composição, uso e indicações",
      icon: ShoppingBag
    },
    {
      id: "compra",
      title: "Processo de Compra",
      description: "Ajuda com encomendas e pagamentos",
      icon: CheckCircle
    },
    {
      id: "saude",
      title: "Questões de Saúde",
      description: "Orientações e esclarecimentos médicos",
      icon: Heart
    },
    {
      id: "geral",
      title: "Informações Gerais",
      description: "Outras questões e sugestões",
      icon: HelpCircle
    }
  ];

  const faqItems = [
    {
      question: "Como sei qual produto é mais adequado para o meu caso?",
      answer: "Recomendamos que consulte a descrição detalhada de cada produto na nossa loja ou entre em contacto connosco. Os nossos especialistas podem ajudá-lo a escolher o produto mais adequado às suas necessidades específicas, sempre com base em orientação médica quando necessário."
    },
    {
      question: "Os produtos MakeLife são seguros para uso diário?",
      answer: "Sim, todos os produtos MakeLife são formulados para uso diário e são proctologicamente testados. Possuem certificação CE Medical Device e foram desenvolvidos por especialistas para máxima segurança e eficácia."
    },
    {
      question: "Quanto tempo demora a entrega?",
      answer: "As entregas em Portugal continental são realizadas em 24-48h úteis. Para ilhas e outros países europeus, o prazo pode ser de 3-5 dias úteis. Oferecemos entrega gratuita para encomendas superiores a 30€."
    },
    {
      question: "Posso devolver o produto se não ficar satisfeito?",
      answer: "Sim, oferecemos garantia de satisfação de 30 dias. Se não ficar completamente satisfeito, pode devolver o produto (não aberto) para reembolso total. A sua satisfação é a nossa prioridade."
    },
    {
      question: "Os produtos precisam de receita médica?",
      answer: "Não, os produtos MakeLife são dispositivos médicos de venda livre. No entanto, recomendamos sempre consultar um profissional de saúde para orientação personalizada, especialmente em casos específicos."
    },
    {
      question: "Existe desconto para compras em quantidade?",
      answer: "Sim, oferecemos descontos progressivos para compras múltiplas e programas especiais para uso prolongado. Contacte-nos para conhecer as nossas condições especiais."
    }
  ];

  const supportStats = [
    { value: "98%", label: "Satisfação do Cliente" },
    { value: "24h", label: "Tempo de Resposta" },
    { value: "5★", label: "Avaliação Média" },
    { value: "24/7", label: "WhatsApp Disponível" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contacto MakeLife - Apoio ao Cliente e Informações Especializadas</title>
        <meta name="description" content="Entre em contacto com a MakeLife. Apoio especializado, informações sobre produtos proctológicos e assistência personalizada. Linha gratuita, email e WhatsApp disponíveis." />
        <meta name="keywords" content="contacto makelife, apoio cliente, assistência proctologia, informações produtos, linha de apoio" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-makelife text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Apoio Especializado Disponível
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Estamos Aqui
              <span className="block text-white/90">Para Si</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              A sua saúde e bem-estar são a nossa prioridade. Entre em contacto connosco
              para esclarecimentos, apoio ou orientação especializada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {supportStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Pode Contactar-nos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha a forma de contacto que mais lhe convém. Estamos disponíveis 
              através de múltiplos canais para o melhor apoio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center group">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-lg font-semibold text-primary">{method.contact}</div>
                  <div className="text-sm text-muted-foreground">{method.availability}</div>
                  <Badge variant="secondary" className="text-xs">{method.type}</Badge>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-white">
                    Contactar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="formulario" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="formulario">Enviar Mensagem</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="formulario" className="space-y-6">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Envie-nos uma Mensagem</CardTitle>
                    <CardDescription className="text-center">
                      Preencha o formulário abaixo e responderemos brevemente
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
                            placeholder="O seu nome"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="seuemail@exemplo.com"
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
                          <Label htmlFor="category">Categoria</Label>
                          <select
                            id="category"
                            value={formData.category}
                            onChange={(e) => handleInputChange('category', e.target.value)}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            {supportCategories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          placeholder="Resumo da sua questão"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Descreva a sua questão ou necessidade em detalhe..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Ao enviar este formulário, aceita os nossos{" "}
                        <a href="/termos-uso" className="text-primary hover:underline">
                          Termos de Utilização
                        </a>{" "}
                        e{" "}
                        <a href="/politica-privacidade" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Perguntas Frequentes</h3>
                  <p className="text-muted-foreground">
                    Encontre respostas rápidas às questões mais comuns dos nossos clientes
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
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

                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Não encontrou a resposta que procurava?
                  </p>
                  <Button variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contacte-nos Directamente
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de Apoio Disponível</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos apoio especializado em diferentes áreas para melhor o atender
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category) => (
              <Card key={category.id} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto mb-6 h-16 w-16" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Apoio Prioritário</h2>
            <p className="text-xl mb-8 text-white/90">
              Para questões urgentes relacionadas com a sua saúde, 
              contacte-nos imediatamente através dos nossos canais prioritários.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Linha Urgente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">+351 800 200 999</p>
                  <p className="text-sm text-white/80">Disponível 24/7</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Urgente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">+351 933 999 888</p>
                  <p className="text-sm text-white/80">Resposta imediata</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-white/90">
                <strong>Nota Importante:</strong> Em caso de emergência médica grave, 
                contacte imediatamente o número nacional de emergência 112.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contacto;