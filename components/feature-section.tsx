import { BarChart3, BookOpen, Briefcase, GraduationCap } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Turn your CGPA into Career Clarity",
      description: "Get personalized career recommendations based on your academic performance",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Get AI-Powered Academic Advice",
      description: "Receive tailored guidance to improve your academic journey",
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Discover Jobs & Internships That Fit You",
      description: "Find opportunities that match your skills and interests",
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Track Your Progress",
      description: "Monitor your academic growth and career readiness",
    },
  ]

  return (
    <section className="py-16 bg-muted/50" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Discover how GradLink AI can help you succeed in your academic and career journey
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="text-primary">{feature.icon}</div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
