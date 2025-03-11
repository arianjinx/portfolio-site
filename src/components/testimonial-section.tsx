import Image from 'next/image'
import type React from 'react'

// Star rating component
interface StarRatingProps {
  rating: number
  maxRating?: number
}

const StarRating: React.FC<StarRatingProps> = ({rating, maxRating = 5}) => {
  // Generate an array of filled and unfilled stars based on the rating
  const stars = Array.from({length: maxRating}, (_, index) => ({
    id: `star-${index}`,
    filled: index < rating,
  }))

  return (
    <div className="flex items-center gap-1.5">
      {stars.map(star => (
        <div key={star.id} className="w-5 h-5">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={star.filled ? '#2d2d2d' : 'none'}
            stroke="#2d2d2d"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={star.filled ? 'Filled star' : 'Empty star'}
          >
            <path
              d="M10 1L12.7553 6.56434L19 7.41844L14.5 11.683L15.5106 18L10 15L4.48944 18L5.5 11.683L1 7.41844L7.24472 6.56434L10 1Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

// Testimonial card component
interface TestimonialCardProps {
  feedback: string
  clientName: string
  clientCompany: string
  clientImageSrc?: string
  rating?: number
  showRating?: boolean
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  feedback,
  clientName,
  clientCompany,
  clientImageSrc = 'https://placehold.co/50x50',
  rating = 5,
  showRating = true,
}) => {
  return (
    <div className="flex flex-col gap-[68px] p-[42px] bg-[#f3f3f3] rounded-none">
      {/* Testimonial text */}
      <p className="text-[20px] font-semibold leading-[30px] text-[#2d2d2d]">
        {feedback}
      </p>

      {/* Client image and info */}
      <div className="flex gap-4">
        {/* Client image */}
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image
            src={clientImageSrc}
            alt={`${clientName} avatar`}
            fill
            className="object-cover"
            sizes="50px"
          />
        </div>

        {/* Client info and rating */}
        <div className="flex flex-col gap-[11px]">
          {/* Star rating */}
          {showRating && <StarRating rating={rating} />}

          {/* Client name and company */}
          <div className="flex flex-col">
            <h4 className="text-[20px] font-semibold leading-[30px] text-[#2d2d2d]">
              {clientName}
            </h4>
            <p className="text-[17px] font-normal leading-[27px] text-[#2d2d2d]">
              {clientCompany}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// TestimonialSection component
interface TestimonialSectionProps {
  sectionTitle?: string
  testimonials?: {
    id: number
    feedback: string
    clientName: string
    clientCompany: string
    clientImageSrc?: string
    rating?: number
    showRating?: boolean
  }[]
}

const defaultTestimonials = [
  {
    id: 1,
    feedback:
      'The portfolio website created for me perfectly captures my work and aesthetic. The design is clean, intuitive, and highlights my projects beautifully.',
    clientName: 'Emma Johnson',
    clientCompany: 'Visual Designer',
    clientImageSrc: 'https://placehold.co/50x50',
    rating: 5,
    showRating: true,
  },
  {
    id: 2,
    feedback:
      "Working with this team was a breeze - they understood my vision from the start and delivered a stunning portfolio that's already helped me land new clients.",
    clientName: 'Michael Chen',
    clientCompany: 'Photographer',
    clientImageSrc: 'https://placehold.co/50x50',
    rating: 5,
    showRating: true,
  },
  {
    id: 3,
    feedback:
      'The responsive design works flawlessly across all devices. My portfolio looks professional and polished, exactly what I was looking for.',
    clientName: 'Sarah Williams',
    clientCompany: 'UI/UX Designer',
    clientImageSrc: 'https://placehold.co/50x50',
    rating: 5,
    showRating: true,
  },
  {
    id: 4,
    feedback:
      'I received my portfolio website ahead of schedule and it exceeded my expectations. The attention to detail and thoughtful organization of my work is impressive.',
    clientName: 'Daniel Rodriguez',
    clientCompany: 'Illustrator',
    clientImageSrc: 'https://placehold.co/50x50',
    rating: 5,
    showRating: true,
  },
  {
    id: 5,
    feedback:
      'My clients have been commenting on how beautiful my new portfolio is. The design perfectly represents my brand and has already helped me grow my business.',
    clientName: 'Olivia Kim',
    clientCompany: 'Graphic Designer',
    clientImageSrc: 'https://placehold.co/50x50',
    rating: 5,
    showRating: true,
  },
  {
    id: 6,
    feedback:
      "I couldn't be happier with my portfolio website. It's user-friendly, visually appealing, and showcases my work in the best possible light.",
    clientName: 'James Taylor',
    clientCompany: 'Art Director',
    clientImageSrc: 'https://placehold.co/50x50',
    rating: 5,
    showRating: true,
  },
]

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  sectionTitle = 'Testimonials',
  testimonials = defaultTestimonials,
}) => {
  return (
    <section className="w-full py-[42px] px-6 md:px-8 lg:px-12 flex flex-col gap-[42px] bg-white">
      {/* Section title */}
      <h2 className="mx-auto text-[32px] font-semibold leading-[42px] text-[#2d2d2d]">
        {sectionTitle}
      </h2>

      {/* Testimonial grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {testimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.id}
            feedback={testimonial.feedback}
            clientName={testimonial.clientName}
            clientCompany={testimonial.clientCompany}
            clientImageSrc={testimonial.clientImageSrc}
            rating={testimonial.rating}
            showRating={testimonial.showRating}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
