
import type { Metadata } from 'next'
import '../styles/global.css';
import '../styles/main.css';
import '../styles/theme.css';

export const metadata: Metadata = {
    title: 'RE:DRESS | matching shoppers with clothes they need',
    keywords: 'RE:DRESS, fashion, personalized fashion, deep learning, conscious shopping, style game, stylists, future of fashion',
    description: 'Matching shoppers with clothes they need. Discover personalized fashion like never before with RE:DRESS. Our deep learning model curates outfits tailored to your taste. Say goodbye to endless scrolling and hello to conscious shopping. Ready to upgrade your style game? Join us in shaping the future of fashion.'
  }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
            {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        </head>
        <body>
          <main id="root" className='flex h-screen w-screen flex-col md:p-6 transition-colors duration-[3s] md:justify-between px-5 md:px-20 md:py-4 '>{children}</main>
        </body>
      </html>
    )
  }