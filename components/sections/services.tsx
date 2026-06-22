'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Users,
  Laptop,
  Briefcase,
  Building2,
  Search,
  Handshake,
} from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Permanent Staffing',
    description:
      'We help organizations hire qualified professionals for long-term roles across multiple industries.',
  },
  {
    icon: Laptop,
    title: 'IT Recruitment',
    description:
      'Developers, QA Engineers, DevOps Specialists, Designers, Project Managers and technical professionals.',
  },
  {
    icon: Briefcase,
    title: 'Non-IT Recruitment',
    description:
      'Sales Executives, Telecallers, HR Professionals, Accountants, Admin and Operations staff.',
  },
  {
    icon: Building2,
    title: 'Bulk Hiring Solutions',
    description:
      'Efficient recruitment support for organizations with high-volume hiring requirements.',
  },
  {
    icon: Search,
    title: 'Executive Search',
    description:
      'Identify and recruit experienced leadership professionals for critical business positions.',
  },
  {
    icon: Handshake,
    title: 'Recruitment Consulting',
    description:
      'Strategic hiring guidance, workforce planning, and talent acquisition support.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Recruitment Solutions Designed For Growth
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            From startups to established enterprises, JOBS Matrix delivers
            recruitment solutions that help organizations build stronger,
            high-performing teams.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-2xl"
              >
                {/* Gradient Top Border */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-blue-600" />

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </h3>

                <p className="leading-7 text-muted-foreground">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="mt-6 flex items-center text-primary font-medium">
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </motion.div>
            )
          })}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary via-blue-700 to-primary p-10 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold">
            Looking for the Right Talent?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Let JOBS Matrix help you connect with qualified, pre-screened
            professionals who can contribute to your business growth from day one.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-[24px] border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.12)] px-8 py-4 font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)] hover:bg-gradient-to-r hover:from-[rgba(37,99,235,0.9)] hover:to-[rgba(59,130,246,0.8)]">
              Business Enquiry
            </button>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[24px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.08)] px-8 py-4 font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:bg-[rgba(255,255,255,0.15)] hover:-translate-y-0.5"
            >
              Looking For Job
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}