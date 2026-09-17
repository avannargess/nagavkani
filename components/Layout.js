import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>N. A. Gavkani — Author of Paint Me a Different Color</title>
        <meta
          name="description"
          content="N. A. Gavkani, author of the allegorical war series Paint Me a Different Color, and the upcoming YA fantasy trilogy Dragon & Daffodil."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
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
