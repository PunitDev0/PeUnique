"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { ThemeToggle } from "../HeroPage/theme-toggle";
import { Button } from "../ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
// Import the logo image (adjust the path as necessary)

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleFeaturesDropdown = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const featuresItems = [
    { label: "eCommerce APIs", href: "/ecommerce" },
    { label: "Education APIs", href: "/education" },
    { label: "Payment Solutions", href: "/payment-solutions" },
    { label: "Financial Insights", href: "/financial-insights" },
  ];

  return (
    <header
      className={`fixed top-0 z-[1000] w-full border-b bg-white/95 dark:bg-black/95 backdrop-blur 
        supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-10">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <img
              src={'assets/logos/logo4.png'} // Use the imported logo
              alt="PeUnique Logo"
              className="max-w-32 object-contain" // Adjust size as needed
            />
            {/* <span className="text-xl font-bold text-gray-900 dark:text-white">PeUnique</span> */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">

          <Link href="/ecommerce" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            Ecommerce
          </Link>
          <Link href="/education" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            Education
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            About
          </Link>
          <Link href="/careers" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            Careers
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            Contact
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            Blogs
          </Link>
        </nav>

        {/* Right Section (Theme Toggle + Buttons) */}
        <div className="flex items-center gap-4">
          <div className="sm:flex hidden">
            {/* <ThemeToggle /> */}
            <a href="https://banking.peunique.com/login">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white transition-all duration-300"
              >
                Login
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black/90 shadow-md border-t border-gray-200 dark:border-purple-900/30">
          <ul className="flex flex-col items-start gap-4 py-4 px-6">
            <li className="w-full">
              <button
                onClick={toggleFeaturesDropdown}
                className="flex items-center justify-between w-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
              >
                Features
                <ChevronDown className={`h-4 w-4 transition-transform ${isFeaturesOpen ? "rotate-180" : ""}`} />
              </button>
              {isFeaturesOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  {featuresItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                Testimonials
              </Link>
            </li>
            <li className="flex gap-4">
              <a href="https://banking.peunique.com/login">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white transition-all duration-300"
                >
                  Login
                </Button>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;