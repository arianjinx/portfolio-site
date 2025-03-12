import ContactSection from '@/components/contact-section'
import GallerySection from '@/components/gallery-section'
import HeaderSection from '@/components/header-section'
import LogoBar from '@/components/logo-bar'
import SkillSection from '@/components/skill-section'
import TestimonialSection from '@/components/testimonial-section'

export default function Home() {
  return (
    <>
      <HeaderSection />
      <LogoBar />
      <SkillSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </>
  )
}
