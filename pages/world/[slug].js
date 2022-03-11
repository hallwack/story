import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Avatar, EmailForm } from '../../components'

const components = { Avatar, EmailForm, SyntaxHighlighter }

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <>
    <div className="mx-auto my-5 px-3 xs:w-2/3 sm:w-2/3 md:w-1/2 w-3/4">
      <p className="text-center text-md pt-10">{date}</p>
      <Avatar />
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={components}/>
    </div>
    <EmailForm />
    </>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
