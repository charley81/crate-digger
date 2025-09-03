import { CardCompact } from '@/components/card-compact'
import { TrackUpsertForm } from '@/features/tracks/components/track-upsert-form'

export default function CreateTrackPage() {
  return (
    <CardCompact
      title="Add track..."
      description="add tracks here"
      content={<TrackUpsertForm />}
    />
  )
}
