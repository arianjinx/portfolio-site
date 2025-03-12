import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

// Define the content directory
const contentDirectory = path.join(process.cwd(), 'src/content')

interface PostMetadata {
  title?: string
  date?: string
  excerpt?: string
  // Using Record instead of any for additional custom properties
  [key: string]: string | number | boolean | undefined
}

export interface Post {
  slug: string
  metadata: PostMetadata
}

// Get all MDX files from the content directory
export function getAllMdxFiles() {
  const files = fs.readdirSync(contentDirectory)
  return files.filter(file => file.endsWith('.mdx'))
}

// Get metadata from an MDX file
export function getMdxMetadata(filename: string): Post {
  const filePath = path.join(contentDirectory, `${filename}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')

  // Parse the frontmatter
  const {data} = matter(fileContent)

  return {
    slug: filename,
    metadata: data as PostMetadata,
  }
}

// Get all posts with their metadata
export function getAllPosts(): Post[] {
  const files = getAllMdxFiles()

  const posts = files.map(file => {
    const slug = file.replace(/\.mdx$/, '')
    return getMdxMetadata(slug)
  })

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    if (a.metadata.date && b.metadata.date) {
      return (
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
      )
    }
    return 0
  })
}
