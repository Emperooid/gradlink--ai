"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, Send, User } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm GradBot, your AI career assistant. How can I help you today?",
    },
  ])

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { role: "user", content: input }])

      // Simulate AI response
      setTimeout(() => {
        let response = ""

        if (input.toLowerCase().includes("cgpa")) {
          response =
            "Based on your current CGPA of 3.75, you're on track for excellent career opportunities in tech and finance sectors. Would you like me to analyze specific career paths that match your academic profile?"
        } else if (input.toLowerCase().includes("career") || input.toLowerCase().includes("job")) {
          response =
            "I can help you explore career options! Based on your academic profile, you have strong matches with Data Science (95%), Software Engineering (92%), and Business Analysis (88%). Which of these would you like to learn more about?"
        } else if (input.toLowerCase().includes("internship")) {
          response =
            "There are several internship opportunities matching your profile! Google has a Summer Internship program with applications closing in 2 days. Microsoft also has a Software Engineering Internship with a 92% match to your skills. Would you like me to help you prepare an application?"
        } else {
          response =
            "I'm here to help with your academic and career questions. You can ask me about your CGPA, career paths, internship opportunities, or how to improve your academic performance."
        }

        setMessages((prev) => [...prev, { role: "assistant", content: response }])
      }, 1000)

      setInput("")
    }
  }

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">GradBot</h1>
          <p className="text-muted-foreground">Your AI-powered academic and career assistant</p>
        </div>

        <Card className="border-none shadow-none">
          <CardContent className="p-6">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex max-w-[80%] gap-3 rounded-lg p-4 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className="space-y-1">
                      <p className="text-sm">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex items-center gap-2 border-t p-4">
            <Input
              placeholder="Ask GradBot a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend()
                }
              }}
              className="flex-1"
            />
            <Button size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suggested Questions</CardTitle>
            <CardDescription>Try asking GradBot these questions</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 md:grid-cols-2">
            <Button
              variant="outline"
              className="justify-start"
              onClick={() => setInput("What can I do with my current CGPA?")}
            >
              What can I do with my current CGPA?
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              onClick={() => setInput("What career paths match my academic profile?")}
            >
              What career paths match my academic profile?
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              onClick={() => setInput("How can I improve my CGPA this semester?")}
            >
              How can I improve my CGPA this semester?
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              onClick={() => setInput("What internships are available for my field?")}
            >
              What internships are available for my field?
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
