"use client";

import { ArrowRight, Award, BarChart3, Globe, Shield, Users, DollarSign, Link as LinkIcon, Repeat, Smartphone } from "lucide-react";
import { Link, Head } from "@inertiajs/react";

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
      <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-purple-300/20 dark:bg-purple-700/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-purple-200/20 dark:bg-purple-600/10 blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-36 relative z-10">
        {/* About Header */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-purple-100/80 dark:bg-purple-800/20 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-bounce" />
            About PeUnique
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
            Innovating Payments for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-500">
              Smarter Digital Economy
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 sm:mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            PeUnique is redefining India’s payment ecosystem with secure, seamless, and innovative financial solutions.
            Supporting 150+ payment modes, we empower businesses with fast transactions and simplified integrations.
          </p>
        </header>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {[
            {
              title: "Innovative Payment Gateway for a Smarter Digital Economy",
              description:
                "PeUnique emerges as a pioneering force in India's payment and API banking landscape, offering seamless, secure, and innovative financial solutions. Our comprehensive suite of payment services empowers businesses of all sizes to accept payments and facilitate payouts effortlessly. With 150+ payment modes, PeUnique ensures faster transactions, simplified integrations, and reliable financial solutions for businesses across India.",
              link: "/digital-payments",
            },
            {
              title: "Leading the Future of Digital Payments",
              description:
                "With the trust of global businesses, PeUnique is at the forefront of payment collections, vendor and salary payouts, bulk refunds, expense reimbursements, and loyalty programs. Our platform serves as the backbone for e-commerce, education, retail, fintech startups, and enterprise businesses, ensuring they thrive in today’s fast-paced digital economy.",
              link: "/online-payments",
            },
            {
              title: "Online Payment Gateway",
              description:
                "Enjoy the hassle-free online payments platform with PeUnique Payment Gateway, the best Online Payment Gateway provider in Noida. We support all major modes of payment, including credit & debit cards, Net-Banking, UPI, Wallets, Bharat QR, and much more, ensuring secure and seamless transactions for businesses of all sizes.",
              link: "/online-payments",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900/80 p-5 sm:p-6 rounded-xl border border-gray-200/50 dark:border-purple-900/20 shadow-lg dark:shadow-purple-900/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 relative z-10">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 sm:mb-5 relative z-10">{item.description}</p>
              <Link
                href={item.link}
                className="flex items-center text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 font-medium transition-colors relative z-10 text-sm sm:text-base"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Features with Enhanced Styling */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10 sm:mb-12 tracking-tight">Additional Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                icon: <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                title: "Offline Payments",
                description: "India’s first B2B collection solution provider in Noida that enables businesses to collect payments from their partners, dealers, and agents through a Virtual Account Number (VAN) with prior validation, ensuring secure and efficient transactions.",
              },
              {
                icon: <Repeat className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                title: "B2B e-Collect",
                description: "India’s first B2B collection solution provider in Noida that enables businesses to collect payments from their partners, dealers, and agents through a Virtual Account Number (VAN) with prior validation, ensuring secure and efficient transactions.",
              },
              {
                icon: <Repeat className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                title: "eNACH",
                description: "With PeUnique's eNACH provider in Noida, recurring payments can be processed and collected through e-mandates, ensuring seamless automation of payment collections to enhance cash flow management.",
              },
              {
                icon: <DollarSign className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                title: "Payouts",
                description: "Payouts with PeUnique, a leading provider in Noida, enable quick and easy money transfers online, offering complete control over transactions with the easiest reconciliation and settlement system",
              },
              {
                icon: <LinkIcon className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                title: "Payment Links",
                description: "Payment Link, offered by PeUnique, a leading provider in Noida, is a link-based payment solution that enables businesses to collect payments seamlessly through multiple payment methods, ensuring convenience and security..",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-900/90 p-5 sm:p-6 rounded-xl border border-gray-200/50 dark:border-purple-900/30 shadow-md dark:shadow-purple-900/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-2 bg-purple-100/80 dark:bg-purple-800/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{feature.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Are */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-white dark:bg-gray-900/80 p-6 sm:p-8 rounded-xl border border-gray-200/50 dark:border-purple-900/20 shadow-lg dark:shadow-purple-900/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 animate-gradient" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Who We Are</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                  Founded in 2024 and headquartered in Noida, PeUnique has quickly established itself as a leading fintech innovator, with regional offices across India. We are dedicated to delivering simplified and secure payment solutions with customizable options to meet each client’s unique needs.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                  PeUnique offers secure and seamless payment solutions for businesses, supporting UPI, cards, net banking, QR payments, and payment links. We cater to e-commerce, retail, education, and B2B services, ensuring efficient and hassle-free transactions.
                </p>
              </div>
              <div className="relative h-60 sm:h-72 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="PeUnique team"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-10 tracking-tight">Why Choose PeUnique?</h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base font-light">
            PeUnique powers businesses with a versatile payment gateway, offering secure, scalable solutions for all industries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
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
                className="bg-white dark:bg-gray-900/80 p-5 sm:p-6 rounded-xl border border-gray-200/50 dark:border-purple-900/20 shadow-lg dark:shadow-purple-900/10 text-center transition-all hover:scale-105 hover:shadow-xl duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="flex justify-center mb-4 text-purple-600 dark:text-purple-400 relative z-10 h-6 w-6 sm:h-8 sm:w-8">{value.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 relative z-10">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: "150+", label: "Payment Modes" },
            { value: "24/7", label: "Support" },
            { value: "2024", label: "Founded" },
            { value: "Noida", label: "HQ" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900/80 p-5 sm:p-6 rounded-xl border border-gray-200/50 dark:border-purple-900/20 shadow-lg dark:shadow-purple-900/10 text-center hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50 dark:hover:from-purple-900/50 dark:hover:to-indigo-900/50 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl sm:text-lg md:text-xl max-w-full font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            With PeUnique, businesses get a secure, scalable, and efficient payment gateway tailored to meet their specific needs. Whether you're processing bulk payouts, managing subscription payments, or optimizing checkout experiences, we provide the best-in-class solutions to drive your business growth.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="px-5 py-2 sm:px-6 sm:py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="px-5 py-2 sm:px-6 sm:py-3 rounded-lg border border-gray-300 dark:border-purple-900/30 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-900/30 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Animation for Gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}