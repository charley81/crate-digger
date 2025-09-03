import { Skeleton } from '@/components/ui/skeleton'

export function TrackListSkeleton() {
  return (
    <div className="flex flex-col gap-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="rounded-lg border">
          <div className="flex items-center justify-between p-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
      ))}
    </div>
  )
}
