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
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Your latest actions on GradLink AI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium">{activity.title}</span>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
