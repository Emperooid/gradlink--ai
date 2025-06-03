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
    <Card>
      <CardHeader>
        <CardTitle>Opportunities & Alerts</CardTitle>
        <CardDescription>Latest opportunities matching your profile</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="flex flex-col space-y-2 rounded-lg border p-3">
              <div className="flex items-start justify-between">
                <Badge variant="outline" className="px-2 py-0">
                  {opportunity.type}
                </Badge>
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  Apply Now
                </Button>
              </div>
              <div>
                <h3 className="font-medium">{opportunity.title}</h3>
                <p className="text-sm text-muted-foreground">{opportunity.company}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{opportunity.date}</span>
                <span>•</span>
                <span>{opportunity.location}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
