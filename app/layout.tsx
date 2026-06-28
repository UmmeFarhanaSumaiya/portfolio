import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Umme Farhana Sumaiya | Portfolio',
  description: 'ICT Engineer | Backend Developer | AI/ML Enthusiast',
  keywords: 'Umme Farhana Sumaiya, Portfolio, Backend Developer, AI, ML, Python, FastAPI, PostgreSQL',
  authors: [{ name: 'Umme Farhana Sumaiya' }],
  openGraph: {
    title: 'Umme Farhana Sumaiya | Portfolio',
    description: 'ICT Engineer | Backend Developer | AI/ML Enthusiast',
    url: 'https://umme-farhana-sumaiya.vercel.app',
    siteName: 'Umme Farhana Sumaiya Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}