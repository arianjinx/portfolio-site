import fs from 'node:fs'
import path from 'node:path'
import Link from 'next/link'
import {notFound} from 'next/navigation'

// Define the content directory
const contentDirectory = path.join(process.cwd(), 'src/content')

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDirectory)
  const mdxFiles = files.filter(file => file.endsWith('.mdx'))

  return mdxFiles.map(file => ({
    slug: file.replace(/\.mdx$/, ''),
  }))
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({params}: BlogPostPageProps) {
  const {slug} = params

  try {
    // Dynamically import the MDX file using Next.js's built-in MDX support
    const BlogPost = (await import(`../../../content/${slug}.mdx`)).default

    return (
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
        >
          ← Back to all posts
        </Link>
        <article className="prose mx-auto mt-8">
          <BlogPost />
        </article>
      </div>
    )
  } catch {
    // If the file is not found, show the 404 page
    notFound()
  }
}

// Disable dynamic params to only allow statically generated paths
export const dynamicParams = false
