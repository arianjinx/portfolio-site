'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import type {FC} from 'react'

interface LogoBarProps {
  className?: string
  logos?: Array<{
    alt: string
    src: string
    width: number
    height: number
    id?: string
  }>
}

const LogoBar: FC<LogoBarProps> = ({
  className,
  logos = [
    {
      id: 'logo1',
      alt: 'Company Logo 1',
      src: 'https://placehold.co/120x40/2d2d2d/FFFFFF?text=LOGO+1',
      width: 120,
      height: 40,
    },
    {
      id: 'logo2',
      alt: 'Company Logo 2',
      src: 'https://placehold.co/100x30/2d2d2d/FFFFFF?text=LOGO+2',
      width: 100,
      height: 30,
    },
    {
      id: 'logo3',
      alt: 'Company Logo 3',
      src: 'https://placehold.co/90x45/2d2d2d/FFFFFF?text=LOGO+3',
      width: 90,
      height: 45,
    },
    {
      id: 'logo4',
      alt: 'Company Logo 4',
      src: 'https://placehold.co/110x35/2d2d2d/FFFFFF?text=LOGO+4',
      width: 110,
      height: 35,
    },
    {
      id: 'logo5',
      alt: 'Company Logo 5',
      src: 'https://placehold.co/130x40/2d2d2d/FFFFFF?text=LOGO+5',
      width: 130,
      height: 40,
    },
  ],
}) => {
  return (
    <section
      className={cn('w-full bg-white px-6 py-10 md:px-16 md:py-10', className)}
    >
      <div className="flex flex-wrap md:flex-row justify-center md:justify-between items-center gap-8 md:gap-16 max-w-7xl mx-auto">
        {logos.map(logo => (
          <div key={logo.id || `logo-${logo.alt}`} className="relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default LogoBar
