import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function DashboardSkeleton() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header skeleton */}
      <div className="space-y-1 sm:space-y-2">
        <Skeleton className="h-6 sm:h-8 w-32 sm:w-40" />
        <Skeleton className="h-4 w-64 sm:w-80" />
      </div>

      {/* Stats Grid skeleton */}
      <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="pb-3 sm:pb-4">
              <Skeleton className="h-4 sm:h-5 w-24 sm:w-32" />
              <Skeleton className="h-3 sm:h-4 w-32 sm:w-40" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 sm:h-12 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid skeleton */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-3 sm:pb-4">
                <Skeleton className="h-5 sm:h-6 w-32 sm:w-40" />
                <Skeleton className="h-3 sm:h-4 w-48 sm:w-64" />
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="rounded-lg border p-3 sm:p-4">
                    <Skeleton className="h-4 sm:h-5 w-3/4 mb-2" />
                    <Skeleton className="h-3 sm:h-4 w-1/2 mb-3" />
                    <div className="flex gap-2">
                      <Skeleton className="h-8 sm:h-10 flex-1" />
                      <Skeleton className="h-8 sm:h-10 w-20 sm:w-24" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-4 sm:space-y-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-3 sm:pb-4">
                <Skeleton className="h-5 sm:h-6 w-24 sm:w-32" />
                <Skeleton className="h-3 sm:h-4 w-32 sm:w-48" />
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <Skeleton className="h-16 sm:h-20 w-full" />
                <Skeleton className="h-8 sm:h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-3 sm:pb-4">
        <Skeleton className="h-5 sm:h-6 w-32 sm:w-40" />
        <Skeleton className="h-3 sm:h-4 w-48 sm:w-64" />
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <Skeleton className="h-16 sm:h-20 w-full" />
        <Skeleton className="h-8 sm:h-10 w-full" />
      </CardContent>
    </Card>
  )
}

export function ListItemSkeleton() {
  return (
    <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg">
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 sm:h-5 w-3/4" />
        <Skeleton className="h-3 sm:h-4 w-1/2" />
      </div>
      <Skeleton className="h-8 sm:h-10 w-16 sm:w-20" />
    </div>
  )
}
