import Head from 'next/head'
import Hero from '../components/Hero'
import ExperienceGrid from '../components/ExperienceGrid'
import PackagesPreview from '../components/PackagesPreview'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function Home(){
  return (
    <>
      <Head>
        <title>Explore Wayanad — Aurora Trails</title>
        <meta name="description" content="Journey Into Kerala's Wild Paradise — curated eco-adventures, luxury staycations, and cultural experiences in Wayanad." />
      </Head>

      <main>
        <Hero />
        <section className="container">
          <h2 style={{marginTop:24}}>Top-rated experiences</h2>
          <ExperienceGrid />
        </section>

        <section className="container" style={{marginTop:40}}>
          <h2>Popular Packages</h2>
          <PackagesPreview />
        </section>
      </main>

      <FloatingWhatsApp phone="+919778246052" />
    </>
  )
}