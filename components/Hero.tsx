import Image from 'next/image'

export default function Hero(){
  return (
    <section className="hero container" aria-label="Explore Wayanad">
      <div style={{flex:1}}>
        <p style={{color:'var(--accent)',fontWeight:700}}>Discover Wayanad</p>
        <h1 className="title">Journey Into Kerala's Wild Paradise.</h1>
        <p style={{marginTop:12,color:'var(--muted)'}}>
          Curated nature escapes, cultural journeys, premium eco stays and thrilling adventures across Wayanad.
        </p>
        <div style={{marginTop:18}}>
          <a className="btn-cta" href="/packages">Book Your Wayanad Experience</a>
          <a style={{marginLeft:12,color:'var(--forest-700)'}} href="/explore">Explore</a>
        </div>
      </div>

      <div style={{width:'45%',borderRadius:12,overflow:'hidden',boxShadow:'0 12px 40px rgba(0,0,0,.15)'}}> 
        <Image src="/images/hero-chembra.jpg" alt="Chembra Peak, Wayanad" layout="responsive" width={1600} height={1000} />
      </div>
    </section>
  )
}