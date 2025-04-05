"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart3,
  Lock,
  MessageSquare,
  PiggyBank,
  RefreshCw,
  Wallet,
  CreditCard,
  LineChart,
  Smartphone,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const features = [
  {
    icon: Wallet,
    title: "Smart Payments",
    description:
      "Send and receive money instantly with multiple payment options including credit cards, bank transfers, and cryptocurrencies.",
    category: "payments",
  },
  {
    icon: BarChart3,
    title: "Investment Insights",
    description: "Get personalized investment recommendations based on your financial goals and risk tolerance.",
    category: "investments",
  },
  {
    icon: PiggyBank,
    title: "Automated Savings",
    description: "Set savings goals and let our AI automatically allocate funds to help you reach them faster.",
    category: "savings",
  },
  {
    icon: MessageSquare,
    title: "AI Financial Assistant",
    description: "Chat with our AI assistant for instant answers to your financial questions and personalized advice.",
    category: "ai",
  },
  {
    icon: RefreshCw,
    title: "Real-time Tracking",
    description: "Monitor your spending, income, and investments in real-time with beautiful, interactive dashboards.",
    category: "tracking",
  },
  {
    icon: Lock,
    title: "Bank-level Security",
    description: "Rest easy with end-to-end encryption, two-factor authentication, and advanced fraud detection.",
    category: "security",
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description:
      "Create virtual cards for online purchases with spending limits and automatic expiration for enhanced security.",
    category: "payments",
  },
  {
    icon: LineChart,
    title: "Wealth Forecasting",
    description:
      "See your future financial position with AI-powered projections based on your current habits and market trends.",
    category: "investments",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Manage your finances on the go with our powerful mobile app, available for iOS and Android devices.",
    category: "tracking",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Receive real-time alerts for transactions, bill payments, and important account activities.",
    category: "tracking",
  },
  {
    icon: TrendingUp,
    title: "Smart Budgeting",
    description: "Create intelligent budgets that adapt to your spending habits and help you save more effectively.",
    category: "savings",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "Advanced AI algorithms detect unusual patterns and protect your accounts from unauthorized access.",
    category: "security",
  },
]

export function FeatureSection() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const filteredFeatures = activeTab === "all" ? features : features.filter((feature) => feature.category === activeTab)

  return (
    <section id="features" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto mb-8 md:mb-12 lg:mb-16 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Powerful Features for <span className="gradient-text">Modern Finance</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Everything you need to manage your money, all in one place.
        </p>
      </motion.div>

      <Tabs 
        defaultValue="all" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="mb-6 md:mb-8"
      >
        <TabsList className="mx-auto flex flex-wrap justify-center gap-2 p-1 max-w-4xl">
          {[
            { value: "all", label: "All Features" },
            { value: "payments", label: "Payments" },
            { value: "investments", label: "Investments" },
            { value: "savings", label: "Savings" },
            { value: "tracking", label: "Tracking" },
            { value: "security", label: "Security" },
            { value: "ai", label: "AI Tools" },
          ].map((tab) => (
            <TabsTrigger 
              key={tab.value}
              value={tab.value}
              className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full feature-card border-primary/10 dark:border-primary/20 flex flex-col">
              <CardHeader className="pb-2 sm:pb-4">
                <div
                  className={cn(
                    "mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10 feature-icon",
                  )}
                >
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-sm sm:text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

