"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PaymentGatewayInfo() {
  // Animation variants for smooth transitions
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-background py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Section: Headers and Descriptions */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
         

          {/* Why Choose Us */}
          <div>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Payment Gateway Services?
              </span>
            </h4>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-6">
              Trusted by businesses across India, our secure and efficient payment gateway empowers e-commerce, education, and retail with effortless payment management.
            </p>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              Seamlessly integrate with Shopify, PayPal, Amazon Pay, Google Pay, PayU, Razorpay, and more for unmatched flexibility and scalability.
            </p>
          </div>

           {/* Understanding Payment Gateways */}
           <div>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Understanding{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Payment Gateways
              </span>
            </h4>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              Everything you need to know about payment gateways and solutions for seamless transactions.
            </p>
          </div>
        </motion.div>

        {/* Right Section: Accordion */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                title: "What is a Payment Gateway?",
                content:
                  "A payment gateway is a tool that helps businesses accept payments online. It securely sends payment details from your website or app to the bank and confirms if the payment is approved.",
              },
              {
                title: "How to Add a Payment Gateway to Your Website?",
                content:
                  "Choose a provider, sign up, integrate via plugin or API, and test thoroughly for smooth operation.",
              },
              {
                title: "How Does a Payment Gateway Work?",
                content:
                  "It securely transmits payment details to the processor, gets approval, and confirms the transaction back to your site.",
              },
              {
                title: "How to Create a Payment Gateway?",
                content:
                  "Build a payment system, connect to methods, secure data, and test for reliability.",
              },
              {
                title: "Payment Links",
                content:
                  "A link-based solution for easy payments via QR Pay, Link Pay, UPI Pay, and Payouts—secure and hassle-free from Noida.",
              },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg md:text-xl font-semibold text-foreground px-4 py-3">
                  <h4>
                    {item.title}
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base md:text-lg px-4 py-2">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}