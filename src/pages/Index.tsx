import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, Users, Building2, Star, Award, ShoppingCart, CalendarDays, TrendingUp, Globe2, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    
    console.log('Newsletter subscription:', { email, consent });
    setShowNewsletterModal(false);
    setEmail('');
    setConsent(false);
  };

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content="cuidados íntimos, saúde proctológica, produtos patenteados, higiene anal, Make Life" />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://makelifeinternacional.com" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section - Using the original component */}
        <HeroSection />

        {/* Métricas e Mercados */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('home.journey.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Desde 2021 a revolucionar os cuidados íntimos com inovação e qualidade.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2021</div>
                <div className="text-muted-foreground">{t('metrics.foundation')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">{t('metrics.patents')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">{t('metrics.rd')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Mercados</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Portugal</h3>
                <p className="text-sm text-muted-foreground">Mercado de origem com forte presença nacional</p>
              </Card>
              
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Espanha</h3>
                <p className="text-sm text-muted-foreground">Expansão ibérica com crescimento sustentado</p>
              </Card>
              
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">EUA</h3>
                <p className="text-sm text-muted-foreground">Mercado internacional estratégico</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Selos de Confiança */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Certificações e Qualidade</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compromisso com os mais altos padrões de qualidade e segurança.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <Badge variant="outline" className="px-6 py-3 text-lg">
                <Award className="w-5 h-5 mr-2" />
                {t('trust.patents')}
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-lg">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                {t('trust.ce')}
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-lg">
                <Star className="w-5 h-5 mr-2" />
                Qualidade Premium
              </Badge>
            </div>
          </div>
        </section>

        {/* Teaser Promoções */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">{t('home.promotions.title')}</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubra os nossos kits promocionais com descontos exclusivos para cuidados íntimos completos.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">{t('promotion.chuka.title')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t('promotion.chuka.desc')}</p>
                  <Badge variant="secondary">15% de desconto</Badge>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">{t('promotion.combo.title')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t('promotion.combo.desc')}</p>
                  <Badge variant="secondary">20% de desconto</Badge>
                </Card>
              </div>

              <Button asChild size="lg">
                <Link to="/loja">
                  {t('home.promotions.cta')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Teaser Ciência e Investigação */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('home.science.title')}</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Conheça a nossa dedicação à investigação científica e desenvolvimento de soluções inovadoras.
            </p>
            
            <Button asChild variant="outline" size="lg" onClick={() => setShowNewsletterModal(true)}>
              <Link to="/ciencia-investigacao">
                Saber Mais
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Newsletter Modal */}
      <Dialog open={showNewsletterModal} onOpenChange={setShowNewsletterModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('newsletter.title')}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleNewsletterSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder={t('newsletter.email.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked === true)}
                required
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground">
                {t('newsletter.consent')}
              </label>
            </div>
            <Button type="submit" className="w-full">
              {t('newsletter.cta')}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;