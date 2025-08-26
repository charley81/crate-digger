import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Track } from '@/generated/prisma'

type TrackItemProps = {
  track: Track
}

export function TrackItem({ track }: TrackItemProps) {
  return (
    <Card key={track.id}>
      <CardHeader>
        <CardTitle>{track.title}</CardTitle>
        <CardDescription>{track.producer}</CardDescription>
      </CardHeader>
    </Card>
  )
}
