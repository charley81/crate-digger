import { notFound } from 'next/navigation'

import prisma from '@/lib/prisma'

import { Track } from '../types'

export const getTrack = async (id: string): Promise<Track> => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const track = await prisma.track.findUnique({
    where: {
      id,
    },
  })

  if (!track) {
    return notFound()
  }

  return new Promise((resolve) => resolve(track))
}
