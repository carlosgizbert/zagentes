import { Card, CardContent } from '@/components/ui/card';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SEOHeading } from '@/components/seo-heading';
import {
  Bot,
  Users,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Mic,
  Calendar,
  DollarSign,
  Shield,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Z Agentes - Funcionários de IA para WhatsApp | Automatize Vendas e Atendimento',
  description:
    'Transforme seu WhatsApp em uma máquina de vendas com Funcionários de IA inteligentes. Aumente vendas em 300%, reduza custos em 80% e atenda clientes 24/7. Configuração em menos de 24h.',
  keywords: [
    'agente virtual whatsapp',
    'chatbot whatsapp business',
    'automação whatsapp',
    'IA para empresas',
    'atendimento automatizado',
    'bot whatsapp',
    'vendas automatizadas',
    'atendente IA',
    'inteligência artificial whatsapp',
    'agendamento automático',
    'atendimento 24/7',
    'aumento de vendas whatsapp',
  ],
  authors: [{ name: 'Z Agentes' }],
  creator: 'Z Agentes',
  publisher: 'Z Agentes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://zagentes.com.br',
    title:
      'Z Agentes - Funcionários de IA para WhatsApp | Automatize Vendas e Atendimento',
    description:
      'Transforme seu WhatsApp em uma máquina de vendas com Funcionários de IA inteligentes. Aumente vendas em 300%, reduza custos em 80% e atenda clientes 24/7.',
    siteName: 'Z Agentes',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Z Agentes - Funcionários de IA para WhatsApp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z Agentes - Funcionários de IA para WhatsApp',
    description:
      'Transforme seu WhatsApp em uma máquina de vendas com Funcionários de IA inteligentes. Aumente vendas em 300% e reduza custos em 80%.',
    images: ['/og-image.jpg'],
    creator: '@zagentes',
  },
  alternates: {
    canonical: 'https://zagentes.com',
  },
  category: 'technology',
  classification: 'Business Software',
  other: {
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  },
};

export default function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: 'IA com Inteligência Humana',
      description:
        'Nossa IA entende contexto, emoções e intenções como um atendente experiente, proporcionando conversas naturais e eficazes.',
    },
    {
      icon: Mic,
      title: 'Comunicação por Áudio',
      description:
        'Receba e envie mensagens de voz automaticamente. Sua IA processa áudios e responde de forma natural, mantendo a humanidade do atendimento.',
    },
    {
      icon: Calendar,
      title: 'Agendamento Inteligente',
      description:
        'Sua IA agenda consultas, reuniões e compromissos automaticamente, sincronizando com sua agenda e enviando lembretes personalizados.',
    },
    {
      icon: DollarSign,
      title: 'Vendas Automatizadas',
      description:
        'Converta leads em vendas 24/7. Nossa IA identifica oportunidades, apresenta produtos e fecha negócios enquanto você dorme.',
    },
    {
      icon: Users,
      title: 'Atendimento Ilimitado',
      description:
        'Atenda milhares de clientes simultaneamente sem perder qualidade. Cada conversa é personalizada e estratégica para seu negócio.',
    },
    {
      icon: Shield,
      title: 'IA Personalizada para sua Marca',
      description:
        'Treinamos a IA com seu tom de voz, produtos e processos específicos. Ela se torna uma extensão perfeita da sua equipe.',
    },
  ];

  const testimonials = [
    {
      name: 'Alexandra Martins',
      company: 'AM Odontologia',
      text: 'A IA conversa com meus pacientes e cuida da minha agenda enquanto eu durmo.',
      rating: 5,
    },
    {
      name: 'Alberto Ferraz',
      company: 'Imobiliária',
      text: 'Ele responde dúvidas sobre imóveis, agenda visitas automaticamente e ainda coleta os dados dos interessados automaticamente.',
      rating: 5,
    },
    {
      name: 'João Santos',
      company: 'Clínica Médica',
      text: 'Aumentamos em 80% dos agendamentos de consultas pelo whatsapp.',
      rating: 5,
    },
  ];

  return (
    <div className='bg-gray-900'>
      {/* Header */}
      <header className='fixed top-0 w-full bg-gray/80 backdrop-blur-lg border-b border-gray-300/20 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='relative'>
                <Bot className='h-8 w-8 text-emerald-400' />
                <Sparkles className='h-3 w-3 text-amber-400 absolute -top-1 -right-1' />
              </div>
              <span className='text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                Z Agentes
              </span>
            </div>
            <WhatsAppButton className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base py-2'>
              <span className='hidden sm:inline'>Fale conosco</span>
              <span className='sm:hidden'>Contato</span>
            </WhatsAppButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className='pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center'>
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 rounded-full blur-3xl transform -translate-y-1/2'></div>
          <div className='max-w-7xl mx-auto text-center relative w-full'>
            <div className='opacity-100 translate-y-0 transition-all duration-1000'>
            <div className='inline-flex items-center px-4 py-2 border border-gray-700 rounded-full text-gray-300 text-sm font-medium mb-8'>
                <Sparkles className='h-4 w-4 mr-2 text-emerald-500' />
                <span className='text-xs bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent sm:text-sm'>
                  IA de nova geração para WhatsApp
                </span>
              </div>
              <SEOHeading
                level={1}
                className='text-3xl text-gray-100 sm:text-4xl md:text-5xl font-bold mb-6 leading-tight'
              >
                Automatize seu suporte e
                <span className=' mt-2 sm:mt-3 block'>
                  vendas com{' '}
                  <span className='bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent'>
                    funcionários de IA
                  </span>
                </span>
                <span className='mt-2 sm:mt-3 block text-3xl sm:text-4xl md:text-5xl'>
                  que não dormem
                </span>
              </SEOHeading>
              <p className='text-gray-300 max-w-xl  mb-10 mx-auto leading-relaxed text-base sm:text-lg px-4'>
                Atenda 24hr e <strong className='bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent'>
                  {' '}
                  organize sua agenda de forma automática
                </strong> com funcionários de IA
                especialistas, prontos para escalar seu atendimento, suas vendas e
                suporte.
              </p>
              <div className='flex flex-col sm:flex-row gap-6 justify-center items-center px-4'>
                <WhatsAppButton
                  size='lg'
                  className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-8 sm:px-10 py-6 rounded-xl shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/25  transition-all duration-300 transform hover:scale-105 w-full sm:w-auto'
                >
                  Teste agora grátis
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>
        <div className='border-t mb-16 border-gray-800'></div>
        {/* Features Section */}
        <section
          className='bg-gray-900 relative'
          aria-labelledby='features-heading'
        >
          <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
            <div className='text-center mb-12'>
              <SEOHeading
                level={2}
                id='features-heading'
                className='text-4xl md:text-5xl font-bold text-gray-200 mb-6'
              >
                Transforme seu WhatsApp em uma
                <span className='mt-2 block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent'>
                  {' '}
                  máquina de vendas
                </span>
              </SEOHeading>
              <p className='text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg'>
                Nossa tecnologia de IA avançada já ajudou empresas a
                <span className='block'>
                <strong className='bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent'> aumentar vendas</strong> e
                <strong className='bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent'>
                  {' '}
                  reduzir custos de atendimento
                </strong>
                </span>
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
              {features.map((feature, index) => (
                <Card
                key={index}
                className='cursor-default group border border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-900'
              >
                <CardContent className='p-8 text-center'>
                  <div className='relative mb-6'>
                    <div className='w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300'>
                      <feature.icon className='h-8 w-8 text-gray-300' />
                    </div>
                    <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center'>
                      <CheckCircle className='h-4 w-4 text-white' />
                    </div>
                  </div>
                  <SEOHeading
                    level={3}
                    className='text-xl font-bold mb-4 text-gray-200'
                  >
                    {feature.title}
                  </SEOHeading>
                  <p className='text-gray-300 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
              ))}
            </div>

            {/* Stats Section */}
{/*             <div className='bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center mb-16'>
              <SEOHeading
                level={3}
                className='text-2xl md:text-3xl font-bold mb-8'
              >
                Resultados que falam por si
              </SEOHeading>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                <div>
                  <div className='text-3xl md:text-4xl font-bold mb-2'>
                    300%
                  </div>
                  <div className='text-emerald-100'>Aumento em vendas</div>
                </div>
                <div>
                  <div className='text-3xl md:text-4xl font-bold mb-2'>80%</div>
                  <div className='text-emerald-100'>Redução de custos</div>
                </div>
                <div>
                  <div className='text-3xl md:text-4xl font-bold mb-2'>
                    24/7
                  </div>
                  <div className='text-emerald-100'>Atendimento disponível</div>
                </div>
                <div>
                  <div className='text-3xl md:text-4xl font-bold mb-2'>
                    500+
                  </div>
                  <div className='text-emerald-100'>Clientes satisfeitos</div>
                </div>
              </div>
            </div> */}

            {/* CTA Section */}
            <div className='text-center mb-20'>
              <SEOHeading
                level={3}
                className='text-2xl md:text-3xl font-bold text-gray-200 mb-4'
              >
                Pronto para revolucionar seu atendimento?
              </SEOHeading>
              <p className='text-gray-300 mb-8 max-w-md mx-auto'>
                Junte-se às empresas que já transformaram seus
                resultados com a Z Agentes
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <WhatsAppButton
                  size='lg'
                  className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105'
                >
                  Começar agora
                </WhatsAppButton>
                <div className='text-sm text-gray-300'>
                  ⚡Configuração em menos de 24h
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          className='py-24 bg-gradient-to-r from-emerald-600 to-teal-600'
          aria-labelledby='testimonials-heading'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <SEOHeading
                level={2}
                id='testimonials-heading'
                className='text-4xl md:text-5xl font-bold text-gray-100 mb-6'
              >
                Quem usa, indica
              </SEOHeading>
              <p className='text-xl text-gray-100 max-w-2xl mx-auto'>
                Histórias reais de transformação e sucesso com a Z Agentes
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className='border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white'
                >
                  <CardContent className='p-8'>
                    <div className='flex mb-4'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-5 w-5 text-yellow-400 fill-current'
                        />
                      ))}
                    </div>
                    <blockquote className='mb-6 italic leading-relaxed'>
                      "{testimonial.text}"
                    </blockquote>
                    <div>
                      <div className='font-semibold text-gray-900'>
                        {testimonial.name}
                      </div>
                      <div className='text-emerald-600 text-sm'>
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='md:col-span-2'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='relative'>
                  <Bot className='h-10 w-10 text-emerald-400' />
                  <Sparkles className='h-4 w-4 text-yellow-400 absolute -top-1 -right-1' />
                </div>
                <span className='text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                  Z Agentes
                </span>
              </div>
              <p className='text-gray-400 mb-6 leading-relaxed max-w-md'>
                Agentes virtuais inteligentes para WhatsApp. Transformando o
                atendimento ao cliente com inteligência artificial de última
                geração.
              </p>
            </div>
            <div>
              <SEOHeading
                level={3}
                className='text-lg font-semibold mb-6 text-emerald-400'
              >
                Contato
              </SEOHeading>
              <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                  <Phone className='h-5 w-5 text-emerald-400' />
                  <span className='text-gray-400'>(13) 99692-5983</span>
                </div>
{/*                 <div className='flex items-center space-x-3'>
                  <MapPin className='h-5 w-5 text-emerald-400' />
                  <span className='text-gray-400'>São Paulo, SP</span>
                </div> */}
              </div>
            </div>

            <div>
              <SEOHeading
                level={3}
                className='text-lg font-semibold mb-6 text-emerald-400'
              >
                Comece Agora
              </SEOHeading>
              <p className='text-gray-400 mb-6'>
                Pronto para transformar seu atendimento? Fale conosco via
                WhatsApp!
              </p>
              <WhatsAppButton className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-full'>
                Entrar em contato
              </WhatsAppButton>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-12 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <p className='text-gray-400 text-sm'>
                © 2024 Z Agentes. Todos os direitos reservados.
              </p>
              <nav className='flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400'>
                <a
                  href='#'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'
                >
                  Política de Privacidade
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'
                >
                  Termos de Uso
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'
                >
                  Cookies
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
