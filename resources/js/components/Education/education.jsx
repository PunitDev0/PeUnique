"use client";

import React from "react";
import { CreditCard, BarChart3, Shield, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import Navbar from "../Layout/Navbar";
import { HeroSection } from "../HeroPage/hero-section";

export default function EducationAPIServicesPage({meta}) {
  return (
    <>
     <Head>
       <title>{meta?.title}</title>
       <meta
          name="description"
          content={meta?.description}
        />
     </Head>
      <Navbar />
      <HeroSection title={ 'Smart Payment Solutions Trusted by Leading Educational Institutions in India'} description={"PeUnique empowers 1000+ schools, colleges, universities, coaching institutes, and online learning centers with secure and streamlined fee collection. Our education-specific payment gateway handles your payments end-to-end—so you can focus on delivering quality education, not managing transactions."} alt={'education secure payment gateway'} />
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-purple-950/40 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-purple-200/30 dark:bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-40 left-[5%] w-96 h-96 rounded-full bg-purple-100/40 dark:bg-purple-500/10 blur-[120px]" />



        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          {/* Smart Payment Solutions Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Smart Payment Solutions for the Education Industry in India
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Schools, Colleges & Universities Payment Gateway",
                  description: "Simplify tuition fee collection, admission charges, exam fees, and hostel payments with seamless integration customized for academic institutions.",
                  image: "/assets/friends-with-smile-happy-emotions-university.jpg",
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Coaching & Training Institutes Payment Gateway",
                  description: "Collect course fees, workshop registrations, and recurring payments online using UPI, Cards, Net Banking, Wallets, and more.",
                  image: "/assets/people-taking-part-business-event.jpg",
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Online Learning Platforms & Ed-Tech Companies Payment Gateway",
                  description: "Offer flexible payment options for online courses, subscriptions, and learning tools—fully optimized for web and mobile users.",
                  image: "/assets/PeUnique45.png",
                },
                {
                  icon: <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "ERP & CRM Software Providers for Education Payment Gateway",
                  description: "Easily integrate PeUnique’s gateway with your ERP or CRM systems for automated fee reconciliation, real-time reporting, and enhanced control.",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Academic Institutions & Tuition Centers Payment Gateway",
                  description: "Enable secure, fast, and organized collections for tuition, admission fees, and extra-curricular programs—all with a simple setup.",
                  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Educational Websites & Portals Payment Gateway",
                  description: "Embed our payment solutions for donations, paid resources, registrations, or course access on your informational website or portal.",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 text-center"
                >
                  <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              From tuition to admission fees — manage all educational payments online with ease and confidence.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-8">
              Say goodbye to outdated fee collection systems. Embrace an automated, seamless, and secure way to collect payments online with PeUnique’s advanced payment gateway for education.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Accept Payments from Multiple Sources",
                  description: "Allow students and parents to conveniently pay for tuition, admissions, or courses using 150+ payment options like UPI, cards, net banking, wallets, and more—securely and seamlessly.",
                  icon: <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Unmatched Success Rates",
                  description: "With PeUnique’s robust infrastructure, enjoy smooth, failure-free transactions backed by enterprise-grade reliability.",
                  icon: <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Instant Onboarding",
                  description: "Get started in just 15 minutes — no paperwork needed! Our quick activation process ensures you start accepting payments immediately.",
                  icon: <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Fast & Reliable Settlements",
                  description: "Receive your settlements by the next business day, including weekends and bank holidays — helping you maintain healthy cash flow.",
                  icon: <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Powerful Reconciliation Dashboard",
                  description: "Track every transaction in real-time with detailed reporting and analytics. Simplify your accounting and reconciliation effortlessly.",
                  icon: <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Effortless ERP/CRM Integration",
                  description: "Easily integrate PeUnique's payment solutions with your existing institute management systems, websites, or education ERPs. We also work with 200+ technology partners for seamless connectivity.",
                  icon: <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 flex items-center"
                >
                  <div className="mr-4">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Benefits</h4>
            <ul className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto space-y-2">
              <li>✅ Accept fees through UPI, Cards, Net Banking, Wallets, Payment Links, QR Codes</li>
              <li>✅ Fully automated reminders, receipts, and reports</li>
              <li>✅ Secure and PCI-DSS compliant</li>
              <li>✅ Real-time dashboards and reconciliation</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Streamline Your Educational Payments?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 dark:border-purple-900/30 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-900/20 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </main>

        {/* Footer Note */}
        <footer className="text-center py-6 text-gray-600 dark:text-gray-400">
          <p>Best Regards, The PeUnique Team</p>
        </footer>
      </div>
    </>
  );
}