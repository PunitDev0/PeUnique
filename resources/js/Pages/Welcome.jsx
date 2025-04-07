"use client";

import { Link } from "@inertiajs/react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroPage/hero-section";
import { TestimonialSection } from "@/components/HeroPage/testimonial-section";
import { HowItWorksSection } from "@/components/HeroPage/how-it-works-section";
import PaymentGatewayFeatures from "@/components/HeroPage/paymentgatewayfeature";
import { PartnerSection } from "@/components/HeroPage/partner-section";
import { CtaSection } from "@/components/HeroPage/cta-section";
import Navbar from "@/components/Layout/Navbar";
import PaymentSolutions from "@/components/HeroPage/payment-solutio";
import { Helmet } from "react-helmet-async";
import TestimonialCarousel from "@/components/HeroPage/testinmonials";
import FeatureShowcase from "@/components/HeroPage/features";
import Footer from "@/components/Layout/Footer";
import PaymentGatewayInfo from "@/components/HeroPage/FAQSection";
import CategorySection from "@/components/HeroPage/categorySection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          PeUnique | Best Payment Gateway in India - Secure API Solutions in Noida
        </title>
        <meta
          name="description"
          content="Discover PeUnique, the best payment gateway in India based in Noida. Integrate secure payment APIs with 150+ modes for e-commerce, education, retail, and apps. Fast, reliable, and fraud-protected transactions."
        />
        <meta name="keywords" content="payment gateway India, secure payment API, Noida payment gateway, e-commerce payment solutions, UPI payment gateway, PeUnique" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://peunique.com/" />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <header>
          <Navbar />
        </header>
        <main className="mt-5 flex-1">
          <HeroSection />
          <HowItWorksSection />
          <PaymentGatewayFeatures />
          <PaymentSolutions />
          <CategorySection />
          {/* <FeatureShowcase /> */}
          {/* <TestimonialCarousel /> */}
          <PaymentGatewayInfo />
          {/* <TestimonialSection /> */}
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}