import Link from 'next/link';

export default function NotFound() {
  return <section className="subhero" style={{minHeight:'75vh',display:'grid',placeItems:'center'}}>
    <div className="shell" style={{textAlign:'center',position:'relative'}}>
      <span className="eyebrow light">404</span>
      <h1 style={{fontFamily:'var(--font-manrope)',fontSize:'clamp(48px,7vw,90px)',margin:'0 0 20px'}}>This page is not part of the operation.</h1>
      <p style={{color:'#bfd0e0',fontSize:18,margin:'0 auto 28px',maxWidth:650}}>Return to the InCheck 360 platform overview or explore the main site.</p>
      <Link className="button primary large" href="/">Back to homepage</Link>
    </div>
  </section>;
}
