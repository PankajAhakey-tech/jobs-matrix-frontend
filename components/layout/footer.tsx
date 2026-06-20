'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

const footerLinks = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  Services: [
    { label: 'Executive Search', href: '#services' },
    { label: 'Technical Recruitment', href: '#services' },
    { label: 'Contract Staffing', href: '#services' },
    { label: 'Outplacement', href: '#services' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
              <span className="font-bold text-foreground">JOBS Matrix</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Premier recruitment consultancy connecting exceptional talent with industry leaders.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Facebook'].map((social, idx) => (
                <motion.div key={`social-${idx}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    title={social}
                  >
                    <span className="text-primary">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={`footer-${category}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIdx) => (
                  <li key={`link-${linkIdx}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left"
          >
            <p className="text-sm text-muted-foreground">
              © 2024 JOBS Matrix. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with care for your recruitment success.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
