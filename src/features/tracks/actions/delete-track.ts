'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import prisma from '@/lib/prisma'
import { tracksPath } from '@/paths'

export async function deleteTrack(id: string) {
  await prisma.track.delete({
    where: {
      id,
    },
  })

  revalidatePath(tracksPath())
  redirect(tracksPath())
}
