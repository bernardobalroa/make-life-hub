export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'professional' | 'consumer';
  image?: string;
  features: string[];
  inStock: boolean;
  slug: string;
  shortDescription: string;
  technicalSpecs?: {
    ph?: string;
    volume?: string;
    ingredients?: string[];
    usage?: string;
  };
  certifications: string[];
  targetAudience: string[];
}

export const productsData: Product[] = [
  {
    id: 'procto-wash',
    name: 'Procto Wash',
    shortDescription: 'Gel de higiene íntima especializado para cuidados proctológicos',
    description: 'Gel de higiene íntima especializado para a região anal, formulado com pH adequado para manter o equilíbrio natural da pele. Ideal para uso diário e cuidados pós-cirúrgicos.',
    price: 18.50,
    category: 'consumer',
    slug: 'procto-wash',
    features: [
      'pH equilibrado e dermatologicamente testado',
      'Fórmula suave para uso diário',
      'Ideal para pré e pós-cirurgia proctológica',
      'Ingredientes naturais e hipoalergénicos',
      'Reduz irritação e promove conforto',
      'Testado por proctologistas'
    ],
    inStock: true,
    technicalSpecs: {
      ph: '5.5 - 6.0',
      volume: '200ml',
      ingredients: ['Água purificada', 'Extrato de camomila', 'Pantenol', 'Glicerina'],
      usage: 'Aplicar pequena quantidade na região, massajar suavemente e enxaguar'
    },
    certifications: ['Dermatologicamente testado', 'Aprovação CE', 'Hipoalergénico'],
    targetAudience: ['Adultos com desconforto proctológico', 'Pós-cirurgia', 'Higiene diária']
  },
  {
    id: 'wipewash',
    name: 'WipeWash',
    shortDescription: 'Toalhitas especializadas para higiene íntima portátil',
    description: 'Toalhitas húmidas especialmente desenvolvidas para higiene íntima da região anal. Práticas para usar em qualquer lugar, ideais para viagens e uso pós-cirúrgico.',
    price: 12.90,
    category: 'consumer',
    slug: 'wipewash',
    features: [
      'Embalagem portátil e discreta',
      'Fórmula sem álcool e sem parfum',
      'Textura suave e resistente',
      'Biodegradáveis e eco-friendly',
      'Ideal para viagens e uso externo',
      'Dermatologicamente aprovadas'
    ],
    inStock: true,
    technicalSpecs: {
      volume: '20 unidades',
      ingredients: ['Água purificada', 'Extrato de aloe vera', 'Vitamina E', 'Glicerina'],
      usage: 'Usar conforme necessário para limpeza suave da região'
    },
    certifications: ['Dermatologicamente testado', 'Biodegradável', 'Hipoalergénico'],
    targetAudience: ['Pessoas ativas', 'Viajantes', 'Pós-cirurgia proctológica']
  },
  {
    id: 'hidraenema-pro',
    name: 'Hidraenema Pro',
    shortDescription: 'Solução profissional para limpeza intestinal com eficácia de 72h',
    description: 'Solução profissional desenvolvida para preparação pré-cirúrgica e limpeza intestinal. Fórmula avançada com eficácia comprovada de 72 horas, indicada para uso hospitalar e clínico.',
    price: 45.90,
    category: 'professional',
    slug: 'hidraenema-pro',
    features: [
      'Eficácia comprovada de 72 horas',
      'Fórmula desenvolvida para profissionais',
      'Preparação pré-cirúrgica otimizada',
      'Resultados consistentes e seguros',
      'Aprovado para uso hospitalar',
      'Estudos clínicos documentados'
    ],
    inStock: true,
    technicalSpecs: {
      volume: '500ml',
      ingredients: ['Solução salina isotónica', 'Agentes limpantes especializados', 'Estabilizadores'],
      usage: 'Seguir protocolo médico específico - uso exclusivo profissional'
    },
    certifications: ['Aprovação CE', 'Certificação hospitalar', 'Estudos clínicos'],
    targetAudience: ['Hospitais', 'Clínicas especializadas', 'Proctologistas', 'Cirurgiões']
  },
  {
    id: 'kit-inicial',
    name: 'Kit Inicial MakeLife',
    shortDescription: 'Kit completo para iniciação aos cuidados proctológicos',
    description: 'Kit de iniciação que inclui Procto Wash e WipeWash, ideal para quem começa a cuidar da higiene íntima especializada. Perfeito para testar os produtos e adotar uma rotina saudável.',
    price: 28.90,
    category: 'consumer',
    slug: 'kit-inicial',
    features: [
      'Inclui Procto Wash 200ml',
      'Inclui WipeWash 20 unidades',
      'Poupança de €2.50 comparado à compra individual',
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
    name: 'Kit Profissional Plus',
    shortDescription: 'Kit completo para profissionais de saúde especializados',
    description: 'Kit profissional que combina Hidraenema Pro com produtos de suporte para cuidados especializados. Desenvolvido para clínicas e profissionais que necessitam de soluções completas.',
    price: 89.90,
    category: 'professional',
    slug: 'kit-profissional',
    features: [
      'Inclui Hidraenema Pro 500ml',
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
    name: 'Gel Pós-Cirúrgico MakeLife',
    shortDescription: 'Gel especializado para cuidados após cirurgia proctológica',
    description: 'Gel específico para cuidados pós-operatórios em cirurgias proctológicas. Fórmula calmante e cicatrizante que promove o conforto durante o período de recuperação.',
    price: 24.90,
    category: 'consumer',
    slug: 'gel-pos-cirurgico',
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