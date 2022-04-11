import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Avatar, EmailForm } from "../../components";
import Head from "next/head";

const components = { Avatar, EmailForm, SyntaxHighlighter };

const PostPage = ({
  frontMatter: { title, date, description, thumbnailUrl },
  mdxSource,
}) => {
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

      <div className="xs:w-2/3 my-10 mx-auto w-5/6 items-center justify-center px-5 py-5 sm:w-2/3">
        <Avatar />
        <p className="__mono my-5 text-center text-lg text-gray-400">{date}</p>
        <h1 className="mb-10 text-center text-4xl font-extrabold">{title}</h1>
        <MDXRemote {...mdxSource} components={components} />
        <div className="__mono mt-10 items-center justify-center text-center text-3xl italic">
          <footer>∞</footer>
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
