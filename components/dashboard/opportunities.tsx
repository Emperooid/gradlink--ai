import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Opportunities() {
  const opportunities = [
    {
      type: "Internship",
      title: "Google Summer Internship 2024",
      company: "Google",
      date: "March 15, 2024",
      location: "Remote",
    },
    {
      type: "Career Fair",
      title: "Tech Career Expo 2024",
      company: "Multiple Companies",
      date: "Tomorrow",
      location: "University Campus",
    },
    {
      type: "Scholarship",
      title: "Tech Leaders Scholarship Program",
      company: "Industry Foundation",
      date: "April 1, 2024",
      location: "Global",
    },
  ]

  return (
    <Card className="w-full">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">Opportunities & Alerts</CardTitle>
        <CardDescription className="text-xs sm:text-sm">Latest opportunities matching your profile</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 sm:space-y-4">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="flex flex-col space-y-2 sm:space-y-3 rounded-lg border p-3 sm:p-4">
              <div className="flex items-start justify-between gap-2">
                <Badge variant="outline" className="px-2 py-0.5 text-xs">
                  {opportunity.type}
                </Badge>
                <Button variant="ghost" size="sm" className="h-6 sm:h-7 px-2 text-xs sm:text-sm shrink-0">
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </Button>
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-sm sm:text-base line-clamp-2">{opportunity.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">{opportunity.company}</p>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-xs text-muted-foreground">
                <span className="truncate">{opportunity.date}</span>
                <span>•</span>
                <span className="truncate">{opportunity.location}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
