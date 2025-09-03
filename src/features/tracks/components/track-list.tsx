import { getTracks } from '../queries/get-tracks'
import { TrackItem } from './track-item'

export async function Tracklist() {
  const tracks = await getTracks()
  return (
    <div className="flex flex-col gap-y-4">
      {tracks.map((track) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </div>
  )
}
