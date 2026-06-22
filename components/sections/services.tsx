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
          className="mb-16 sm:mb-20 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Our Services
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-6xl">
            Recruitment Solutions
            <span className="block bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
              Designed For Growth
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            From startups to large enterprises, JOBS Matrix delivers
            specialized recruitment solutions that help businesses hire
            faster, reduce hiring risks and build high-performing teams.
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

                className="
group
relative
overflow-hidden
rounded-3xl
border
border-slate-200
bg-white
p-6
sm:p-8
shadow-lg
transition-all
duration-500
hover:-translate-y-2
hover:border-primary/20
hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)]
"
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

      </div>
    </section>
  )
}