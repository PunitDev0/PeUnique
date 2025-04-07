import React from "react";
import { Linkedin, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "@inertiajs/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40 text-foreground">
      <div className="container py-12 md:py-16 max-w-[var(--mw)] mx-auto p-5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PeUnique</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The only payments solution in India that allows businesses to accept, process, and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI, and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money, and PayZapp.
            </p>
            {/* Newsletter Subscription */}
            <div className="mt-4">
              <p className="text-sm font-medium mb-2 text-muted-foreground">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Accept Payments Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Accept Payments</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Payment Aggregator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Payment Gateway
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Payment Pages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Payment Links
                </Link>
              </li>
             
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  QR Codes <Badge variant="secondary" className="ml-1">NEW</Badge>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Smart Collect
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Optimizer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instant Settlements
                </Link>
              </li>
            </ul>
          </div>

          {/* Banking Plus Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Banking Plus</h3>
            <ul className="space-y-2 text-sm">
              
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Source to Pay
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Current Accounts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Payout Links
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Corporate Credit Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Responsible Disclosure
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  White Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Corporate Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Developers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Chargeback Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Settlement Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-primary transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/ecommerce" className="text-muted-foreground hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  SaaS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  BFSI
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Tools Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Free Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  GST Calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  GST Number Search
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  GST Search by PAN
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  ROI Calculator <Badge variant="secondary" className="ml-1">NEW</Badge>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  CAGR Calculator <Badge variant="secondary" className="ml-1">NEW</Badge>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  EBITDA Calculator <Badge variant="secondary" className="ml-1">NEW</Badge>
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Knowledge Base
                </Link>
              </li>
            </ul>
          </div>

          {/* Find Us Online Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Find Us Online</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section
        <div className="mt-10 pt-8 border-t text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <span>
            © {currentYear} PeUnique. All rights reserved. | Registered Office Address: 1st Floor, Siri Cyber Road, 22 Laskar Hosur Road, Adugodi, Bengaluru - 560030, Karnataka, India | CIN: U72200KA2013PTC097389 | PeUnique Software Private Limited (RSPL) is an RBI Authorised Online Payment Aggregator
          </span>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;