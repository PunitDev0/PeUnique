"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, SunMoon } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const [theme, setThemeState] = useState("light")
  const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  //   const savedTheme = localStorage.getItem("theme") || "light"
  //   setThemeState(savedTheme)
  // }, [])

  useEffect(() => {
    if (!mounted) return

    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", mediaQuery.matches)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, mounted])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9">
        <SunMoon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <div className="z-[1000]">
      <DropdownMenu>
      <DropdownMenuTrigger >
        <Button variant="outline" size="icon" className="h-9 w-9 relative">
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
            animate={{ scale: theme === "dark" ? 0 : 1, opacity: theme === "dark" ? 0 : 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: 30 }}
            animate={{ scale: theme === "dark" ? 1 : 0, opacity: theme === "dark" ? 1 : 0, rotate: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState("light")} className={theme === "light" ? "bg-accent" : ""}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")} className={theme === "dark" ? "bg-accent" : ""}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")} className={theme === "system" ? "bg-accent" : ""}>
          <SunMoon className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}