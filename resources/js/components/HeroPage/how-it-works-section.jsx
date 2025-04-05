"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HowItWorksSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const steps = [
    {
      id: "integrate",
      title: "Integrate Multiple APIs",
      description:
        "Seamlessly connect PaySync with your existing systems through our robust API ecosystem, supporting multiple payment gateways and services.",
      image: "https://i.pinimg.com/736x/22/45/1c/22451ce7b100697d2cd2fec5350014b3.jpg",
      features: [
        "Support for 50+ payment gateway APIs",
        "Real-time transaction syncing",
        "Custom API integration options",
        "Developer-friendly documentation",
      ],
    },
    {
      id: "dashboards",
      title: "Customized Dashboards",
      description:
        "Access multiple tailored dashboards to monitor payments, analytics, and user activity, all designed to fit your business needs.",
      image: "https://i.pinimg.com/736x/56/37/0a/56370a4d016fae6c684874c65ef9f373.jpg",
      features: [
        "Multiple dashboard views (Admin, Merchant, User)",
        "Real-time payment analytics",
        "Customizable widgets and layouts",
        "Multi-currency transaction overview",
      ],
    },
    {
      id: "payments",
      title: "Flexible Payment Options",
      description:
        "Offer your customers a variety of payment methods while managing transactions securely with our advanced payment processing system.",
      image: "assets/paymentOptions.jpeg",
      features: [
        "Support for cards, wallets, UPI, and bank transfers",
        "Multi-currency payment processing",
        "Recurring payment capabilities",
        "Fraud detection and prevention",
      ],
    },
    {
      id: "security",
      title: "Full Authentication & Security",
      description:
        "Protect your business and customers with our comprehensive authentication system and top-tier security measures.",
      image: "assets/paymentSecurity.jpeg",
      features: [
        "Multi-factor authentication (MFA)",
        "OAuth 2.0 and JWT support",
        "End-to-end encryption",
        "Compliance with PCI DSS and GDPR",
      ],
    },
  ]

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-[var(--mw)] mx-auto">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How <span className="gradient-text">PeUnique</span> Works
          </h2>
          <p className="text-muted-foreground">Our four-step process to streamline your payment ecosystem</p>
        </motion.div>

        <Tabs defaultValue="integrate" className="w-full mx-auto">
          <TabsList className="mb-8 w-full">
            <TabsTrigger value="integrate">1. Integrate</TabsTrigger>
            <TabsTrigger value="dashboards">2. Dashboards</TabsTrigger>
            <TabsTrigger value="payments">3. Payments</TabsTrigger>
            <TabsTrigger value="security">4. Security</TabsTrigger>
          </TabsList>

          {steps.map((step) => (
            <TabsContent key={step.id} value={step.id} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center p-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>

                  <div className="space-y-2 mt-6">
                    {step.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href="/signup">
                    <Button className="mt-6 gradient-bg hover:opacity-90">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -z-10 h-full w-full rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
                  <div className="overflow-hidden rounded-2xl md:w-lg md:h-[500px] border bg-background/50 p-2 shadow-xl backdrop-blur glass-effect">
                    <img
                      src={step.image || "/placeholder.svg"}
                      width={600}
                      height={400}
                      alt={step.title}
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}