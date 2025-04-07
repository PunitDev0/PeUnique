"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const paymentMethods = [
  {
    title: "UPI Payments",
    image: "/assets/icons/upi.png",
    description: "Enable fast, secure UPI payment solutions for instant bank transfers in India.",
    color: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    title: "Credit/Debit Cards",
    image: "/assets/icons/card.png",
    description: "Accept all major credit and debit cards with our secure payment gateway.",
    color: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    title: "Digital Wallets",
    image: "/assets/icons/wallet.png",
    description: "Support popular digital wallets for quick and easy checkout experiences.",
    color: "bg-green-100 dark:bg-green-900/20",
  },
  {
    title: "Payment Links",
    image: "/assets/icons/link.png",
    description: "Share secure payment links via email, SMS, or social media for flexible payments.",
    color: "bg-yellow-100 dark:bg-yellow-900/20",
  },
  {
    title: "Net Banking",
    image: "/assets/icons/netbanking.png",
    description: "Connect with 100+ banks for seamless direct transfers in India.",
    color: "bg-red-100 dark:bg-red-900/20",
  },
  {
    title: "EMI Options",
    image: "/assets/icons/emi.png",
    description: "Offer flexible EMI payment solutions for high-value purchases.",
    color: "bg-indigo-100 dark:bg-indigo-900/20",
  },
  {
    title: "QR Code Payments",
    image: "/assets/icons/qrcode.png",
    description: "Generate dynamic QR codes for fast, contactless payment processing.",
    color: "bg-pink-100 dark:bg-pink-900/20",
  },
  {
    title: "Pre-built Checkout Forms",
    image: "/assets/icons/paymentlink.png",
    description: "Use ready-to-integrate checkout forms for a smooth payment experience.",
    color: "bg-orange-100 dark:bg-orange-900/20",
  },
];

export default function PaymentSolutions() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background border" id="payment-solutions">
      <div className="container mx-auto max-w-[1600px] relative">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Multiple Payment Solutions for Every Business
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Integrate the best payment gateway in India with diverse options to boost conversions and enhance checkout.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {paymentMethods.map((method, index) => (
            <Card
              key={index}
              className="h-full border border-border relative transition-all duration-300 hover:border-primary hover:shadow-xl bg-card text-card-foreground max-w-[400px] mx-auto"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-full absolute left-[40%] -top-8 flex items-center justify-center p-2 backdrop-blur-sm bg-gradient-to-br from-white/20 via-transparent to-black/20`}
                >
                  <img
                    src={method.image}
                    alt={`${method.title} - Payment Solution Feature`}
                    className="h-full w-full"
                  />
                </div>
                <CardTitle className="text-foreground mt-6">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {method.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <motion.div
                  className="text-primary font-medium flex items-center text-sm"
                  animate={{
                    x: hoveredIndex === index ? 5 : 0,
                    opacity: hoveredIndex === index ? 1 : 0.7,
                  }}
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </motion.div>
              </CardFooter>
            </Card>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full text-lg font-medium"
          >
            Start with Secure Payment Solutions
          </Button>
          <p className="mt-4 text-muted-foreground">
            Accept payments instantly with our top payment gateway in India
          </p>
        </motion.div>
      </div>
    </section>
  );
}