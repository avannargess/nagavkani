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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}