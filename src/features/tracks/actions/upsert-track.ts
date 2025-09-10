'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import z from 'zod'

import { setCookieByKey } from '@/actions/cookies'
import {
  ActionState,
  fromErrorToActionState,
} from '@/components/form/utils/to-action-state'
import prisma from '@/lib/prisma'
import { tracksPath } from '@/paths'

const upsertTrackSchema = z.object({
  title: z.string().min(1).max(20),
  album: z.string().min(1).max(20),
  releaseDate: z.string().min(1).max(20),
  label: z.string().min(1).max(20),
  genre: z.string().min(1).max(20),
  producer: z.string().min(1).max(20),
})

export async function upsertTrack(
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData,
) {
  try {
    const data = upsertTrackSchema.parse({
      title: formData.get('title') as string,
      album: formData.get('album') as string,
      releaseDate: formData.get('releaseDate') as string,
      label: formData.get('label') as string,
      genre: formData.get('genre') as string,
      producer: formData.get('producer') as string,
    })

    console.log(data)

    await prisma.track.upsert({
      where: {
        id: id || '',
      },
      update: data,
      create: data,
    })
  } catch (error) {
    return fromErrorToActionState(error, formData)
  }

  if (id) {
    await setCookieByKey('toast', 'Track updated')
  } else {
    await setCookieByKey('toast', 'Track created')
  }

  revalidatePath(tracksPath())
  redirect(tracksPath())
}
