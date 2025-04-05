"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function PartnerSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const partners = [
    { name: "Bank of America", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Chase", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Wells Fargo", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Citibank", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Capital One", logo: "/placeholder.svg?height=60&width=120" },
    { name: "American Express", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Trusted by Leading Financial Institutions
          </h2>
          <p className="text-muted-foreground">
            We partner with top banks and financial services to provide you with a seamless experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="relative h-16 w-32 grayscale transition-all hover:grayscale-0">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

