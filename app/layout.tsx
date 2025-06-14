import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Z Agentes - Agentes de IA para WhatsApp | IA para Empresas",
  description:
    "Automatize seu atendimento no WhatsApp com agentes inteligentes da Z Agentes. Aumente vendas, reduza custos e atenda clientes 24/7 com nossa IA avançada.",
  keywords:
    "atendente virtual whatsapp, chatbot whatsapp, automação whatsapp, IA para empresas, atendimento automatizado, bot whatsapp business",
  authors: [{ name: "Z Agentes" }],
  creator: "Z Agentes",
  publisher: "Z Agentes",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://Z Agentes.com",
    title: "Z Agentes - Agentes de IA para WhatsApp",
    description:
      "Automatize seu atendimento no WhatsApp com agentes inteligentes. Aumente vendas e melhore a satisfação do cliente com nossa IA avançada.",
    siteName: "Z Agentes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Z Agentes - Agentes de IA para WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Z Agentes - Agentes de IA para WhatsApp",
    description:
      "Automatize seu atendimento no WhatsApp com agentes de IA. Aumente vendas e melhore a satisfação do cliente.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://Z Agentes.com",
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
              name: "Z Agentes",
              description: "Empresa especializada em atendentes virtuais inteligentes para WhatsApp",
              url: "https://Z Agentes.com",
              logo: "https://Z Agentes.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99999-9999",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: ["https://www.linkedin.com/company/Z Agentes", "https://www.instagram.com/Z Agentes"],
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
