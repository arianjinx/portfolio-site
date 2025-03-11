import ContactSection from '@/components/contact-section'
import GallerySection from '@/components/gallery-section'
import HeaderSection from '@/components/header-section'
import LogoBar from '@/components/logo-bar'
import Navigation from '@/components/navigation'
import SkillSection from '@/components/skill-section'
import TestimonialSection from '@/components/testimonial-section'

export default function Home() {
  return (
    <>
      <Navigation />
      <HeaderSection />
      <LogoBar />
      <SkillSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </>
  )
}
