import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>hey world</title>
      </Head>
      <div className="container">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
