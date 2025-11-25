import Link from 'next/link'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h2>Dragon & Daffodil</h2>
          <h3>YA Fantasy — a trilogy by N. A. Gavkani</h3>
          <p className="lead">In a realm where ancient magic entwines the fates of humans and dragons, 
            the Gods challenge all who dare to pursue truth and live with unwavering integrity in the pursuit of 
            freedom for all. <br/>
             </p>
          <div className="cta">
            <Link href="/books"className="btn ghost">Explore the Trilogy</Link>
            <Link href="/about"className="btn ghost">About the Author</Link>
          </div>
        </div>
        <div className="hero-art">
            <img src="/Cover3.jpg" alt="cover" className="cover-placeholder" />
          
        </div>
        </div>
     
    </section>
  )
}

