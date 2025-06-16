
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Microscope, Users, Heart, ChevronRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample products data
  const featuredProducts = [
    {
      id: 'hidraenema-pro',
      name: 'Hidraenema Pro',
      description: 'Hidratante intranal com nanotecnologia de ácido hialurônico para proteção prolongada por 72h.',
      price: 45.90,
      category: 'professional' as const,
      features: ['Hidratação 72h', 'Nanotecnologia', 'Uso clínico'],
      inStock: true
    },
    {
      id: 'procto-wash',
      name: 'Procto Wash',
      description: 'Sabonete íntimo específico para higiene da região anal, uso diário com pH balanceado.',
      price: 18.50,
      category: 'consumer' as const,
      features: ['pH balanceado', 'Uso diário', 'Suavidade'],
      inStock: true
    },
    {
      id: 'wipewash',
      name: 'WipeWash',
      description: 'Toalhas umedecidas especiais para higiene pós-cirúrgica e cuidados cotidianos.',
      price: 12.90,
      category: 'consumer' as const,
      features: ['Pós-cirúrgico', 'Portátil', 'Dermatologicamente testado'],
      inStock: true
    }
  ];

  const testimonials = [
    {
      name: "Dr. Ricardo Santos",
      role: "Coloproctologista",
      content: "Os produtos MakeLife revolucionaram nosso preparo pré-cirúrgico. A qualidade e eficácia são notáveis.",
      rating: 5
    },
    {
      name: "Ana Paula",
      role: "Cliente",
      content: "Finalmente encontrei produtos que realmente cuidam da minha higiene íntima com qualidade e discrição.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Segmentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-makelife-teal-dark mb-4">
              Escolha sua Área de Interesse
            </h2>
            <p className="text-makelife-gray-medium max-w-2xl mx-auto">
              Oferecemos soluções específicas tanto para profissionais de saúde quanto para consumidores finais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* B2B Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-makelife-teal">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-makelife-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-makelife-teal group-hover:text-white transition-colors">
                  <Users className="w-8 h-8 text-makelife-teal group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-makelife-teal-dark">Profissionais de Saúde</CardTitle>
                <CardDescription>Clínicas, hospitais e distribuidores</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-makelife-gray-medium">
                    <ChevronRight className="w-4 h-4 text-makelife-teal mr-2" />
                    Produtos para uso clínico e hospitalar
                  </li>
                  <li className="flex items-center text-makelife-gray-medium">
                    <ChevronRight className="w-4 h-4 text-makelife-teal mr-2" />
                    Informações técnicas e científicas
                  </li>
                  <li className="flex items-center text-makelife-gray-medium">
                    <ChevronRight className="w-4 h-4 text-makelife-teal mr-2" />
                    Representantes comerciais por região
                  </li>
                  <li className="flex items-center text-makelife-gray-medium">
                    <ChevronRight className="w-4 h-4 text-makelife-teal mr-2" />
                    Cotações e pedidos em volume
                  </li>
                </ul>
                <Link to="/produtos-profissionais" className="block">
                  <Button className="w-full bg-makelife-teal hover:bg-makelife-teal-dark group">
                    Acessar Área Profissional
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* B2C Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-makelife-teal">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-makelife-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-makelife-teal group-hover:text-white transition-colors">
                  <Heart className="w-8 h-8 text-makelife-teal group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-makelife-teal-dark">Para Você</CardTitle>
                <CardDescription>Cuidados íntimos pessoais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-makelife-gray-medium">
                    <ChevronRight className="w-4 h-4 text-makelife-teal mr-2" />
                    Produtos para uso diário e bem-estar
                  </li>
                  <li className="flex items-center text-makelife-gray-medium">
                    <ChevronRight className="w-4 h-4 text-makelife-teal mr-2" />
                    Compra online segura e discreta
                  </li>
                  <li className="flex items-center text-makelife-gray-medium">
                    <ChevronRight className="w-4 h-4 text-makelife-teal mr-2" />
                    Dicas e orientações de saúde íntima
                  </li>
                  <li className="flex items-center text-makelife-gray-medium">
                    <ChevronRight className="w-4 h-4 text-makelife-teal mr-2" />
                    Suporte especializado ao cliente
                  </li>
                </ul>
                <Link to="/loja" className="block">
                  <Button className="w-full bg-makelife-teal hover:bg-makelife-teal-dark group">
                    Acessar Loja Virtual
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-makelife-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-makelife-teal-dark mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-makelife-gray-medium max-w-2xl mx-auto">
              Nossa linha completa de produtos inovadores para cuidados proctológicos e higiene íntima
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/produtos">
              <Button variant="outline" size="lg" className="border-makelife-teal text-makelife-teal hover:bg-makelife-teal hover:text-white">
                Ver Todos os Produtos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Science & Innovation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-makelife-teal mb-4">
                <Microscope className="w-5 h-5" />
                <span className="text-sm font-medium">Ciência e Inovação</span>
              </div>
              
              <h2 className="text-3xl font-bold text-makelife-teal-dark mb-6">
                Pesquisa e Desenvolvimento Próprio
              </h2>
              
              <p className="text-makelife-gray-medium mb-6">
                Fundada em 2021 como braço do centro tecnológico Makelab, somos pioneiros em 
                pesquisa científica dedicada aos cuidados da região anal. Nossa equipe de pesquisadores 
                desenvolve produtos patenteados com tecnologia inovadora.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-makelife-gray-light rounded-lg">
                  <div className="text-2xl font-bold text-makelife-teal mb-1">5+</div>
                  <div className="text-sm text-makelife-gray-medium">Patentes Requeridas</div>
                </div>
                <div className="p-4 bg-makelife-gray-light rounded-lg">
                  <div className="text-2xl font-bold text-makelife-teal mb-1">72h</div>
                  <div className="text-sm text-makelife-gray-medium">Hidratação Prolongada</div>
                </div>
              </div>

              <Link to="/ciencia">
                <Button className="bg-makelife-teal hover:bg-makelife-teal-dark">
                  Conheça Nossa Ciência
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-makelife rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Nanotecnologia Avançada</h3>
                <p className="mb-6">
                  Nosso produto Hidraenema Pro utiliza nanotecnologia de hialuronato de sódio, 
                  proporcionando hidratação prolongada e proteção superior dos tecidos anais.
                </p>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm opacity-90">Comprovação científica:</div>
                  <div className="text-lg font-semibold">93% dos pacientes relataram alívio significativo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-makelife-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-makelife-teal-dark mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-makelife-gray-medium max-w-2xl mx-auto">
              Depoimentos de profissionais e pacientes que confiam na qualidade MakeLife
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader className="pb-4">
                  <Quote className="w-8 h-8 text-makelife-teal/30 absolute top-4 right-4" />
                  <div className="flex space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-makelife-teal text-makelife-teal" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-makelife-gray-medium mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-makelife-teal-dark">{testimonial.name}</div>
                    <div className="text-sm text-makelife-gray-medium">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-makelife text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Cuidar da sua Saúde Íntima?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Descubra nossa linha completa de produtos inovadores e experimente a diferença MakeLife
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/loja">
              <Button size="lg" variant="secondary" className="bg-white text-makelife-teal hover:bg-gray-100">
                Comprar Agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-makelife-teal">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
