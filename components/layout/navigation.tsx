'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  // { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/95 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/jobsMatrix-logo.png"
                alt="JobsMatrix logo"
                width={160}
                height={48}
                className="hidden sm:block"
              />
              <div className="flex flex-col gap-0.5 sm:hidden">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden gap-8 md:flex">
            {navLinks.map((link, idx) => (
              <motion.div
                key={`nav-${idx}-${link.label}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="relative font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:block"
          >
          <Link
  href="#contact"
  className="
  inline-flex items-center gap-2
  rounded-2xl
  border border-primary/20
  bg-white
  px-6 py-3
  font-semibold
  text-primary
  shadow-lg
  transition-all duration-300

  hover:-translate-y-1
  hover:bg-primary
  hover:text-white
  hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)]
  "
>
  Get Started
</Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-primary/10 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="
  inline-flex items-center gap-2
  rounded-2xl
  border border-primary/20
  bg-white
  px-6 py-3
  font-semibold
  text-primary
  shadow-lg
  transition-all duration-300

  hover:-translate-y-1
  hover:bg-primary
  hover:text-white
  hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)]
  "
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
