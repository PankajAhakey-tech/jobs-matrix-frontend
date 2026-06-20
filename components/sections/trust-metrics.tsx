'use client'

import { AnimatedCounter } from '@/components/ui/animated-counter'
import { motion } from 'framer-motion'

export function TrustMetricsSection() {
  const metrics = [
    {
      value: 98,
      label: 'Client Satisfaction',
      suffix: '%',
      icon: '⭐',
    },
    {
      value: 40,
      label: 'Faster Hiring',
      suffix: '%',
      icon: '⚡',
    },
    {
      value: 24,
      label: 'Hours Response Time',
      suffix: '',
      icon: '⏰',
    },
    {
      value: 250,
      label: 'Active Placements',
      suffix: '+',
      icon: '👥',
    },
  ]

  return (
    <section className="w-full py-20 sm:py-32 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-foreground text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our proven track record speaks for itself across all metrics.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={`metric-${idx}-${metric.label}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-primary/20 bg-white/50 p-8 text-center backdrop-blur-sm"
            >
              <div className="mb-4 text-4xl">{metric.icon}</div>
              <div className="mb-2 text-4xl font-bold text-primary">
                <AnimatedCounter
                  to={metric.value}
                  suffix={metric.suffix}
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
