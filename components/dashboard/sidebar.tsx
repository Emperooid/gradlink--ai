"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, BookOpen, Briefcase, GraduationCap, Home, MessageSquare, Settings, User } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "CGPA Analyzer",
    icon: BarChart3,
    href: "/dashboard/cgpa",
    color: "text-violet-500",
  },
  {
    label: "Career Paths",
    icon: GraduationCap,
    href: "/dashboard/careers",
    color: "text-pink-700",
  },
  {
    label: "Opportunities",
    icon: Briefcase,
    href: "/dashboard/opportunities",
    color: "text-orange-500",
  },
  {
    label: "Courses",
    icon: BookOpen,
    href: "/dashboard/courses",
    color: "text-emerald-500",
  },
  {
    label: "GradBot",
    icon: MessageSquare,
    href: "/dashboard/chat",
    color: "text-green-700",
  },
  {
    label: "Profile",
    icon: User,
    href: "/dashboard/profile",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-background md:block">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === route.href ? "bg-accent text-accent-foreground" : "transparent",
                  route.color,
                )}
              >
                <route.icon className={cn("mr-2 h-4 w-4")} />
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
