import { ContactSection } from '@/components/sections/contact'
import { CompanyOverviewSection } from '@/components/sections/company-overview'
import { CTASection } from '@/components/sections/cta'
import { HeroSection } from '@/components/sections/hero'
import { IndustriesSection } from '@/components/sections/industries'
import { ProcessTimelineSection } from '@/components/sections/process-timeline'
import { ServicesSection } from '@/components/sections/services'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { TrustMetricsSection } from '@/components/sections/trust-metrics'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { Footer } from '@/components/layout/footer'
import { Navigation } from '@/components/layout/navigation'

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="w-full">
        <HeroSection />
        <CompanyOverviewSection />
        <ServicesSection />
        <IndustriesSection />
        <WhyChooseUsSection />
        <ProcessTimelineSection />
        <TrustMetricsSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
