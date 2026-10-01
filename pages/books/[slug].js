import { useRouter } from 'next/router'
import Link from 'next/link'
import { findBook } from '../../data/series'

export default function BookSlug() {
  const router = useRouter()
  const { slug } = router.query
  const result = slug ? findBook(slug) : null

  if (!result) return <div className="container"><p>Loading…</p></div>

  const { book, series } = result
  const cover = book.coverImage

  return (
    <section className="page book-detail">
      <div className="container">
        <div className="book-detail-grid">
          <div>
            <p className="eyebrow">{series.title}</p>
            <h1>{book.title}</h1>
            <span className="status-pill">{book.statusLabel}</span>
            <p className="book-detail-text">{book.description}</p>

            {book.buyUrl && (
              <a
                href={book.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                Buy the Ebook on Amazon
              </a>
            )}

            {!book.buyUrl && (
              <p className="lead small-lead">
                This title isn&rsquo;t available yet — <Link href="/contact">get in touch</Link> or check back for updates.
              </p>
            )}

            <div className="book-detail-footer">
              <Link href="/books">&larr; Back to all books</Link>
            </div>
          </div>
          {cover && (
            <div className="book-detail-art">
              <img src={cover} alt={`${book.title} cover`} className="cover-image" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
