import { Playfair_Display, DM_Sans } from 'next/font/google'
import '../styles/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500', '600'],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${playfair.variable} ${dmSans.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
