'use client'

import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import type {FC} from 'react'

interface HeaderSectionProps {
  branding?: string
  title?: string
  description?: string
  buttonText?: string
  imageSrc?: string
  className?: string
}

const HeaderSection: FC<HeaderSectionProps> = ({
  branding = 'Branding | Image making',
  title = 'Visual Designer',
  description = 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
  buttonText = 'Contact',
  imageSrc = 'https://placehold.co/960x720',
  className,
}) => {
  return (
    <section
      className={cn(
        'flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-16 py-10 md:py-16 px-6 container mx-auto',
        className,
      )}
    >
      <div className="flex flex-col gap-6 md:gap-12 w-full md:w-1/2 max-w-[620px]">
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-xl text-[#2d2d2d]">{branding}</h3>
          <h1 className="font-semibold text-5xl md:text-6xl text-[#2d2d2d] leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-[#2d2d2d]">{description}</p>
        </div>

        <Button className="px-16 py-6 h-auto text-xl font-semibold w-fit">
          {buttonText}
        </Button>
      </div>

      <div className="w-full md:w-1/2 max-w-[480px] h-[360px] relative">
        <Image
          src={imageSrc}
          alt="Header image"
          fill
          className="object-cover rounded-md"
          priority
        />
      </div>
    </section>
  )
}

export default HeaderSection
