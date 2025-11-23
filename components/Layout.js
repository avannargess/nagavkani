import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>N. A. Gavkani — Dragon & Daffodil</title>
        <meta name="description" content="N. A. Gavkani — YA Fantasy author. Dragon & Daffodil trilogy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site">
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
