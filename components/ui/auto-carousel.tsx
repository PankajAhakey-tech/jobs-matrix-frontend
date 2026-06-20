'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AutoCarouselProps {
  items: React.ReactNode[]
  interval?: number
  autoPlay?: boolean
}

export function AutoCarousel({
  items,
  interval = 4000,
  autoPlay = true,
}: AutoCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [items.length, interval, autoPlay])

  const next = () => setCurrent((prev) => (prev + 1) % items.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + items.length) % items.length)

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {items[current]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 pt-8">
        {items.map((_, idx) => (
          <motion.button
            key={`dot-${idx}`}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current
                ? 'w-8 bg-primary'
                : 'w-2 bg-muted hover:bg-muted-foreground'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] backdrop-blur-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] text-white transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:scale-105"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] backdrop-blur-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] text-white transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:scale-105"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}
