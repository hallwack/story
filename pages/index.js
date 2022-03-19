import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { Avatar, EmailForm } from "../components";

const Home = ({ posts }) => {
  return (
    <>
      <div className="py-10">
        <Avatar />
        <EmailForm />

        {posts.map((post, index) => (
          <Link href={"/story/" + post.slug} passHref key={index}>
            {/* post card */}
            <div className="xs:w-2/3 mx-auto my-10 w-3/4 cursor-pointer rounded-md border border-gray-600 py-10 px-5 shadow-md shadow-gray-600 sm:w-2/3 md:w-1/2">
              <a href={"/story/" + post.slug}>
                <p className="text-center text-gray-500">
                  {post.frontMatter.date}
                </p>
                <div>
                  <h1 className="mt-1 mb-5 text-center text-3xl font-extrabold text-gray-300">
                    {post.frontMatter.title}
                  </h1>
                  <p className="w-50 mt-5 mb-10 text-left text-gray-300">
                    {post.frontMatter.description}
                  </p>
                </div>

                {/* read more button */}
                <div className="text-center">
                  <buttton className="rounded-full border border-gray-500 px-3 py-2 text-sm font-bold text-gray-500">
                    Read more
                  </buttton>
                </div>
              </a>
            </div>
          </Link>
        ))}
        <div className="text-center">
          <Image
            src="/loading.svg"
            alt="avatar"
            className="animate-spin-slow"
            height={66}
            width={66}
            blurDataURL="/loading.svg"
          />
        </div>
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
