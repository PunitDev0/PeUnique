"use client";

import React from "react";
import { CreditCard, BarChart3, Shield, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import Navbar from "../Layout/Navbar";

export default function EducationAPIServicesPage() {
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
            Education API Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Empower Education with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
              PeUnique APIs
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Integrate advanced fintech APIs to streamline payments, offer student financing, and enhance financial literacy in educational institutions and platforms.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          {/* API Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Education API Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Fee Payment API",
                  description: "Simplify tuition and fee collection with secure, multi-channel payment options.",
                  image: "https://plus.unsplash.com/premium_photo-1682104376321-63afb07e8f97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with an image of a payment interface
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Student Financing API",
                  description: "Provide flexible financing plans for students with real-time approval.",
                  image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmluYW5jaWFsfGVufDB8fDB8fHww", // Replace with an image of a financing offer
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  title: "Financial Literacy API",
                  description: "Embed tools to teach students budgeting and financial planning.",
                  image: "https://plus.unsplash.com/premium_photo-1682310056521-cc7357fc72cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaW5nJTIwc29sdXRpb258ZW58MHx8MHx8fDA%3D", // Replace with an image of a learning dashboard
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
              Why Partner with PeUnique?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Effortless Integration",
                  description: "Quickly integrate our APIs into your education platform or system.",
                  image: "/images/integration-edu.jpg", // Replace with an image of code or a connected system
                },
                {
                  title: "Secure Transactions",
                  description: "Protect sensitive financial data with top-tier encryption.",
                  image: "/images/security-edu.jpg", // Replace with an image of a lock or shield
                },
                {
                  title: "Customizable Solutions",
                  description: "Tailor our APIs to fit your institution’s unique needs.",
                  image: "/images/customization-edu.jpg", // Replace with an image of a settings interface
                },
                {
                  title: "Support for Growth",
                  description: "Scale your financial operations as your institution expands.",
                  image: "/images/growth-edu.jpg", // Replace with an image of a growth chart
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
                  step: "1. Sign Up",
                  description: "Register and access our API sandbox and documentation.",
                  icon: <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  step: "2. Integrate",
                  description: "Embed our APIs into your education platform seamlessly.",
                  icon: <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                },
                {
                  step: "3. Empower",
                  description: "Enhance financial operations and student experiences.",
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

          {/* Success Stories */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "PeUnique’s Fee Payment API reduced our processing time by 50%.",
                  author: "Greenwood University",
                  image: "/images/university-success.jpg", // Replace with an image of a university
                },
                {
                  quote: "The Financial Literacy API transformed how we educate our students.",
                  author: "EduTech Platform",
                  image: "/images/edutech-success.jpg", // Replace with an image of an edtech interface
                },
              ].map((story, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 flex items-center"
                >
                  <img
                    src={story.image}
                    alt={story.author}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">"{story.quote}"</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{story.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Revolutionize Education Finance?
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