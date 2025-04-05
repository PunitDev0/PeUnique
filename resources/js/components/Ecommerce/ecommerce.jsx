"use client";

import React from "react";
import { CreditCard, BarChart3, Shield, ArrowRight, Lock, Truck } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import Navbar from "../Layout/Navbar";

export default function EcommerceAPIServicesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-purple-950/40 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-purple-200/30 dark:bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-40 left-[5%] w-96 h-96 rounded-full bg-purple-100/40 dark:bg-purple-500/10 blur-[120px]" />

        {/* Header */}
        <header className="relative pt-20 pb-10 px-4 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <span className="mr-2 bg-purple-500 rounded-full w-2 h-2"></span>
            eCommerce API Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Supercharge Your eCommerce with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
              PeUnique APIs
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Integrate cutting-edge fintech APIs into your eCommerce platform for seamless payments, actionable insights, and innovative financing solutions.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          {/* API Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our eCommerce API Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Payment Processing API",
                  description: "Enable secure, fast, and multi-method payment options for your customers.",
                  image: "/images/payment-api.jpg", // Replace with an image of a payment gateway interface
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Financial Insights API",
                  description: "Provide real-time spending analytics to optimize customer experiences.",
                  image: "/images/insights-api.jpg", // Replace with an image of a dashboard or chart
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Financing Solutions API",
                  description: "Offer flexible buy-now-pay-later options with 0% interest.",
                  image: "/images/financing-api.jpg", // Replace with an image of a financing offer
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 text-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Why Integrate with PeUnique?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Seamless Integration",
                  description: "Easily embed our APIs into your existing eCommerce platform with minimal effort.",
                  image: "/images/integration.jpg", // Replace with an image of code or a connected system
                },
                {
                  title: "Enhanced Security",
                  description: "Bank-level encryption ensures your customers’ data is always protected.",
                  image: "/images/security.jpg", // Replace with an image of a lock or shield
                },
                {
                  title: "Scalable Solutions",
                  description: "Grow your business with APIs designed to handle increasing transaction volumes.",
                  image: "/images/scalability.jpg", // Replace with an image of a growth chart
                },
                {
                  title: "Developer-Friendly",
                  description: "Comprehensive documentation and support for quick implementation.",
                  image: "/images/developer.jpg", // Replace with an image of a developer working
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 flex items-center"
                >
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-20 h-20 object-cover rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1. Connect",
                  description: "Sign up and get access to our API documentation and sandbox environment.",
                  icon: <Lock className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  step: "2. Integrate",
                  description: "Use our APIs to enhance your eCommerce platform with fintech features.",
                  icon: <Truck className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  step: "3. Scale",
                  description: "Watch your business grow with our reliable and secure solutions.",
                  icon: <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 text-center"
                >
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.step}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your eCommerce Platform?
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
                href="/api-docs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 dark:border-purple-900/30 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-900/20 font-medium transition-colors"
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