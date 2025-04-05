"use client";

import { ArrowRight, Award, BarChart3, Globe, Shield, Users, DollarSign, Link as LinkIcon, Repeat, Smartphone } from "lucide-react";
import { Link, Head } from "@inertiajs/react";
import { ThemeToggle } from "../HeroPage/theme-toggle";

export default function AboutSection() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-purple-950/50 relative overflow-hidden">
      {/* SEO Head */}
      <Head>
        <title>Best Payment Gateway Provider in India | About Us</title>
        <meta
          name="description"
          content="PeUnique offers secure, seamless payment solutions for businesses with UPI, cards, QR payments, and more. Fast and hassle-free transactions."
        />
      </Head>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-purple-300/20 dark:bg-purple-700/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-purple-200/20 dark:bg-purple-600/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 relative z-10">
        {/* Theme Toggle */}
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>

        {/* About Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 dark:bg-purple-800/20 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full" />
            About PeUnique
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Innovating Payments for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-500">
              Smarter Digital Economy
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            PeUnique is redefining India’s payment ecosystem with secure, seamless, and innovative financial solutions.
            Supporting 150+ payment modes, we empower businesses with fast transactions and simplified integrations.
          </p>
        </header>

        {/* Key Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Future of Digital Payments",
              description:
                "Trusted globally, PeUnique drives payment collections, payouts, refunds, and loyalty programs for e-commerce, education, retail, and fintech businesses.",
              link: "/digital-payments",
            },
            {
              title: "Online Payment Gateway",
              description:
                "Experience seamless payments with support for cards, UPI, Net-Banking, wallets, and QR codes—secure and efficient for all business sizes.",
              link: "/online-payments",
            },
            {
              title: "Scalable Solutions",
              description:
                "From startups to enterprises, our platform offers tailored payment solutions to scale effortlessly in the digital economy.",
              link: "/online-payments",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900/80 p-6 rounded-xl border border-gray-200/50 dark:border-purple-900/20 shadow-lg dark:shadow-purple-900/10 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-5">{item.description}</p>
              <Link
                href={item.link}
                className="flex items-center text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 font-medium transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Features with Enhanced Styling */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Additional Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Smartphone className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                title: "Offline Payments",
                description: "India’s first B2B collection solution provider in Noida that enables businesses to collect payments from their partners, dealers, and agents through a Virtual Account Number (VAN) with prior validation, ensuring secure and efficient transactions.",
              },
              {
                icon: <Repeat className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                title: "B2B e-Collect",
                description: "With PeUnique's eNACH provider in Noida, recurring payments can be processed and collected through e-mandates, ensuring seamless automation of payment collections to enhance cash flow management.",
              },
              {
                icon: <DollarSign className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                title: "Payouts",
                description: "Fast, controlled money transfers with easy reconciliation.",
              },
              {
                icon: <LinkIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                title: "Payment Links",
                description: "Payment Link, offered by PeUnique, a leading provider in Noida, is a link-based payment solution that enables businesses to collect payments seamlessly through multiple payment methods, ensuring convenience and security..",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-900/90 p-6 rounded-xl border border-gray-200/50 dark:border-purple-900/30 shadow-md dark:shadow-purple-900/10 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-purple-100/80 dark:bg-purple-800/20 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Are */}
        <div className="mb-20">
          <div className="bg-white dark:bg-gray-900/80 p-8 rounded-xl border border-gray-200/50 dark:border-purple-900/20 shadow-lg dark:shadow-purple-900/10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Launched in 2024 from Noida, PeUnique is a fintech leader with a mission to simplify payments across
                  India. We offer tailored, secure solutions for all industries.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Supporting UPI, cards, QR codes, and more, we serve e-commerce, retail, education, and B2B with
                  seamless transactions.
                </p>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="PeUnique team"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Why Choose PeUnique?</h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            PeUnique powers businesses with a versatile payment gateway, offering secure, scalable solutions for all industries.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield />, title: "Payment Links", description: "Collect payments instantly by sharing secure links, even without a website." },
              { icon: <BarChart3 />, title: "QR Pay", description: "Accept payments effortlessly through QR codes and secure payment links." },
              { icon: <Users />, title: "UPI Payments", description: "Fast, real-time UPI transactions." },
              { icon: <Globe />, title: "Cards", description: "Support for all major cards, ensuring a smooth online shopping experience." },
              { icon: <Award />, title: "Wallets", description: "Integration with top digital wallets like Paytm, Amazon Pay, and Google Pay." },
              { icon: <ArrowRight />, title: "Net Banking", description: "Direct bank transfers with multiple banking options for easy payments." },
              { icon: <Shield />, title: "EMI Options", description: "Enable installment-based payments to boost sales for high-value orders." },
              { icon: <Globe />, title: "QR Codes", description: "Simple and quick scanning for in-person transactions." },
              { icon: <Award />, title: "Payment Forms", description: "Ready-to-use forms for businesses to streamline payment collection." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900/80 p-6 rounded-xl border border-gray-200/50 dark:border-purple-900/20 shadow-lg dark:shadow-purple-900/10 text-center transition-transform hover:scale-105 duration-300"
              >
                <div className="flex justify-center mb-4 text-purple-600 dark:text-purple-400">{value.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "150+", label: "Payment Modes" },
            { value: "24/7", label: "Support" },
            { value: "2024", label: "Founded" },
            { value: "Noida", label: "HQ" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900/80 p-6 rounded-xl border border-gray-200/50 dark:border-purple-900/20 shadow-lg dark:shadow-purple-900/10 text-center"
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Scale Your Business with PeUnique
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-purple-900/30 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-900/30 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}