import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CgpaOverview } from "@/components/dashboard/cgpa-overview"
import { CareerSuggestions } from "@/components/dashboard/career-suggestions"
import { Opportunities } from "@/components/dashboard/opportunities"
import { GradBotWidget } from "@/components/dashboard/gradbot-widget"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { Briefcase, GraduationCap } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to GradLink AI, your AI-powered academic and career companion</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CgpaOverview />
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Today&apos;s Opportunities</CardTitle>
            <CardDescription>Latest opportunities matching your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Software Engineering Internship</p>
                  <p className="text-xs text-muted-foreground">Microsoft • 2 days left</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Graduate Program 2024</p>
                  <p className="text-xs text-muted-foreground">IBM • 1 week left</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Update CGPA
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                View Career Matches
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 col-span-2">
                Chat with GradBot
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CareerSuggestions />
        <Opportunities />
        <div className="space-y-6">
          <GradBotWidget />
          <RecentActivities />
        </div>
      </div>
    </div>
  )
}
