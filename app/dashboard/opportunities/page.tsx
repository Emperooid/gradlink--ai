"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, ExternalLink, MapPin, Search, Users } from "lucide-react"

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const opportunities = [
    {
      id: 1,
      type: "Internship",
      title: "Google Summer Internship 2024",
      company: "Google",
      location: "Remote",
      deadline: "March 15, 2024",
      duration: "3 months",
      description: "Join Google's summer internship program and work on cutting-edge technology projects.",
      requirements: ["Computer Science student", "Programming skills", "3.0+ GPA"],
      benefits: ["Mentorship", "Networking", "Certificate", "Stipend"],
      applicants: 1250,
      match: 92,
      status: "Open",
    },
    {
      id: 2,
      type: "Career Fair",
      title: "Tech Career Expo 2024",
      company: "Multiple Companies",
      location: "University Campus",
      deadline: "Tomorrow",
      duration: "1 day",
      description: "Meet with top tech companies and explore career opportunities in technology.",
      requirements: ["All students welcome", "Resume required", "Professional attire"],
      benefits: ["Direct recruitment", "Networking", "Career guidance", "Free lunch"],
      applicants: 500,
      match: 88,
      status: "Open",
    },
    {
      id: 3,
      type: "Scholarship",
      title: "Tech Leaders Scholarship Program",
      company: "Industry Foundation",
      location: "Global",
      deadline: "April 1, 2024",
      duration: "1 year",
      description: "Financial support for outstanding students pursuing technology careers.",
      requirements: ["3.5+ GPA", "Leadership experience", "Essay submission"],
      benefits: ["$10,000 award", "Mentorship", "Industry connections", "Certificate"],
      applicants: 800,
      match: 95,
      status: "Open",
    },
    {
      id: 4,
      type: "Internship",
      title: "Microsoft Software Engineering Internship",
      company: "Microsoft",
      location: "Seattle, WA",
      deadline: "March 20, 2024",
      duration: "12 weeks",
      description: "Work with Microsoft's engineering teams on real-world software projects.",
      requirements: ["CS/Engineering student", "Programming experience", "Problem-solving skills"],
      benefits: ["Competitive pay", "Housing assistance", "Full-time offer potential", "Training"],
      applicants: 2100,
      match: 90,
      status: "Open",
    },
    {
      id: 5,
      type: "Workshop",
      title: "AI/ML Bootcamp",
      company: "TechEd Institute",
      location: "Online",
      deadline: "March 10, 2024",
      duration: "2 weeks",
      description: "Intensive bootcamp covering machine learning and artificial intelligence fundamentals.",
      requirements: ["Basic programming knowledge", "Mathematics background", "Commitment to attend"],
      benefits: ["Certificate", "Project portfolio", "Industry mentors", "Job placement assistance"],
      applicants: 300,
      match: 87,
      status: "Open",
    },
    {
      id: 6,
      type: "Competition",
      title: "National Coding Championship",
      company: "CodeMasters",
      location: "Various Cities",
      deadline: "February 28, 2024",
      duration: "1 day",
      description: "Compete with the best programmers in the country and win exciting prizes.",
      requirements: ["Programming skills", "Team of 3", "University student"],
      benefits: ["Cash prizes", "Recognition", "Industry exposure", "Networking"],
      applicants: 1500,
      match: 85,
      status: "Closing Soon",
    },
  ]

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || opp.type.toLowerCase() === filterType.toLowerCase()
    return matchesSearch && matchesType
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Closing Soon":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Closed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Opportunities</h1>
        <p className="text-muted-foreground">
          Discover internships, scholarships, career fairs, and more opportunities tailored to your profile
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="internship">Internships</SelectItem>
              <SelectItem value="scholarship">Scholarships</SelectItem>
              <SelectItem value="career fair">Career Fairs</SelectItem>
              <SelectItem value="workshop">Workshops</SelectItem>
              <SelectItem value="competition">Competitions</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            Sort by Deadline
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Opportunities</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="applied">Applied</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-6">
            {filteredOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{opportunity.type}</Badge>
                        <Badge className={getStatusColor(opportunity.status)}>{opportunity.status}</Badge>
                        <Badge variant="secondary">{opportunity.match}% Match</Badge>
                      </div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <CardDescription className="text-base">{opportunity.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{opportunity.description}</p>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{opportunity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Due: {opportunity.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{opportunity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{opportunity.applicants} applicants</span>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {opportunity.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Benefits</h4>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.benefits.map((benefit, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1">Apply Now</Button>
                    <Button variant="outline">Save</Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended">
          <div className="grid gap-6">
            {filteredOpportunities
              .filter((opp) => opp.match >= 90)
              .map((opportunity) => (
                <Card key={opportunity.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{opportunity.title}</CardTitle>
                        <CardDescription>{opportunity.company}</CardDescription>
                      </div>
                      <Badge variant="secondary">{opportunity.match}% Match</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                    <div className="flex gap-2">
                      <Button>Apply Now</Button>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="applied">
          <Card>
            <CardHeader>
              <CardTitle>Applied Opportunities</CardTitle>
              <CardDescription>Track your application status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">No applications yet</p>
                <Button className="mt-4">Browse Opportunities</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saved">
          <Card>
            <CardHeader>
              <CardTitle>Saved Opportunities</CardTitle>
              <CardDescription>Opportunities you've saved for later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">No saved opportunities yet</p>
                <Button className="mt-4">Browse Opportunities</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
