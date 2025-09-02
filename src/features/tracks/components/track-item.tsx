import Link from 'next/link'
import { LucideTrash, LucideArrowBigLeft, LucidePencil } from 'lucide-react'
import { deleteTrack } from '../actions/delete-track'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Track } from '@/generated/prisma'
import { trackPath, tracksPath, updateTrack } from '@/paths'
import { Button } from '@/components/ui/button'

type TrackItemProps = {
  track: Track
  isDetail?: boolean
}

export function TrackItem({ track, isDetail }: TrackItemProps) {
  const deleteButton = (
    <form action={deleteTrack.bind(null, track.id)}>
      <Button
        variant="outline"
        size="icon"
        type="submit"
        className="hover:cursor-pointer"
      >
        <LucideTrash />
      </Button>
    </form>
  )

  const backButton = (
    <Button asChild variant="outline" size="icon">
      <Link href={tracksPath()}>
        <LucideArrowBigLeft />
      </Link>
    </Button>
  )

  const editButton = (
    <Button asChild variant="outline" size="icon">
      <Link href={updateTrack(track.id)}>
        <LucidePencil />
      </Link>
    </Button>
  )

  const cardContent = (
    <div className="flex gap-x-2">
      <Card key={track.id} className="w-full">
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
      {isDetail && (
        <div className="flex flex-col gap-y-2">
          {backButton}
          {editButton}
          {deleteButton}
        </div>
      )}
    </div>
  )

  if (!isDetail)
    return (
      <Link prefetch href={trackPath(track.id)}>
        {cardContent}
      </Link>
    )

  return cardContent
}
