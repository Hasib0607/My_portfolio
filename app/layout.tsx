import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hasib Ahmed Soyad — Full-Stack Developer & Tech Entrepreneur',
  description:
    'CTO of eBitans, founder of WaveBox, Nirapod QR & eCommerceX. 10+ years building scalable digital products. 500+ projects shipped.',
  keywords: [
    'Hasib Ahmed Soyad', 'Full-Stack Developer', 'CTO', 'eBitans', 'Bangladesh',
    'React', 'Next.js', 'Node.js', 'Tech Entrepreneur',
  ],
  authors: [{ name: 'Hasib Ahmed Soyad', url: 'https://hasibahmad.com' }],
  openGraph: {
    title: 'Hasib Ahmed Soyad — Full-Stack Developer & Tech Entrepreneur',
    description: '10+ years. 500+ projects. 4 ventures. Still building.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hasib Ahmed Soyad',
    description: '10+ years. 500+ projects. 4 ventures. Still building.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
