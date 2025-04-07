"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CreditCard, Smartphone, Lock, Building, Zap, FileText, Wallet, Eye } from "lucide-react";

export default function PaymentGatewayFeatures() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end end"],
  });

  const features = [
    {
      id: 1,
      title: "150+ Payment Modes",
      description:
        "Our platform supports over 150+ payment options, including UPI, wallets, debit/credit cards, net banking, and more, ensuring flexibility for your customers.",
      image: "/assets/icons/card.png",
      side: "left",
    },
    {
      id: 2,
      title: "Secure Transactions",
      description:
        "With advanced encryption and fraud prevention measures, we guarantee safe and secure transactions from start to finish.",
      image: "/assets/icons/netbanking.png",
      side: "right",
    },
    {
      id: 3,
      title: "Multi-Business Support",
      description:
        "As a leading E-commerce Payment Solution Service Provider, we cater to e-commerce, education, retail, B2B services, and more, offering tailored payment gateway integrations.",
      image: "/assets/icons/business.png",
      side: "left",
    },
    {
      id: 4,
      title: "Seamless API Integration",
      description:
        "Our well-documented API resources allow for easy integration into websites, apps, and custom platforms.",
      image: "/assets/icons/Integration.png",
      side: "right",
    },
    {
      id: 5,
      title: "Affordable Pricing Plans",
      description:
        "Transparent pricing with no hidden costs, making our payment solutions cost-effective for all businesses.",
      image: "/assets/icons/wallet.png",
      side: "left",
    },
    {
      id: 6,
      title: "Real-Time Analytics",
      description:
        "Monitor transactions, manage refunds, and optimize financial operations with our robust analytics dashboard.",
      image: "/assets/icons/analytics.png",
      side: "right",
    },
    {
      id: 7,
      title: "Instant Settlements",
      description:
        "Get access to quick settlements, ensuring smooth cash flow for your business.",
      image: "/assets/icons/settlement.png",
      side: "left",
    },
    {
      id: 8,
      title: "Custom Payment Pages",
      description:
        "Align your payment experience with your brand by customizing payment pages for better user engagement and higher conversions.",
      image: "/assets/icons/emi.png",
      side: "right",
    },
  ];

  const featureTransforms = useMemo(() => {
    return features.map((feature) => {
      const xInitial = feature.side === "left" ? -120 : 120;
      return { xInitial };
    });
  }, [features]);

  return (
    <section className="relative bg-background py-12 sm:py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features of Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Payment Gateway
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Discover the best payment gateway in India, offering secure and seamless transaction processing for all business types.
          </p>
        </div>

        {/* Timeline - Hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-24 bottom-0 w-[2px] -translate-x-1/2">
          <div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10"
            style={{ boxShadow: "0 0 20px 5px rgba(59, 130, 246, 0.8)" }}
          />
          <motion.div
            className="absolute h-full w-full top-10 origin-top bg-gradient-to-b from-primary via-purple-500 to-primary rounded-full"
            style={{
              boxShadow: "0 0 20px 4px rgba(79, 70, 229, 0.7)",
              scaleY: scrollYProgress,
            }}
          />
          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[4px] h-[30%] blur-md bg-primary/50"
            animate={{
              opacity: [0.4, 0.8, 0.4],
              height: ["30%", "40%", "30%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top",
            }}
          />
        </div>

        <div className="relative z-10 space-y-8 md:space-y-0">
          {features.map((feature, index) => {
            const { xInitial } = featureTransforms[index];
            return (
              <Feature
                key={feature.id}
                feature={feature}
                xInitial={xInitial}
                scrollYProgress={scrollYProgress}
                index={index}
                featuresLength={features.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Feature({ feature, xInitial, scrollYProgress, index, featuresLength }) {
  const yProgress = useTransform(
    scrollYProgress,
    [(index * 0.1) / (featuresLength + 0.5), (index + 0.6) / (featuresLength + 0.5)],
    [0, 1]
  );

  const x = useTransform(yProgress, [0, 1], [xInitial, 0]);

  return (
    <motion.div
      className={`flex mb-10 ${feature.side === "left" ? "justify-end md:pr-[52%]" : "justify-start md:pl-[52%]"}`}
      initial={{ opacity: 0, x: xInitial }}
      style={{
        opacity: yProgress,
        x: x,
      }}
    >
      <div className="bg-card rounded-xl p-6 max-w-xl border border-border shadow-xl hover:shadow-primary/20 transition-shadow duration-300 relative">
        {/* Floating Image */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm bg-gradient-to-br from-white/20 via-transparent to-black/20 shadow-lg">
          <img
            src={feature.image}
            alt={`${feature.title} - Payment Gateway Feature`}
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
}