import { TrackItem } from '@/features/tracks/components/track-item'
import { getTrack } from '@/features/tracks/queries/get-track'

type TrackPageProps = {
  params: Promise<{ trackId: string }>
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { trackId } = await params
  const track = await getTrack(trackId)
  return (
    <div className="mx-auto mt-8 w-full max-w-[768px] p-6">
      <TrackItem track={track} isDetail />
    </div>
  )
}
