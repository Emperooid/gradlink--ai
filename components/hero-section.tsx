import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Welcome to GradLink AI
              </h1>
              <p className="text-xl text-muted-foreground">Your AI-powered academic and career companion</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/login">
                <Button size="lg" className="w-full">
                  Sign in with School Email
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="w-full">
                  Register Now
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Join 10,000+ students making better career decisions</p>
          </div>
          <div className="mx-auto lg:mx-0 relative">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <Image
                src="/03.06.2025_18.08.11_REC.png"
                alt="Students using GradLink AI"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
