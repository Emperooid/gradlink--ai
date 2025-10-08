"use client"

import { Component, ErrorInfo, ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Dashboard Error:", error, errorInfo)
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex items-center justify-center min-h-[400px] p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-destructive/10">
                <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-destructive" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Something went wrong</CardTitle>
              <CardDescription className="text-sm">
                We encountered an error while loading this section. Please try again.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-3 sm:space-y-4">
              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="p-3 bg-muted rounded-md text-left">
                  <p className="text-xs font-mono text-muted-foreground break-all">
                    {this.state.error.message}
                  </p>
                </div>
              )}
              <Button onClick={this.handleRetry} className="w-full text-sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}

// Lightweight error fallback for smaller components
export function ErrorFallback({ 
  error, 
  onRetry 
}: { 
  error?: Error
  onRetry?: () => void 
}) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-center justify-center p-6 sm:p-8 text-center">
        <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-destructive mb-3 sm:mb-4" />
        <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Unable to load content</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          Please check your connection and try again.
        </p>
        {onRetry && (
          <Button onClick={onRetry} size="sm" variant="outline" className="text-xs">
            <RefreshCw className="h-3 w-3 mr-2" />
            Retry
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
