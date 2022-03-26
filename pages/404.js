import Head from "next/head";
import Link from "next/link";

const Ilegal = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/krido.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A place where I can be Me." />
        <link rel="apple-touch-icon" href="krido.jpg" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="🚬 451 ㅡ Unavailable For Legal Reasons"
        />
        <meta name="twitter:description" content="A place where I can be Me." />
        <meta name="twitter:creator" content="@yuxxeun" />
        <meta name="twitter:site" content="@yuxxeun" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/yuxxeun/yuxxeun.github.io/main/public/gradient.jpg"
        />

        <title>451 ㅡ Unavailable For Legal Reasons</title>
      </Head>
      <div className="container mx-auto w-5/6 py-20 px-5 sm:w-2/3">
        <h1 className="text-5xl font-extrabold italic text-orange-500">
          451 ㅡ Unavailable For Legal Reasons
        </h1>
        <p className="__mono pt-5 text-lg text-gray-400">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you&apos;ve found something that used to exist, or you spelled
          something wrong. I&apos;m guessing you spelled something wrong. Can
          you double check that <span className="font-bold italic">URL?</span>
        </p>
        <div className="mb-5 mt-10 text-gray-400">
          <buttton className="__mono text-md rounded-full border-2 border-gray-400 px-10 py-2 font-bold">
            <Link href="/">
              <a className="hover:text-white">Let me read story &rarr;</a>
            </Link>
          </buttton>
        </div>
      </div>
    </>
  );
};

export default Ilegal;
