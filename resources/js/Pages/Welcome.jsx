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
        <FeatureShowcase/>
        <TestimonialCarousel/>
        {/* <TestimonialSection /> */}
        <CtaSection />
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">FinEdge</span>
              </div>
              <p className="text-sm text-muted-foreground">Modern financial solutions for the digital age.</p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinEdge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    </>)
  );
}

