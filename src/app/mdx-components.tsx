import Image, {type ImageProps} from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components = {}) {
  return {
    a: ({
      href,
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      if (href?.startsWith('/')) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        )
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    },
    img: (props: ImageProps) => (
      <Image
        sizes="100vw"
        style={{width: '100%', height: 'auto'}}
        {...props}
        alt={props.alt}
      />
    ),
    // You can customize other elements here
    ...components,
  }
}
