"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Code, Database, Terminal, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "@inertiajs/react"

const FeatureCard = ({ title, description, icon, highlighted = false, large = false, index }) => {
  const backgroundImages = {
    0: "/assets/graph.png", // For "150+ Payment Modes"
    2: "/assets/businessSupport.jpeg", // For "Multi-Business Support"
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl p-4 sm:p-6 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 group ${
        highlighted
          ? "bg-gradient-to-br from-[hsl(var(--primary)/0.15)] via-[hsl(var(--primary)/0.1)] to-[hsl(var(--primary)/0.05)] text-[hsl(var(--primary-foreground))]"
          : "bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.3)]"
      } ${large ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Background Image with Overlay */}
      {(index === 0 || index === 2) && (
        <div 
          className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${backgroundImages[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card)/0.8)] to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-[hsl(var(--muted)/0.2)] group-hover:bg-[hsl(var(--primary)/0.2)] transition-colors duration-300">
          {React.cloneElement(icon, {
            className: `w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
              highlighted 
                ? "text-[hsl(var(--primary))] group-hover:text-[hsl(var(--primary)/0.9)]" 
                : "text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))]"
            }`,
          })}
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 tracking-tight group-hover:text-[hsl(var(--primary)/0.9)] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-[hsl(var(--muted-foreground))] mb-3 sm:mb-4 flex-grow leading-relaxed">
          {description}
        </p>
        <Link
          href="#"
          className="text-xs sm:text-sm md:text-base font-medium mt-auto inline-flex items-center gap-1 transition-all duration-300 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)/0.8)] group-hover:translate-x-1"
        >
          Read more
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </div>
  )
}

export default function FeatureShowcase() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const paymentFeatures = [
    {
      title: "150+ Payment Modes",
      description: "Our platform supports over 150+ payment options, including UPI, wallets, debit/credit cards, net banking, and more, ensuring flexibility for your customers.",
      icon: <Code />,
      highlighted: true,
      large: true,
    },
    {
      title: "Secure Transactions",
      description: "With advanced encryption and fraud prevention measures, we guarantee safe and secure transactions from start to finish.",
      icon: <Database />,
    },
    {
      title: "Multi-Business Support",
      description: "As a leading E-commerce Payment Solution Service Provider, we cater to e-commerce, education, retail, B2B services, and more, offering tailored payment gateway integrations.",
      icon: <Terminal />,
      large: true,
    },
    {
      title: "Seamless Integration",
      description: "Our well-documented API resources allow for easy integration into websites, apps, and custom platforms.",
      icon: <Users />,
    },
    {
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden costs, making our payment solutions cost-effective for all businesses.",
      icon: <Code />,
    },
    {
      title: "Real-Time Reporting and Analytics",
      description: "Monitor transactions, manage refunds, and optimize financial operations with our robust analytics dashboard.",
      icon: <Database />,
      large: true,
    },
    {
      title: "Instant Settlements",
      description: "Get access to quick settlements, ensuring smooth cash flow for your business.",
      icon: <Terminal />,
    },
    {
      title: "Customizable Payment Pages",
      description: "Align your payment experience with your brand by customizing payment pages.",
      icon: <Users />,
    },
  ]

  return (
    <section className="max-w-[var(--mw)] mx-auto py-8 sm:py-12 md:py-24 lg:py-32 bg-[hsl(var(--background))] transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05)_0,transparent_50%)] z-0" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8 sm:gap-12">
        <div className="text-center max-w-3xl mx-auto relative">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mb-4 tracking-tight relative z-10">
            <span className="relative">
              Features of Our Payment Gateways
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[hsl(var(--primary)/0.3)] rounded-full" />
            </span>
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            Our Best Payment Gateways & Payment Solutions in India offer seamless and secure transaction processing for businesses of all sizes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {paymentFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              highlighted={feature.highlighted}
              large={feature.large}
            />
          ))}
        </div>
      </div>
    </section>
  )
}