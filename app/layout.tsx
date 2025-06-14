import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zagentes.com'),
  title: {
    default: "Z Agentes - Agentes de IA para WhatsApp | Automatize Vendas e Atendimento",
    template: "%s | Z Agentes"
  },
  description: "Transforme seu WhatsApp em uma máquina de vendas com agentes de IA inteligentes. Aumente vendas em 300%, reduza custos em 80% e atenda clientes 24/7. Configuração em menos de 24h.",
  keywords: [
    "agente virtual whatsapp",
    "chatbot whatsapp business", 
    "automação whatsapp",
    "IA para empresas",
    "atendimento automatizado",
    "bot whatsapp",
    "vendas automatizadas",
    "atendente IA",
    "inteligência artificial whatsapp",
    "agendamento automático",
    "atendimento 24/7",
    "aumento de vendas whatsapp",
    "whatsapp business",
    "automação de vendas",
    "atendimento ao cliente",
    "chatbot inteligente"
  ],
  authors: [{ name: "Z Agentes", url: "https://zagentes.com" }],
  creator: "Z Agentes",
  publisher: "Z Agentes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://zagentes.com",
    title: "Z Agentes - Agentes de IA para WhatsApp | Automatize Vendas e Atendimento",
    description: "Transforme seu WhatsApp em uma máquina de vendas com agentes de IA inteligentes. Aumente vendas em 300%, reduza custos em 80% e atenda clientes 24/7.",
    siteName: "Z Agentes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Z Agentes - Agentes de IA para WhatsApp",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Z Agentes - Agentes de IA para WhatsApp",
    description: "Transforme seu WhatsApp em uma máquina de vendas com agentes de IA inteligentes. Aumente vendas em 300% e reduza custos em 80%.",
    images: ["/og-image.jpg"],
    creator: "@zagentes",
    site: "@zagentes",
  },
  alternates: {
    canonical: "https://zagentes.com",
    languages: {
      'pt-BR': 'https://zagentes.com',
    },
  },
  category: "technology",
  classification: "Business Software",
  other: {
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'theme-color': '#059669',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Z Agentes',
    'application-name': 'Z Agentes',
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#059669" />
        <meta name="color-scheme" content="light" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Z Agentes",
              description: "Empresa especializada em atendentes virtuais inteligentes para WhatsApp",
              url: "https://zagentes.com",
              logo: "https://zagentes.com/logo.png",
              foundingDate: "2024",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-13-98221-1658",
                contactType: "customer service",
                availableLanguage: "Portuguese",
                areaServed: "BR",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              sameAs: [
                "https://www.linkedin.com/company/zagentes", 
                "https://www.instagram.com/zagentes"
              ],
              service: {
                "@type": "Service",
                name: "Atendentes Virtuais para WhatsApp",
                description: "Automação de atendimento no WhatsApp com inteligência artificial",
                provider: {
                  "@type": "Organization",
                  name: "Z Agentes"
                },
                areaServed: "BR",
                serviceType: "Business Software",
              },
              offers: {
                "@type": "Offer",
                name: "Agente Virtual WhatsApp",
                description: "Solução completa de automação para WhatsApp Business",
                price: "0",
                priceCurrency: "BRL",
                availability: "https://schema.org/InStock",
              }
            }),
          }}
        />
        
        {/* Additional Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Como funciona o agente virtual da Z Agentes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nossa IA entende contexto, emoções e intenções como um atendente experiente, proporcionando conversas naturais e eficazes. Ela pode processar áudios, agendar compromissos e realizar vendas automaticamente."
                  }
                },
                {
                  "@type": "Question", 
                  name: "Quanto tempo leva para configurar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A configuração é feita em menos de 24 horas. Conectamos diretamente ao seu WhatsApp Business sem complicações ou mudanças na sua rotina."
                  }
                },
                {
                  "@type": "Question",
                  name: "Quais são os resultados esperados?",
                  acceptedAnswer: {
                    "@type": "Answer", 
                    text: "Nossos clientes conseguem aumentar vendas em até 300% e reduzir custos de atendimento em 80%. O atendimento fica disponível 24/7."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
