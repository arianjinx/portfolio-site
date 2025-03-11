import Image from 'next/image'
import type React from 'react'

// Gallery card component
interface GalleryCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Project image */}
      <div className="relative w-full h-[330px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Title and description */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[20px] font-semibold leading-[30px] text-[#2d2d2d]">
          {title}
        </h3>
        <p className="text-[17px] font-normal leading-[27px] text-[#2d2d2d]">
          {description}
        </p>
      </div>
    </div>
  )
}

// GallerySection component
interface GallerySectionProps {
  sectionTitle?: string
  projects?: {
    id: number
    title: string
    description: string
    imageSrc: string
    imageAlt: string
  }[]
}

const defaultProjects = [
  {
    id: 1,
    title: 'Project title',
    description: 'UI, Art direction',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Project 1 thumbnail',
  },
  {
    id: 2,
    title: 'Project title',
    description: 'UI, Art direction',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Project 2 thumbnail',
  },
  {
    id: 3,
    title: 'Project title',
    description: 'UI, Art direction',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Project 3 thumbnail',
  },
  {
    id: 4,
    title: 'Project title',
    description: 'UI, Art direction',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Project 4 thumbnail',
  },
  {
    id: 5,
    title: 'Project title',
    description: 'UI, Art direction',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Project 5 thumbnail',
  },
  {
    id: 6,
    title: 'Project title',
    description: 'UI, Art direction',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Project 6 thumbnail',
  },
]

const GallerySection: React.FC<GallerySectionProps> = ({
  sectionTitle = 'Latest work',
  projects = defaultProjects,
}) => {
  return (
    <section className="w-full py-[42px] px-6 md:px-8 lg:px-12 flex flex-col gap-[42px] bg-white">
      {/* Section title */}
      <h2 className="mx-auto text-[32px] font-semibold leading-[42px] text-[#2d2d2d]">
        {sectionTitle}
      </h2>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {projects.map(project => (
          <GalleryCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </section>
  )
}

export default GallerySection
