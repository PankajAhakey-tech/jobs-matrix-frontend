'use client'

import { motion } from 'framer-motion'
import {
  Laptop,
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  Truck,
  GraduationCap,
  Headset,
} from 'lucide-react'

const industries = [
  {
    title: 'Information Technology',
    description: 'Software Development, QA, DevOps, Cloud & IT Services',
    icon: Laptop,
  },
  {
    title: 'Healthcare',
    description: 'Hospitals, Clinics, Pharma & Healthcare Services',
    icon: HeartPulse,
  },
  {
    title: 'Banking & Finance',
    description: 'Banking, Insurance, Accounting & Financial Services',
    icon: Landmark,
  },
  {
    title: 'Manufacturing',
    description: 'Industrial Operations, Engineering & Production',
    icon: Factory,
  },
  {
    title: 'Retail & E-Commerce',
    description: 'Retail Operations, Sales & Customer Experience',
    icon: ShoppingBag,
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Warehousing, Transport & Distribution',
    icon: Truck,
  },
  {
    title: 'Education',
    description: 'Schools, Colleges, EdTech & Training Institutes',
    icon: GraduationCap,
  },
  {
    title: 'BPO & Customer Support',
    description: 'Call Centers, Support Teams & Customer Success',
    icon: Headset,
  },
]

export function IndustriesSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Effects */}
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
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Recruitment Across Diverse Industries
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            We connect businesses with skilled professionals across multiple
            industries, helping organizations build stronger teams and achieve
            sustainable growth.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg">
                  <Icon size={30} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {industry.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {industry.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/5 via-blue-50 to-primary/5 p-8 lg:p-12"
        >
          <div className="grid gap-8 text-center md:grid-cols-4">

            <div>
              <h3 className="text-4xl font-bold text-primary">1000+</h3>
              <p className="mt-2 text-muted-foreground">
                Candidate Network
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-primary">100+</h3>
              <p className="mt-2 text-muted-foreground">
                Hiring Partners
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-primary">500+</h3>
              <p className="mt-2 text-muted-foreground">
                Successful Placements
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-primary">98%</h3>
              <p className="mt-2 text-muted-foreground">
                Client Satisfaction
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}