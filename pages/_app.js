import { useEffect } from 'react'
import Prism from "Prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A place where I can be Me." />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="oxs" />
        <meta name="twitter:description" content="A place where I can be Me." />
        <meta name="twitter:creator" content="@yuxxeun" />
        <meta name="twitter:site" content="@yuxxeun" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/yuxxeun/zea/main/image/gradient.jpg"
        />

        <title>oxs</title>
      </Head>
      <div className="scroll-smooth">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
