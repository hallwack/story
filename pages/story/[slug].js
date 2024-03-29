import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Avatar, EmailForm } from "../../components";
import Head from "next/head";
import "prismjs/themes/prism-okaidia.css";
import Link from "next/link";

const components = { Avatar, EmailForm, SyntaxHighlighter };

const PostPage = ({ frontMatter: { title, date, description }, mdxSource }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/krido.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A place where I can be Me." />
        <link rel="apple-touch-icon" href="/krido.jpg" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@yuxxeun" />
        <meta name="twitter:site" content="@yuxxeun" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/yuxxeun/yuxxeun.github.io/main/public/gradient.jpg"
        />
        <title>{title}</title>
      </Head>

      <div className="my-10 mx-auto w-4/5 items-center justify-center lg:px-5 lg:py-5">
        <p className="my-5 text-center font-space text-lg font-semibold text-pink-700">
          {date}
        </p>
        <h1 className="mb-10 text-center font-basement text-4xl font-extrabold text-slate-900">
          {title}
        </h1>
        <div className="font-space text-xl text-slate-900">
          <MDXRemote {...mdxSource} components={components} />
        </div>

        <div className="mt-10 items-center justify-center text-center font-space sm:mt-10 md:mt-10">
          <buttton className="text-md rounded-xl border border-gray-400 px-7 py-2 font-bold text-slate-900 hover:cursor-pointer hover:text-slate-400">
            <Link href="/">
              <a>Back to home &rarr;</a>
            </Link>
          </buttton>
        </div>
      </div>
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
