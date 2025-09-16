export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  category: 'higiene-intima' | 'hidratacao-anal' | 'dispositivos-limpeza' | 'cuidados-terapeuticos' | 'kits-completos';
  image?: string;
  features: string[];
  inStock: boolean;
  slug: string;
  shortDescription: string;
  packInfo?: string;
  technicalSpecs?: {
    ph?: string;
    volume?: string;
    ingredients?: string[];
    usage?: string;
    activeIngredients?: string[];
  };
  certifications: string[];
  targetAudience: string[];
}

export const productsData: Product[] = [
  {
    id: 'proctowash',
    sku: 'PAMK0008',
    name: 'Proctowash',
    shortDescription: 'Sabonete líquido íntimo especializado com Bioextracts Active',
    description: 'Sabonete líquido íntimo desenvolvido especificamente para limpeza anal com Bioextracts Active e AlphaProtect Organic. Formulado com pH ideal para a região anal, proporciona limpeza suave e profunda com ação calmante, anti-inflamatória e hidratante. Proctologicamente testado para garantir máxima segurança e eficácia.',
    price: 17.50,
    category: 'higiene-intima',
    image: '/src/assets/products/proctowash.png',
    slug: 'proctowash',
    packInfo: 'Frasco pump 200ml',
    features: [
      'Bioextracts Active para máxima eficácia',
      'AlphaProtect Organic - proteção natural avançada',
      'pH ideal específico para a região anal',
      'Ação calmante e anti-inflamatória comprovada',
      'Hidratação profunda da pele sensível',
      'Limpeza suave sem ressecamento',
      'Frasco pump para aplicação higiénica',
      'Proctologicamente testado',
      'Fórmula dermatologicamente aprovada'
    ],
    inStock: true,
    technicalSpecs: {
      ph: '5.5 - 6.0 (ideal para região anal)',
      volume: '200ml',
      activeIngredients: ['Bioextracts Active', 'AlphaProtect Organic', 'Agentes hidratantes'],
      usage: 'Aplicar pequena quantidade na região anal, massajar suavemente e enxaguar com água morna'
    },
    certifications: ['Proctologicamente testado', 'Dermatologicamente testado', 'Aprovação CE', 'Hipoalergénico'],
    targetAudience: ['Higiene anal especializada', 'Desconforto proctológico', 'Higiene diária', 'Cuidados preventivos']
  },
  {
    id: 'wipewash-premium',
    sku: 'PAMK0009',
    name: 'WipeWash Premium',
    shortDescription: 'Toalha umedecida premium exclusiva para limpeza e higienização perianal',
    description: 'Toalha umedecida premium exclusiva para limpeza e higienização perianal, com pH ideal para o ânus. WIPEWASH é livre de perfume e com tecnologia BIOSACCHARIDES ACTIVE. Ação hidratante imediata e calmante. Proctologicamente testado. Produto indicado para uso diário, pacientes pós-cirúrgicos, pacientes em tratamento de doenças orificiais e pacientes com sensibilização anal.',
    price: 13.50,
    category: 'higiene-intima',
    image: '/src/assets/products/wipewash.png',
    slug: 'wipewash-premium',
    packInfo: 'Embalagem com 20 toalhitas',
    features: [
      'Sem perfume - hipoalergénico',
      'Ação calmante e anti-inflamatória',
      'Promove hidratação profunda',
      'Age na reparação dérmica',
      'Tecnologia da limpeza imediata',
      'pH ideal para o ânus',
      'Proctologicamente testado',
      'Indicado para uso diário',
      'Ideal para pacientes pós-cirúrgicos',
      'Para tratamento de doenças orificiais'
    ],
    inStock: true,
    technicalSpecs: {
      ph: 'pH ideal para região anal',
      volume: '20 unidades',
      activeIngredients: ['BIOSACCHARIDES ACTIVE', 'Ingredientes calmantes', 'Agentes hidratantes'],
      usage: 'Usar conforme necessário para limpeza e higienização perianal. Ideal para uso diário'
    },
    certifications: ['Proctologicamente testado', 'Dermatologicamente testado', 'Biodegradável', 'Hipoalergénico'],
    targetAudience: ['Uso diário', 'Pacientes pós-cirúrgicos', 'Tratamento de doenças orificiais', 'Sensibilização anal']
  },
  {
    id: 'hidraenema-pro',
    sku: 'PAMK0002',
    name: 'Hidraenema Pro 3g',
    shortDescription: 'Hidratante anal profissional com hialuronato de sódio - 10 bisnagas',
    description: 'Hidratante anal profissional com hialuronato de sódio e ácido láctico. Fórmula sem fragrância e sem parabenos que regula o pH e proporciona hidratação por até 72 horas.',
    price: 52.50,
    category: 'hidratacao-anal',
    image: '/src/assets/products/hidraenema-pro.png',
    slug: 'hidraenema-pro',
    packInfo: '10 bisnagas de 3g cada',
    features: [
      'Hialuronato de sódio para hidratação prolongada',
      'Ácido láctico para regulação do pH',
      'Eficácia comprovada de 72 horas',
      'Fórmula sem fragrância e sem parabenos',
      'Regula microbiota natural',
      'Bisnagas individuais para aplicação higiénica'
    ],
    inStock: true,
    technicalSpecs: {
      volume: '10 x 3g',
      activeIngredients: ['Hialuronato de sódio', 'Ácido láctico'],
      usage: 'Aplicar conforme necessário. Uso profissional recomendado'
    },
    certifications: ['Aprovação CE', 'Testado dermatologicamente', 'Estudos clínicos'],
    targetAudience: ['Profissionais de saúde', 'Clínicas especializadas', 'Uso hospitalar']
  },
  {
    id: 'hidraenema-3g',
    sku: 'PAMK0004',
    name: 'Hidraenema 3g',
    shortDescription: 'Kit hidratante anal com 5 bisnagas e 5 aplicadores',
    description: 'Kit completo com hidratante anal formulado com hialuronato de sódio e ácido láctico. Inclui 5 bisnagas de 3g e 5 aplicadores para uso prático e higiénico.',
    price: 26.25,
    category: 'hidratacao-anal',
    image: '/src/assets/products/hidraenema.png',
    slug: 'hidraenema-3g',
    packInfo: '5 bisnagas 3g + 5 aplicadores',
    features: [
      'Kit completo com aplicadores incluídos',
      'Hialuronato de sódio para hidratação',
      'Ácido láctico para equilíbrio do pH',
      'Hidratação prolongada até 72h',
      'Aplicadores para uso higiénico',
      'Ideal para uso doméstico'
    ],
    inStock: true,
    technicalSpecs: {
      volume: '5 x 3g + 5 aplicadores',
      activeIngredients: ['Hialuronato de sódio', 'Ácido láctico'],
      usage: 'Aplicar com o aplicador incluído conforme necessário'
    },
    certifications: ['Testado dermatologicamente', 'Aprovação CE', 'Hipoalergénico'],
    targetAudience: ['Uso doméstico', 'Cuidados preventivos', 'Hidratação diária']
  },
  {
    id: 'chuka-pop',
    sku: 'PAMK0005',
    name: 'Chuka Pop',
    shortDescription: 'Dispositivo anatómico para higienização anal com bico aplicador',
    description: 'Dispositivo anatómico inovador para higienização anal pré/pós-relações íntimas, apoio em exames médicos e auxílio na obstipação. Design ergonómico que se adapta ao chuveirinho ou garrafa PET.',
    price: 6.50,
    category: 'dispositivos-limpeza',
    image: '/src/assets/products/chuka-pop.png',
    slug: 'chuka-pop',
    packInfo: '1 unidade com bico aplicador',
    features: [
      'Design anatómico ergonómico',
      'Compatível com chuveirinho e garrafa PET',
      'Ideal para higienização pré/pós-relações',
      'Apoio em exames médicos',
      'Auxilia na obstipação',
      'Material seguro e durável'
    ],
    inStock: true,
    technicalSpecs: {
      usage: 'Conectar ao chuveirinho ou garrafa PET para higienização suave com água'
    },
    certifications: ['Material atóxico', 'Design patenteado', 'Testado clinicamente'],
    targetAudience: ['Adultos ativos', 'Preparação para exames', 'Higiene íntima avançada']
  },
  {
    id: 'chuka-pop-lgbt',
    sku: 'PAMK0003',
    name: 'Chuka Pop Orgulho LGBT',
    shortDescription: 'Dispositivo para higienização interna do reto - Edição Orgulho',
    description: 'Dispositivo especializado para higienização interna do reto com injeção de água. Edição especial Orgulho LGBT, ideal para higienização pré/pós-relações íntimas e preparação para consultas médicas.',
    price: 6.50,
    category: 'dispositivos-limpeza',
    image: '/src/assets/products/chuka-lgbt.png',
    slug: 'chuka-pop-lgbt',
    packInfo: '1 unidade - Edição Orgulho',
    features: [
      'Edição especial Orgulho LGBT',
      'Higienização interna eficaz',
      'Injeção controlada de água',
      'Ideal para pré/pós-relações íntimas',
      'Preparação para consultas médicas',
      'Design inclusivo e respeitoso'
    ],
    inStock: true,
    technicalSpecs: {
      usage: 'Usar com água morna para higienização interna suave e eficaz'
    },
    certifications: ['Material atóxico', 'Design inclusivo', 'Testado clinicamente'],
    targetAudience: ['Comunidade LGBT+', 'Higiene íntima especializada', 'Preparação médica']
  },
  {
    id: 'proctofarma-hemo',
    sku: 'PAMK0007',
    name: 'Proctofarma Hemo',
    shortDescription: 'Pomada hemorroidária anti-inflamatória para fissuras de períneo',
    description: 'Pomada terapêutica especializada para tratamento de hemorroidas e fissuras de períneo. Fórmula anti-inflamatória que proporciona alívio rápido da dor e desconforto.',
    price: 25.00,
    category: 'cuidados-terapeuticos',
    image: '/src/assets/products/proctofarma.png',
    slug: 'proctofarma-hemo',
    packInfo: 'Bisnagas de 3g (dose individual)',
    features: [
      'Fórmula anti-inflamatória potente',
      'Alívio rápido da dor',
      'Específico para hemorroidas',
      'Trata fissuras de períneo',
      'Bisnagas de dose individual',
      'Ação terapêutica comprovada'
    ],
    inStock: true,
    technicalSpecs: {
      usage: 'Aplicar conforme prescrição médica. Produto de uso terapêutico'
    },
    certifications: ['Produto médico', 'Testado clinicamente', 'Aprovação sanitária'],
    targetAudience: ['Pacientes com hemorroidas', 'Tratamento de fissuras', 'Prescrição médica']
  },
  {
    id: 'lowash-pro-kit',
    sku: 'PAMK0006',
    name: 'Lowash Pro Kit Higienizador',
    shortDescription: 'Kit completo premium com Chuka Pop + Hidraenema Pro + acessórios',
    description: 'Kit higienizador completo que combina Chuka Pop, Hidraenema Pro, nécessaire elegante e guia completo de uso. Solução premium para limpeza natural do reto e hidratação prolongada.',
    price: 32.75,
    category: 'kits-completos',
    image: '/src/assets/products/lowash-pro.png',
    slug: 'lowash-pro-kit',
    packInfo: 'Chuka Pop + Hidraenema Pro + nécessaire + guia',
    features: [
      'Kit completo premium',
      'Inclui Chuka Pop para limpeza',
      'Inclui Hidraenema Pro para hidratação',
      'Nécessaire elegante incluída',
      'Guia completo de uso',
      'Ideal para constipação e exames'
    ],
    inStock: false,
    technicalSpecs: {
      usage: 'Seguir guia completo incluído para uso otimizado de ambos os produtos'
    },
    certifications: ['Kit aprovado', 'Produtos testados', 'Guia médico'],
    targetAudience: ['Uso avançado', 'Cuidados completos', 'Preparação para exames']
  },
  {
    id: 'kit-inicial',
    sku: 'PMKL0001',
    name: 'Kit Inicial MakeLife',
    shortDescription: 'Kit de iniciação com Proctowash e WipeWash Premium',
    description: 'Kit de iniciação perfeito que inclui Proctowash e WipeWash Premium. Ideal para quem começa a cuidar da higiene íntima especializada. Perfeito para testar os produtos e adotar uma rotina saudável.',
    price: 28.90,
    category: 'kits-completos',
    slug: 'kit-inicial',
    packInfo: 'Proctowash 200ml + WipeWash Premium 20un',
    features: [
      'Inclui Proctowash 200ml',
      'Inclui WipeWash Premium 20 unidades',
      'Poupança de €2.10 comparado à compra individual',
      'Guia de uso incluído',
      'Embalagem discreta para oferta',
      'Ideal para primeiros cuidados'
    ],
    inStock: true,
    certifications: ['Produtos dermatologicamente testados', 'Kit aprovado por especialistas'],
    targetAudience: ['Iniciantes em cuidados proctológicos', 'Presentes para familiares', 'Primeiros cuidados']
  },
  {
    id: 'kit-profissional',
    sku: 'PMKL0002',
    name: 'Kit Profissional Plus',
    shortDescription: 'Kit completo para profissionais de saúde especializados',
    description: 'Kit profissional que combina Hidraenema Pro com produtos de suporte para cuidados especializados. Desenvolvido para clínicas e profissionais que necessitam de soluções completas.',
    price: 89.90,
    category: 'kits-completos',
    slug: 'kit-profissional',
    packInfo: 'Hidraenema Pro + documentação técnica',
    features: [
      'Inclui Hidraenema Pro 10 bisnagas',
      'Material informativo técnico',
      'Protocolos de uso profissional',
      'Certificados de qualidade',
      'Suporte técnico especializado',
      'Desconto para reposição'
    ],
    inStock: true,
    technicalSpecs: {
      usage: 'Exclusivo para profissionais de saúde qualificados'
    },
    certifications: ['Certificação profissional', 'Aprovação hospitalar', 'Estudos de eficácia'],
    targetAudience: ['Médicos proctologistas', 'Enfermeiros especializados', 'Clínicas privadas']
  },
  {
    id: 'gel-pos-cirurgico',
    sku: 'PMKL0003',
    name: 'Gel Pós-Cirúrgico MakeLife',
    shortDescription: 'Gel especializado para cuidados após cirurgia proctológica',
    description: 'Gel específico para cuidados pós-operatórios em cirurgias proctológicas. Fórmula calmante e cicatrizante que promove o conforto durante o período de recuperação.',
    price: 24.90,
    category: 'cuidados-terapeuticos',
    slug: 'gel-pos-cirurgico',
    packInfo: 'Tubo 50ml',
    features: [
      'Ação calmante e refrescante',
      'Promove cicatrização natural',
      'Reduz desconforto pós-operatório',
      'Fórmula hipoalergénica',
      'Aplicação fácil e precisa',
      'Recomendado por cirurgiões'
    ],
    inStock: true,
    technicalSpecs: {
      volume: '50ml',
      ingredients: ['Pantenol', 'Ácido hialurónico', 'Extrato de calendula', 'Aloe vera'],
      usage: 'Aplicar 2-3 vezes ao dia conforme indicação médica'
    },
    certifications: ['Testado dermatologicamente', 'Aprovado para pós-cirurgia', 'Hipoalergénico'],
    targetAudience: ['Pacientes pós-cirúrgicos', 'Recomendação médica', 'Cuidados especializados']
  }
];