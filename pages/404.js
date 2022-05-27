import Head from "next/head";
import Link from "next/link";

const Ilegal = () => {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unavailable For Legal Reasons" />
        <meta name="twitter:description" content="A place where I can be Me." />
        <meta name="twitter:creator" content="@yuxxeun" />
        <meta name="twitter:site" content="@yuxxeun" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/yuxxeun/zea/main/image/gradient.jpg"
        />

        <title>Unavailable for legal reasons</title>
      </Head>
      <div className="container mx-auto w-4/6 py-20 px-5">
        <h1 className="font-basement text-5xl font-extrabold italic text-slate-900">
          Unavailable For Legal Reasons
        </h1>
        <p className="pt-5 font-basement text-lg text-slate-500">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you&apos;ve found something that used to exist, or you spelled
          something wrong. I&apos;m guessing you spelled something wrong. Can
          you double check that <span className="font-bold italic">URL?</span>
        </p>
        <div className="mb-5 mt-10 text-slate-900">
          <buttton className="text-md rounded-full border-2 border-gray-400 px-10 py-2 font-basement font-bold hover:cursor-pointer hover:text-slate-500">
            <Link href="/">
              <a className="">Read my story &rarr;</a>
            </Link>
          </buttton>
        </div>
      </div>
    </>
  );
};

export default Ilegal;
