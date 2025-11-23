import Link from 'next/link'

const books = [
  { slug: 'the-beginning', title: 'The Beginning', excerpt: 'Book One: A young heroine discovers a danger that could shatter both human and dragon realms.' },
  { slug: 'the-journey', title: 'The Journey', excerpt: 'Book Two: The adventure expands; alliances are tested.' },
  { slug: 'the-end', title: 'The End', excerpt: 'Book Three: The final confrontation and resolution.' },
]

export default function Books() {
  return (
    <section className="page books">
      <div className="container">
        <h2>Dragon & Daffodil — The Trilogy</h2>
        <p className="lead">A YA fantasy trilogy about courage, persuit of truth, and the price and promise of integrity.</p>
        <div className="book-list">
          {books.map(b => (
            <article key={b.slug} className="book-card">
              <h3>{b.title}</h3>
              <p>{b.excerpt}</p>
              <Link href={`/books/${b.slug}`}className="small">Read more</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
