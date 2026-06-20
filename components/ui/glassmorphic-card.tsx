'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface GlassmorphicCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  index?: number
}

export function GlassmorphicCard({
  children,
  className = '',
  delay = 0,
  index = 0,
}: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
        boxShadow: '0 8px 32px rgba(69, 108, 213, 0.15)',
      }}
    >
      {children}
    </motion.div>
  )
}
