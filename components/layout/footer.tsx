'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Contact', href: '/#contact' },
  ],

  Services: [
    { label: 'Executive Search', href: '/#services' },
    { label: 'Technical Recruitment', href: '/#services' },
    { label: 'Permanent Hiring', href: '/#services' },
    { label: 'Contract Staffing', href: '/#services' },
  ],

  Industries: [
    { label: 'Information Technology', href: '/#industries' },
    { label: 'Healthcare', href: '/#industries' },
    { label: 'Manufacturing', href: '/#industries' },
    { label: 'BFSI', href: '/#industries' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50/50">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <div className="mb-5">
              <Image
                src="/images/jobsMatrix-logo.png"
                alt="JobsMatrix"
                width={180}
                height={60}
                className="h-auto w-auto"
              />
            </div>

            <p className="mb-6 text-sm leading-7 text-slate-600">
              Connecting Talent with Opportunity.
              We help organizations hire exceptional talent and empower
              professionals to build successful careers.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm text-slate-600">
              <a
                href="tel:+919232683839"
                className="block transition hover:text-primary"
              >
                📞 +91 92326 83839
              </a>

              <a
                href="mailto:connect.jobmatrix@gmail.com"
                className="block transition hover:text-primary"
              >
                ✉️ connect.jobmatrix@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/jobsmatrixofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-primary hover:bg-primary hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/jobsmatrix/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-primary hover:bg-primary hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Footer Columns */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              viewport={{ once: true }}
            >
              <h3 className="mb-5 text-lg font-semibold text-slate-900">
                {title}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Looking to Hire Top Talent?
              </h3>

              <p className="mt-2 text-slate-600">
                Let JobsMatrix help you find the right professionals faster.
              </p>
            </div>

            <Link
              href="/#contact"
              className="
                inline-flex
                items-center
                rounded-full
                bg-primary
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:opacity-90
              "
            >
              Contact Us Today
            </Link>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} JobsMatrix. All Rights Reserved.
            </p>

            <p className="text-sm text-slate-500">
              Connecting Talent with Opportunity
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}