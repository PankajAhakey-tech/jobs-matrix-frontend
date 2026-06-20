'use client'

import { AutoCarousel } from '@/components/ui/auto-carousel'
import { ArrowRight, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const heroButtonClass = `
group
relative
overflow-hidden

inline-flex items-center gap-2

rounded-[24px]
border border-white/25

bg-[rgba(255,255,255,0.12)]
backdrop-blur-xl

px-8 py-4

font-semibold
text-white

shadow-[0_8px_32px_rgba(0,0,0,0.12)]

transition-all
duration-300
ease-out

hover:-translate-y-1
hover:scale-[1.03]
hover:border-white/40
hover:bg-gradient-to-r
hover:from-[rgba(37,99,235,0.9)]
hover:to-[rgba(59,130,246,0.8)]
hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)]
`

const heroSlides = [
  {
    title: 'Executive Talent, Delivered',
    subtitle:
      'Connect with C-level executives and senior leaders who drive your business forward.',
    cta: 'Find Top Talent',
    image: '/images/hero-executive.png',
  },
  {
    title: 'Technical Expertise at Scale',
    subtitle:
      'Access a vetted network of engineers, architects, and technical leaders.',
    cta: 'Build Your Team',
    image: '/images/hero-technical.png',
  },
  {
    title: 'Industry-Specific Solutions',
    subtitle:
      'From finance to healthcare, we specialize in sector-specific recruitment.',
    cta: 'Explore Industries',
    image: '/images/hero-industry.png',
  },
]

function HeroSlide({ slide }: { slide: (typeof heroSlides)[0] }) {
  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
              {slide.title}
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl text-balance">
              {slide.subtitle}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
            <Link href="#contact" className={heroButtonClass}>
  <span
    className="
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />

  <span className="relative z-10">Business Enquiry</span>
  <ArrowRight className="relative z-10 h-4 w-4" />
</Link>

             <Link href="#jobs" className={heroButtonClass}>
  <span
    className="
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />

  <span className="relative z-10">Looking For Job</span>
  <Briefcase className="relative z-10 h-4 w-4" />
</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="w-full">
      <AutoCarousel
        autoPlay
        interval={5000}
        showControls={false}
        showIndicators={true}
        items={heroSlides.map((slide, idx) => (
          <HeroSlide
            key={idx}
            slide={slide}
          />
        ))}
      />
    </section>
  )
}
