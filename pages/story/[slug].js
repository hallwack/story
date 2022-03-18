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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@yuxxeun" />
        <meta name="twitter:site" content="@yuxxeun" />
        <meta name="twitter:image" content={thumbnailUrl} />
        <title>{title}</title>
      </Head>

      <div className="container-md mx-5 px-5 md:mx-20 md:px-20 mt-10">
        <Avatar />
        <p className="__mono text-center text-md font-thin mt-5 mb-3 px-5 italic">
          {date}
        </p>
        <h1 className="text-center font-bold text-3xl mb-8">{title}</h1>
        <MDXRemote {...mdxSource} components={components} />
        <footer className="italic text-center my-10 __mono text-lg font-semibold">
          thank you for coming, drink your water now!
        </footer>
      </div>
      <EmailForm />
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
