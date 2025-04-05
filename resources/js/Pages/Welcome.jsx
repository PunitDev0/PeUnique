'use client'
import { Link } from "@inertiajs/react"
import { Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/HeroPage/hero-section"
import { TestimonialSection } from "@/components/HeroPage/testimonial-section"
// import { FeatureSection } from "@/components/feature-section"
import { HowItWorksSection } from "@/components/HeroPage/how-it-works-section"
import PaymentGatewayFeatures from "@/components/HeroPage/paymentgatewayfeature"
import { PartnerSection } from "@/components/HeroPage/partner-section"
import { CtaSection } from "@/components/HeroPage/cta-section"
import Navbar from "@/components/Layout/Navbar"
import PaymentSolutions from "@/components/HeroPage/payment-solutio"
import { Helmet } from "react-helmet-async"
import TestimonialCarousel from "@/components/HeroPage/testinmonials"
import FeatureShowcase from "@/components/HeroPage/features"
import Footer from "@/components/Layout/Footer"
import PaymentGatewayInfo from "@/components/HeroPage/FAQSection"

export default function Home() {
  return (
    (
    <>
       <Helmet>
        <title>PeUnique|Best Payment Gateway API Provider in Noida – Secure & Reliable</title>
        <meta name="description" content="Power your business with our payment gateway API, supporting 150+ payment modes for e-commerce, education, retail, apps, wallets, and B2B services. Enjoy fast, secure, and seamless transactions with top-notch fraud protection." />
      </Helmet>
    <div className="flex min-h-screen flex-col ">
      <Navbar/>
      <main className="">
        <HeroSection />
        <HowItWorksSection />
        <PaymentGatewayFeatures />
        <PaymentSolutions/>
        {/* <FeatureShowcase/> */}
        {/* <TestimonialCarousel/> */}
        <PaymentGatewayInfo/>
        {/* <TestimonialSection /> */}
        <CtaSection />
      </main>
      <Footer/>
    </div>
    </>)
  );
}

