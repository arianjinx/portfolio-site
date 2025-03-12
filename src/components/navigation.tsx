'use client'

import {Button} from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {cn} from '@/lib/utils'
import {Menu} from 'lucide-react'
import Link from 'next/link'
import {useState} from 'react'

interface NavigationProps {
  className?: string
}

export default function Navigation({className = ''}: NavigationProps) {
  const [activeLink, setActiveLink] = useState('')

  const menuItems = [
    {name: 'About', href: '/about'},
    {name: 'Blog', href: '/blog'},
    {name: 'Work', href: '/work'},
    {name: 'Contact', href: '/contact'},
  ]

  return (
    <div className="w-full bg-white">
      <nav
        className={cn(
          'flex flex-row justify-between items-center px-6 py-6 w-full max-w-7xl mx-auto',
          'sm:px-10',
          className,
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-xl text-[#2d2d2d] transition-colors hover:text-black"
          onClick={() => setActiveLink('')}
        >
          Logo
        </Link>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:flex flex-row gap-6">
          {menuItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-[17px] text-[#2d2d2d] transition-all hover:text-black',
                activeLink === item.name ? 'font-medium' : 'font-normal',
              )}
              onClick={() => setActiveLink(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu - Visible only on mobile */}
        <Sheet>
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-10">
              {menuItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 text-[17px] text-[#2d2d2d] transition-all hover:text-black',
                    activeLink === item.name ? 'font-medium' : 'font-normal',
                  )}
                  onClick={() => setActiveLink(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}
