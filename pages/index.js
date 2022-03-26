import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Avatar, EmailForm, Footer } from "../components";

const Home = ({ posts }) => {
  return (
    <>
      <div className="py-10">
        <Avatar />
        <EmailForm />

        {posts.map((post, index) => (
          <Link href={"/story/" + post.slug} passHref key={index}>
            {/* post card */}
            <div className="xs:w-2/3 mx-auto my-10 w-5/6 cursor-pointer rounded-lg border-2 border-gray-400 py-10 px-8 sm:w-2/3">
              <a href={"/story/" + post.slug}>
                <p className="__mono text-center text-lg text-gray-400">
                  {post.frontMatter.date}
                </p>
                <div>
                  <h1 className="my-5 text-center text-4xl font-extrabold">
                    {post.frontMatter.title}
                  </h1>
                  <p className="text-left text-gray-400">
                    {post.frontMatter.description}
                  </p>
                </div>

                {/* read more button */}
                <div className="mb-5 mt-10 text-center text-gray-400">
                  <buttton className="__mono text-md rounded-full border-2 border-gray-400 px-10 py-2 font-bold">
                    Read more &rarr;
                  </buttton>
                </div>
              </a>
            </div>
          </Link>
        ))}
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
