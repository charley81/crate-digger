'use server'

import prisma from '@/lib/prisma'
import { tracksPath } from '@/paths'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteTrack(id: string) {
  await prisma.track.delete({
    where: {
      id,
    },
  })

  revalidatePath(tracksPath())
  redirect(tracksPath())
}
