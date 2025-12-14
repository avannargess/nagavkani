import '../styles/globals.css'
import Layout from '../components/Layout'


export default function App({ Component, pageProps }) {
  return (
    <Layout> 
      <Component {...pageProps} />
    </Layout>
    
    
  )
}
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
  {/* Primary favicon */}
  <link rel="icon" href="/favicon.ico" sizes="any" />

  {/* PNG fallback (recommended) */}
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-16x16.png" />

  {/* Safari / iOS */}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

  {/* Explicit shortcut icon for older crawlers */}
  <link rel="shortcut icon" href="/favicon.ico" />
</Head>
      <Component {...pageProps} />
    </>
  );
}