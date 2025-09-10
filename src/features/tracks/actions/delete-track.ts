'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { setCookieByKey } from '@/actions/cookies'
import prisma from '@/lib/prisma'
import { tracksPath } from '@/paths'

export async function deleteTrack(id: string) {
  await prisma.track.delete({
    where: {
      id,
    },
  })

  await setCookieByKey('toast', 'Track deleted...')
  revalidatePath(tracksPath())
  redirect(tracksPath())
}
