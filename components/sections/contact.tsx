'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="w-full py-20 sm:py-32 bg-gradient-to-b from-primary/5 to-accent/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-foreground text-balance">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions? Our team is ready to help. Fill out the form below
            and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/20 bg-white p-8 sm:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Tell us about your recruitment needs..."
              />
            </div>

            <motion.button
              whileHover={{ translateY: -3 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={submitted}
              className="w-full rounded-[16px] border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.12)] px-6 py-3.5 font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)] hover:bg-gradient-to-r hover:from-[rgba(37,99,235,0.9)] hover:to-[rgba(59,130,246,0.8)] disabled:opacity-75"
            >
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
