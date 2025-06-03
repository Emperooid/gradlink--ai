import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CgpaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">CGPA Analyzer</h1>
        <p className="text-muted-foreground">
          Analyze your academic performance and get personalized career recommendations
        </p>
      </div>

      <Tabs defaultValue="analyzer" className="space-y-4">
        <TabsList>
          <TabsTrigger value="analyzer">CGPA Analyzer</TabsTrigger>
          <TabsTrigger value="calculator">CGPA Calculator</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="analyzer" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Current CGPA</CardTitle>
                <CardDescription>Your current academic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <span className="text-5xl font-bold">4.00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Level</CardTitle>
                <CardDescription>Your current academic level</CardDescription>
              </CardHeader>
              <CardContent>
                <Select defaultValue="100">
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100 Level</SelectItem>
                    <SelectItem value="200">200 Level</SelectItem>
                    <SelectItem value="300">300 Level</SelectItem>
                    <SelectItem value="400">400 Level</SelectItem>
                    <SelectItem value="500">500 Level</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Title</CardTitle>
                <CardDescription>Your course of study</CardDescription>
              </CardHeader>
              <CardContent>
                <Input placeholder="e.g. Computer Science" />
              </CardContent>
            </Card>
          </div>

          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <CardDescription>Career path analysis based on your academic performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Match Score</span>
                  <span className="font-medium text-primary">92%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full w-[92%] rounded-full bg-primary"></div>
                </div>
                <p className="text-sm text-muted-foreground">Strong fit for tech careers</p>
              </div>

              <div>
                <h3 className="font-medium">Top Career Paths</h3>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Data Scientist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4"></span>
                    <span>Software Engineer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4"></span>
                    <span>Business Analyst</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full">Analyze Career Path</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calculator">
          <Card>
            <CardHeader>
              <CardTitle>CGPA Calculator</CardTitle>
              <CardDescription>Calculate your CGPA based on your courses and grades</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <Label htmlFor="course-code">Course Code</Label>
                    <Input id="course-code" placeholder="e.g. CSC101" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-title">Course Title</Label>
                    <Input id="course-title" placeholder="e.g. Introduction to Programming" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="credit-units">Credit Units</Label>
                    <Input id="credit-units" type="number" placeholder="e.g. 3" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade</Label>
                    <Select>
                      <SelectTrigger id="grade">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">A (5.0)</SelectItem>
                        <SelectItem value="b">B (4.0)</SelectItem>
                        <SelectItem value="c">C (3.0)</SelectItem>
                        <SelectItem value="d">D (2.0)</SelectItem>
                        <SelectItem value="e">E (1.0)</SelectItem>
                        <SelectItem value="f">F (0.0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button variant="outline">Add Course</Button>

                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                    <div>Course Code</div>
                    <div className="col-span-2">Course Title</div>
                    <div>Credit Units</div>
                    <div>Grade</div>
                  </div>
                  <div className="border-t px-4 py-2 text-center text-sm text-muted-foreground">
                    No courses added yet
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-md border p-4">
                  <span className="font-medium">Calculated CGPA:</span>
                  <span className="text-xl font-bold">0.00</span>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Calculate CGPA</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>CGPA History</CardTitle>
              <CardDescription>Track your CGPA progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-3 gap-4 p-4 font-medium">
                  <div>Semester</div>
                  <div>CGPA</div>
                  <div>Date Updated</div>
                </div>
                <div className="border-t grid grid-cols-3 gap-4 p-4">
                  <div>First Semester 2023/2024</div>
                  <div>4.00</div>
                  <div className="text-muted-foreground">2 weeks ago</div>
                </div>
                <div className="border-t grid grid-cols-3 gap-4 p-4">
                  <div>Second Semester 2022/2023</div>
                  <div>3.75</div>
                  <div className="text-muted-foreground">6 months ago</div>
                </div>
                <div className="border-t grid grid-cols-3 gap-4 p-4">
                  <div>First Semester 2022/2023</div>
                  <div>3.50</div>
                  <div className="text-muted-foreground">1 year ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
