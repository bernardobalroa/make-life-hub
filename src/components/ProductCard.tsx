
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Info } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'higiene-intima' | 'hidratacao-anal' | 'dispositivos-limpeza' | 'cuidados-terapeuticos' | 'kits-completos';
  image?: string;
  features: string[];
  inStock: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  category,
  image,
  features,
  inStock
}) => {
  const handleAddToCart = () => {
    console.log(`Produto ${id} adicionado ao carrinho`);
  };

  const handleViewDetails = () => {
    console.log(`Visualizar detalhes do produto ${id}`);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover-lift">
      <CardHeader className="pb-3">
        <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
          {image ? (
            <img 
              src={image || `/products/${id}.png`}
              alt={`${name} - produto MakeLife`}
              loading="lazy"
              width={600}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                console.warn('Falha ao carregar imagem do produto', { id, name, src: e.currentTarget.src });
                const tried = e.currentTarget.getAttribute('data-fallback-tried');
                if (!tried) {
                  e.currentTarget.setAttribute('data-fallback-tried', '1');
                  e.currentTarget.src = `/products/${id}.png`;
                } else {
                  e.currentTarget.src = '/placeholder.svg';
                }
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">ML</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors">
            {name}
          </CardTitle>
          <Badge 
            variant={category.includes('kits') || category.includes('terapeuticos') ? 'default' : 'secondary'}
          >
            {category === 'higiene-intima' && 'Higiene Íntima'}
            {category === 'hidratacao-anal' && 'Hidratação Anal'}
            {category === 'dispositivos-limpeza' && 'Dispositivos'}
            {category === 'cuidados-terapeuticos' && 'Terapêutico'}
            {category === 'kits-completos' && 'Kit Completo'}
          </Badge>
        </div>
        
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-3">
          <div className="text-2xl font-bold text-primary">
            €{price.toFixed(2)}
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Principais benefícios:</h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-xs text-muted-foreground flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-2">
        {category === 'kits-completos' && name.includes('Profissional') ? (
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleViewDetails}
          >
            <Info className="w-4 h-4 mr-2" />
            Solicitar Orçamento
          </Button>
        ) : (
          <Button 
            className="w-full"
            onClick={handleAddToCart}
            disabled={!inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {inStock ? 'Adicionar ao Carrinho' : 'Fora de Stock'}
          </Button>
        )}
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full"
          onClick={handleViewDetails}
        >
          Ver Detalhes Técnicos
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
