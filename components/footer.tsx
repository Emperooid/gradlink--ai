import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-bold text-lg">
            GradLink AI
          </Link>
          <p className="text-sm text-muted-foreground">Your AI-powered academic and career companion</p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <Link href="/#about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="/#features" className="text-sm hover:underline">
            Features
          </Link>
          <Link href="/#contact" className="text-sm hover:underline">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm hover:underline">
            Terms
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} GradLink AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
