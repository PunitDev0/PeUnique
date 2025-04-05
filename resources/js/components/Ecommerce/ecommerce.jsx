"use client";

import React from "react";
import { CreditCard, BarChart3, Shield, ArrowRight, Lock, Truck, Smartphone, Repeat, DollarSign, Link as LinkIcon, Globe, Award, Users } from "lucide-react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "../Layout/Navbar";

export default function EcommerceAPIServicesPage() {
  return (
    <>
      <Head>
        <title>Best E-Commerce Payment Gateway System Provider in India</title>
        <meta
          name="description"
          content="Simplify Digital Payments With An Advanced E-Commerce Payment Gateway, Supporting credit cards, UPI, Banking and Wallets for Smooth Transactions."
        />
      </Head>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-purple-950/40 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 right-[5%] sm:right-[10%] w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-purple-200/30 dark:bg-purple-600/10 blur-[80px] sm:blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 sm:bottom-40 left-[2%] sm:left-[5%] w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-100/40 dark:bg-purple-500/10 blur-[100px] sm:blur-[120px] animate-pulse" />

        {/* Header */}
        <header className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="mr-2 bg-purple-500 rounded-full w-1.5 h-1.5 sm:w-2 sm:h-2 animate-bounce" />
            eCommerce Payment Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            The Most Secure Digital Payment System for E-Commerce in Noida
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Simplify e-commerce with a secure digital payment Gateway supporting 150+ modes, including UPI, QR Pay, Link Pay, Cards, Payouts, and Wallets.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 relative z-10">
          {/* API Services Section */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 text-center tracking-tight">
              Our eCommerce API Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  icon: <CreditCard className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Payment Processing API",
                  description: "Enable secure, fast, and multi-method payment options for your customers.",
                  image: "https://plus.unsplash.com/premium_photo-1682104376321-63afb07e8f97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  icon: <BarChart3 className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Financial Insights API",
                  description: "Provide real-time spending analytics to optimize customer experiences.",
                  image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jaWFsfGVufDB8fDB8fHww",
                },
                {
                  icon: <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Financing Solutions API",
                  description: "Offer flexible buy-now-pay-later options with 0% interest.",
                  image: "https://plus.unsplash.com/premium_photo-1682310056521-cc7357fc72cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaW5nJTIwc29sdXRpb258ZW58MHx8MHx8fDA%3D",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-28 sm:h-32 object-cover rounded-lg mb-4 relative z-10"
                  />
                  <div className="flex justify-center mb-4 relative z-10">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 relative z-10">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base relative z-10">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* H2 Sections */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 text-center tracking-tight">
              Tailored Payment Gateway Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: "Shopify & Online Store Payment Gateway in Noida",
                  description: "Seamlessly integrate a secure payment gateway with Shopify and other online store platforms in Noida. Accept multiple payment methods, including UPI, Cards, Net Banking, and Wallets, ensuring a smooth checkout experience for customers.",
                  icon: <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Retail Payment Gateway for Physical & Online Stores in Noida",
                  description: "Accept payments in-store and online with QR-based payments, POS transactions, and contactless payment options in Noida. Enable fast and secure transactions while reducing fraud risks.",
                  icon: <BarChart3 className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Wholesale & B2B Payment Gateway in Noida",
                  description: "Empower wholesalers, distributors, and B2B marketplaces in Noida with secure payment processing for bulk transactions. Support Virtual Account Numbers (VAN), payouts, and automated settlements.",
                  icon: <Truck className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Marketplace & Multi-Vendor Payment Gateway in Noida",
                  description: "Easily manage transactions in multi-vendor marketplaces in Noida with automated vendor payouts and split payments. Ensure seamless payments for both sellers and buyers.",
                  icon: <Users className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Subscription & Recurring Payment Solutions in Noida",
                  description: "Automate recurring payments for subscription-based businesses in Noida with eNACH, e-mandates, and multiple billing cycles. Ideal for SaaS, memberships, and digital services.",
                  icon: <Repeat className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "UPI & QR Code Payments in Noida",
                  description: "Enable instant payments with UPI and QR codes for fast, hassle-free transactions in Noida. Perfect for both online and offline businesses.",
                  icon: <CreditCard className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Link-Based Payment Solutions in Noida",
                  description: "Collect payments easily with Payment Links, allowing businesses in Noida to receive payments without a website or app. Share links via SMS, email, or WhatsApp.",
                  icon: <LinkIcon className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Multi-Currency & International Payments in Noida",
                  description: "Expand globally with multi-currency support and accept payments from international customers with ease in Noida.",
                  icon: <Globe className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Fraud Prevention & Security Compliance in Noida",
                  description: "Ensure secure transactions with PCI DSS compliance, AI-driven fraud detection, and end-to-end encryption for risk-free payments in Noida.",
                  icon: <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Fast Payouts & Settlements in Noida",
                  description: "Get instant access to your funds with quick settlement options that help maintain a smooth cash flow for businesses in Noida.",
                  icon: <DollarSign className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  title: "Easy Integration with E-Commerce Platforms in Noida",
                  description: "Integrate effortlessly with Shopify, WooCommerce, Magento, OpenCart, and custom e-commerce websites in Noida with ready-to-use APIs and plugins.",
                  icon: <Award className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex justify-center mb-4 relative z-10">{item.icon}</div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 relative z-10">{item.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base relative z-10">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* H3 Section */}
          <section className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center tracking-tight">
              E-Commerce Payment Gateway Solutions for Every Business
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-light text-center">
              We provide a reliable and secure e-commerce payment gateway tailored for businesses of all sizes. Whether you run an online store, retail shop, wholesale business, or multi-vendor marketplace, our gateway ensures fast, secure, and hassle-free transactions. Accept payments seamlessly with 150+ payment modes, including UPI, QR Pay, Link Pay, Cards, Net Banking, Payouts, and Wallets, empowering your business with a seamless digital payment experience.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 text-center tracking-tight">
              Why Integrate with PeUnique?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Seamless Integration",
                  description: "Easily embed our APIs into your existing eCommerce platform with minimal effort.",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=100&h=100&q=80",
                },
                {
                  title: "Enhanced Security",
                  description: "Bank-level encryption ensures your customers’ data is always protected.",
                  image: "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
                },
                {
                  title: "Scalable Solutions",
                  description: "Grow your business with APIs designed to handle increasing transaction volumes.",
                  image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?fit=crop&w=100&h=100&q=80",
                },
                {
                  title: "Developer-Friendly",
                  description: "Comprehensive documentation and support for quick implementation.",
                  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=100&h=100&q=80",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 flex items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mr-3 sm:mr-4 relative z-10"
                  />
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 text-center tracking-tight">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  step: "1. Connect",
                  description: "Sign up and get access to our API documentation and sandbox environment.",
                  icon: <Lock className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  step: "2. Integrate",
                  description: "Use our APIs to enhance your eCommerce platform with fintech features.",
                  icon: <Truck className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  step: "3. Scale",
                  description: "Watch your business grow with our reliable and secure solutions.",
                  icon: <BarChart3 className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex justify-center mb-4 relative z-10">{step.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 relative z-10">{step.step}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Ready to Transform Your eCommerce Platform?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/api-docs"
                className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 rounded-lg border border-gray-200 dark:border-purple-900/30 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-900/20 font-medium transition-colors shadow-md hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
              >
                View API Docs
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}