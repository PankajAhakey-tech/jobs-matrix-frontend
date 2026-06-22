'use client'

import { AnimatedCounter } from '@/components/ui/animated-counter'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'

const stats = [
  {
    value: 5000,
    suffix: '+',
    label: 'Candidates Placed',
    description: 'Successfully hired across multiple industries',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Client Companies',
    description: 'Trusted by startups, SMEs and enterprises',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    description: 'High-quality candidate matching process',
  },
  {
    value: 24,
    suffix: 'hr',
    label: 'Average Response',
    description: 'Quick support for urgent hiring needs',
  },
]

const specialties = [
  'IT Recruitment',
  'Non-IT Recruitment',
  'Executive Search',
  'Bulk Hiring',
  'Contract Staffing',
  'Permanent Staffing',
]

export function CompanyOverviewSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/60 to-transparent" />

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              About JOBS Matrix
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-6xl">
              Connecting
              <span className="block bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Talent With Opportunity
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              JOBS Matrix partners with businesses to identify, attract and
              place high-performing professionals across IT, Non-IT, BPO,
              Sales, HR, Finance, Engineering, Healthcare and Leadership roles.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Our recruitment specialists combine industry expertise,
              advanced screening processes and an extensive talent network
              to help organizations hire faster and smarter.
            </p>

            {/* Key Points */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Pre-Screened Candidates',
                'Dedicated Recruitment Team',
                'Fast Turnaround Time',
                'Industry-Specific Hiring',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="#contact"
                className="
                  group
                  inline-flex
                  w-full
                  sm:w-auto
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-primary
                  to-blue-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_40px_rgba(37,99,235,0.35)]
                "
              >
                Business Enquiry

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="
                  group
                  inline-flex
                  w-full
                  sm:w-auto
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-slate-800
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:text-primary
                  hover:shadow-lg
                "
              >
                Looking For Job

                <Briefcase className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-primary/20
                  hover:shadow-2xl
                "
              >
                <div className="mb-3 text-4xl font-bold text-primary sm:text-5xl">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {stat.label}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* TRUST BADGES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 border-t border-slate-200 pt-10"
        >
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">

            {specialties.map((item) => (
              <div
                key={item}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-slate-700
                  shadow-sm
                "
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}