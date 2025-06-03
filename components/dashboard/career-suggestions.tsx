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
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Career Suggestions</CardTitle>
        <CardDescription>Personalized career recommendations based on your academic performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {careers.map((career, index) => (
            <div key={index} className="rounded-lg border p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{career.title}</h3>
                    <Badge variant="outline">{career.match}% Match</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{career.company}</p>
                  <p className="text-sm">{career.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
                    <span className="text-xs text-muted-foreground">{career.salary}</span>
                    <span className="text-xs text-muted-foreground">{career.growth}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Check className="h-4 w-4" />
                  Save Career Path
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
