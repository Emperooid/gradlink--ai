"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Edit, GraduationCap, MapPin, Mail, Phone, Award, Target, TrendingUp, BookOpen } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const userProfile = {
    name: "John Doe",
    email: "john.doe@university.edu",
    phone: "+1 (555) 123-4567",
    university: "University of Technology",
    course: "Computer Science",
    level: "300 Level",
    cgpa: 3.75,
    targetCgpa: 4.0,
    location: "Lagos, Nigeria",
    bio: "Passionate Computer Science student with interests in AI, machine learning, and software development. Looking to make an impact in the tech industry.",
    joinDate: "September 2022",
    profileImage: "/placeholder.svg?height=100&width=100",
  }

  const academicStats = {
    totalCredits: 45,
    completedCourses: 15,
    currentCourses: 4,
    averageGrade: "A-",
    attendance: 94,
    rank: 12,
    totalStudents: 150,
  }

  const achievements = [
    {
      title: "Dean's List",
      description: "Achieved Dean's List for Fall 2023 semester",
      date: "December 2023",
      type: "Academic",
    },
    {
      title: "Best Programming Project",
      description: "Won best project award in CSC301 course",
      date: "November 2023",
      type: "Project",
    },
    {
      title: "Hackathon Winner",
      description: "1st place in University Tech Hackathon",
      date: "October 2023",
      type: "Competition",
    },
    {
      title: "Perfect Attendance",
      description: "100% attendance for Spring 2023",
      date: "May 2023",
      type: "Attendance",
    },
  ]

  const activities = [
    {
      action: "Completed CGPA Analysis",
      timestamp: "2 hours ago",
      details: "Updated CGPA to 3.75",
    },
    {
      action: "Saved Career Path",
      timestamp: "1 day ago",
      details: "Data Scientist at Tech Corp",
    },
    {
      action: "Applied to Internship",
      timestamp: "3 days ago",
      details: "Google Summer Internship 2024",
    },
    {
      action: "Completed Course",
      timestamp: "1 week ago",
      details: "CSC301 - Data Structures",
    },
    {
      action: "Chat with GradBot",
      timestamp: "1 week ago",
      details: "Career guidance session",
    },
    {
      action: "Updated Profile",
      timestamp: "2 weeks ago",
      details: "Added new skills and bio",
    },
  ]

  const skills = [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 78 },
    { name: "Data Analysis", level: 82 },
    { name: "Machine Learning", level: 70 },
    { name: "React", level: 75 },
    { name: "SQL", level: 80 },
  ]

  const goals = [
    {
      title: "Achieve 4.0 CGPA",
      progress: 75,
      deadline: "End of Semester",
      status: "In Progress",
    },
    {
      title: "Complete 3 Projects",
      progress: 67,
      deadline: "June 2024",
      status: "In Progress",
    },
    {
      title: "Land Tech Internship",
      progress: 40,
      deadline: "Summer 2024",
      status: "In Progress",
    },
    {
      title: "Learn Machine Learning",
      progress: 85,
      deadline: "March 2024",
      status: "Almost Complete",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">Manage your academic profile and track your progress</p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)}>
          <Edit className="mr-2 h-4 w-4" />
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Overview */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto">
                <AvatarImage src={userProfile.profileImage || "/placeholder.svg"} alt={userProfile.name} />
                <AvatarFallback className="text-lg">
                  {userProfile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{userProfile.name}</CardTitle>
              <CardDescription>
                {userProfile.course} • {userProfile.level}
              </CardDescription>
              <Badge variant="secondary" className="mx-auto">
                CGPA: {userProfile.cgpa}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{userProfile.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{userProfile.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span>{userProfile.university}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{userProfile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined {userProfile.joinDate}</span>
                </div>
              </div>
              <div className="pt-4">
                <Label className="text-sm font-medium">Bio</Label>
                <p className="text-sm text-muted-foreground mt-1">{userProfile.bio}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Academic Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{academicStats.totalCredits}</div>
                  <div className="text-xs text-muted-foreground">Total Credits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{academicStats.completedCourses}</div>
                  <div className="text-xs text-muted-foreground">Completed Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{academicStats.averageGrade}</div>
                  <div className="text-xs text-muted-foreground">Average Grade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{academicStats.attendance}%</div>
                  <div className="text-xs text-muted-foreground">Attendance</div>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-sm mb-2">
                  <span>Class Rank</span>
                  <span>
                    {academicStats.rank} of {academicStats.totalStudents}
                  </span>
                </div>
                <Progress value={(1 - academicStats.rank / academicStats.totalStudents) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">CGPA Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Current CGPA</span>
                        <span className="font-medium">{userProfile.cgpa}</span>
                      </div>
                      <Progress value={(userProfile.cgpa / 5.0) * 100} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Target CGPA</span>
                        <span className="font-medium">{userProfile.targetCgpa}</span>
                      </div>
                      <Progress value={(userProfile.targetCgpa / 5.0) * 100} className="h-2" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      You need {(userProfile.targetCgpa - userProfile.cgpa).toFixed(2)} points to reach your target
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Skills Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {skills.slice(0, 4).map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="font-medium">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-1.5" />
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      View All Skills
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.slice(0, 5).map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{activity.action}</span>
                            <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="academic" className="space-y-4">
              {isEditing ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Edit Academic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="university">University</Label>
                        <Input id="university" defaultValue={userProfile.university} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course">Course of Study</Label>
                        <Input id="course" defaultValue={userProfile.course} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="level">Current Level</Label>
                        <Select defaultValue="300">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="100">100 Level</SelectItem>
                            <SelectItem value="200">200 Level</SelectItem>
                            <SelectItem value="300">300 Level</SelectItem>
                            <SelectItem value="400">400 Level</SelectItem>
                            <SelectItem value="500">500 Level</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cgpa">Current CGPA</Label>
                        <Input id="cgpa" type="number" step="0.01" defaultValue={userProfile.cgpa} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" defaultValue={userProfile.bio} />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Academic Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">University</span>
                        <span className="text-sm font-medium">{userProfile.university}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Course</span>
                        <span className="text-sm font-medium">{userProfile.course}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Level</span>
                        <span className="text-sm font-medium">{userProfile.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Current CGPA</span>
                        <span className="text-sm font-medium">{userProfile.cgpa}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Target CGPA</span>
                        <span className="text-sm font-medium">{userProfile.targetCgpa}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Class Rank</span>
                        <span className="text-sm font-medium">
                          {academicStats.rank} of {academicStats.totalStudents}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Average Grade</span>
                        <span className="text-sm font-medium">{academicStats.averageGrade}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Attendance Rate</span>
                        <span className="text-sm font-medium">{academicStats.attendance}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Completed Credits</span>
                        <span className="text-sm font-medium">{academicStats.totalCredits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Courses Completed</span>
                        <span className="text-sm font-medium">{academicStats.completedCourses}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Skills & Competencies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-500" />
                            <CardTitle className="text-lg">{achievement.title}</CardTitle>
                            <Badge variant="outline">{achievement.type}</Badge>
                          </div>
                          <CardDescription>{achievement.description}</CardDescription>
                        </div>
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-4">
              <div className="grid gap-4">
                {goals.map((goal, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-blue-500" />
                            <CardTitle className="text-lg">{goal.title}</CardTitle>
                            <Badge variant={goal.status === "Almost Complete" ? "default" : "secondary"}>
                              {goal.status}
                            </Badge>
                          </div>
                          <CardDescription>Deadline: {goal.deadline}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Activity Timeline</CardTitle>
                  <CardDescription>Your complete activity history on GradLink AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="h-3 w-3 rounded-full bg-primary mt-1.5"></div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{activity.action}</span>
                            <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
