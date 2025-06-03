import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Doutor Pro - Atendentes Virtuais Inteligentes para WhatsApp | IA para Empresas",
  description:
    "Automatize seu atendimento no WhatsApp com atendentes virtuais inteligentes da Doutor Pro. Aumente vendas, reduza custos e atenda clientes 24/7 com nossa IA avançada.",
  keywords:
    "atendente virtual whatsapp, chatbot whatsapp, automação whatsapp, IA para empresas, atendimento automatizado, bot whatsapp business",
  authors: [{ name: "Doutor Pro" }],
  creator: "Doutor Pro",
  publisher: "Doutor Pro",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://Doutor Pro.com",
    title: "Doutor Pro - Atendentes Virtuais Inteligentes para WhatsApp",
    description:
      "Automatize seu atendimento no WhatsApp com atendentes virtuais inteligentes. Aumente vendas e melhore a satisfação do cliente com nossa IA avançada.",
    siteName: "Doutor Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Doutor Pro - Atendentes Virtuais para WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doutor Pro - Atendentes Virtuais Inteligentes para WhatsApp",
    description:
      "Automatize seu atendimento no WhatsApp com atendentes virtuais inteligentes. Aumente vendas e melhore a satisfação do cliente.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://Doutor Pro.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Doutor Pro",
              description: "Empresa especializada em atendentes virtuais inteligentes para WhatsApp",
              url: "https://Doutor Pro.com",
              logo: "https://Doutor Pro.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99999-9999",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: ["https://www.linkedin.com/company/Doutor Pro", "https://www.instagram.com/Doutor Pro"],
              service: {
                "@type": "Service",
                name: "Atendentes Virtuais para WhatsApp",
                description: "Automação de atendimento no WhatsApp com inteligência artificial",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
