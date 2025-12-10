import { useRouter } from 'next/router'
import Link from 'next/link'

const bookData = {
  'the-beginning': {
    title: 'The Beginning',
    content: `Book One: The Beginning — (non-spoiler) In a kingdom where the fates of humans and dragons coil tightly together,
     a young protagonist uncovers a secret capable of unmaking centuries of harmony. 
     Their journey is shaped by hidden trials and the brave, 
    integral choices that carve a path toward a deeper freedom.`,
    status: 'Completed — querying for representation', 
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
        <h3><strong>Note:</strong> Book One is complete and currently being queried to agents.</h3>

        <h3><Link href="/contact">Contact</Link> for press, permissions, or agent queries.</h3>
    <p><strong>Dragon and Daffodil–The Beginning </strong> <br/>
  </p>
    <ol>
      Chapter 1 – A Dragon in Chains<br/>
      Chapter 2 – The Canyon in Between<br/>
      Chapter 3 – A Cursed Castle<br/>
      Chapter 4 – A Curse of Blood<br/>
      Chapter 5 – A Hidden Path<br/>
      Chapter 6 – A Foolish Dream<br/>
      Chapter 7 – A Game of Fate<br/>
      Chapter 8 – A Prophecy of Gods<br/>
      Chapter 9 – The Rule of Humanity<br/>
      Chapter 10 – Forging a Way<br/>
      Chapter 11 – Flying to Infinity<br/>
      Chapter 12 – The Fountain of Truth<br/>
      Chapter 13 – The Alliance of Differences<br/>
      Chapter 14 – Coming Together<br/>
      Chapter 15 – The Return of Fire<br/>
      Chapter 16 – The Mountain of Fire<br/>
      Chapter 17 – At the End of the World<br/>
    </ol>




        
      </div>
    </section>
  )
}
