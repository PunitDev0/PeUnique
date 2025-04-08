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

      <div className="flex min-h-screen flex-col">
        <header>
          <Navbar />
        </header>
        <main className="mt-5 flex-1">
          <HeroSection />
          <HowItWorksSection />
          <PaymentGatewayFeatures />
          <PaymentSolutions />
          {/* <CategorySection /> */}
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