
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, ChevronDown, Users, User, LogIn } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const particularsMenuItems = [
    { title: 'Loja Online', href: '/loja', description: 'Compre online com segurança' },
    { title: 'Onde Comprar', href: '/parcerias', description: 'Parcerias e pontos de venda' },
    { title: 'Contactos', href: '/contato', description: 'Apoio ao cliente' }
  ];

  const professionalsMenuItems = [
    { title: 'Quem Somos', href: '/institucional', description: 'A nossa história e missão' },
    { title: 'Ciência e Investigação', href: '/ciencia', description: 'Laboratório e investigação' },
    { title: 'Produtos - Brochura', href: '/produtos-profissionais', description: 'Catálogo para download' },
    { title: 'Distribuição', href: '/distribuicao', description: 'Representantes por região' },
    { title: 'Contactos', href: '/contato', description: 'Formulário profissional' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/d1d38c72-87c0-4fb7-a12e-62ecd56c50b8.png" 
              alt="MakeLife Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-6">
              {/* Particulares Dropdown - Primeira posição */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center text-makelife-teal-dark hover:text-makelife-teal font-medium">
                  <User className="w-4 h-4 mr-2" />
                  Particulares
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] bg-makelife-gray-light">
                    <div className="row-span-3">
                      <div className="mb-4">
                        <h4 className="text-lg font-medium text-makelife-teal-dark">Tratamento e higiene do reto e do ânus</h4>
                        <p className="text-sm text-makelife-gray-medium">Cuidados íntimos para o seu bem-estar</p>
                      </div>
                      {particularsMenuItems.map((item) => (
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

              {/* Profissionais Dropdown - Segunda posição */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center text-makelife-teal-dark hover:text-makelife-teal">
                  <Users className="w-4 h-4 mr-2" />
                  Profissionais de Saúde
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] bg-makelife-gray-light">
                    <div className="row-span-3">
                      <div className="mb-4">
                        <h4 className="text-lg font-medium text-makelife-teal-dark">Hospitais, Clínicas, Farmácias e Distribuidores</h4>
                        <p className="text-sm text-makelife-gray-medium">Soluções para profissionais de saúde</p>
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

              {/* Direct Links */}
              <NavigationMenuItem>
                <Link to="/sobre" className="text-makelife-teal-dark hover:text-makelife-teal font-medium">
                  Sobre Nós
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - Loja Online em destaque */}
            <Button className="hidden md:flex bg-makelife-teal hover:bg-makelife-teal-dark">
              Loja Online
            </Button>

            {/* Shopping Cart */}
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 bg-makelife-teal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Login Button - Destaque principal */}
            <Button size="sm" className="bg-makelife-teal hover:bg-makelife-teal-dark text-white font-medium">
              <LogIn className="w-4 h-4 mr-2" />
              Entrar
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
                  <User className="w-4 h-4 mr-2" />
                  Particulares
                </h3>
                <div className="space-y-2 ml-6">
                  {particularsMenuItems.map((item) => (
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
                  <Users className="w-4 h-4 mr-2" />
                  Profissionais de Saúde
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

              <div className="space-y-2 pt-4 border-t">
                <Link to="/sobre" className="block text-makelife-teal-dark hover:text-makelife-teal font-medium">
                  Sobre Nós
                </Link>
                <Button variant="outline" size="sm" className="w-full border-makelife-teal text-makelife-teal">
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
