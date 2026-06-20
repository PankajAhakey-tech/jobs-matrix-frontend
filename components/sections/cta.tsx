'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="w-full py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 p-12 sm:p-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-foreground text-balance">
            Ready to Find Your Next Great Hire?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Let&apos;s discuss how JOBS Matrix can transform your recruitment
            process and connect you with top talent.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-[24px] border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.12)] px-8 py-4 font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)] hover:bg-gradient-to-r hover:from-[rgba(37,99,235,0.9)] hover:to-[rgba(59,130,246,0.8)]"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-[24px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.08)] px-8 py-4 font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:bg-[rgba(255,255,255,0.15)] hover:-translate-y-0.5"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
