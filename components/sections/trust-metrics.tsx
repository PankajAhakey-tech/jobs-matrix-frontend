'use client'

import { AnimatedCounter } from '@/components/ui/animated-counter'
import { motion } from 'framer-motion'
import {
  Star,
  Zap,
  Clock3,
  Users,
} from 'lucide-react'

const metrics = [
  {
    value: 98,
    label: 'Client Satisfaction',
    suffix: '%',
    icon: Star,
  },
  {
    value: 40,
    label: 'Faster Hiring',
    suffix: '%',
    icon: Zap,
  },
  {
    value: 24,
    label: 'Response Time',
    suffix: 'h',
    icon: Clock3,
  },
  {
    value: 250,
    label: 'Successful Placements',
    suffix: '+',
    icon: Users,
  },
]

export function TrustMetricsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-20"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-4
              py-2
              text-sm
              font-semibold
              text-primary
            "
          >
            Why Companies Trust JobsMatrix
          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Delivering Recruitment Results
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            Our commitment to quality hiring, faster turnaround,
            and exceptional candidate matching drives measurable
            business outcomes across industries.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/90
                  p-8
                  text-center
                  backdrop-blur-xl
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-500
                  hover:border-primary/20
                  hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-primary/5
                    to-blue-500/5
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    mx-auto
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-primary
                    to-blue-600
                    text-white
                    shadow-lg
                  "
                >
                  <Icon size={28} />
                </div>

                {/* Counter */}
                <div
                  className="
                    relative
                    z-10
                    mb-2
                    text-4xl
                    font-bold
                    text-slate-900
                    sm:text-5xl
                  "
                >
                  <AnimatedCounter
                    to={metric.value}
                    suffix={metric.suffix}
                  />
                </div>

                {/* Label */}
                <p
                  className="
                    relative
                    z-10
                    text-base
                    font-medium
                    text-slate-600
                  "
                >
                  {metric.label}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-14
            sm:mt-20
            rounded-[32px]
            border
            border-blue-100
            bg-white/90
            p-8
            sm:p-12
            text-center
            backdrop-blur-xl
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          "
        >
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Trusted Recruitment Partner for Growing Businesses
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            From startups to established enterprises, organizations
            rely on JobsMatrix to identify, engage, and secure
            top-performing professionals. We help businesses build
            stronger teams with confidence and speed.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-12">
            <div>
              <div className="text-3xl font-bold text-primary">
                95%
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Client Retention
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-primary">
                500+
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Placements Delivered
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-primary">
                50+
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Hiring Partners
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}