import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export function GradBotWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          GradBot
        </CardTitle>
        <CardDescription>AI Career Assistant</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="rounded-md bg-muted p-3">
          <p className="text-sm font-medium">What can I do with a 3.4 CGPA in Systems Engineering?</p>
        </div>
        <div className="rounded-md bg-primary/10 p-3">
          <p className="text-sm">Based on your CGPA and course, you&apos;re well-suited for:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Data Analytics (92% match)</li>
            <li>Product Design (88% match)</li>
            <li>Graduate Tech Internships (85% match)</li>
          </ul>
          <p className="mt-2 text-sm">Would you like more details about any of these paths?</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Check CGPA Advice
        </Button>
        <Button variant="outline" size="sm">
          Find Opportunities
        </Button>
        <Button size="sm">Ask Career Question</Button>
      </CardFooter>
    </Card>
  )
}
