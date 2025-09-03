'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import prisma from '@/lib/prisma'
import { tracksPath } from '@/paths'

export async function upsertTrack(id: string | undefined, formData: FormData) {
  const data = {
    title: formData.get('title') as string,
    album: formData.get('album') as string,
    releaseDate: formData.get('releaseDate') as string,
    label: formData.get('label') as string,
    genre: formData.get('genre') as string,
    producer: formData.get('producer') as string,
  }

  await prisma.track.upsert({
    where: {
      id: id || '',
    },
    update: data,
    create: data,
  })

  revalidatePath(tracksPath())
  redirect(tracksPath())
}
