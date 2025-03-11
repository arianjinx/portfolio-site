import type React from 'react'

// Skill card component
interface SkillCardProps {
  title: string
  description: string
  iconBgColor: string
  iconComponent: React.ReactNode
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  iconBgColor,
  iconComponent,
}) => {
  return (
    <div className="flex flex-col items-center p-16 gap-10 bg-white rounded-lg">
      {/* Icon with colored background */}
      <div
        className="w-[124px] h-[124px] flex items-center justify-center rounded-md"
        style={{backgroundColor: iconBgColor}}
      >
        {iconComponent}
      </div>

      {/* Title and description */}
      <div className="flex flex-col gap-3 max-w-[310px]">
        <h3 className="text-center text-[27px] font-semibold leading-[42px] text-[#2d2d2d]">
          {title}
        </h3>
        <p className="text-center text-[17px] font-normal leading-[27px] text-[#2d2d2d]">
          {description}
        </p>
      </div>
    </div>
  )
}

// Arrow Icon Components
const ArrowIcon1 = () => (
  <svg
    width="51"
    height="53"
    viewBox="0 0 51 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Horizontal arrow icon</title>
    <path
      d="M25.4131 1L50.8262 26.2983L25.4131 51.5967M1 26.2983H50.8262H1Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ArrowIcon2 = () => (
  <svg
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Diagonal arrow icon</title>
    <path
      d="M1 1L51 51M1 51L51 1L1 51Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ArrowIcon3 = () => (
  <svg
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Cross arrow icon</title>
    <path
      d="M26 1V51M1 26H51H1Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// SkillSection component
interface SkillSectionProps {
  skills?: {
    id: number
    title: string
    description: string
    iconBgColor: string
    iconType: 1 | 2 | 3
  }[]
}

const defaultSkills = [
  {
    id: 1,
    title: 'Product Design',
    description:
      'Crafting intuitive and engaging products that solve real user problems with a focus on usability and aesthetics.',
    iconBgColor: '#F3AFA8',
    iconType: 1,
  },
  {
    id: 2,
    title: 'Visual Design',
    description:
      'Creating visually stunning designs that communicate clearly and effectively while maintaining brand consistency.',
    iconBgColor: '#FF6250',
    iconType: 2,
  },
  {
    id: 3,
    title: 'Art Direction',
    description:
      'Guiding the visual style and creative vision across projects to ensure a cohesive and impactful result.',
    iconBgColor: '#009379',
    iconType: 3,
  },
]

const SkillSection: React.FC<SkillSectionProps> = ({
  skills = defaultSkills,
}) => {
  const getIconComponent = (iconType: number) => {
    switch (iconType) {
      case 1:
        return <ArrowIcon1 />
      case 2:
        return <ArrowIcon2 />
      case 3:
        return <ArrowIcon3 />
      default:
        return <ArrowIcon1 />
    }
  }

  return (
    <section className="w-full py-10 px-6 md:px-8 lg:px-12 flex flex-col gap-10 bg-white">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto">
        {skills.map(skill => (
          <SkillCard
            key={skill.id}
            title={skill.title}
            description={skill.description}
            iconBgColor={skill.iconBgColor}
            iconComponent={getIconComponent(skill.iconType)}
          />
        ))}
      </div>
    </section>
  )
}

export default SkillSection
