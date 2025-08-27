import { Suspense } from 'react'

import { TrackDetails } from '@/features/tracks/components/track-details'
import { TrackDetailsSkeleton } from '@/features/tracks/components/track-details-skeleton'

type TrackPageProps = {
  params: Promise<{ trackId: string }>
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { trackId } = await params
  return (
    <Suspense fallback={<TrackDetailsSkeleton />}>
      <div className="mx-auto mt-8 w-full max-w-[768px] p-6">
        <TrackDetails trackId={trackId} />
      </div>
    </Suspense>
  )
}
