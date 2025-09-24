
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, User, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-makelife-gray-light to-white py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-makelife-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-makelife-teal-light/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-makelife-teal">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">PIONEIROS EM SAÚDE PROTOCOLÓGICA</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-makelife-teal-dark">Cuidados</span>
                <br />
                <span className="text-gradient-makelife">Íntimos</span>
                <br />
                <span className="text-makelife-teal-dark">Inovadores</span>
              </h1>
              
               <p className="text-xl text-makelife-gray-medium max-w-3xl mx-auto">
                PRODUTOS DEDICADOS AOS CUIDADOS DA REGIÃO ANAL E RETAL.
               </p>
            </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-sm text-makelife-gray-medium mt-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-makelife-teal" />
              <span>Produtos Patenteados</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-makelife-teal" />
              <span>Aprovação CE</span>
            </div>
          </div>
        </div>

        {/* Eixos de Atuação - Segmentação Principal 70/30 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-makelife-teal-dark mb-8 text-center">
            Eixos de Atuação
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Particulares - Posição esquerda com maior destaque */}
            <div className="md:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-makelife-teal h-full">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-makelife-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-makelife-teal group-hover:text-white transition-colors">
                    <User className="w-10 h-10 text-makelife-teal" />
                  </div>
                   <h3 className="text-2xl font-bold text-makelife-teal-dark mb-2">Particulares</h3>
                   <p className="text-makelife-gray-medium">Saúde proctológica e higiene da região retal e anal</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center text-makelife-gray-medium">
                      <ArrowRight className="w-4 h-4 text-makelife-teal mr-2" />
                      Produtos para uso diário e bem-estar
                    </li>
                    <li className="flex items-center text-makelife-gray-medium">
                      <ArrowRight className="w-4 h-4 text-makelife-teal mr-2" />
                      Compra online segura e discreta
                    </li>
                    <li className="flex items-center text-makelife-gray-medium">
                      <ArrowRight className="w-4 h-4 text-makelife-teal mr-2" />
                      Dicas e orientações de saúde íntima
                    </li>
                    <li className="flex items-center text-makelife-gray-medium">
                      <ArrowRight className="w-4 h-4 text-makelife-teal mr-2" />
                      Apoio especializado ao cliente
                    </li>
                  </ul>
                </div>

                <Link to="/loja" className="block">
                  <Button size="lg" className="w-full bg-makelife-teal hover:bg-makelife-teal-dark group">
                    Aceder à Loja Online
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Profissionais de Saúde - Posição direita */}
            <div className="md:order-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-makelife-teal h-full">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-makelife-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-makelife-teal group-hover:text-white transition-colors">
                    <Users className="w-10 h-10 text-makelife-teal" />
                  </div>
                   <h3 className="text-2xl font-bold text-makelife-teal-dark mb-2">Profissionais de Saúde</h3>
                   <p className="text-makelife-gray-medium">Nº1 em cuidados proctológicos</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center text-makelife-gray-medium">
                      <ArrowRight className="w-4 h-4 text-makelife-teal mr-2" />
                      Produtos para uso clínico e hospitalar
                    </li>
                    <li className="flex items-center text-makelife-gray-medium">
                      <ArrowRight className="w-4 h-4 text-makelife-teal mr-2" />
                      Brochuras técnicas para download
                    </li>
                    <li className="flex items-center text-makelife-gray-medium">
                      <ArrowRight className="w-4 h-4 text-makelife-teal mr-2" />
                      Representantes comerciais por região
                    </li>
                    <li className="flex items-center text-makelife-gray-medium">
                      <ArrowRight className="w-4 h-4 text-makelife-teal mr-2" />
                      Orçamentos e encomendas em volume
                    </li>
                  </ul>
                </div>

                <Link to="/produtos-profissionais" className="block">
                  <Button variant="outline" size="lg" className="w-full border-makelife-teal text-makelife-teal hover:bg-makelife-teal hover:text-white group">
                    Aceder à Área Profissional
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Actualizados */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-makelife-teal">2021</div>
            <div className="text-sm text-makelife-gray-medium">Fundação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-makelife-teal">5+</div>
            <div className="text-sm text-makelife-gray-medium">Produtos Patenteados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-makelife-teal">100%</div>
            <div className="text-sm text-makelife-gray-medium">I&D Próprio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-makelife-teal">Europa</div>
            <div className="text-sm text-makelife-gray-medium">Reino Unido</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
