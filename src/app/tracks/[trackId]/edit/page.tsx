import { notFound } from 'next/navigation'

import { CardCompact } from '@/components/card-compact'
import { TrackUpsertForm } from '@/features/tracks/components/track-upsert-form'
import { getTrack } from '@/features/tracks/queries/get-track'

type TrackEditPageProps = {
  params: Promise<{ trackId: string }>
}

export default async function TrackEditPage({ params }: TrackEditPageProps) {
  const { trackId } = await params
  const track = await getTrack(trackId)

  if (!track) {
    return notFound()
  }

  return (
    <CardCompact
      title="Edit track..."
      description="edit this track here"
      content={<TrackUpsertForm track={track} />}
      className="w-full max-w-[644px] self-center"
    />
  )
}
