import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CgpaOverview } from "@/components/dashboard/cgpa-overview"
import { CareerSuggestions } from "@/components/dashboard/career-suggestions"
import { Opportunities } from "@/components/dashboard/opportunities"
import { GradBotWidget } from "@/components/dashboard/gradbot-widget"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { Briefcase, GraduationCap, BarChart3, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    // Added overflow-x-hidden + w-full
    <div className="space-y-4 sm:space-y-6 xl:space-y-8 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 w-full overflow-x-hidden">
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground text-balance">Welcome to GradLink AI, your AI-powered academic and career companion</p>
      </div>
      
      {/* Stats Grid: Added xl breakpoint + CGPA spans 2 cols on xl */}
      <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="col-span-1 xl:col-span-2 min-w-0">
          {/* Wrap to contain potential overflow from component */}
          <div className="min-w-0 overflow-hidden">
            <CgpaOverview />
          </div>
        </div>
        
        <Card className="col-span-1 overflow-hidden min-w-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg">Today&apos;s Opportunities</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Latest opportunities matching your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                  <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium truncate break-words">Software Engineering Internship</p>
                  <p className="text-xs text-muted-foreground break-words">Microsoft • 2 days left</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                  <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium truncate break-words">Graduate Program 2024</p>
                  <p className="text-xs text-muted-foreground break-words">IBM • 1 week left</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-1 overflow-hidden min-w-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Responsive: always column, buttons full width */}
            <div className="flex flex-col gap-2 w-full">
              <Button variant="outline" size="sm" asChild className="w-full h-8 sm:h-10 text-xs sm:text-sm justify-start">
                <Link href="/dashboard/cgpa">
                  <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="truncate">Update CGPA</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="w-full h-8 sm:h-10 text-xs sm:text-sm justify-start">
                <Link href="/dashboard/careers">
                  <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="truncate">Career Matches</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="w-full h-8 sm:h-10 text-xs sm:text-sm justify-start">
                <Link href="/dashboard/chat">
                  <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="truncate">Chat with GradBot</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 min-w-0">
        <div className="lg:col-span-2 xl:col-span-3 space-y-4 sm:space-y-6 min-w-0">
          <div className="min-w-0 overflow-hidden">
            <CareerSuggestions />
          </div>
          <div className="min-w-0 overflow-hidden">
            <Opportunities />
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6 min-w-0">
          <div className="min-w-0 overflow-hidden">
            <GradBotWidget />
          </div>
            <div className="min-w-0 overflow-hidden">
              <RecentActivities />
            </div>
        </div>
      </div>
    </div>
  )
}
