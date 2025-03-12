import {getAllPosts} from '@/lib/mdx'
import Link from 'next/link'

interface BlogPostListProps {
  className?: string
}

export async function BlogPostList({className}: BlogPostListProps) {
  const posts = getAllPosts()

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>
      <ul className="space-y-4">
        {posts.map(post => (
          <li
            key={post.slug}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block text-lg font-medium text-blue-600 hover:text-blue-800"
            >
              {post.metadata.title || post.slug.replace(/-/g, ' ')}
            </Link>
            {post.metadata.excerpt && (
              <p className="mt-2 text-gray-600">{post.metadata.excerpt}</p>
            )}
            {post.metadata.date && (
              <p className="mt-1 text-sm text-gray-500">
                {new Date(post.metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
