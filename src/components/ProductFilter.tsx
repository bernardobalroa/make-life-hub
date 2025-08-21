import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import type { ProductCategory, PriceRange } from '@/pages/Loja';

interface ProductFilterProps {
  selectedCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
  selectedPriceRange: PriceRange;
  onPriceRangeChange: (range: PriceRange) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const ProductFilter = ({
  selectedCategory,
  onCategoryChange,
  selectedPriceRange,
  onPriceRangeChange,
  searchQuery,
  onSearchChange
}: ProductFilterProps) => {
  return (
    <div className="bg-card rounded-lg p-6 mb-8 shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Filtrar Produtos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Pesquisar</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              id="search"
              placeholder="Procurar produtos..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <Label htmlFor="category">Categoria</Label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecionar categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              <SelectItem value="higiene-intima">Higiene Íntima</SelectItem>
              <SelectItem value="hidratacao-anal">Hidratação Anal</SelectItem>
              <SelectItem value="dispositivos-limpeza">Dispositivos de Limpeza</SelectItem>
              <SelectItem value="cuidados-terapeuticos">Cuidados Terapêuticos</SelectItem>
              <SelectItem value="kits-completos">Kits Completos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div className="space-y-2">
          <Label htmlFor="price">Preço</Label>
          <Select value={selectedPriceRange} onValueChange={onPriceRangeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecionar preço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Preços</SelectItem>
              <SelectItem value="low">Até €20</SelectItem>
              <SelectItem value="medium">€20 - €40</SelectItem>
              <SelectItem value="high">Acima de €40</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;