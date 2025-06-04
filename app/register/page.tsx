import Link from "next/link"
import Image from "next/image"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/40 border-round" />
        <Image
          src="/GradLink Ai Logo (1).png"
          alt="Students collaborating"
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          {/* <div className="mx-auto max-w-md text-center">
            <h1 className="text-3xl font-bold">Join GradLink AI</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Make better career decisions with AI-powered academic and career guidance
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="mx-auto max-w-md w-full space-y-8">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/image-removebg-preview (1).png" alt="GradLink AI Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="font-bold text-2xl">GradLink AI</span>
            </Link>
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-muted-foreground">Enter your details to create your GradLink AI account</p>
          </div>
          <RegisterForm />
          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium underline underline-offset-4 hover:text-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
