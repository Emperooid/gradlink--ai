"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Bell, MessageSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileSidebar } from "@/components/dashboard/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-30 flex h-14 sm:h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <MobileSidebar />
      <Link href="/dashboard" className="flex items-center gap-2 md:gap-3">
        <Image src="/image-removebg-preview (1).png" alt="GradLink AI Logo" width={32} height={32} className="h-8 w-auto" />
        <span className="font-bold text-lg hidden sm:inline-block">GradLink AI</span>
      </Link>
      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <Button variant="ghost" size="icon" asChild className="h-8 w-8 sm:h-10 sm:w-10">
          <Link href="/dashboard/notifications">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Notifications</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="h-8 w-8 sm:h-10 sm:w-10">
          <Link href="/dashboard/chat">
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Chat</span>
          </Link>
        </Button>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 sm:h-10 sm:w-10">
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/login">Log out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
