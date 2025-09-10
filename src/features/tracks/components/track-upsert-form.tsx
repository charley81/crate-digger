'use client'

import { useActionState } from 'react'

import { FieldError } from '@/components/form/field-error'
import Form from '@/components/form/form'
import { EMPTY_ACTION_STATE } from '@/components/form/utils/to-action-state'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { upsertTrack } from '../actions/upsert-track'
import { Track } from '../types'

type TrackUpsertFormProps = {
  track?: Track
}

export function TrackUpsertForm({ track }: TrackUpsertFormProps) {
  const [actionState, action] = useActionState(
    upsertTrack.bind(null, track?.id),
    EMPTY_ACTION_STATE,
  )

  return (
    <Form action={action} actionState={actionState}>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="add title..."
          name="title"
          defaultValue={
            (actionState.payload?.get('title') as string) ?? track?.title
          }
        />
        <FieldError actionState={actionState} name="title" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="album">Album</Label>
        <Input
          type="text"
          id="album"
          placeholder="add album..."
          name="album"
          defaultValue={
            (actionState.payload?.get('album') as string) ?? track?.album
          }
        />
        <FieldError actionState={actionState} name="album" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="releaseDate">Release Date</Label>
        <Input
          type="text"
          id="releaseDate"
          placeholder="release date..."
          name="releaseDate"
          defaultValue={
            (actionState.payload?.get('releaseDate') as string) ??
            track?.releaseDate
          }
        />
        <FieldError actionState={actionState} name="releaseDate" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="label">Label</Label>
        <Input
          type="text"
          id="label"
          placeholder="add label..."
          name="label"
          defaultValue={
            (actionState.payload?.get('label') as string) ?? track?.label
          }
        />
        <FieldError actionState={actionState} name="label" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="genre">Genre</Label>
        <Input
          type="text"
          id="genre"
          placeholder="add genre..."
          name="genre"
          defaultValue={
            (actionState.payload?.get('genre') as string) ?? track?.genre
          }
        />
        <FieldError actionState={actionState} name="genre" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="producer">Producer</Label>
        <Input
          type="text"
          id="producer"
          placeholder="add producer..."
          name="producer"
          defaultValue={
            (actionState.payload?.get('producer') as string) ?? track?.producer
          }
        />
        <FieldError actionState={actionState} name="producer" />
      </div>
      <Button type="submit" className="hover:cursor-pointer">
        Submit
      </Button>
    </Form>
  )
}
