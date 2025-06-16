
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, ChevronDown, Users, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const professionalsMenuItems = [
    { title: 'Quem Somos', href: '/institucional', description: 'Nossa história e missão' },
    { title: 'Produtos Profissionais', href: '/produtos-profissionais', description: 'Catálogo para clínicas e hospitais' },
    { title: 'Ciência e Inovação', href: '/ciencia', description: 'Laboratório e pesquisas' },
    { title: 'Distribuição', href: '/distribuicao', description: 'Representantes por região' },
    { title: 'Conteúdo Técnico', href: '/blog-tecnico', description: 'Artigos científicos' }
  ];

  const consumersMenuItems = [
    { title: 'Loja Virtual', href: '/loja', description: 'Compre online com segurança' },
    { title: 'Nossos Produtos', href: '/produtos', description: 'Linha completa para você' },
    { title: 'Blog de Saúde', href: '/blog', description: 'Dicas e orientações' },
    { title: 'Parcerias', href: '/parcerias', description: 'Seja um parceiro' },
    { title: 'Suporte', href: '/suporte', description: 'Atendimento ao cliente' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-makelife rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ML</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-makelife-teal-dark">Make</span>
              <span className="text-xl font-bold text-makelife-teal">Life</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-6">
              {/* Profissionais Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center text-makelife-teal-dark hover:text-makelife-teal">
                  <Users className="w-4 h-4 mr-2" />
                  Para Profissionais
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] bg-makelife-gray-light">
                    <div className="row-span-3">
                      <div className="mb-4">
                        <h4 className="text-lg font-medium text-makelife-teal-dark">Área Profissional</h4>
                        <p className="text-sm text-makelife-gray-medium">Soluções para clínicas e hospitais</p>
                      </div>
                      {professionalsMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-makelife-teal-lighter hover:text-makelife-teal-dark"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-xs leading-snug text-makelife-gray-medium">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Consumidores Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center text-makelife-teal-dark hover:text-makelife-teal">
                  <User className="w-4 h-4 mr-2" />
                  Para Você
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] bg-makelife-gray-light">
                    <div className="row-span-3">
                      <div className="mb-4">
                        <h4 className="text-lg font-medium text-makelife-teal-dark">Área do Consumidor</h4>
                        <p className="text-sm text-makelife-gray-medium">Cuidados íntimos para seu bem-estar</p>
                      </div>
                      {consumersMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-makelife-teal-lighter hover:text-makelife-teal-dark"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-xs leading-snug text-makelife-gray-medium">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Direct Links */}
              <NavigationMenuItem>
                <Link to="/sobre" className="text-makelife-teal-dark hover:text-makelife-teal font-medium">
                  Sobre Nós
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contato" className="text-makelife-teal-dark hover:text-makelife-teal font-medium">
                  Contato
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 bg-makelife-teal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-makelife-teal hover:bg-makelife-teal-dark">
              Loja Virtual
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-makelife-teal-dark mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Para Profissionais
                </h3>
                <div className="space-y-2 ml-6">
                  {professionalsMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-makelife-gray-medium hover:text-makelife-teal"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-makelife-teal-dark mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Para Você
                </h3>
                <div className="space-y-2 ml-6">
                  {consumersMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-makelife-gray-medium hover:text-makelife-teal"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <Link to="/sobre" className="block text-makelife-teal-dark hover:text-makelife-teal font-medium">
                  Sobre Nós
                </Link>
                <Link to="/contato" className="block text-makelife-teal-dark hover:text-makelife-teal font-medium">
                  Contato
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
