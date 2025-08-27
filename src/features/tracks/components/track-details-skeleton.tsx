import { Skeleton } from '@/components/ui/skeleton'

export function TrackDetailsSkeleton() {
  return (
    <div className="mx-auto mt-8 w-full max-w-[768px] p-6">
      <div className="rounded-lg border">
        {/* CardHeader */}
        <div className="flex items-center justify-between p-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-6 w-16" />
        </div>
        {/* CardContent */}
        <div className="px-6 pb-6">
          <div className="mb-4 space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-6 w-36" />
          </div>
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      ``{' '}
    </div>
  )
}
