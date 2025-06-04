import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    // <section className="py-20 md:py-28">
    //   <div className="container px-4 md:px-6">
    //     <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
    //       <div className="flex flex-col justify-center space-y-4">
    //         <div className="space-y-2">
    //           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
    //             Welcome to GradLink AI
    //           </h1>
    //           <p className="text-xl text-muted-foreground">Your AI-powered academic and career companion</p>
    //         </div>
    //         <div className="flex flex-col gap-2 min-[400px]:flex-row">
    //           <Link href="/login">
    //             <Button size="lg" className="w-full">
    //               Sign in with School Email
    //             </Button>
    //           </Link>
    //           <Link href="/register">
    //             <Button size="lg" variant="outline" className="w-full">
    //               Register Now
    //             </Button>
    //           </Link>
    //         </div>
    //         <p className="text-sm text-muted-foreground">Join 10,000+ students making better career decisions</p>
    //       </div>
    //       <div className="mx-auto lg:mx-0 relative">
    //         <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
    //           <Image
    //             src="/20250603_2321_Website Landing Visual_remix_01jwvy2sezedxvtvcwp2cr8bhy (1).png"
    //             alt="Students using GradLink AI"
    //             fill
    //             className="object-cover rounded-lg"
    //             priority
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>










    <section className="py-20 text-center bg-white">
  <div className="container mx-auto px-4 md:px-6">
    
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
        Your AI-powered academic and career companion
      </h1>
      <p className="text-lg text-muted-foreground text-gray-500">
        GradLink AI helps you stay on track academically and make confident career decisions with ease.
      </p>
     
      <div className="flex justify-center gap-4 flex-col sm:flex-row">
        <a href="/login" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white transition">
            Sign in with School Email
          </button>
        </a>
        <a href="/register" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-md border-2 border-blue-600 bg-white hover:bg-blue-50 text-blue-700 transition">
            Register Now
          </button>
        </a>
      </div>
     
      <p className="text-sm text-muted-foreground text-gray-400">
        🎓 Join 10,000+ students already shaping their future with GradLink
      </p>
    </div>
    
    <div className="mt-12 mx-auto max-w-5xl">
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
        <img
          src="/04.06.2025_10.15.33_REC.png"
          alt="Students using GradLink AI"
          className="absolute inset-0 w-full h-full object-cover"
        />

       
        {/* <video
          src="/gradlink video.mp4" 
          controls
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          poster="/your-poster-image.png" // Optional: fallback image
        /> */}

      </div>
    </div>
  </div>
</section>
  )
}
