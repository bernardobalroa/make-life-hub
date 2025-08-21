import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductGrid from '@/components/ProductGrid';
import ProductFilter from '@/components/ProductFilter';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Award, Shield } from 'lucide-react';

export type ProductCategory = 'all' | 'higiene-intima' | 'hidratacao-anal' | 'dispositivos-limpeza' | 'cuidados-terapeuticos' | 'kits-completos';
export type PriceRange = 'all' | 'low' | 'medium' | 'high';

const Loja = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Helmet>
        <title>Loja Online - Produtos Especializados em Cuidados Proctológicos | MakeLife</title>
        <meta name="description" content="Descubra a primeira marca especializada em cuidados proctológicos. Produtos inovadores, testados dermatologicamente para higiene íntima e bem-estar." />
        <meta name="keywords" content="produtos proctologia, higiene anal, cuidados íntimos, sabonete proctológico, toalhitas especializadas" />
        <link rel="canonical" href="/loja" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section da Loja */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Loja Online MakeLife
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A primeira marca especializada em cuidados proctológicos e higiene íntima
              </p>
              
              {/* Badges de Credibilidade */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  I&D Próprio
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Testado Dermatologicamente
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Aprovação CE
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros e Produtos */}
        <section className="py-12">
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
      </main>
    </>
  );
};

export default Loja;