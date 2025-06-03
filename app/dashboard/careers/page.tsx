"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookmarkPlus, ExternalLink, Filter, Search, TrendingUp } from "lucide-react"

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const careerPaths = [
    {
      id: 1,
      title: "Data Scientist",
      company: "Tech Corp",
      match: 95,
      description:
        "Analyze complex data to help companies make better decisions using machine learning and statistical methods.",
      requirements: ["Python", "Machine Learning", "Statistics", "SQL"],
      salaryRange: "$80,000 - $120,000",
      growthRate: "24% growth expected",
      education: "Bachelor's in Computer Science, Statistics, or related field",
      experience: "0-2 years",
      skills: ["Data Analysis", "Python", "R", "Machine Learning", "Statistics"],
      saved: false,
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Global Systems",
      match: 92,
      description: "Design, develop, and maintain software applications and systems for various platforms.",
      requirements: ["JavaScript", "React", "Node.js", "Git"],
      salaryRange: "$75,000 - $110,000",
      growthRate: "22% growth expected",
      education: "Bachelor's in Computer Science or related field",
      experience: "0-3 years",
      skills: ["Programming", "Problem Solving", "Software Design", "Testing"],
      saved: true,
    },
    {
      id: 3,
      title: "Business Analyst",
      company: "Finance Tech",
      match: 88,
      description: "Bridge the gap between business needs and technology solutions through analysis and documentation.",
      requirements: ["Excel", "SQL", "Business Process", "Communication"],
      salaryRange: "$65,000 - $95,000",
      growthRate: "18% growth expected",
      education: "Bachelor's in Business, Economics, or related field",
      experience: "0-2 years",
      skills: ["Analysis", "Communication", "Problem Solving", "Documentation"],
      saved: false,
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Innovation Labs",
      match: 85,
      description: "Lead product development from conception to launch, working with cross-functional teams.",
      requirements: ["Product Strategy", "Agile", "User Research", "Analytics"],
      salaryRange: "$90,000 - $130,000",
      growthRate: "20% growth expected",
      education: "Bachelor's in Business, Engineering, or related field",
      experience: "2-4 years",
      skills: ["Leadership", "Strategy", "Communication", "Analytics"],
      saved: false,
    },
    {
      id: 5,
      title: "UX Designer",
      company: "Design Studio",
      match: 82,
      description: "Create intuitive and engaging user experiences for digital products and services.",
      requirements: ["Figma", "User Research", "Prototyping", "Design Thinking"],
      salaryRange: "$70,000 - $100,000",
      growthRate: "15% growth expected",
      education: "Bachelor's in Design, Psychology, or related field",
      experience: "1-3 years",
      skills: ["Design", "User Research", "Prototyping", "Creativity"],
      saved: true,
    },
    {
      id: 6,
      title: "Cybersecurity Analyst",
      company: "SecureTech",
      match: 79,
      description:
        "Protect organizations from cyber threats by monitoring, detecting, and responding to security incidents.",
      requirements: ["Network Security", "Risk Assessment", "Incident Response", "Compliance"],
      salaryRange: "$85,000 - $115,000",
      growthRate: "28% growth expected",
      education: "Bachelor's in Cybersecurity, Computer Science, or related field",
      experience: "1-3 years",
      skills: ["Security", "Risk Management", "Problem Solving", "Attention to Detail"],
      saved: false,
    },
  ]

  const filteredCareers = careerPaths.filter(
    (career) =>
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Career Paths</h1>
        <p className="text-muted-foreground">
          Discover career opportunities that match your academic profile and interests
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search career paths..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Sort by Match
          </Button>
        </div>
      </div>

      <Tabs defaultValue="recommended" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="saved">Saved Paths</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-4">
          <div className="grid gap-6">
            {filteredCareers.map((career) => (
              <Card key={career.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-xl">{career.title}</CardTitle>
                        <Badge variant="secondary">{career.match}% Match</Badge>
                      </div>
                      <CardDescription className="text-base">{career.company}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Career Match</span>
                      <span className="font-medium">{career.match}%</span>
                    </div>
                    <Progress value={career.match} className="h-2" />
                  </div>

                  <p className="text-muted-foreground">{career.description}</p>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Salary Range</h4>
                      <p className="text-sm text-muted-foreground">{career.salaryRange}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Growth Rate</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {career.growthRate}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Education</h4>
                      <p className="text-sm text-muted-foreground">{career.education}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Experience</h4>
                      <p className="text-sm text-muted-foreground">{career.experience}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Skills Required</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1">Save Career Path</Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="grid gap-6">
            {careerPaths
              .filter((career) => career.saved)
              .map((career) => (
                <Card key={career.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{career.title}</CardTitle>
                        <CardDescription>{career.company}</CardDescription>
                      </div>
                      <Badge variant="secondary">{career.match}% Match</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{career.description}</p>
                    <div className="flex gap-2">
                      <Button>View Details</Button>
                      <Button variant="outline">Remove from Saved</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="trending">
          <div className="grid gap-6">
            {careerPaths.slice(0, 3).map((career) => (
              <Card key={career.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {career.title}
                        <Badge variant="destructive">Trending</Badge>
                      </CardTitle>
                      <CardDescription>{career.company}</CardDescription>
                    </div>
                    <Badge variant="secondary">{career.match}% Match</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{career.description}</p>
                  <div className="flex gap-2">
                    <Button>Explore Path</Button>
                    <Button variant="outline">Save for Later</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
