import { Playfair_Display, Inter } from 'next/font/google'
import '../styles/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${playfair.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
