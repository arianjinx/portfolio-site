import type React from 'react'
import {
  FaBehance,
  FaDiscord,
  FaDribbble,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'

// Input field component
interface InputFieldProps {
  label: string
  type?: string
}

const InputField: React.FC<InputFieldProps> = ({label, type = 'text'}) => {
  return (
    <div className="flex flex-row px-6 py-4 bg-[#f3f3f3] w-full h-[59px]">
      <input
        type={type}
        placeholder={label}
        className="w-full text-[17px] font-normal leading-[27px] text-[#2d2d2d] bg-transparent outline-none"
        aria-label={label}
      />
    </div>
  )
}

// Social icon component
interface SocialIconProps {
  icon: React.ReactNode
  href: string
  label: string
}

const SocialIcon: React.FC<SocialIconProps> = ({icon, href, label}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center text-black hover:text-gray-600 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

// ContactSection component
interface ContactSectionProps {
  sectionTitle?: string
  contactDescription?: string
  socialLinks?: {
    discord?: string
    facebook?: string
    dribbble?: string
    instagram?: string
    behance?: string
  }
}

const ContactSection: React.FC<ContactSectionProps> = ({
  sectionTitle = "Let's work together",
  contactDescription = "I'm always open to discussing product design work or partnership opportunities. Feel free to reach out using the form or through my social media profiles.",
  socialLinks = {
    discord: 'https://discord.com',
    facebook: 'https://facebook.com',
    dribbble: 'https://dribbble.com',
    instagram: 'https://instagram.com',
    behance: 'https://behance.com',
  },
}) => {
  return (
    <section className="w-full py-[42px] px-6 md:px-8 lg:px-12 flex flex-col gap-6 bg-white">
      {/* Section title */}
      <h2 className="text-[32px] font-semibold leading-[42px] text-[#2d2d2d] w-full max-w-7xl mx-auto">
        {sectionTitle}
      </h2>

      {/* Contact content - changes to column on mobile */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-[142px] w-full max-w-7xl mx-auto justify-between">
        {/* Contact info */}
        <div className="flex flex-col gap-[42px] w-full md:w-[570px]">
          {/* Description */}
          <div className="flex flex-col">
            <p className="text-[17px] font-normal leading-[27px] text-[#2d2d2d]">
              {contactDescription}
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-row gap-6 w-full">
            {socialLinks.discord && (
              <SocialIcon
                icon={<FaDiscord size={24} />}
                href={socialLinks.discord}
                label="Discord profile"
              />
            )}
            {socialLinks.facebook && (
              <SocialIcon
                icon={<FaFacebook size={24} />}
                href={socialLinks.facebook}
                label="Facebook profile"
              />
            )}
            {socialLinks.dribbble && (
              <SocialIcon
                icon={<FaDribbble size={24} />}
                href={socialLinks.dribbble}
                label="Dribbble profile"
              />
            )}
            {socialLinks.instagram && (
              <SocialIcon
                icon={<FaInstagram size={24} />}
                href={socialLinks.instagram}
                label="Instagram profile"
              />
            )}
            {socialLinks.behance && (
              <SocialIcon
                icon={<FaBehance size={24} />}
                href={socialLinks.behance}
                label="Behance profile"
              />
            )}
          </div>
        </div>

        {/* Contact form */}
        <div className="flex flex-col gap-6 w-full md:w-[520px]">
          {/* Input fields */}
          <div className="flex flex-col gap-3 w-full">
            <InputField label="Name" />
            <InputField label="Email" type="email" />
            <div className="flex flex-row px-6 py-4 bg-[#f3f3f3] w-full h-auto min-h-[120px]">
              <textarea
                placeholder="Message"
                className="w-full text-[17px] font-normal leading-[27px] text-[#2d2d2d] bg-transparent outline-none resize-none"
                rows={3}
                aria-label="Message"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="button"
            className="flex justify-center items-center py-6 px-16 bg-[#2d2d2d] text-white w-fit"
          >
            <span className="text-[20px] font-semibold leading-[30px]">
              Submit
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
