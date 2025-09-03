import Link from 'next/link'
import { Suspense } from 'react'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Tracklist } from '@/features/tracks/components/track-list'
import { TrackListSkeleton } from '@/features/tracks/components/track-list-skeleton'
import { createPath } from '@/paths'

export default function TracksPage() {
  return (
    <div className="mx-auto mt-8 w-full max-w-[768px] p-6">
      <Header title="Tracks page" description="All your tracks here" />

      <Button asChild className="mt-20 mb-4">
        <Link href={createPath()}>Create Track</Link>
      </Button>

      <Suspense fallback={<TrackListSkeleton />}>
        <Tracklist />
      </Suspense>
    </div>
  )
}
