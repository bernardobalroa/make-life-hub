
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Microscope, ChevronRight, Star, Quote, Award, ShoppingCart, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample products data - com foco em particulares
  const featuredProducts = [
    {
      id: 'proctowash',
      name: 'Proctowash',
      description: 'Sabonete íntimo específico para higiene da região anal, uso diário com pH equilibrado.',
      price: 17.50,
      category: 'higiene-intima' as const,
      features: ['pH equilibrado', 'Uso diário', 'Suavidade'],
      inStock: true
    },
    {
      id: 'wipewash-premium',
      name: 'WipeWash Premium',
      description: 'Toalhitas húmidas especiais para higiene pós-cirúrgica e cuidados quotidianos.',
      price: 13.50,
      category: 'higiene-intima' as const,
      features: ['Pós-cirúrgico', 'Portátil', 'Testado dermatologicamente'],
      inStock: true
    },
    {
      id: 'hidraenema-pro',
      name: 'Hidraenema Pro 3g',
      description: 'Hidratante intranal com nanotecnologia de ácido hialurónico para protecção prolongada por 72h.',
      price: 52.50,
      category: 'hidratacao-anal' as const,
      features: ['Hidratação 72h', 'Nanotecnologia', 'Uso clínico'],
      inStock: true
    }
  ];

  const testimonials = [
    {
      name: "Dr. Ricardo Santos",
      role: "Coloproctologista",
      content: "Os produtos MakeLife revolucionaram a nossa preparação pré-cirúrgica. A qualidade e eficácia são notáveis.",
      rating: 5
    },
    {
      name: "Ana Paula",
      role: "Cliente",
      content: "Finalmente encontrei produtos que realmente cuidam da minha higiene íntima com qualidade e discrição.",
      rating: 5
    },
    {
      name: "Dr. Maria Silva",
      role: "Proctologista",
      content: "A linha MakeLife oferece soluções inovadoras que melhoram significativamente o conforto dos pacientes.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section com nova estrutura */}
      <HeroSection />

      {/* Seção de Promoções/Campanhas para Particulares */}
      <section className="py-16 bg-makelife-teal/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-makelife-teal-dark mb-4">
              Promoções em Destaque
            </h2>
            <p className="text-makelife-gray-medium max-w-2xl mx-auto">
              Aproveite as nossas ofertas especiais e cuide da sua saúde íntima com desconto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-makelife-teal bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-makelife-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-makelife-teal-dark">Kit Inicial</CardTitle>
                <CardDescription>Para quem está a começar</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-makelife-teal mb-2">15% DESC</div>
                <p className="text-sm text-makelife-gray-medium mb-4">
                  Procto Wash + WipeWash
                </p>
                <Button className="w-full bg-makelife-teal hover:bg-makelife-teal-dark">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar Kit
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-makelife-teal bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-makelife-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-makelife-teal-dark">Produto do Mês</CardTitle>
                <CardDescription>Mais vendido</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-makelife-teal mb-2">Procto Wash</div>
                <p className="text-sm text-makelife-gray-medium mb-4">
                  Higiene diária essencial
                </p>
                <Button className="w-full bg-makelife-teal hover:bg-makelife-teal-dark">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Ver Produto
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-makelife-teal bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-makelife-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-makelife-teal-dark">Guia Gratuito</CardTitle>
                <CardDescription>Para profissionais</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-makelife-teal mb-2">Brochura</div>
                <p className="text-sm text-makelife-gray-medium mb-4">
                  Catálogo técnico completo
                </p>
                <Button variant="outline" className="w-full border-makelife-teal text-makelife-teal hover:bg-makelife-teal hover:text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products - Com foco em particulares (70%) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-makelife-teal-dark mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-makelife-gray-medium max-w-2xl mx-auto">
              A nossa linha completa de produtos inovadores para cuidados proctológicos e higiene íntima
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-8 space-y-4">
            <Link to="/loja">
              <Button size="lg" className="bg-makelife-teal hover:bg-makelife-teal-dark mr-4">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Ver Todos na Loja
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/produtos-profissionais">
              <Button variant="outline" size="lg" className="border-makelife-teal text-makelife-teal hover:bg-makelife-teal hover:text-white">
                <Download className="w-4 h-4 mr-2" />
                Catálogo Profissional
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ciência e Inovação */}
      <section className="py-16 bg-makelife-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-makelife-teal mb-4">
                <Microscope className="w-5 h-5" />
                <span className="text-sm font-medium">Ciência e Inovação</span>
              </div>
              
              <h2 className="text-3xl font-bold text-makelife-teal-dark mb-6">
                Investigação e Desenvolvimento Próprio
              </h2>
              
              <p className="text-makelife-gray-medium mb-6">
                Fundada em 2021 como braço do centro tecnológico Makelab, somos pioneiros em 
                investigação científica dedicada aos cuidados da região anal. A nossa equipa de investigadores 
                desenvolve produtos patenteados com tecnologia inovadora, estabelecendo-nos como 
                a 1ª marca em saúde proctológica na Europa.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-makelife-teal mb-1">2021</div>
                  <div className="text-sm text-makelife-gray-medium">Fundação</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-makelife-teal mb-1">5+</div>
                  <div className="text-sm text-makelife-gray-medium">Patentes Requeridas</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-makelife-teal mb-1">100%</div>
                  <div className="text-sm text-makelife-gray-medium">I&D Próprio</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-makelife-teal mb-1">72h</div>
                  <div className="text-sm text-makelife-gray-medium">Hidratação Prolongada</div>
                </div>
              </div>

              <Link to="/ciencia">
                <Button className="bg-makelife-teal hover:bg-makelife-teal-dark">
                  Conheça a Nossa Ciência
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-makelife rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Nanotecnologia Avançada</h3>
                <p className="mb-6">
                  O nosso produto Hidraenema Pro utiliza nanotecnologia de hialuronato de sódio, 
                  proporcionando hidratação prolongada e protecção superior dos tecidos anais, 
                  revolucionando os cuidados proctológicos.
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

      {/* Testemunhos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-makelife-teal-dark mb-4">
              Testemunhos
            </h2>
            <h3 className="text-xl text-makelife-gray-medium mb-4">
              O Que Dizem os Nossos Clientes Sobre a Qualidade dos Produtos MakeLife
            </h3>
            <p className="text-makelife-gray-medium max-w-2xl mx-auto">
              Depoimentos reais de profissionais e pacientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* Call to Action - Focado em Particulares */}
      <section className="py-16 bg-gradient-makelife text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Cuidar da Sua Saúde Íntima?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Descubra a nossa linha completa de produtos inovadores e experimente a diferença MakeLife
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/loja">
              <Button size="lg" variant="secondary" className="bg-white text-makelife-teal hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Comprar na Loja Online
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-makelife-teal">
                Fale Connosco
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
