
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-makelife-teal">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Nº1 em Cuidados Proctológicos</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-makelife-teal-dark">Cuidados</span>
                <br />
                <span className="text-gradient-makelife">Íntimos</span>
                <br />
                <span className="text-makelife-teal-dark">Inovadores</span>
              </h1>
              
              <p className="text-xl text-makelife-gray-medium max-w-lg">
                Pioneiros em saúde proctológica e higiene íntima da região anal. 
                Inovação científica ao serviço do seu bem-estar e conforto.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-makelife-gray-medium">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-makelife-teal" />
                <span>Produtos Patenteados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-makelife-teal" />
                <span>Aprovação CE</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/loja">
                <Button size="lg" className="bg-makelife-teal hover:bg-makelife-teal-dark group">
                  <User className="w-5 h-5 mr-2" />
                  Comprar Online
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/produtos-profissionais">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-makelife-teal text-makelife-teal hover:bg-makelife-teal hover:text-white"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Área Profissional
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Product showcase */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-makelife-teal/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-makelife-teal font-bold">H+</span>
                  </div>
                  <h3 className="font-semibold text-makelife-teal-dark">Hidratação 72h</h3>
                  <p className="text-sm text-makelife-gray-medium">Nanotecnologia avançada</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-makelife-teal/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-makelife-teal font-bold">P+</span>
                  </div>
                  <h3 className="font-semibold text-makelife-teal-dark">Protecção Clínica</h3>
                  <p className="text-sm text-makelife-gray-medium">Uso hospitalar</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-makelife-teal/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-makelife-teal font-bold">C+</span>
                  </div>
                  <h3 className="font-semibold text-makelife-teal-dark">Conforto Diário</h3>
                  <p className="text-sm text-makelife-gray-medium">Uso quotidiano</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-makelife-teal/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-makelife-teal font-bold">I+</span>
                  </div>
                  <h3 className="font-semibold text-makelife-teal-dark">Inovação</h3>
                  <p className="text-sm text-makelife-gray-medium">Investigação científica</p>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-makelife opacity-5 rounded-3xl transform rotate-3"></div>
          </div>
        </div>

        {/* Bottom Stats */}
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
            <div className="text-sm text-makelife-gray-medium">Distribuição</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
