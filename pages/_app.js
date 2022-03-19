import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/krido.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A place where i can be me." />
        <link rel="apple-touch-icon" href="krido.jpg" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="yuxxeun &bull; story" />
        <meta name="twitter:description" content="A place where i can be me." />
        <meta name="twitter:creator" content="@yuxxeun" />
        <meta name="twitter:site" content="@yuxxeun" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/yuxxeun/yuxxeun.github.io/main/public/gradient.jpg"
        />

        <title>Krido Pambudi</title>
      </Head>
      <div className="container scroll-smooth">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
