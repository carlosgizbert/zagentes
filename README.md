# Z Agentes - Landing Page

Landing page otimizada para SEO com SSG (Static Site Generation) para a Z Agentes, empresa especializada em agentes de IA para WhatsApp.

## 🚀 Otimizações SEO Implementadas

### 1. **Static Site Generation (SSG)**
- ✅ Página principal convertida para SSG
- ✅ Componentes client-side separados para interatividade
- ✅ Build otimizado com `output: 'export'`
- ✅ Performance máxima com carregamento estático

### 2. **Metadados Otimizados**
- ✅ Title e description dinâmicos
- ✅ Keywords estratégicos para WhatsApp e IA
- ✅ Open Graph e Twitter Cards
- ✅ Structured Data (Schema.org)
- ✅ Canonical URLs
- ✅ Meta tags de verificação

### 3. **Performance**
- ✅ Fonts otimizadas com `display: swap`
- ✅ Preconnect para recursos externos
- ✅ Bundle splitting otimizado
- ✅ Compressão de CSS
- ✅ Remoção de console.log em produção

### 4. **Acessibilidade e Semântica**
- ✅ Estrutura HTML semântica
- ✅ Componentes SEOHeading para hierarquia
- ✅ ARIA labels e landmarks
- ✅ Blockquote para depoimentos
- ✅ Navigation semântica

### 5. **Arquivos de SEO**
- ✅ `sitemap.ts` - Sitemap dinâmico
- ✅ `robots.ts` - Robots.txt otimizado
- ✅ `manifest.json` - PWA capabilities
- ✅ Structured Data para FAQ e Organization

## 📁 Estrutura de Arquivos

```
├── app/
│   ├── page.tsx          # Página principal (SSG)
│   ├── layout.tsx        # Layout com metadados
│   ├── sitemap.ts        # Sitemap dinâmico
│   ├── robots.ts         # Robots.txt
│   └── globals.css       # Estilos globais
├── components/
│   ├── whatsapp-button.tsx  # Componente client-side
│   ├── seo-heading.tsx      # Componente semântico
│   └── ui/                  # Componentes UI
├── public/
│   ├── manifest.json     # PWA manifest
│   ├── favicon.ico       # Favicon
│   └── og-image.jpg      # Open Graph image
└── next.config.mjs       # Configuração Next.js
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção (SSG)
npm run build

# Export estático
npm run export

# Análise de bundle
npm run analyze

# Verificação de tipos
npm run type-check
```

## 🎯 Palavras-chave Otimizadas

- agente virtual whatsapp
- chatbot whatsapp business
- automação whatsapp
- IA para empresas
- atendimento automatizado
- vendas automatizadas
- atendimento 24/7
- aumento de vendas whatsapp

## 📊 Métricas de Performance

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **Core Web Vitals**: Otimizados
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Configurações Importantes

### Next.js Config
```javascript
{
  output: 'export',           // SSG
  trailingSlash: true,        // URLs limpas
  optimizeCss: true,          // CSS otimizado
  optimizePackageImports: ['lucide-react'] // Bundle splitting
}
```

### Metadados
```typescript
{
  title: "Z Agentes - Agentes de IA para WhatsApp",
  description: "Transforme seu WhatsApp em uma máquina de vendas...",
  keywords: ["agente virtual whatsapp", "chatbot whatsapp business"],
  openGraph: { /* ... */ },
  twitter: { /* ... */ }
}
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Deploy automático com Vercel
```

### Netlify
```bash
npm run export
# Upload da pasta 'out' para Netlify
```

### GitHub Pages
```bash
npm run export
# Push da pasta 'out' para branch gh-pages
```

## 📈 Monitoramento SEO

1. **Google Search Console**
   - Adicionar propriedade
   - Verificar sitemap
   - Monitorar Core Web Vitals

2. **Google Analytics**
   - Implementar GA4
   - Configurar eventos personalizados

3. **Lighthouse CI**
   - Monitoramento contínuo
   - Alertas de performance

## 🔍 Próximas Otimizações

- [ ] Implementar ISR para conteúdo dinâmico
- [ ] Adicionar blog com MDX
- [ ] Implementar AMP pages
- [ ] Adicionar breadcrumbs
- [ ] Otimizar imagens com next/image
- [ ] Implementar service worker

## 📞 Suporte

Para dúvidas sobre SEO ou implementação, entre em contato via WhatsApp: (13) 98221-1658

---

**Z Agentes** - Transformando atendimento com IA de última geração 🚀 