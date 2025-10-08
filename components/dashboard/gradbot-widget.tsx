import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

export function GradBotWidget() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
          GradBot
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">AI Career Assistant</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 sm:space-y-3">
        <div className="rounded-md bg-muted p-2 sm:p-3">
          <p className="text-xs sm:text-sm font-medium">What can I do with a 3.4 CGPA in Systems Engineering?</p>
        </div>
        <div className="rounded-md bg-primary/10 p-2 sm:p-3">
          <p className="text-xs sm:text-sm">Based on your CGPA and course, you&apos;re well-suited for:</p>
          <ul className="mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
            <li>Data Analytics (92% match)</li>
            <li>Product Design (88% match)</li>
            <li>Graduate Tech Internships (85% match)</li>
          </ul>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Would you like more details about any of these paths?</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-3 sm:pt-4">
        <Button variant="outline" size="sm" asChild className="w-full text-xs">
          <Link href="/dashboard/cgpa">Check CGPA Advice</Link>
        </Button>
        <Button variant="outline" size="sm" asChild className="w-full text-xs">
          <Link href="/dashboard/opportunities">Find Opportunities</Link>
        </Button>
        <Button size="sm" asChild className="w-full text-xs">
          <Link href="/dashboard/chat">Ask Career Question</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
