
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
  category: 'professional' | 'consumer';
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
        <div className="aspect-square bg-makelife-gray-light rounded-lg mb-3 overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-makelife-teal/20 rounded-lg flex items-center justify-center">
                <span className="text-makelife-teal font-bold text-xl">ML</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-makelife-teal-dark group-hover:text-makelife-teal transition-colors">
            {name}
          </CardTitle>
          <Badge 
            variant={category === 'professional' ? 'default' : 'secondary'}
            className={category === 'professional' ? 'bg-makelife-teal text-white' : 'bg-makelife-teal-light text-makelife-teal-dark'}
          >
            {category === 'professional' ? 'Profissional' : 'Consumidor'}
          </Badge>
        </div>
        
        <CardDescription className="text-sm text-makelife-gray-medium line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="text-2xl font-bold text-makelife-teal">
            €{price.toFixed(2)}
          </div>
          
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-makelife-teal-dark">Principais benefícios:</h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-xs text-makelife-gray-medium flex items-center">
                  <div className="w-1.5 h-1.5 bg-makelife-teal rounded-full mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-2">
        {category === 'consumer' ? (
          <Button 
            className="w-full bg-makelife-teal hover:bg-makelife-teal-dark"
            onClick={handleAddToCart}
            disabled={!inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {inStock ? 'Adicionar ao Carrinho' : 'Fora de Stock'}
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="w-full border-makelife-teal text-makelife-teal hover:bg-makelife-teal hover:text-white"
            onClick={handleViewDetails}
          >
            <Info className="w-4 h-4 mr-2" />
            Solicitar Orçamento
          </Button>
        )}
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full text-makelife-teal hover:text-makelife-teal-dark"
          onClick={handleViewDetails}
        >
          Ver Detalhes Técnicos
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
