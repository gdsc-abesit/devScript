import '@/styles/globals.scss'
import Head from 'next/head'
import Meta from '../components/meta'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Meta />
        <script
          defer
          data-domain="devscript.tech"
          src="https://plausible.io/js/script.js"
        />
        <script defer data-domain="angelhacks.hackclub.com" src="https://plausible.io/js/script.js"></script>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <title>DevScript 2023</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
