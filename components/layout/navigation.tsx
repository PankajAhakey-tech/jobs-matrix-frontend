'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Phone,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Contact', href: '/#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

      {/* Top Contact Bar */}
      <div className="hidden md:block border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">

          <div className="flex items-center gap-6">
            <a
              href="tel:+919232683839"
              className="flex items-center gap-2 transition hover:text-blue-400"
            >
              <Phone size={14} />
              +91 92326 83839
            </a>

            <a
              href="mailto:connect.jobmatrix@gmail.com"
              className="flex items-center gap-2 transition hover:text-blue-400"
            >
              <Mail size={14} />
              connect.jobmatrix@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <a
              href="https://www.instagram.com/jobsmatrixofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-blue-400 transition"
            >
              Instagram
            </a>

            <span className="text-slate-500">|</span>

            <a
              href="https://www.linkedin.com/company/jobsmatrix/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/jobsMatrix-logo.png"
                alt="JobsMatrix"
                width={180}
                height={60}
                priority
                className="max-h-16 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="
                    relative
                    font-medium
                    text-slate-700
                    transition-all
                    duration-300
                    hover:text-primary
                    after:absolute
                    after:-bottom-2
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:bg-primary
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <Link
              href="/#contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-primary
                to-blue-600
                px-7
                py-3
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Hire Talent
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t py-5 md:hidden"
          >
            <div className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-slate-700 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t pt-4 space-y-3">

                <a
                  href="tel:+919232683839"
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <Phone size={16} />
                  +91 92326 83839
                </a>

                <a
                  href="mailto:connect.jobmatrix@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <Mail size={16} />
                  connect.jobmatrix@gmail.com
                </a>

                <div className="flex gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/jobsmatrixofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-blue-400 transition"
                  >
                    Instagram
                  </a>

                  <span className="text-slate-500">|</span>

                  <a
                    href="https://www.linkedin.com/company/jobsmatrix/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-blue-400 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <Link
                href="/#contact"
                className="
                  mt-2
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-primary
                  to-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                "
              >
                Hire Talent
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}