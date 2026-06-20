'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Requirement Analysis',
    description:
      'We understand your hiring needs, company culture, and ideal candidate profile.',
  },
  {
    number: '02',
    title: 'Talent Sourcing',
    description:
      'Our recruitment experts identify qualified candidates from multiple channels.',
  },
  {
    number: '03',
    title: 'Pre-Screening',
    description:
      'Candidates are assessed for skills, experience, communication, and fitment.',
  },
  {
    number: '04',
    title: 'Shortlisting',
    description:
      'Only the most relevant and job-ready profiles are presented to your team.',
  },
  {
    number: '05',
    title: 'Interview Coordination',
    description:
      'We schedule interviews and ensure smooth communication throughout the process.',
  },
  {
    number: '06',
    title: 'Successful Placement',
    description:
      'We support onboarding and ensure a successful hiring outcome.',
  },
]

export function ProcessTimelineSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Recruitment Process
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Our Proven Recruitment Methodology
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            We follow a structured, quality-driven recruitment process that
            helps organizations hire faster while ensuring the right talent fit.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-gradient-to-r from-primary via-blue-500 to-primary lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="relative"
              >
                {/* Number Circle */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(37,99,235,0.3)',
                      '0 0 25px rgba(37,99,235,0.5)',
                      '0 0 0px rgba(37,99,235,0.3)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600 text-2xl font-bold text-white shadow-xl"
                >
                  {step.number}
                </motion.div>

                {/* Card */}
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-2xl">
                  <h3 className="mb-3 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/5 via-blue-50 to-primary/5 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground">
            Faster Hiring. Better Talent. Proven Results.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our recruitment specialists carefully evaluate every candidate
            before presenting them to your organization, helping you save time
            and hire with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}