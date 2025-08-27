import { Suspense } from 'react'

import { Header } from '@/components/header'
import { Tracklist } from '@/features/tracks/components/track-list'
import { TrackListSkeleton } from '@/features/tracks/components/track-list-skeleton'

export default function TracksPage() {
  return (
    <div className="mx-auto mt-8 w-full max-w-[768px] p-6">
      <Header title="Tracks page" description="All your tracks here" />

      <Suspense fallback={<TrackListSkeleton />}>
        <Tracklist />
      </Suspense>
    </div>
  )
}
