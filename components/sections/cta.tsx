'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-gradient-to-br
            from-slate-900
            via-slate-800
            to-blue-950
            px-6
            py-12
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
            shadow-2xl
          "
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10 text-center">

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-blue-400/30
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-blue-200
              "
            >
              🚀 Recruitment Solutions That Deliver Results
            </span>

            <h2
              className="
                mx-auto
                mt-6
                max-w-4xl
                text-3xl
                font-bold
                text-white
                sm:text-4xl
                lg:text-5xl
                leading-tight
              "
            >
              Ready to Build a High-Performing Team?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                sm:text-lg
                text-slate-300
              "
            >
              Partner with JobsMatrix to hire exceptional talent,
              reduce recruitment time, and strengthen your workforce
              with candidates who truly fit your business goals.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:justify-center
              "
            >
              <Link
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-slate-900
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                Schedule a Consultation →
              </Link>

              <Link
                href="#services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/20
                "
              >
                Explore Our Services
              </Link>
            </div>

            {/* Stats */}
            <div
              className="
                mt-12
                grid
                grid-cols-1
                gap-6
                border-t
                border-white/10
                pt-8
                sm:grid-cols-3
              "
            >
              <div>
                <h3 className="text-2xl font-bold text-white">
                  500+
                </h3>
                <p className="text-sm text-slate-400">
                  Candidates Placed
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  50+
                </h3>
                <p className="text-sm text-slate-400">
                  Hiring Partners
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  95%
                </h3>
                <p className="text-sm text-slate-400">
                  Client Satisfaction
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}