import Head from 'next/head'
import { getProfile, getServices } from '../lib/api'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home({ profile, services }) {
  const title = profile?.name && profile.name !== '...' ? profile.name : 'Estudio Juridico'

  return (
    <>
      <Head>
        <title>{title} | Abogado</title>
        <meta name="description" content={profile?.tagline || 'Servicios legales profesionales'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar name={profile?.name} />
      <Hero profile={profile} />
      <About profile={profile} />
      <Services services={services} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </>
  )
}

export async function getStaticProps() {
  const [profile, services] = await Promise.all([
    getProfile(),
    getServices(),
  ])

  return {
    props: {
      profile: profile || {
        name: '...',
        tagline: '...',
        bio: '...',
        phone: '...',
        email: '...',
        address: '...',
        whatsapp: '',
      },
      services: services || [],
    },
  }
}
