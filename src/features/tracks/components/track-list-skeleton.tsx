import { Skeleton } from '@/components/ui/skeleton'

export function TrackListSkeleton() {
  return (
    <div className="mt-20 flex flex-col gap-y-4">
      <Skeleton className="h-24 w-full"></Skeleton>
      <Skeleton className="h-24 w-full"></Skeleton>
      <Skeleton className="h-24 w-full"></Skeleton>
    </div>
  )
}
