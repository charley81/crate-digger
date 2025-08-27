import { getTrack } from '../queries/get-track'
import { TrackItem } from './track-item'

type TrackDetails = {
  trackId: string
}

export async function TrackDetails({ trackId }: TrackDetails) {
  const track = await getTrack(trackId)
  return <TrackItem track={track} isDetail />
}
