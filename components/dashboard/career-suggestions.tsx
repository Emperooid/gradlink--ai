import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function CareerSuggestions() {
  const careers = [
    {
      title: "Data Scientist",
      company: "Tech Corp",
      match: 95,
      description: "High analytical thinking + strong GPA in Math courses",
      salary: "$80,000-$120,000",
      growth: "24% growth expected",
    },
    {
      title: "Software Engineer",
      company: "Global Systems",
      match: 92,
      description: "Excellence in programming courses + problem-solving skills",
      salary: "$75,000-$110,000",
      growth: "22% growth expected",
    },
    {
      title: "Business Analyst",
      company: "Finance Tech",
      match: 88,
      description: "Strong performance in business modules + technical skills",
      salary: "$65,000-$95,000",
      growth: "18% growth expected",
    },
  ]

  return (
    <Card className="w-full">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">Career Suggestions</CardTitle>
        <CardDescription className="text-xs sm:text-sm">Personalized career recommendations based on your academic performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 sm:space-y-6">
          {careers.map((career, index) => (
            <div key={index} className="rounded-lg border p-3 sm:p-4">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-sm sm:text-base">{career.title}</h3>
                      <Badge variant="outline" className="text-xs">{career.match}% Match</Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{career.company}</p>
                    <p className="text-xs sm:text-sm">{career.description}</p>
                    <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 pt-1 sm:pt-2">
                      <span className="text-xs text-muted-foreground">{career.salary}</span>
                      <span className="text-xs text-muted-foreground">{career.growth}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1 text-xs sm:text-sm shrink-0">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Save Career Path</span>
                    <span className="sm:hidden">Save</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
