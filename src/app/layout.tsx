import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Legal Labs - Búsqueda Semántica Legal',
  description: 'Aplicación de búsqueda semántica legal con IA para análisis de documentos jurídicos',
  keywords: ['legal', 'semantic search', 'ai', 'documents', 'law'],
  authors: [{ name: 'Exltk Legal Labs' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
