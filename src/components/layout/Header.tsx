import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import TopBar from '../TopBar';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = {
    particulares: [
      { href: '/loja', label: t('nav.loja') },
      { href: '/produtos', label: 'Produtos' },
      { href: '/blog-saude', label: 'Blog de Saúde', placeholder: true },
    ],
    profissionais: [
      { href: '/profissionais/quem-somos', label: 'Quem Somos' },
      { href: '/profissionais/ciencia-inovacao', label: 'Ciência e Inovação' },
      { href: '/profissionais/produtos-brochura', label: 'Produtos – Brochura' },
      { href: '/profissionais/distribuicao', label: 'Distribuição' },
      { href: '/profissionais/contactos', label: 'Contactos Profissionais' },
    ],
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <TopBar />
      
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="font-bold text-xl text-primary">
              MAKE LIFE
              <span className="block text-sm font-medium text-muted-foreground">
                INTERNACIONAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Particulares Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9">
                  {t('nav.particulares')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-56 p-4">
                    {menuItems.particulares.map((item) => (
                      <NavigationMenuLink
                        key={item.href}
                        asChild
                        className={item.placeholder ? 'opacity-50 pointer-events-none' : ''}
                      >
                        <Link
                          to={item.href}
                          className="block p-2 text-sm rounded hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.label}
                          {item.placeholder && <span className="ml-2 text-xs">(Em breve)</span>}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Profissionais Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9">
                  {t('nav.profissionais')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-4">
                    {menuItems.profissionais.map((item) => (
                      <NavigationMenuLink
                        key={item.href}
                        asChild
                      >
                        <Link
                          to={item.href}
                          className="block p-2 text-sm rounded hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Direct Links */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/sobre"
                    className={`px-4 py-2 text-sm font-medium rounded hover:bg-accent hover:text-accent-foreground ${
                      isActive('/sobre') ? 'bg-accent text-accent-foreground' : ''
                    }`}
                  >
                    {t('nav.sobre')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Contact Icon */}
            <Button variant="ghost" size="sm" asChild className="hidden md:flex">
              <Link to="/contactos">
                <Mail className="h-4 w-4" />
                <span className="ml-2">{t('nav.contactos')}</span>
              </Link>
            </Button>

            {/* Loja Online CTA */}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/loja">
                <ShoppingBag className="h-4 w-4 mr-2" />
                {t('nav.loja')}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-6">
                    <h2 className="text-lg font-semibold">Menu</h2>
                  </div>
                  
                  <nav className="flex-1">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="particulares">
                        <AccordionTrigger className="text-left">
                          {t('nav.particulares')}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-4">
                            {menuItems.particulares.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block py-2 text-sm hover:text-primary ${
                                  item.placeholder ? 'opacity-50 pointer-events-none' : ''
                                }`}
                              >
                                {item.label}
                                {item.placeholder && <span className="ml-2 text-xs">(Em breve)</span>}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="profissionais">
                        <AccordionTrigger className="text-left">
                          {t('nav.profissionais')}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-4">
                            {menuItems.profissionais.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-sm hover:text-primary"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="mt-6 space-y-4">
                      <Link
                        to="/sobre"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-sm hover:text-primary"
                      >
                        {t('nav.sobre')}
                      </Link>
                      <Link
                        to="/contactos"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-sm hover:text-primary"
                      >
                        {t('nav.contactos')}
                      </Link>
                    </div>
                  </nav>

                  <div className="pt-6 border-t">
                    <Button asChild className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      <Link to="/loja">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        {t('nav.loja')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;