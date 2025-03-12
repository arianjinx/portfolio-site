import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Arian Pradana',
  description: 'Personal website and portfolio of Arian Pradana',
  keywords: ['Arian Pradana', 'portfolio', 'developer', 'personal website'],
  authors: [{name: 'Arian Pradana'}],
  creator: 'Arian Pradana',
  metadataBase: new URL('https://arianpradana.me'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arianpradana.me',
    title: 'Arian Pradana',
    description: 'Personal website and portfolio of Arian Pradana',
    siteName: 'Arian Pradana',
    images: [
      {
        url: '/og-image.jpg', // Place this image in your public folder
        width: 1200,
        height: 630,
        alt: "Arian Pradana's Personal Website",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arian Pradana',
    description: 'Personal website and portfolio of Arian Pradana',
    creator: '@arianjinx', // Replace with actual Twitter handle if available
    images: ['/og-image.jpg'], // Same image as OG or a Twitter-specific one
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  )
}
