'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Building2,
  Send,
  User,
  MessageSquare,
} from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)

      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-blue-50/50" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Contact JOBS Matrix
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Let's Build Your Team Together
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Whether you're hiring top talent or looking for your next career
            opportunity, our recruitment specialists are ready to help.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Mail className="mb-4 h-10 w-10 text-primary" />

                <h3 className="text-lg font-semibold text-slate-900">
                  Email Us
                </h3>

                <p className="mt-2 text-slate-600">
                  jobsmatrixconsultancy@gmail.com
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Phone className="mb-4 h-10 w-10 text-primary" />

                <h3 className="text-lg font-semibold text-slate-900">
                  Call Us
                </h3>

                <p className="mt-2 text-slate-600">
                  +91 92326 83839
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <Building2 className="mb-4 h-10 w-10 text-primary" />

                <h3 className="text-lg font-semibold text-slate-900">
                  Recruitment Expertise
                </h3>

                <p className="mt-2 text-slate-600">
                  IT Recruitment, Non-IT Hiring, Executive Search,
                  Contract Staffing & Bulk Hiring Solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name
                    </label>

                    <div className="relative">
                      <User className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-slate-900 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-slate-900 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                    <textarea
                      rows={6}
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your hiring requirements..."
                      className="w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 pt-4 text-slate-900 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>

                {/* Visible CTA Button */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  disabled={submitted}
                  className="
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-primary
                    to-blue-600
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    hover:shadow-xl
                    disabled:opacity-70
                  "
                >
                  <Send size={18} />

                  {submitted
                    ? 'Message Sent Successfully'
                    : 'Send Message'}
                </motion.button>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}