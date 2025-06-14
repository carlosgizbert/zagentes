'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  MessageCircle,
  Bot,
  Zap,
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
  Settings,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '5513982211658';
    const message =
      'Olá! Gostaria de saber mais sobre os funcionarios virtuais da Z Agentes.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    {
      icon: Brain,
      title: 'IA com Inteligência Humana',
      description: 'Nossa IA entende contexto, emoções e intenções como um atendente experiente, proporcionando conversas naturais e eficazes.',
    },
    {
      icon: Mic,
      title: 'Comunicação por Áudio',
      description: 'Receba e envie mensagens de voz automaticamente. Sua IA processa áudios e responde de forma natural, mantendo a humanidade do atendimento.',
    },
    {
      icon: Calendar,
      title: 'Agendamento Inteligente',
      description: 'Sua IA agenda consultas, reuniões e compromissos automaticamente, sincronizando com sua agenda e enviando lembretes personalizados.',
    },
    {
      icon: DollarSign,
      title: 'Vendas Automatizadas',
      description: 'Converta leads em vendas 24/7. Nossa IA identifica oportunidades, apresenta produtos e fecha negócios enquanto você dorme.',
    },
    {
      icon: Users,
      title: 'Atendimento Ilimitado',
      description: 'Atenda milhares de clientes simultaneamente sem perder qualidade. Cada conversa é personalizada e estratégica para seu negócio.',
    },
    {
      icon: Shield,
      title: 'IA Personalizada para sua Marca',
      description: 'Treinamos a IA com seu tom de voz, produtos e processos específicos. Ela se torna uma extensão perfeita da sua equipe.',
    },
    {
      icon: Settings,
      title: 'Integração Instantânea',
      description: 'Configure em menos de 24 horas. Conectamos diretamente ao seu WhatsApp Business sem complicações ou mudanças na sua rotina.',
    },
  ];

  const testimonials = [
    {
      name: 'Alexandra Martins',
      company: 'AM Odontologia',
      text: 'O agendamento automatizado revolucionou nosso atendimento. A IA envia promoções e faz agendamentos perfeitamente.',
      rating: 5,
    },
    {
      name: 'João Santos',
      company: 'Clínica Médica',
      text: 'O agendamento automatizado revolucionou nossa operação. Reduzimos 80% das ligações para marcação.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      company: 'Restaurante Gourmet',
      text: 'Nossos pedidos pelo WhatsApp triplicaram. O bot entende perfeitamente nosso cardápio e promoções.',
      rating: 5,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50'>
      {/* Header */}
      <header className='fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='relative'>
                <Bot className='h-8 w-8 text-emerald-600' />
                <Sparkles className='h-3 w-3 text-yellow-400 absolute -top-1 -right-1' />
              </div>
              <span className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                Z Agentes
              </span>
            </div>
            <Button
              onClick={handleWhatsAppRedirect}
              className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base px-3 sm:px-4 py-2'
            >
              <MessageCircle className='h-4 w-4' />
              <span className='hidden sm:inline'>Falar Conosco</span>
              <span className='sm:hidden'>Contato</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center'>
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 rounded-full blur-3xl transform -translate-y-1/2'></div>
        <div className='max-w-7xl mx-auto text-center relative w-full'>
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className='inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-8'>
              <Sparkles className='h-4 w-4 mr-2' />
              <span className='text-xs sm:text-sm'>IA de Nova Geração para WhatsApp</span>
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight'>
              Automatize seu suporte e
              <span className='mt-2 sm:mt-3 block'>
                vendas com{' '}
                <span className='bg-gradient-to-r from-emerald-500 to-teal-700 bg-clip-text text-transparent'>
                  funcionários de IA
                </span>
              </span>
              <span className='mt-2 sm:mt-3 block text-3xl sm:text-4xl md:text-5xl'>
                que não dormem
              </span>
            </h1>
            <p className='max-w-xl text-gray-600 mb-10 mx-auto leading-relaxed text-base sm:text-lg px-4'>
              Revolucione seu atendimento com funcionários de IA especialistas,
              prontos para escalar atendimento, vendas e suporte.
              <strong className='text-emerald-600'>
                {' '}
                organize sua agenda de forma automática
              </strong>
              .
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center px-4'>
              <Button
                onClick={handleWhatsAppRedirect}
                size='lg'
                className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-8 sm:px-10 py-6 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto'
              >
                <MessageCircle className='h-6 w-6 ' />
                Teste agora grátis
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className=' bg-white relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='text-center mb-20'>
            <div className='inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6'>
              <Zap className='h-4 w-4 mr-2' />
              <span>Resultados Comprovados</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Transforme seu WhatsApp em uma 
              <span className='bg-gradient-to-r from-emerald-500 to-teal-700 bg-clip-text text-transparent'> máquina de vendas</span>
            </h2>
            <p className=' text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg'>
              Nossa tecnologia de IA avançada já ajudou centenas de empresas a 
              <strong className='text-emerald-600'> aumentar vendas em até 300%</strong> e 
              <strong className='text-emerald-600'> reduzir custos de atendimento em 80%</strong>
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50 hover:from-emerald-50/50 hover:to-teal-50/50 hover:scale-105'
              >
                <CardContent className='p-8 text-center'>
                  <div className='relative mb-6'>
                    <div className='w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300'>
                      <feature.icon className='h-8 w-8 text-emerald-600' />
                    </div>
                    <div className='absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center'>
                      <CheckCircle className='h-4 w-4 text-white' />
                    </div>
                  </div>
                  <h3 className='text-xl font-bold mb-4 text-gray-900'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className='bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center mb-16'>
            <h3 className='text-2xl md:text-3xl font-bold mb-8'>
              Resultados que falam por si
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div>
                <div className='text-3xl md:text-4xl font-bold mb-2'>300%</div>
                <div className='text-emerald-100'>Aumento em vendas</div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-bold mb-2'>80%</div>
                <div className='text-emerald-100'>Redução de custos</div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-bold mb-2'>24/7</div>
                <div className='text-emerald-100'>Atendimento disponível</div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-bold mb-2'>500+</div>
                <div className='text-emerald-100'>Clientes satisfeitos</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className='text-center'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
              Pronto para revolucionar seu atendimento?
            </h3>
            <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
              Junte-se a centenas de empresas que já transformaram seus resultados com a Z Agentes
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                onClick={handleWhatsAppRedirect}
                size='lg'
                className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105'
              >
                <MessageCircle className='h-5 w-5 mr-2' />
                Começar Agora - Grátis
                <ArrowRight className='h-5 w-5 ml-2' />
              </Button>
              <div className='text-sm text-gray-500'>
                ⚡ Configuração em menos de 24h
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              O que nossos clientes dizem
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
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
                  <p className=' mb-6 italic leading-relaxed'>
                    "{testimonial.text}"
                  </p>
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
      </section>

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
              <h3 className='text-lg font-semibold mb-6 text-emerald-400'>
                Contato
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                  <Phone className='h-5 w-5 text-emerald-400' />
                  <span className='text-gray-300'>(13) 99692-5983</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <MapPin className='h-5 w-5 text-emerald-400' />
                  <span className='text-gray-300'>São Paulo, SP</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-6 text-emerald-400'>
                Comece Agora
              </h3>
              <p className='text-gray-400 mb-6'>
                Pronto para transformar seu atendimento? Fale conosco via
                WhatsApp!
              </p>
              <Button
                onClick={handleWhatsAppRedirect}
                className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-full'
              >
                <MessageCircle className='h-4 w-4' />
                Entrar em contato
              </Button>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-12 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <p className='text-gray-400 text-sm'>
                © 2024 Z Agentes. Todos os direitos reservados.
              </p>
              <div className='flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400'>
                <a
                  href='#'
                  className='hover:text-emerald-400 transition-colors'
                >
                  Política de Privacidade
                </a>
                <a
                  href='#'
                  className='hover:text-emerald-400 transition-colors'
                >
                  Termos de Uso
                </a>
                <a
                  href='#'
                  className='hover:text-emerald-400 transition-colors'
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
