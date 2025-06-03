"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function LandingNavbar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/#about",
      label: "About",
      active: pathname === "/#about",
    },
    {
      href: "/#features",
      label: "Features",
      active: pathname === "/#features",
    },
    {
      href: "/#contact",
      label: "Contact",
      active: pathname === "/#contact",
    },
  ]

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/image-removebg-preview (1).png" alt="GradLink AI Logo" width={40} height={40} className="h-8 w-auto" />
            <span className="font-bold text-xl">GradLink AI</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Register Now</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
