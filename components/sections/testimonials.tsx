'use client'

import { AutoCarousel } from '@/components/ui/auto-carousel'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'JOBS Matrix found us three exceptional engineering leads within 3 weeks. Their understanding of technical requirements was unmatched.',
    author: 'Sarah Chen',
    title: 'CTO, TechVenture Inc',
    avatar: '👩‍💼',
  },
  {
    quote:
      'The professionalism and responsiveness of the team made the entire hiring process seamless. Highly recommended.',
    author: 'Michael Rodriguez',
    title: 'VP of People, Global Finance',
    avatar: '👨‍💼',
  },
  {
    quote:
      'After struggling with recruitment for months, JOBS Matrix delivered exactly what we needed. True partners in growth.',
    author: 'Emma Thompson',
    title: 'CEO, Healthcare Solutions',
    avatar: '👩‍⚕️',
  },
]

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-primary/20 bg-white p-8 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-xl">
            ⭐
          </span>
        ))}
      </div>
      <blockquote className="mb-6 text-lg italic text-foreground">
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="text-3xl">{testimonial.avatar}</div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real success stories from companies we&apos;ve helped grow.
          </p>
        </motion.div>

        <AutoCarousel items={testimonials.map((t, idx) => <TestimonialCard key={`testimonial-${idx}-${t.author}`} testimonial={t} />)} interval={5000} />
      </div>
    </section>
  )
}
