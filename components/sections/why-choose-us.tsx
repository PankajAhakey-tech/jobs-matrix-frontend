'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Briefcase,
  Clock3,
  ShieldCheck,
  Award,
  Headphones,
} from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Pre-Screened Candidates',
    description:
      'Every candidate is evaluated for skills, communication, and role fit before being recommended.',
  },
  {
    icon: Clock3,
    title: 'Faster Hiring Process',
    description:
      'Reduce recruitment time with our streamlined sourcing and screening methodology.',
  },
  {
    icon: Briefcase,
    title: 'IT & Non-IT Expertise',
    description:
      'From software developers to sales executives, we hire across multiple industries.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Recruitment Support',
    description:
      'A dedicated team works closely with clients throughout the hiring journey.',
  },
  {
    icon: Award,
    title: 'Quality-Driven Approach',
    description:
      'We focus on delivering the right candidate rather than overwhelming you with resumes.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Hiring Partner',
    description:
      'Reliable, transparent, and committed to building long-term client relationships.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Why Companies Trust JOBS Matrix
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            We help organizations hire smarter by delivering qualified,
            pre-screened professionals across IT and Non-IT domains.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary to-blue-700 p-10 text-white shadow-2xl">

              <h3 className="text-3xl font-bold">
                Your Strategic Recruitment Partner
              </h3>

              <p className="mt-4 text-white/90">
                At JOBS Matrix, we go beyond traditional recruitment by
                understanding your business goals and connecting you with
                talent that creates long-term impact.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">

                <div>
                  <h4 className="text-4xl font-bold">1000+</h4>
                  <p className="text-white/80">
                    Candidates Network
                  </p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold">100+</h4>
                  <p className="text-white/80">
                    Hiring Partners
                  </p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold">500+</h4>
                  <p className="text-white/80">
                    Successful Placements
                  </p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold">98%</h4>
                  <p className="text-white/80">
                    Client Satisfaction
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-sm leading-7 text-muted-foreground">
                    {reason.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}