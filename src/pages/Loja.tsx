import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductFilter from '@/components/ProductFilter';
import ProductGrid from '@/components/ProductGrid';
import { Award, Shield, Users } from 'lucide-react';

export type ProductCategory = 'all' | 'higiene-intima' | 'hidratacao-anal' | 'dispositivos-limpeza' | 'cuidados-terapeuticos' | 'kits-completos';
export type PriceRange = 'all' | 'low' | 'medium' | 'high';

const Loja = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Loja Online - Produtos Inovadores MakeLife | Cuidados Íntimos e Proctológicos</title>
        <meta name="description" content="Compre produtos inovadores para cuidados íntimos e proctológicos. Hidratação anal, higiene íntima e dispositivos especializados com entrega discreta." />
        <meta name="keywords" content="produtos íntimos, cuidados proctológicos, hidratação anal, higiene íntima, MakeLife" />
        <link rel="canonical" href="https://makelife.pt/loja" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-makelife-gray-light to-white py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-makelife-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-makelife-teal-light/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-makelife-teal">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Loja Online Oficial MakeLife</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-makelife-teal-dark">Produtos</span>
                <br />
                <span className="text-gradient-makelife">Inovadores</span>
                <br />
                <span className="text-makelife-teal-dark">para Si</span>
              </h1>
              
              <p className="text-xl text-makelife-gray-medium max-w-3xl mx-auto">
                Cuidados íntimos e proctológicos com qualidade científica. 
                Compra segura e entrega discreta em toda a Europa.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 text-sm text-makelife-gray-medium mt-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-makelife-teal" />
                <span>Entrega Discreta</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-makelife-teal" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-makelife-teal" />
                <span>Apoio Especializado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProductFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPriceRange={selectedPriceRange}
            onPriceRangeChange={setSelectedPriceRange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <ProductGrid 
            selectedCategory={selectedCategory}
            selectedPriceRange={selectedPriceRange}
            searchQuery={searchQuery}
          />
        </div>
      </section>
    </div>
  );
};

export default Loja;