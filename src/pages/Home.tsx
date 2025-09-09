import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building2, Globe, Award, ShieldCheck, Calendar, Beaker, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/layout/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const metrics = [
    { icon: Calendar, label: t('metrics.foundation'), value: '2021' },
    { icon: Award, label: t('metrics.patents'), value: '5+' },
    { icon: Beaker, label: t('metrics.rd'), value: '100%' },
  ];

  const markets = [
    { icon: Globe, label: t('metrics.markets.europe'), description: 'Europa' },
    { icon: Globe, label: t('metrics.markets.uk'), description: 'Reino Unido' },
  ];

  const trustSeals = [
    { icon: Award, label: t('trust.patents') },
    { icon: ShieldCheck, label: t('trust.ce') },
  ];

  const promotions = [
    {
      title: 'Chuka Pop - Kit Completo',
      description: 'Solução completa para higiene íntima anal',
      image: '/placeholder-product.jpg',
      price: 'A partir de €29.90',
    },
    {
      title: 'Proctowash + WipeWash',
      description: 'Combo perfeito para cuidados diários',
      image: '/placeholder-product.jpg',
      price: 'A partir de €19.90',
    },
    {
      title: 'Hidraenema Professional',
      description: 'Para uso profissional e doméstico',
      image: '/placeholder-product.jpg',
      price: 'A partir de €39.90',
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    
    // TODO: Integrate with GHL
    console.log('Newsletter subscription:', { email, consent, language });
    setShowNewsletterModal(false);
    setEmail('');
    setConsent(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          {language === 'pt' 
            ? 'Make Life Internacional — Pioneiros em Saúde Proctológica | Produtos para região anal e retal'
            : 'Make Life Internacional — Pioneers in Proctological Health | Products for anal and rectal care'
          }
        </title>
        <meta 
          name="description" 
          content={language === 'pt'
            ? 'Líder europeu em soluções proctológicas inovadoras. Produtos patenteados para cuidados da região anal e retal. Aprovação CE. Fundada em 2021.'
            : 'European leader in innovative proctological solutions. Patented products for anal and rectal care. CE approved. Founded in 2021.'
          }
        />
        <meta name="keywords" content="saúde proctológica, produtos anais, higiene retal, Make Life Internacional, dispositivos médicos" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Inovação Médica 2024
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                  {t('home.hero.title')}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  {t('home.hero.subtitle')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/loja">
                    {t('home.hero.cta.primary')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/profissionais">
                    {t('home.hero.cta.secondary')}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* Product showcase placeholder */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏥</div>
                    <p className="text-lg font-medium text-muted-foreground">
                      Produtos Patenteados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eixos de Atuação */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.axis.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{t('home.axis.particulares.title')}</CardTitle>
                <CardDescription className="text-lg">
                  {t('home.axis.particulares.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full">
                  <Link to="/loja">
                    {t('home.axis.particulares.cta')}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">{t('home.axis.profissionais.title')}</CardTitle>
                <CardDescription className="text-lg">
                  {t('home.axis.profissionais.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/profissionais">
                    {t('home.axis.profissionais.cta')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics & Markets */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Metrics */}
            <div>
              <h3 className="text-2xl font-bold mb-8">A Nossa Jornada</h3>
              <div className="space-y-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <metric.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{metric.value}</div>
                      <div className="text-muted-foreground">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Markets */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Mercados</h3>
              <div className="grid gap-4">
                {markets.map((market, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <market.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{market.label}</h4>
                        <p className="text-sm text-muted-foreground">{market.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Seals */}
      <section className="py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            {trustSeals.map((seal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <seal.icon className="h-6 w-6 text-primary" />
                <span className="font-medium">{seal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Promoções em Destaque
            </h2>
            <p className="text-lg text-muted-foreground">
              Aproveite as nossas ofertas especiais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {promotions.map((promo, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                  <div className="text-4xl">📦</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{promo.title}</CardTitle>
                  <CardDescription>{promo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{promo.price}</span>
                    <Button size="sm" variant="outline">Ver na Loja</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/promocoes">
                Ver Todas as Promoções
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Science & Innovation Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ciência e Inovação
            </h2>
            <Card className="max-w-md mx-auto p-8">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Em Breve</h3>
                <p className="text-muted-foreground mb-4">
                  Conteúdo científico e estudos clínicos
                </p>
                <Button variant="outline" disabled>
                  Disponível em breve
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Modal */}
      <Dialog open={showNewsletterModal} onOpenChange={setShowNewsletterModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('newsletter.title')}</DialogTitle>
            <DialogDescription>
              {t('newsletter.subtitle')}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleNewsletterSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder={t('newsletter.email.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked === true)}
                required
              />
              <label htmlFor="consent" className="text-sm">
                {t('newsletter.consent')}
              </label>
            </div>
            <div className="text-xs text-muted-foreground">
              <Link to="/politica-privacidade" className="underline">
                {t('newsletter.privacy')}
              </Link>
            </div>
            <Button type="submit" className="w-full" disabled={!email || !consent}>
              {t('newsletter.cta')}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Home;