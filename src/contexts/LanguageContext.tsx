import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header & Navigation
    'nav.particulares': 'Particulares',
    'nav.profissionais': 'Profissionais de Saúde',
    'nav.sobre': 'Sobre Nós',
    'nav.contactos': 'Contactos',
    'nav.loja': 'Loja Online',
    'nav.entrar': 'Entrar',
    
    // Menu Items
    'menu.produtos': 'Produtos',
    'menu.blog.saude': 'Blog de Saúde',
    'menu.quem.somos': 'Quem Somos',
    'menu.ciencia.inovacao': 'Ciência e Inovação',
    'menu.produtos.brochura': 'Produtos – Brochura',
    'menu.distribuicao': 'Distribuição',
    'menu.contactos.profissionais': 'Contactos Profissionais',
    'menu.coming.soon': '(Em breve)',
    
    // Strapline
    'strapline': 'Produtos dedicados aos cuidados da região anal e retal.',
    
    // Home Page - Hero
    'home.hero.badge': 'Inovação Médica 2024',
    'home.hero.title': 'Pioneiros em Saúde Proctológica',
    'home.hero.subtitle': 'Inovação científica ao serviço do seu bem-estar e conforto.',
    'home.hero.cta.primary': 'Comprar na Loja Online',
    'home.hero.cta.secondary': 'Sou Profissional de Saúde',
    'home.hero.products.label': 'Produtos Patenteados',
    
    // Axis Section
    'home.axis.title': 'Eixos de Atuação',
    'home.axis.particulares.title': 'Particulares',
    'home.axis.particulares.description': 'Saúde proctológica e higiene da região retal e anal',
    'home.axis.particulares.cta': 'Aceder à Loja Online',
    'home.axis.profissionais.title': 'Profissionais',
    'home.axis.profissionais.description': 'Nº1 em cuidados proctológicos',
    'home.axis.profissionais.cta': 'Área Profissional',
    
    // Metrics & Journey
    'home.journey.title': 'A Nossa Jornada',
    'home.markets.title': 'Mercados',
    'metrics.foundation': '2021 Fundação',
    'metrics.patents': '5+ Produtos patenteados',
    'metrics.rd': '100% I&D Próprio',
    'metrics.markets.europe': 'Europa',
    'metrics.markets.uk': 'Reino Unido',
    'metrics.markets.europe.desc': 'Expansão europeia',
    'metrics.markets.uk.desc': 'Mercado do Reino Unido',
    
    // Trust Seals
    'trust.patents': 'Produtos patenteados',
    'trust.ce': 'Aprovação CE',
    
    // Promotions
    'home.promotions.title': 'Promoções em Destaque',
    'home.promotions.subtitle': 'Aproveite as nossas ofertas especiais',
    'home.promotions.cta': 'Ver Todas as Promoções',
    'home.promotions.view': 'Ver na Loja',
    'promotion.chuka.title': 'Chuka Pop - Kit Completo',
    'promotion.chuka.desc': 'Solução completa para higiene íntima anal',
    'promotion.combo.title': 'Proctowash + WipeWash',
    'promotion.combo.desc': 'Combo perfeito para cuidados diários',
    'promotion.hidraenema.title': 'Hidraenema Professional',
    'promotion.hidraenema.desc': 'Para uso profissional e doméstico',
    'promotion.price.from': 'A partir de',
    
    // Science & Innovation
    'home.science.title': 'Ciência e Inovação',
    'home.science.coming.title': 'Em Breve',
    'home.science.coming.desc': 'Conteúdo científico e estudos clínicos',
    'home.science.coming.cta': 'Disponível em breve',
    
    // Newsletter
    'newsletter.title': 'Receba promoções e novidades sobre saúde proctológica',
    'newsletter.subtitle': 'Subscreva a nossa newsletter.',
    'newsletter.email.placeholder': 'Introduza o seu e-mail',
    'newsletter.consent': 'Aceito receber comunicações de marketing',
    'newsletter.privacy': 'Política de Privacidade',
    'newsletter.cta': 'Subscrever',
    
    // Meta Content
    'meta.title': 'Make Life Internacional — Pioneiros em Saúde Proctológica | Produtos para região anal e retal',
    'meta.description': 'Líder europeu em soluções proctológicas inovadoras. Produtos patenteados para cuidados da região anal e retal. Aprovação CE. Fundada em 2021.',
    
    // Common
    'common.loading': 'A carregar...',
    'common.error': 'Erro',
    'common.success': 'Sucesso',
    'common.close': 'Fechar',
    'common.cancel': 'Cancelar',
    'common.submit': 'Submeter',
    'common.continue': 'Continuar',
    'common.back': 'Voltar',
  },
  en: {
    // Header & Navigation
    'nav.particulares': 'Individuals',
    'nav.profissionais': 'Healthcare Professionals',
    'nav.sobre': 'About Us',
    'nav.contactos': 'Contact',
    'nav.loja': 'Online Store',
    'nav.entrar': 'Login',
    
    // Menu Items
    'menu.produtos': 'Products',
    'menu.blog.saude': 'Health Blog',
    'menu.quem.somos': 'About Us',
    'menu.ciencia.inovacao': 'Science & Innovation',
    'menu.produtos.brochura': 'Products – Brochure',
    'menu.distribuicao': 'Distribution',
    'menu.contactos.profissionais': 'Professional Contacts',
    'menu.coming.soon': '(Coming soon)',
    
    // Strapline
    'strapline': 'Products dedicated to anal and rectal care.',
    
    // Home Page - Hero
    'home.hero.badge': 'Medical Innovation 2024',
    'home.hero.title': 'Pioneers in Proctological Health',
    'home.hero.subtitle': 'Scientific innovation at the service of your well-being and comfort.',
    'home.hero.cta.primary': 'Shop Online',
    'home.hero.cta.secondary': 'I\'m a Healthcare Professional',
    'home.hero.products.label': 'Patented Products',
    
    // Axis Section
    'home.axis.title': 'Areas of Action',
    'home.axis.particulares.title': 'Individuals',
    'home.axis.particulares.description': 'Proctological health and hygiene of the rectal and anal region',
    'home.axis.particulares.cta': 'Access Online Store',
    'home.axis.profissionais.title': 'Professionals',
    'home.axis.profissionais.description': 'No.1 in proctological care',
    'home.axis.profissionais.cta': 'Professional Area',
    
    // Metrics & Journey
    'home.journey.title': 'Our Journey',
    'home.markets.title': 'Markets',
    'metrics.foundation': '2021 Foundation',
    'metrics.patents': '5+ Patented Products',
    'metrics.rd': '100% In-house R&D',
    'metrics.markets.europe': 'Europe',
    'metrics.markets.uk': 'United Kingdom',
    'metrics.markets.europe.desc': 'European expansion',
    'metrics.markets.uk.desc': 'United Kingdom market',
    
    // Trust Seals
    'trust.patents': 'Patented Products',
    'trust.ce': 'CE Approval',
    
    // Promotions
    'home.promotions.title': 'Featured Promotions',
    'home.promotions.subtitle': 'Take advantage of our special offers',
    'home.promotions.cta': 'View All Promotions',
    'home.promotions.view': 'View in Store',
    'promotion.chuka.title': 'Chuka Pop - Complete Kit',
    'promotion.chuka.desc': 'Complete solution for anal intimate hygiene',
    'promotion.combo.title': 'Proctowash + WipeWash',
    'promotion.combo.desc': 'Perfect combo for daily care',
    'promotion.hidraenema.title': 'Hidraenema Professional',
    'promotion.hidraenema.desc': 'For professional and home use',
    'promotion.price.from': 'From',
    
    // Science & Innovation
    'home.science.title': 'Science & Innovation',
    'home.science.coming.title': 'Coming Soon',
    'home.science.coming.desc': 'Scientific content and clinical studies',
    'home.science.coming.cta': 'Available soon',
    
    // Newsletter
    'newsletter.title': 'Receive promotions and news about proctological health',
    'newsletter.subtitle': 'Subscribe to our newsletter.',
    'newsletter.email.placeholder': 'Enter your email',
    'newsletter.consent': 'I accept to receive marketing communications',
    'newsletter.privacy': 'Privacy Policy',
    'newsletter.cta': 'Subscribe',
    
    // Meta Content
    'meta.title': 'Make Life Internacional — Pioneers in Proctological Health | Products for anal and rectal care',
    'meta.description': 'European leader in innovative proctological solutions. Patented products for anal and rectal care. CE approved. Founded in 2021.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.close': 'Close',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.continue': 'Continue',
    'common.back': 'Back',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    // Get saved language from localStorage or detect browser language
    const savedLanguage = localStorage.getItem('makelife-language') as Language;
    if (savedLanguage && ['pt', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('en')) {
        setLanguage('en');
      }
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('makelife-language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};