"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link, Head } from "@inertiajs/react"; // Updated import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "../Layout/Navbar";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>PeUnique Support</title>
        <meta name="description" content="We are here to assist you with all your payment-related needs. Contact our dedicated support team for a smooth and hassle-free experience." />
        <link rel="canonical" href="https://www.peunique.com/about" />
      </Head>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-purple-950/40 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 right-[5%] sm:right-[10%] w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-purple-200/30 dark:bg-purple-600/10 blur-[80px] sm:blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 sm:bottom-40 left-[2%] sm:left-[5%] w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-100/40 dark:bg-purple-500/10 blur-[100px] sm:blur-[120px] animate-pulse" />

        {/* Header */}
        <header className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="mr-2 bg-purple-500 rounded-full w-1.5 h-1.5 sm:w-2 sm:h-2 animate-bounce" />
            PeUnique Support
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            We are here to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
              Assist You
            </span>{" "}
            with All Your Payment-Related Needs
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Whether you’re a merchant or a customer, our dedicated support team ensures a smooth and hassle-free experience.
          </p>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2 space-y-6 sm:space-y-8">
              <div className="bg-white dark:bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Contact Information</h2>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a
                        href="mailto:care@peunique.com"
                        className="text-gray-900 dark:text-white font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        care@peunique.com
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
                        A 43, A Block, Sector 63 Road,
                        <br />
                        Sector 63- UP 201301
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
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
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

              {/* Map Placeholder */}
              <div className="bg-white dark:bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5 overflow-hidden h-[250px] sm:h-[300px] relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Contact Form and Additional Sections */}
            <div className="md:col-span-3 space-y-6 sm:space-y-8">
            

              {/* Contact Form */}
              <div className="bg-white dark:bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500 dark:focus:ring-purple-500 text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                        className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500 dark:focus:ring-purple-500 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">Subject</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                      <SelectTrigger className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 text-sm sm:text-base">
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
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      required
                      className="min-h-[120px] sm:min-h-[150px] bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500 dark:focus:ring-purple-500 text-sm sm:text-base"
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
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white transition-all duration-300 group relative overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </form>
              </div>

               {/* Support Sections */}
               <div className="bg-white dark:bg-black/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-purple-900/30 shadow-sm dark:shadow-purple-900/5">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Support Services</h2>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">Merchant Support</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Get expert assistance for payment processing, settlements, and API integrations.</p>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">Customer Support</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Quick solutions for transaction issues, refunds, and payment queries.</p>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">Customer Grievance Policy</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">We prioritize customer satisfaction and address concerns promptly with a structured grievance redressal system.</p>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">Knowledge Hub</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Explore guides, FAQs, and resources to make the most of our platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}