"use client"

import { useEffect, useState } from "react"
import { Link } from "@inertiajs/react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Free",
    description: "Essential features for individuals",
    price: {
      monthly: 0,
      annually: 0,
    },
    features: [
      "Personal dashboard",
      "Basic transaction tracking",
      "Connect up to 2 accounts",
      "Monthly financial summary",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Perfect for active investors",
    price: {
      monthly: 12,
      annually: 120,
    },
    features: [
      "Everything in Free",
      "Advanced analytics",
      "Investment tracking",
      "AI-powered insights",
      "Connect up to 10 accounts",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    description: "For teams and businesses",
    price: {
      monthly: 49,
      annually: 490,
    },
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom reports",
      "API access",
      "Unlimited accounts",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  const [mounted, setMounted] = useState(false)
  const [annual, setAnnual] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="pricing" className="py-20">
      <div className="">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the plan that works best for your financial needs.</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={cn("text-sm", !annual && "font-medium text-foreground")}>Monthly billing</span>
            <Switch checked={annual} onCheckedChange={setAnnual} />
            <span className={cn("text-sm", annual && "font-medium text-foreground")}>
              Annual billing
              <span className="ml-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={cn("flex h-full flex-col", plan.popular && "border-primary shadow-md")}>
                {plan.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${annual ? plan.price.annually / 12 : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                    {annual && (
                      <div className="mt-1 text-sm text-muted-foreground">Billed ${plan.price.annually} annually</div>
                    )}
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup" className="w-full">
                    <Button variant={plan.popular ? "default" : "outline"} className="w-full" size="lg">
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

