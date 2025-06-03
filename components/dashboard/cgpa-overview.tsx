import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function CgpaOverview() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>CGPA Overview</CardTitle>
        <CardDescription>Your current academic performance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Current CGPA</span>
            <span className="text-sm font-medium">3.75 / 4.00</span>
          </div>
          <Progress value={93.75} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Target CGPA</span>
            <span className="text-sm font-medium">4.00</span>
          </div>
          <Progress value={100} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Course Progress</span>
            <span className="text-sm font-medium">75%</span>
          </div>
          <Progress value={75} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}
