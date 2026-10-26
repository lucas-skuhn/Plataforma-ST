import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Smoke Tram Esports | Performance, saúde e cultura gamer',
    template: '%s | Smoke Tram Esports',
  },
  description:
    'Coaching, psicologia do esporte, mentoria com o CEO e produtos Smoke Tram para quem quer evoluir nos esports.',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Smoke Tram Esports',
    title: 'Smoke Tram Esports | Entre para o bonde',
    description:
      'Performance, saúde mental e cultura gamer em uma vitrine de experiências e produtos Smoke Tram.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smoke_Tram_eSports_-_PNG-cgPOA0Tpe6fPpC5ZAMFHgyluXPOue3.png',
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070a0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
