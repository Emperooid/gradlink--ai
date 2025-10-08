import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivities() {
  const activities = [
    {
      title: "Updated CGPA",
      time: "2 hours ago",
    },
    {
      title: "Viewed Career Match",
      time: "Yesterday",
    },
    {
      title: "Applied to Internship",
      time: "2 days ago",
    },
  ]

  return (
    <Card className="w-full">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">Recent Activities</CardTitle>
        <CardDescription className="text-xs sm:text-sm">Your latest actions on GradLink AI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 sm:space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <span className="text-xs sm:text-sm font-medium truncate">{activity.title}</span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
