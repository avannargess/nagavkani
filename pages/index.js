import Link from 'next/link'

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h2>Dragon & Daffodil</h2>
          <h3>YA Fantasy — a trilogy by N. A. Gavkani</h3>
          <p className="lead">A world where dragons and humans are bound by ancient magic. <br/>
            Where couarge and integrity are put to test in the persuit of discovering the truth. </p>
          <div className="cta">
            <Link href="/books"className="btn ghost">Explore the Trilogy</Link>
            <Link href="/about"className="btn ghost">About the Author</Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="cover-placeholder">
           <div>
            <img src="/Cover3.jpg" alt="cover" className="cover-placeholder" />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

