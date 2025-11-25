import { useRouter } from 'next/router'
import Link from 'next/link'

const bookData = {
  'the-beginning': {
    title: 'The Beginning',
    content: `Book One: The Beginning — (non-spoiler) In a kingdom where the fates of humans and dragons coil tightly together,
     a young protagonist uncovers a secret capable of unmaking centuries of harmony. 
     Their journey is shaped by hidden trials and the brave, 
    integral choices that carve a path toward a deeper freedom.`,
    status: 'Completed — querying for representation'
  },
  'the-journey': {
    title: 'The Journey',
    content: 'Book Two: The Journey — (planned) The characters face newfound challenges as the world expands.',
    status: 'Planned'
  },
  'the-end': {
    title: 'The End',
    content: 'Book Three: The End — (planned) The trilogy conclusion.',
    status: 'Planned'
  }
}

export default function BookSlug() {
  const router = useRouter()
  const { slug } = router.query
  const data = slug ? bookData[slug] : null

  if (!data) return <div className="container"><p>Loading…</p></div>

  return (
    <section className="page book-detail">
      <div className="container">
        <h2>{data.title}</h2>
        <p className="status">{data.status}</p>
        <p>{data.content}</p>
        <p><strong>Note:</strong> Book One is complete and currently being queried to agents.</p>
        <p><Link href="/contact">Contact</Link> for press, permissions, or agent queries.</p>
      </div>
    </section>
  )
}
