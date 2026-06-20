'use client'

import { AnimatedCounter } from '@/components/ui/animated-counter'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase } from 'lucide-react'
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

export function CompanyOverviewSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              About JOBS Matrix
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Connecting
              <span className="block bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Talent With Opportunity
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              JOBS Matrix helps companies hire pre-screened, job-ready
              professionals across IT, Non-IT, BPO, Sales, HR, Finance,
              Engineering, Healthcare and Leadership roles.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We combine industry expertise, candidate screening, and a strong
              recruitment network to help businesses hire faster and smarter.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="
                group
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-primary
                to-blue-500
                px-7
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
                href="#jobs"
                className="
                group
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-primary/20
                bg-white/5
                backdrop-blur-xl
                px-7
                py-4
                font-semibold
                text-foreground
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:bg-primary/10
                "
              >
                Looking For Job
                <Briefcase className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
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
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                shadow-xl
                transition-all
                duration-300
                hover:border-primary/20
                hover:shadow-2xl
                "
              >
                <div className="mb-3 text-5xl font-bold text-primary">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {stat.label}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* TRUST STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 border-t border-border pt-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
            <span>✓ IT Recruitment</span>
            <span>✓ Non-IT Recruitment</span>
            <span>✓ Bulk Hiring</span>
            <span>✓ Executive Search</span>
            <span>✓ Contract Staffing</span>
            <span>✓ Permanent Staffing</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}