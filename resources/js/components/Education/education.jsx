"use client";

import React from "react";
import { CreditCard, BarChart3, Shield, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import Navbar from "../Layout/Navbar";

export default function EducationAPIServicesPage() {
  return (
    <>
     <Head>
       <title>Best Payment Gateway Solution For Education Sector in India </title>
       <meta
          name="description"
          content="Online fee Payment Solutions for schools, colleges, and educational institutions with 150+ Payment Modes including UPI, cards, net banking, and wallets."
        />
     </Head>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-purple-950/40 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-purple-200/30 dark:bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-40 left-[5%] w-96 h-96 rounded-full bg-purple-100/40 dark:bg-purple-500/10 blur-[120px]" />

        {/* Header */}
        <header className="relative pt-20 pb-10 px-4 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <span className="mr-2 bg-purple-500 rounded-full w-2 h-2"></span>
            Education Payment Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 ">
            Smart Payment Solutions Trusted by Leading Educational Institutions in India
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            PeUnique empowers 1000+ schools, colleges, universities, coaching institutes, and online learning centers with secure and streamlined fee collection. Our education-specific payment gateway handles your payments end-to-end—so you can focus on delivering quality education, not managing transactions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/signup">🎓 Start Today – Sign Up Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">📞 Need Help? – Get in Touch</Link>
            </Button>
          </div>
        </header>

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
                  title: "Schools, Colleges & Universities",
                  description: "Simplify tuition fee collection, admission charges, exam fees, and hostel payments with seamless integration customized for academic institutions.",
                  image: "https://plus.unsplash.com/premium_photo-1682104376321-63afb07e8f97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Coaching & Training Institutes",
                  description: "Collect course fees, workshop registrations, and recurring payments online using UPI, Cards, Net Banking, Wallets, and more.",
                  image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jaWFsfGVufDB8fDB8fHww",
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Online Learning Platforms & Ed-Tech Companies",
                  description: "Offer flexible payment options for online courses, subscriptions, and learning tools—fully optimized for web and mobile users.",
                  image: "https://plus.unsplash.com/premium_photo-1682310056521-cc7357fc72cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaW5nJTIwc29sdXRpb258ZW58MHx8MHx8fDA%3D",
                },
                {
                  icon: <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "ERP & CRM Software Providers for Education",
                  description: "Easily integrate PeUnique’s gateway with your ERP or CRM systems for automated fee reconciliation, real-time reporting, and enhanced control.",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Academic Institutions & Tuition Centers",
                  description: "Enable secure, fast, and organized collections for tuition, admission fees, and extra-curricular programs—all with a simple setup.",
                  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Educational Websites & Portals",
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