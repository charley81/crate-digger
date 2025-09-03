import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { upsertTrack } from '../actions/upsert-track'
import { Track } from '../types'

type TrackUpsertFormProps = {
  track?: Track
}

export function TrackUpsertForm({ track }: TrackUpsertFormProps) {
  return (
    <form
      action={upsertTrack.bind(null, track?.id)}
      className="flex flex-col gap-y-8"
    >
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="add title..."
          name="title"
          defaultValue={track?.title}
          required
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="album">Album</Label>
        <Input
          type="text"
          id="album"
          placeholder="add album..."
          name="album"
          defaultValue={track?.album}
          required
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="releaseDate">Release Date</Label>
        <Input
          type="text"
          id="releaseDate"
          placeholder="release date..."
          name="releaseDate"
          defaultValue={track?.releaseDate}
          required
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="label">Label</Label>
        <Input
          type="text"
          id="label"
          placeholder="add label..."
          name="label"
          defaultValue={track?.label}
          required
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="genre">Genre</Label>
        <Input
          type="text"
          id="genre"
          placeholder="add genre..."
          name="genre"
          defaultValue={track?.genre}
          required
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="producer">Producer</Label>
        <Input
          type="text"
          id="producer"
          placeholder="add producer..."
          name="producer"
          defaultValue={track?.producer}
          required
        />
      </div>
      <Button type="submit" className="hover:cursor-pointer">
        Submit
      </Button>
    </form>
  )
}
