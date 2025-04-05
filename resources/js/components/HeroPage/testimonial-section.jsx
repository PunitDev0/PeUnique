"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Small Business Owner",
    content:
      "PeUnique has completely transformed how I manage my business finances. The dashboard gives me a clear picture of my cash flow, and the AI insights have helped me make smarter financial decisions.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    category: "business",
  },
  {
    name: "Sarah Chen",
    role: "Freelance Designer",
    content:
      "As a freelancer, keeping track of my finances used to be a nightmare. With PeUnique, I can easily track my income, expenses, and taxes. The automated savings feature has helped me build my emergency fund without even thinking about it.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    category: "freelancer",
  },
  {
    name: "Michael Rodriguez",
    role: "Tech Entrepreneur",
    content:
      "The investment insights from PeUnique have been game-changing for my portfolio. I've seen a 22% increase in my investments since I started using their recommendations. The interface is intuitive and the security features give me peace of mind.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    category: "investor",
  },
  {
    name: "Emily Parker",
    role: "Marketing Director",
    content:
      "I've tried several financial apps, but PeUnique stands out with its AI assistant. It's like having a personal financial advisor available 24/7. The budgeting tools are also incredibly intuitive and have helped me save for my dream vacation.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    category: "professional",
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    content:
      "The automated investment feature is perfect for someone like me who doesn't have time to actively manage investments. Set it up once and let the AI do its magic. I've already recommended PeUnique to all my colleagues.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    category: "professional",
  },
  {
    name: "Olivia Martinez",
    role: "Real Estate Investor",
    content:
      "PeUnique's property investment analysis tools have helped me identify profitable opportunities that I would have otherwise missed. The cash flow projections are incredibly accurate and have given me confidence in my investment decisions.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    category: "investor",
  },
  {
    name: "James Wilson",
    role: "Restaurant Owner",
    content:
      "Managing a restaurant's finances is complex, but PeUnique makes it simple. The inventory tracking integration and expense categorization have saved me hours of work each week. Customer support is also exceptional.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    category: "business",
  },
  {
    name: "Sophia Lee",
    role: "Freelance Writer",
    content:
      "As someone who has irregular income, PeUnique's smart budgeting tools have been a lifesaver. The app adjusts my budget based on my income fluctuations, and the savings automation ensures I'm always putting something aside.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    category: "freelancer",
  },
]

export function TestimonialSection() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const filteredTestimonials =
    activeTab === "all" ? testimonials : testimonials.filter((testimonial) => testimonial.category === activeTab)

  return (
    <section id="testimonials" className="bg-muted/50 py-20">
      <div className="">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Thousands</h2>
          <p className="text-muted-foreground">
            See what our customers have to say about their experience with PeUnique.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mx-auto flex flex-wrap justify-center">
            <TabsTrigger value="all">All Stories</TabsTrigger>
            <TabsTrigger value="business">Business Owners</TabsTrigger>
            <TabsTrigger value="professional">Professionals</TabsTrigger>
            <TabsTrigger value="freelancer">Freelancers</TabsTrigger>
            <TabsTrigger value="investor">Investors</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                        />
                      ))}
                  </div>
                  <div className="relative mb-6">
                    <Quote className="absolute -left-2 -top-2 h-6 w-6 text-primary/20" />
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-center"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-sm">
                <img src="/placeholder.svg?height=24&width=24" alt="Trustpilot" className="h-6 w-6" />
                <span className="text-sm font-medium">4.9/5 on Trustpilot</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-sm">
                <img src="/placeholder.svg?height=24&width=24" alt="G2" className="h-6 w-6" />
                <span className="text-sm font-medium">4.8/5 on G2</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-sm">
                <img src="/placeholder.svg?height=24&width=24" alt="AppStore" className="h-6 w-6" />
                <span className="text-sm font-medium">4.7/5 on App Store</span>
              </div>
            </div>

            <p className="text-muted-foreground">
              Join thousands of satisfied customers who have transformed their financial lives with PeUnique. Our
              commitment to excellence has earned us top ratings across all platforms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}