"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MessageCircle,
  Bot,
  Zap,
  Users,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5513982211658"
    const message = "Olá! Gostaria de saber mais sobre os atendentes virtuais da Doutor Pro."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const features = [
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Seus clientes são atendidos a qualquer hora, sem interrupções, garantindo satisfação total",
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "IA treinada para responder perguntas complexas em segundos com precisão excepcional",
    },
    {
      icon: TrendingUp,
      title: "Aumento de Vendas",
      description: "Converta mais leads em vendas com atendimento personalizado e estratégico",
    },
    {
      icon: Users,
      title: "Múltiplos Atendentes",
      description: "Gerencie milhares de atendimentos simultâneos sem perder qualidade ou personalização",
    },
    {
      icon: Bot,
      title: "IA Personalizada",
      description: "Treinamos a IA especificamente para seu negócio, produtos e tom de voz da marca",
    },
    {
      icon: MessageCircle,
      title: "Integração Simples",
      description: "Configuração rápida e fácil no seu WhatsApp Business em menos de 24 horas",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      company: "E-commerce Fashion",
      text: "Aumentamos nossas vendas em 60% após implementar o atendente virtual da Doutor Pro. Simplesmente incrível!",
      rating: 5,
    },
    {
      name: "João Santos",
      company: "Clínica Médica",
      text: "O agendamento automatizado revolucionou nossa operação. Reduzimos 80% das ligações para marcação.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      company: "Restaurante Gourmet",
      text: "Nossos pedidos pelo WhatsApp triplicaram. O bot entende perfeitamente nosso cardápio e promoções.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="h-8 w-8 text-emerald-600" />
                <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Doutor Pro
              </span>
            </div>
            <Button
              onClick={handleWhatsAppRedirect}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Falar Conosco
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              IA de Nova Geração para WhatsApp
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Atendentes Virtuais
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Inteligentes
              </span>
              <span className="block text-4xl md:text-5xl text-gray-700">para WhatsApp</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Revolucione seu atendimento com nossa IA avançada. Responda clientes 24/7,
              <strong className="text-emerald-600"> aumente vendas em até 60%</strong> e melhore a satisfação do cliente
              automaticamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={handleWhatsAppRedirect}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Começar Agora Grátis
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 rounded-xl border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                Ver Demonstração
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                Configuração em 24h
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                Suporte especializado
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                ROI garantido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher a
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Doutor Pro
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossa tecnologia de ponta transforma completamente a experiência de atendimento no WhatsApp, gerando
              resultados excepcionais para seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50 hover:from-emerald-50/50 hover:to-teal-50/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Resultados Comprovados</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Números que falam por si só - veja o impacto real da Doutor Pro
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "< 3s", label: "Tempo de resposta médio", icon: Clock },
              { number: "98%", label: "Satisfação do cliente", icon: Star },
              { number: "+60%", label: "Aumento em vendas", icon: TrendingUp },
              { number: "24/7", label: "Disponibilidade total", icon: Bot },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 text-emerald-200 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Histórias reais de transformação e sucesso com a Doutor Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-emerald-600 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Pronto para revolucionar
            <span className="block text-emerald-400">seu atendimento?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Junte-se a centenas de empresas que já transformaram seus resultados com a Doutor Pro. Comece hoje mesmo e veja
            a diferença em 24 horas.
          </p>
          <Button
            onClick={handleWhatsAppRedirect}
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6 mr-3" />
            Conversar no WhatsApp Agora
            <ArrowRight className="h-5 w-5 ml-3" />
          </Button>
          <p className="text-emerald-200 mt-6 text-sm">
            ✓ Consultoria gratuita ✓ Configuração em 24h ✓ Suporte especializado
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Bot className="h-10 w-10 text-emerald-400" />
                  <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Doutor Pro
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Líderes em atendentes virtuais inteligentes para WhatsApp. Transformando o atendimento ao cliente com
                inteligência artificial de última geração.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900"
                >
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-emerald-400">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">contato@Doutor Pro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">São Paulo, SP</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-emerald-400">Comece Agora</h3>
              <p className="text-gray-400 mb-6">Pronto para transformar seu atendimento? Fale conosco via WhatsApp!</p>
              <Button
                onClick={handleWhatsAppRedirect}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-full"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 Doutor Pro. Todos os direitos reservados.</p>
              <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
