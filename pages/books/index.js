import Link from 'next/link'
import { paintSeries, dragonDaffodilSeries } from '../../data/series'

function SeriesSection({ series, badge }) {
  return (
    <div className="series-section">
      <div className="series-section-head">
        <h2>{series.title}</h2>
        {badge && <span className="status-pill">{badge}</span>}
      </div>
      <p className="lead small-lead">{series.description}</p>
      <div className="book-list">
        {series.books.map((b) => (
          <article key={b.slug} className={`book-card status-${b.status}`}>
            <span className="status-pill">{b.statusLabel}</span>
            <h3>{b.title}</h3>
            <p>{b.description.length > 140 ? b.description.slice(0, 140) + '…' : b.description}</p>
            <div className="book-card-actions">
              <Link href={`/books/${b.slug}`} className="small">
                Read more
              </Link>
              {b.buyUrl && (
                <a href={b.buyUrl} target="_blank" rel="noopener noreferrer" className="small buy-link">
                  Buy on Amazon
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function Books() {
  return (
    <section className="page books">
      <div className="container">
        <h1 className="page-title">Books</h1>
        <SeriesSection series={paintSeries} />
        <SeriesSection series={dragonDaffodilSeries} badge="Coming later" />
      </div>
    </section>
  )
}
