"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Send, User, Mic, MicOff, Download, Share } from "lucide-react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  type?: "text" | "analysis" | "recommendation"
  metadata?: {
    confidence?: number
    sources?: string[]
    actionItems?: string[]
  }
}

type ChatSession = {
  id: string
  title: string
  lastMessage: string
  timestamp: Date
  messageCount: number
}

export default function GradBotPage() {
  const [input, setInput] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [currentSession, setCurrentSession] = useState<string>("session-1")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hi there! I'm GradBot, your AI-powered academic and career assistant. I can help you with career guidance, CGPA analysis, course recommendations, and much more. What would you like to explore today?",
      timestamp: new Date(),
      type: "text",
    },
  ])

  const [chatSessions] = useState<ChatSession[]>([
    {
      id: "session-1",
      title: "Career Path Analysis",
      lastMessage: "What are the best career paths for my CGPA?",
      timestamp: new Date(),
      messageCount: 12,
    },
    {
      id: "session-2",
      title: "Course Planning",
      lastMessage: "Help me plan my next semester courses",
      timestamp: new Date(Date.now() - 86400000),
      messageCount: 8,
    },
    {
      id: "session-3",
      title: "Internship Guidance",
      lastMessage: "How to prepare for tech internships?",
      timestamp: new Date(Date.now() - 172800000),
      messageCount: 15,
    },
  ])

  const quickActions = [
    {
      title: "Analyze My CGPA",
      description: "Get insights on your academic performance",
      prompt: "Can you analyze my current CGPA of 3.75 and suggest ways to improve it?",
    },
    {
      title: "Career Recommendations",
      description: "Find careers that match your profile",
      prompt: "What career paths would you recommend based on my Computer Science background and 3.75 CGPA?",
    },
    {
      title: "Course Planning",
      description: "Plan your next semester",
      prompt: "Help me choose the best courses for next semester to improve my career prospects in tech.",
    },
    {
      title: "Interview Preparation",
      description: "Get ready for job interviews",
      prompt: "How should I prepare for software engineering interviews with my current academic background?",
    },
    {
      title: "Skill Gap Analysis",
      description: "Identify skills you need to develop",
      prompt: "What skills should I focus on developing to be competitive in the data science field?",
    },
    {
      title: "Graduate School Advice",
      description: "Guidance on pursuing higher education",
      prompt: "Should I consider graduate school with my current academic performance? What are my options?",
    },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (messageText?: string) => {
    const text = messageText || input.trim()
    if (!text) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI processing with your custom AI package
    setTimeout(() => {
      let response = ""
      let messageType: "text" | "analysis" | "recommendation" = "text"
      let metadata = {}

      // Enhanced AI responses based on input analysis
      if (text.toLowerCase().includes("cgpa") || text.toLowerCase().includes("gpa")) {
        response = `Based on your CGPA of 3.75, you're performing well academically! Here's my analysis:

**Strengths:**
• Your CGPA is above average and shows consistent performance
• You're eligible for most graduate programs and competitive internships
• Strong foundation for tech career paths

**Recommendations:**
• Focus on practical projects to complement your academic performance
• Consider courses in emerging technologies (AI/ML, Cloud Computing)
• Build a strong portfolio with 2-3 significant projects

**Career Matches:**
• Data Science (95% match) - Your analytical skills align well
• Software Engineering (92% match) - Strong technical foundation
• Product Management (88% match) - Good balance of technical and business skills

Would you like me to dive deeper into any specific career path or provide guidance on improving your CGPA further?`
        messageType = "analysis"
        metadata = {
          confidence: 95,
          sources: ["Academic Records", "Career Database", "Industry Trends"],
          actionItems: ["Build portfolio", "Take advanced courses", "Apply for internships"],
        }
      } else if (text.toLowerCase().includes("career") || text.toLowerCase().includes("job")) {
        response = `Great question! Based on your Computer Science background and academic performance, here are the top career paths I recommend:

**🎯 High-Match Careers (90%+ compatibility):**

**1. Data Scientist**
• Salary: $80,000 - $120,000
• Growth: 24% (Much faster than average)
• Skills needed: Python, Machine Learning, Statistics
• Why it fits: Your analytical thinking and math background

**2. Software Engineer**
• Salary: $75,000 - $110,000  
• Growth: 22% (Much faster than average)
• Skills needed: Programming, System Design, Problem Solving
• Why it fits: Strong technical foundation from CS courses

**3. Product Manager**
• Salary: $90,000 - $130,000
• Growth: 20% (Faster than average)
• Skills needed: Strategy, Communication, Technical Understanding
• Why it fits: Bridge between technical and business

**Next Steps:**
1. Choose 1-2 paths to focus on
2. Build relevant projects for your portfolio
3. Network with professionals in these fields
4. Apply for related internships

Which career path interests you most? I can provide a detailed roadmap!`
        messageType = "recommendation"
        metadata = {
          confidence: 92,
          sources: ["Labor Statistics", "Industry Reports", "Alumni Data"],
          actionItems: ["Choose focus area", "Build portfolio", "Network", "Apply for internships"],
        }
      } else if (text.toLowerCase().includes("course") || text.toLowerCase().includes("semester")) {
        response = `I'd be happy to help you plan your courses! Based on your academic progress and career goals, here are my recommendations:

**🎯 Recommended Courses for Next Semester:**

**Core Technical Courses:**
• **CSC401 - Machine Learning** (High Priority)
  - Directly relevant to data science career path
  - Builds on your math foundation
  - High industry demand

• **CSC350 - Software Engineering** (High Priority)
  - Essential for software development roles
  - Teaches industry best practices
  - Great for portfolio projects

**Supporting Courses:**
• **MTH301 - Statistics** (Medium Priority)
  - Crucial for data science
  - Complements ML course
  
• **BUS201 - Business Fundamentals** (Optional)
  - Useful for product management path
  - Develops business acumen

**💡 Pro Tips:**
1. Balance technical depth with breadth
2. Choose courses that allow for portfolio projects
3. Consider professor ratings and teaching style
4. Ensure prerequisites are met

What's your target career path? I can customize these recommendations further!`
        messageType = "recommendation"
        metadata = {
          confidence: 88,
          sources: ["Course Catalog", "Career Requirements", "Academic Advisor"],
          actionItems: ["Review prerequisites", "Check schedules", "Register early", "Plan projects"],
        }
      } else if (text.toLowerCase().includes("internship") || text.toLowerCase().includes("interview")) {
        response = `Excellent! Let me help you prepare for tech internships. Here's a comprehensive preparation plan:

**📋 Interview Preparation Roadmap:**

**Technical Skills (60% of preparation):**
• **Data Structures & Algorithms** - Practice 2-3 problems daily on LeetCode
• **System Design** - Learn basics of scalable systems
• **Programming** - Master at least one language (Python/Java recommended)
• **Projects** - Have 2-3 substantial projects ready to discuss

**Behavioral Preparation (25%):**
• Prepare STAR method responses for common questions
• Practice explaining your projects clearly
• Develop your "why this company" story
• Prepare thoughtful questions about the role

**Company Research (15%):**
• Study the company's products and mission
• Understand their tech stack
• Research recent news and developments
• Connect with current employees on LinkedIn

**📅 Timeline (8-week plan):**
- Weeks 1-2: Strengthen DS&A fundamentals
- Weeks 3-4: Build/polish portfolio projects  
- Weeks 5-6: Practice mock interviews
- Weeks 7-8: Company-specific preparation

**🎯 Current Opportunities:**
• Google Summer Internship (Deadline: March 15)
• Microsoft SWE Internship (Deadline: March 20)
• Meta University Program (Rolling basis)

Would you like me to create a personalized study schedule or help you with specific interview topics?`
        messageType = "recommendation"
        metadata = {
          confidence: 94,
          sources: ["Interview Guides", "Company Requirements", "Success Stories"],
          actionItems: ["Start LeetCode practice", "Update resume", "Build projects", "Apply to programs"],
        }
      } else {
        response = `I understand you're looking for guidance! As your AI academic and career assistant, I can help you with:

**🎓 Academic Support:**
• CGPA analysis and improvement strategies
• Course planning and recommendations
• Study techniques and time management
• Academic goal setting

**💼 Career Guidance:**
• Career path recommendations based on your profile
• Industry insights and job market trends
• Skill gap analysis and development plans
• Interview preparation and tips

**🚀 Opportunities:**
• Internship and job recommendations
• Scholarship and program suggestions
• Networking strategies
• Portfolio development guidance

**🤖 AI-Powered Features:**
• Personalized recommendations using machine learning
• Real-time career market analysis
• Academic performance predictions
• Custom learning paths

Try asking me something specific like:
• "What careers match my Computer Science background?"
• "How can I improve my CGPA this semester?"
• "What skills should I learn for data science?"
• "Help me prepare for software engineering interviews"

What would you like to explore first?`
        messageType = "text"
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
        type: messageType,
        metadata,
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleVoiceInput = () => {
    setIsListening(!isListening)
    // Implement voice recognition here
    if (!isListening) {
      // Start voice recognition
      setTimeout(() => {
        setIsListening(false)
        setInput("What career paths would you recommend for me?")
      }, 3000)
    }
  }

  const exportChat = () => {
    const chatData = {
      session: currentSession,
      messages: messages,
      timestamp: new Date(),
    }
    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `gradbot-chat-${currentSession}.json`
    a.click()
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Chat Sessions Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chat Sessions</CardTitle>
              <Button size="sm" className="w-full">
                New Chat
              </Button>
            </CardHeader>
            <CardContent className="space-y-2">
              {chatSessions.map((session) => (
                <div
                  key={session.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    currentSession === session.id ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"
                  }`}
                  onClick={() => setCurrentSession(session.id)}
                >
                  <div className="font-medium text-sm truncate">{session.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{session.lastMessage}</div>
                  <div className="text-xs text-muted-foreground mt-1">{session.messageCount} messages</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">GradBot AI Assistant</h1>
              <p className="text-muted-foreground">Your personalized academic and career guidance powered by AI</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={exportChat}>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="chat" className="space-y-4">
            <TabsList>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="quick-actions">Quick Actions</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="space-y-4">
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">GradBot</CardTitle>
                        <CardDescription>AI Academic & Career Assistant</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Online
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex max-w-[85%] gap-3 rounded-lg p-4 ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarFallback>
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div className="space-y-2 min-w-0">
                          <div className="text-sm whitespace-pre-wrap break-words">{message.content}</div>
                          {message.metadata && (
                            <div className="space-y-2">
                              {message.metadata.confidence && (
                                <div className="flex items-center gap-2 text-xs">
                                  <span>Confidence:</span>
                                  <Badge variant="outline">{message.metadata.confidence}%</Badge>
                                </div>
                              )}
                              {message.metadata.actionItems && (
                                <div className="space-y-1">
                                  <div className="text-xs font-medium">Action Items:</div>
                                  <div className="flex flex-wrap gap-1">
                                    {message.metadata.actionItems.map((item, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {item}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          <div className="text-xs opacity-70">{message.timestamp.toLocaleTimeString()}</div>
                        </div>
                        {message.role === "user" && (
                          <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarFallback>
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 rounded-lg bg-muted p-4">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </CardContent>

                <div className="border-t p-4">
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Ask GradBot anything about your academic and career journey..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSend()
                        }
                      }}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleVoiceInput}
                      className={isListening ? "bg-red-100 text-red-600" : ""}
                    >
                      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </Button>
                    <Button size="icon" onClick={() => handleSend()} disabled={!input.trim() || isTyping}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="quick-actions" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {quickActions.map((action, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-base">{action.title}</CardTitle>
                      <CardDescription className="text-sm">{action.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full" onClick={() => handleSend(action.prompt)}>
                        Ask GradBot
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Chat Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Conversations</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Questions Asked</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Recommendations Given</span>
                      <span className="font-medium">89</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Average Response Time</span>
                      <span className="font-medium">1.2s</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Most Asked Topics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Career Guidance</span>
                      <Badge variant="outline">45%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">CGPA Analysis</span>
                      <Badge variant="outline">28%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Course Planning</span>
                      <Badge variant="outline">18%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Interview Prep</span>
                      <Badge variant="outline">9%</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">AI Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Accuracy Rate</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        94%
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">User Satisfaction</span>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        4.8/5
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Response Quality</span>
                      <Badge variant="outline" className="bg-purple-100 text-purple-800">
                        Excellent
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Model Version</span>
                      <Badge variant="outline">v2.1.0</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
