"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Clock, GraduationCap, Star, TrendingUp } from "lucide-react"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const currentCourses = [
    {
      id: 1,
      code: "CSC301",
      title: "Data Structures and Algorithms",
      instructor: "Dr. Sarah Johnson",
      credits: 3,
      semester: "Spring 2024",
      progress: 75,
      grade: "A",
      gpa: 5.0,
      attendance: 92,
      assignments: { completed: 8, total: 10 },
      nextDeadline: "March 15, 2024",
      status: "In Progress",
    },
    {
      id: 2,
      code: "CSC302",
      title: "Database Management Systems",
      instructor: "Prof. Michael Chen",
      credits: 3,
      semester: "Spring 2024",
      progress: 60,
      grade: "B+",
      gpa: 4.5,
      attendance: 88,
      assignments: { completed: 6, total: 10 },
      nextDeadline: "March 12, 2024",
      status: "In Progress",
    },
    {
      id: 3,
      code: "MTH201",
      title: "Calculus II",
      instructor: "Dr. Emily Rodriguez",
      credits: 4,
      semester: "Spring 2024",
      progress: 80,
      grade: "A-",
      gpa: 4.7,
      attendance: 95,
      assignments: { completed: 7, total: 8 },
      nextDeadline: "March 18, 2024",
      status: "In Progress",
    },
    {
      id: 4,
      code: "ENG201",
      title: "Technical Writing",
      instructor: "Prof. David Wilson",
      credits: 2,
      semester: "Spring 2024",
      progress: 90,
      grade: "A",
      gpa: 5.0,
      attendance: 100,
      assignments: { completed: 5, total: 5 },
      nextDeadline: "March 20, 2024",
      status: "In Progress",
    },
  ]

  const completedCourses = [
    {
      id: 5,
      code: "CSC101",
      title: "Introduction to Programming",
      instructor: "Dr. James Smith",
      credits: 3,
      semester: "Fall 2023",
      finalGrade: "A",
      gpa: 5.0,
      status: "Completed",
    },
    {
      id: 6,
      code: "MTH101",
      title: "Calculus I",
      instructor: "Prof. Lisa Brown",
      credits: 4,
      semester: "Fall 2023",
      finalGrade: "B+",
      gpa: 4.5,
      status: "Completed",
    },
    {
      id: 7,
      code: "PHY101",
      title: "Physics I",
      instructor: "Dr. Robert Taylor",
      credits: 3,
      semester: "Fall 2023",
      finalGrade: "A-",
      gpa: 4.7,
      status: "Completed",
    },
  ]

  const recommendedCourses = [
    {
      id: 8,
      code: "CSC401",
      title: "Machine Learning",
      instructor: "Dr. AI Expert",
      credits: 3,
      semester: "Fall 2024",
      description: "Introduction to machine learning algorithms and applications",
      prerequisites: ["CSC301", "MTH201"],
      difficulty: "Advanced",
      rating: 4.8,
      enrollment: 45,
      maxEnrollment: 50,
    },
    {
      id: 9,
      code: "CSC350",
      title: "Software Engineering",
      instructor: "Prof. Code Master",
      credits: 3,
      semester: "Fall 2024",
      description: "Software development methodologies and project management",
      prerequisites: ["CSC301"],
      difficulty: "Intermediate",
      rating: 4.6,
      enrollment: 38,
      maxEnrollment: 40,
    },
  ]

  const getGradeColor = (grade: string) => {
    if (grade === "A" || grade === "A+") return "text-green-600 dark:text-green-400"
    if (grade === "A-" || grade === "B+") return "text-blue-600 dark:text-blue-400"
    if (grade === "B" || grade === "B-") return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="text-muted-foreground">Track your academic progress and discover new learning opportunities</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentCourses.length}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentCourses.reduce((sum, course) => sum + course.credits, 0)}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">A-</div>
            <p className="text-xs text-muted-foreground">Current semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Average attendance</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current" className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Current Courses</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="planner">Course Planner</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <div className="grid gap-6">
            {currentCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{course.code}</CardTitle>
                        <Badge variant="outline">{course.credits} Credits</Badge>
                        <Badge className={getGradeColor(course.grade)}>{course.grade}</Badge>
                      </div>
                      <CardDescription className="text-base">{course.title}</CardDescription>
                      <p className="text-sm text-muted-foreground">{course.instructor}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>Course Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>Attendance</span>
                        <span className="font-medium">{course.attendance}%</span>
                      </div>
                      <Progress value={course.attendance} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>Assignments</span>
                        <span className="font-medium">
                          {course.assignments.completed}/{course.assignments.total}
                        </span>
                      </div>
                      <Progress
                        value={(course.assignments.completed / course.assignments.total) * 100}
                        className="h-2"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Next deadline: {course.nextDeadline}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.semester}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Assignments
                    </Button>
                    <Button variant="outline" size="sm">
                      Grades
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4">
            {completedCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{course.code}</CardTitle>
                        <Badge variant="outline">{course.credits} Credits</Badge>
                        <Badge className={getGradeColor(course.finalGrade)}>{course.finalGrade}</Badge>
                        <Badge variant="secondary">Completed</Badge>
                      </div>
                      <CardDescription className="text-base">{course.title}</CardDescription>
                      <p className="text-sm text-muted-foreground">
                        {course.instructor} • {course.semester}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">GPA Contribution</div>
                      <div className="text-lg font-bold">{course.gpa}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="space-y-4">
          <div className="grid gap-6">
            {recommendedCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{course.code}</CardTitle>
                        <Badge variant="outline">{course.credits} Credits</Badge>
                        <Badge variant="secondary">{course.difficulty}</Badge>
                      </div>
                      <CardDescription className="text-base">{course.title}</CardDescription>
                      <p className="text-sm text-muted-foreground">
                        {course.instructor} • {course.semester}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {course.enrollment}/{course.maxEnrollment} enrolled
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{course.description}</p>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Prerequisites</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.prerequisites.map((prereq, index) => (
                        <Badge key={index} variant="outline">
                          {prereq}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button>Enroll Now</Button>
                    <Button variant="outline">Add to Wishlist</Button>
                    <Button variant="outline">View Syllabus</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="planner" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Planner</CardTitle>
              <CardDescription>Plan your academic journey and track degree requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2">Degree Progress</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Credits Completed</span>
                        <span>45/120</span>
                      </div>
                      <Progress value={37.5} className="h-2" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Core Requirements</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Core Courses</span>
                        <span>8/12</span>
                      </div>
                      <Progress value={66.7} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Fall 2024</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div>CSC401 - Machine Learning</div>
                        <div>CSC350 - Software Engineering</div>
                        <div>MTH301 - Statistics</div>
                        <div>ENG301 - Advanced Writing</div>
                      </div>
                      <div className="mt-4 text-xs text-muted-foreground">Total: 13 credits</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Spring 2025</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div>Plan your courses</div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        Add Courses
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Fall 2025</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div>Plan your courses</div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        Add Courses
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
