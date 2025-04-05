"use client"

import  React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Instagram, Linkedin, Moon, Sun } from "lucide-react"
import { Link } from "@inertiajs/inertia-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "../Layout/Navbar"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  

  return (
   <>
 <Navbar/>
<div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-purple-950/40 relative overflow-hidden">
    

    {/* Decorative Elements - visible in both themes but styled differently */}
    <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-purple-200/30 dark:bg-purple-600/10 blur-[100px]" />
    <div className="absolute bottom-40 left-[5%] w-96 h-96 rounded-full bg-purple-100/40 dark:bg-purple-500/10 blur-[120px]" />

    {/* Header */}
    <header className="relative pt-20 pb-10 px-4 text-center">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
        <span className="mr-2 bg-purple-500 rounded-full w-2 h-2"></span>
        Contact Us
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Get in{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
          Touch
        </span>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Have questions about PeUnique or need assistance? Our team is here to help you navigate your financial
        journey.
      </p>
    </header>

    <main className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
      <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
        {/* Contact Information - 2 columns on desktop */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white dark:bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a
                    href="mailto:support@peunique.com"
                    className="text-gray-900 dark:text-white font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    support@peunique.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a
                    href="tel:+18001234567"
                    className="text-gray-900 dark:text-white font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                  <address className="not-italic text-gray-900 dark:text-white font-medium">
                    123 Financial District
                    <br />
                    San Francisco, CA 94111
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Hours</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    Monday - Friday: 9AM - 6PM
                    <br />
                    Saturday: 10AM - 4PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map or Location */}
          <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 overflow-hidden h-[300px] relative">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <div className="text-center p-4">
                <MapPin className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <p className="text-gray-600 dark:text-gray-300">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - 3 columns on desktop */}
        <div className="md:col-span-3">
          <div className="bg-white dark:bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                  //   onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500 dark:focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                  //   onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500 dark:focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                  Subject
                </Label>
                <Select>
                  <SelectTrigger className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  // onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="min-h-[150px] bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500 dark:focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900"
                  required
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                  I agree to the{" "}
                  <Link href="/privacy" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="mt-8 bg-white dark:bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I expect a response?",
                  answer:
                    "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.",
                },
                {
                  question: "Is there a customer support portal?",
                  answer:
                    "Yes, registered users can access our support portal through their dashboard for faster assistance and ticket tracking.",
                },
                {
                  question: "Do you offer in-person consultations?",
                  answer:
                    "We offer virtual consultations for all clients. In-person meetings are available by appointment at our San Francisco office for Premium and Enterprise clients.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-0 last:pb-0"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
   </>
  )
}

