import Link from 'next/link'
import { paintSeries } from '../../data/series'

export default function Home() {
  const bookOne = paintSeries.books[0]

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow">Now available</p>
            <span className="badge-new">Just Released</span>
            <h1>{paintSeries.title}</h1>
            <h2 className="hero-tagline">{paintSeries.tagline}</h2>
            <p className="lead">{paintSeries.description}</p>
            <div className="cta">
              <a
                href={bookOne.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                Buy the Ebook on Amazon
              </a>
              <Link href={`/books/${bookOne.slug}`} className="btn ghost">
                Read More
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <img
              src={paintSeries.coverImage}
              alt={`${paintSeries.title} cover`}
              className="cover-image"
            />
          </div>
        </div>
      </section>

      <section className="series-roadmap">
        <div className="container">
          <h3>The Full Series</h3>
          <p className="lead small-lead">
            Five allegorical stories, one unfolding war. Here&rsquo;s what&rsquo;s next.
          </p>
          <div className="roadmap-list">
            {paintSeries.books.map((b) => (
              <div key={b.slug} className={`roadmap-item status-${b.status}`}>
                <span className="roadmap-order">{String(b.order).padStart(2, '0')}</span>
                <div>
                  <h4>{b.title}</h4>
                  <span className="status-pill">{b.statusLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
