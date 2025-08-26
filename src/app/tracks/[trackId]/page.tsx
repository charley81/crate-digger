import { getTrack } from '@/features/tracks/queries/get-track'

type TrackPageProps = {
  params: Promise<{ trackId: string }>
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { trackId } = await params
  const track = await getTrack(trackId)
  return (
    <div>
      <h3>{track.title}</h3>
      <h4>{track.producer}</h4>
      <p>{track.label}</p>
      <p>{track.releaseDate}</p>
    </div>
  )
}
