import Link from 'next/link'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Track } from '@/generated/prisma'
import { trackPath } from '@/paths'

type TrackItemProps = {
  track: Track
  isDetail?: boolean
}

export function TrackItem({ track, isDetail }: TrackItemProps) {
  const cardContent = (
    <Card key={track.id}>
      <CardHeader className="flex items-center justify-between">
        <div>
          <CardDescription>{track.title}</CardDescription>
          <CardTitle>{track.producer}</CardTitle>
        </div>
        <CardAction className="self-center">{track.genre}</CardAction>
      </CardHeader>
      {isDetail && (
        <CardContent>
          <div className="mb-4">
            <CardDescription>
              {track.album} | {track.releaseDate}
            </CardDescription>
            <CardTitle className="font-bold">{track.label}</CardTitle>
          </div>
          {track.description && (
            <CardDescription>{track.description}</CardDescription>
          )}
        </CardContent>
      )}
    </Card>
  )

  if (!isDetail) return <Link href={trackPath(track.id)}>{cardContent}</Link>

  return cardContent
}
