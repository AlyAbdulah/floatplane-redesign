import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Floatplane Redesign | alig.pk',
  description: 'Floatplane Redesign by Ali Abdullah| alig.pk',
  openGraph: {
    title: 'Floatplane Redesign | alig.pk',
    description: 'Floatplane Redesign by Ali Abdullah| alig.pk',
    url: 'https://floatplane.alig.pk',
    siteName: 'floatplane.Alig.pk',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-white text-black dark:bg-gray-950 dark:text-white subpixel-antialiased scroll-smooth"}>
          {children}
      </body>
    </html>
  )
}
