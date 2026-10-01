import Link from 'next/link'
import { paintSeries } from '../data/series'

export default function Home() {
  const publishedBooks = paintSeries.books.filter((b) => b.status === 'published')
  const newBook = paintSeries.books.find((b) => b.isNew) || publishedBooks[0]

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow">Now available</p>
            {newBook && (
              <Link href={`/books/${newBook.slug}`} className="badge-new">
                New: {newBook.title}
              </Link>
            )}
            <h1>{paintSeries.title}</h1>
            <h2 className="hero-tagline">{paintSeries.tagline}</h2>
            <p className="lead">{paintSeries.description}</p>
            <div className="cta">
              {publishedBooks.map((b) => (
                <a
                  key={b.slug}
                  href={b.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                  aria-label={`Buy ${b.title} on Amazon`}
                >
                  Buy Book {b.order}: {b.title}
                </a>
              ))}
              <Link href="/books" className="btn ghost">
                See the Full Series
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
                <div className="roadmap-item-text">
                  <h4>{b.title}</h4>
                  <span className="status-pill">{b.statusLabel}</span>
                </div>
                {b.buyUrl && (
                  <a
                    href={b.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small buy-link roadmap-buy"
                  >
                    Buy on Amazon
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
