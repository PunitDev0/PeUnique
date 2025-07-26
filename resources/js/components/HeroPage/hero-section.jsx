"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection({ title, description }) {
  const [mounted, setMounted] = useState(false);
  const currentUrl = window.location.href;
  const lastSegment = currentUrl.split("/").filter(Boolean).pop(); // "ecommerce"

  // Conditional image selection
  const getImageSrc = () => {
    switch (lastSegment) {
      case "ecommerce":
        return "/assets/peunique40.png";
      case "education":
        return "/assets/peunique42.png";
      default:
        return "/assets/DashboardPreview.jpeg";
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-44 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-16 left-4 h-12 w-12 rounded-full bg-primary/10 animate-float hidden md:block" />
      <div className="absolute bottom-16 right-4 h-16 w-16 rounded-full bg-secondary/10 animate-float animation-delay-2000 hidden md:block" />
      <div className="absolute top-1/2 right-1/4 h-10 w-10 rounded-full bg-accent/10 animate-float animation-delay-1000 hidden lg:block" />

      <div className="relative max-w-[var(--mw)] mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary"
              >
                <span className="mr-1 flex h-2 w-2 rounded-full bg-primary"></span>
                <p> Trusted by 10,000+ Businesses in India</p>
                <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </motion.div>

              <motion.h1
                className={`text-3xl font-bold tracking-tighter ${title ? "lg:text-4xl" : "lg:text-6xl"} sm:text-4xl md:text-5xl `}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {title ? title : (
                  <>
                    Secure Payment Gateway for Every{" "}
                    <span className="gradient-text">Business in India</span>
                  </>
                )}
              </motion.h1>
              <motion.p
                className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-[600px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {description ? description : (
                  <>
                    Discover the best payment gateway provider in India, integrating 150+ payment modes including UPI, wallets, and cards. Perfect for e-commerce, education, retail, and mobile apps with secure, seamless transactions.
                  </>
                )}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="/signup">
                <Button size="lg" className="group gradient-bg hover:opacity-90 w-full sm:w-auto">
                  Start with Secure Payments
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="/demo">
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 w-full sm:w-auto">
                  See Payment Gateway Demo
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-2 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Instant Fee Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Free trial available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Fee History</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Fast & Secure Transactions </span>
              </div>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative w-full max-w-[500px] sm:max-w-[600px] overflow-hidden rounded-2xl border bg-background/50 shadow-xl">
              <img
                src={getImageSrc()}
                width={600}
                height={600}
                alt="Secure Payment Gateway Dashboard Preview"
                className="rounded-xl w-full "
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />

              {/* Floating UI elements */}
              <motion.div
                className="absolute top-6 right-6 h-12 w-24 sm:h-16 sm:w-32 rounded-lg bg-white/80 dark:bg-black/80 shadow-lg p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="h-2 w-12 sm:w-16 bg-primary/30 rounded mb-2" />
                <div className="h-2 w-16 sm:w-24 bg-primary/20 rounded" />
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 h-16 w-32 sm:h-20 sm:w-40 rounded-lg bg-white/80 dark:bg-black/80 shadow-lg p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="h-2 w-16 sm:w-20 bg-primary/30 rounded mb-2" />
                <div className="h-2 w-24 sm:w-32 bg-primary/20 rounded mb-2" />
                <div className="h-2 w-12 sm:w-16 bg-primary/10 rounded" />
              </motion.div>

              {/* Stats card */}
              <motion.div
                className="absolute bottom-2 right-0 w-40 sm:w-48 rounded-lg bg-white dark:bg-black shadow-lg p-2 sm:p-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="text-xs text-muted-foreground mb-1">Monthly Savings</div>
                <div className="text-base sm:text-lg font-bold flex items-center">
                  <IndianRupee size={12} className="sm:h-15" /> 1,240.50
                </div>
                <div className="mt-1 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary rounded-full"></div>
                </div>
                <div className="mt-1 flex justify-between text-xs">
                  <span className="text-muted-foreground flex items-center">
                    Target: <IndianRupee size={12} /> 1500
                  </span>
                  <span className="text-primary font-medium">82%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        {lastSegment !== 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
          >
            <div className="rounded-lg border bg-card p-3 sm:p-4 text-center flex items-center justify-center flex-col">
              <div className="text-xl sm:text-2xl font-bold flex items-center text-center"><IndianRupee size={20}/><p>2.5B+</p></div>
              <div className="text-xs sm:text-sm text-muted-foreground">Assets Managed Securely</div>
            </div>
            <div className="rounded-lg border bg-card p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold">98%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Customer Satisfaction Rate</div>
            </div>
            <div className="rounded-lg border bg-card p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold">10K+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Active Business Users</div>
            </div>
            <div className="rounded-lg border bg-card p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Support for Payments</div>
            </div>
          </motion.div>

        )}

      </div>
    </section>
  );
}