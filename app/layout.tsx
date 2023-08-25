import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Script from 'next/script'
import LayoutClient from './layout-client'

const font = Roboto({ subsets: ['latin'], weight: ['500'] })

export const metadata: Metadata = {
  title: 'Floatplane Redesign | alig.pk',
  description: 'Floatplane Redesign by Ali Abdullah| alig.pk',
  openGraph: {
    title: 'Floatplane Redesign | alig.pk',
    description: 'Floatplane Redesign by Ali Abdullah| alig.pk',
    url: 'https://floatplane.alig.pk',
    images: [
      {
        url: '/assests/images/preview.png',
        width: 1920,
        height: 1080,
        alt: 'Digi Test Preview',
      },
    ],
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
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-4S876Z8XE0" />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-4S876Z8XE0');
              `}
            </Script>
        <body className={font.className + "bg-white text-black dark:bg-gray-950 dark:text-white subpixel-antialiased scroll-smooth"}>
          <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
