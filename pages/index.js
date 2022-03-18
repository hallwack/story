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
            <div className="mx-auto border my-10 py-5 px-10 border-gray-600 rounded-lg xs:w-2/3 sm:w-2/3 md:w-1/2 w-3/4 cursor-pointer">
              <a href={"/story/" + post.slug}>
                <p className="text-gray-500 __mono text-center italic">
                  {post.frontMatter.date}
                </p>
                <div className="text-center my-5">
                  <Image
                    src={post.frontMatter.thumbnailUrl}
                    height={200}
                    width={500}
                    alt={post.frontMatter.title}
                    className="rounded-md"
                    objectFit="cover"
                  />
                </div>
                <div className="px-5">
                  <h1 className="text-2xl text-gray-300 font-bold mt-5">
                    {post.frontMatter.title}
                  </h1>
                  <p className="text-left text-gray-300 mt-2 mb-5 w-50">
                    {post.frontMatter.description}
                  </p>
                </div>

                {/* read more button */}
                <div className="text-center">
                  <buttton className="text-gray-500 __mono border border-gray-500 px-3 text-sm rounded-full">
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
            height={33}
            width={33}
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
