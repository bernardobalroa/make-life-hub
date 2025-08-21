import { useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { productsData } from '@/data/products';
import type { ProductCategory, PriceRange } from '@/pages/Loja';

interface ProductGridProps {
  selectedCategory: ProductCategory;
  selectedPriceRange: PriceRange;
  searchQuery: string;
}

const ProductGrid = ({ selectedCategory, selectedPriceRange, searchQuery }: ProductGridProps) => {
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      // Filter by category
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Filter by price range
      if (selectedPriceRange !== 'all') {
        const price = product.price;
        switch (selectedPriceRange) {
          case 'low':
            if (price >= 20) return false;
            break;
          case 'medium':
            if (price < 20 || price > 40) return false;
            break;
          case 'high':
            if (price <= 40) return false;
            break;
        }
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.features.some(feature => feature.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [selectedCategory, selectedPriceRange, searchQuery]);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-muted-foreground mb-2">
          Nenhum produto encontrado
        </h3>
        <p className="text-muted-foreground">
          Tente ajustar os filtros ou termo de pesquisa
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;