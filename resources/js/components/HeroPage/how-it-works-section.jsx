"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HowItWorksSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const steps = [
    {
      id: "ecommerce",
      title: "E-commerce Payment Gateway",
      description:
        "We are the best Payment Gateway for eCommerce provider in Noida, offering fast and reliable payment processing for websites, online and offline stores—enhancing customer trust and driving higher sales.",
      image: "/assets/peuniqe-ecommerce.webp",
      features: [
        "Supports 150+ Payment Modes",
        "Multi-Device Responsive Gateway",
        "Quick Settlements & Auto-Reconciliation",
        "Smooth Integration for Online & Offline Stores and Websites",
      ],
    },
    {
      id: "education",
      title: "Education Payment Gateway for Institutions",
      description:
        "Streamline fee collections with a Education Payment Gateway for Institutions in India designed for schools, colleges, universities, coaching centers, training institutes, and online learning platforms.",
      image: "/assets/peunique-education.webp",
      features: [
        "Student & Parent-Friendly",
        "Fast & Secure Transactions",
        "Instant Payment Links & QR Codes",
        "Customized Solutions for Institutions",
      ],
    },
    {
      id: "mobile_application",
      title: "Payment Gateway for Mobile Application",
      description:
        "We offer the best payment gateway for mobile applications, ensuring secure, fast, and user-friendly payment experiences. Our solutions guarantee seamless transactions across mobile apps with multiple payment modes, including UPI and wallets.",
      image: "/assets/peunique-phone.webp",
      features: [
        "Supports 150+ Payment Modes",
        "Real-Time Payment Tracking",
        "In-App Payment Links & QR",
        "Seamless SDK and API Integration",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare Payment Gateway & Medical Billing API Solutions",
      description:
        "Secure and efficient Healthcare Payment Gateway & Medical Billing API Software. Designed for hospitals, clinics, labs, pharmacies, and telemedicine platforms, our solution supports 150+ payment modes including UPI, cards, net banking, wallets, and more.",
      image: "/assets/peunique-healthcare.webp",
      features: [
        "Supports 150+ Payment Modes",
        "Real-Time Payment Processing",
        "Custom Payment Links & Invoices",
        "Integration with Healthcare Software",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container max-w-[var(--mw)] mx-auto px-4">
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
          <p className="text-muted-foreground">
            A four-step process to streamline your payment gateway solution in India
          </p>
        </motion.div>

        <Tabs defaultValue="ecommerce" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4 gap-2">
            {steps.map((step, index) => (
              <TabsTrigger
                key={step.id}
                value={step.id}
                className="text-sm py-2"
              >
                {index + 1}. {index === 2 ? "Mobile Application" : step.title.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {steps.map((step) => (
            <TabsContent key={step.id} value={step.id} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
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
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="mt-6 gradient-bg hover:opacity-90">
                    <a href="/signup">
                      Start Using PeUnique
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative flex justify-center items-center"
                >
                  <div className="absolute -z-10 h-full w-full rounded-2xl blur-xl" />
                  <div className="overflow-hidden max-w-[600px] w-full aspect-square rounded-2xl mx-auto">
                    <img
                      src={step.image}
                      alt={`${step.title} - PeUnique Payment Gateway Feature`}
                      className="rounded-xl w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
