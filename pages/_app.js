import { useEffect } from "react";
import Head from "next/head";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "../styles/globals.css";

import AOS from "aos"
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Prism.highlightAll();
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="thought, stories and ideas" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OXS" />
        <meta name="twitter:description" content="thought, stories and ideas" />
        <meta name="twitter:creator" content="@yuxxeun" />
        <meta name="twitter:site" content="@yuxxeun" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/yuxxeun/zea/main/image/gradient.jpg"
        />

        <title>OXS</title>
      </Head>
      <div className="scroll-smooth">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
