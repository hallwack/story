import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, EmailForm } from '../components'

const Home = ({ posts }) => {
  return (
    <>
    <div className="py-10">
      <Avatar />
      <EmailForm />
      {posts.map((post, index) => (
      <Link href={'/world/' + post.slug} passHref key={index}>
      <div className="mx-auto text-center border my-10 py-5 px-3 border-gray-600 rounded-lg xs:w-2/3 sm:w-2/3 md:w-1/2 w-3/4 cursor-pointer">
            <a href={'/world/' + post.slug}>
              <p className="text-gray-500">{post.frontMatter.date}</p>
              <h1 className="text-2xl text-gray-300 font-bold mt-1 mb-5">{post.frontMatter.title}</h1>
              <Image src={post.frontMatter.thumbnailUrl} height={200} width={500} alt={post.frontMatter.title} className="center mt-10 rounded-lg" objectFit="cover" />
              <p className="text-left text-gray-300 my-5 w-50">{post.frontMatter.description}</p>
              <buttton className="text-gray-500 border border-gray-500 px-3 text-sm rounded-full">
                Read more
              </buttton>
            </a>
      </div>
      </Link>
      ))}
    </div>
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Home
