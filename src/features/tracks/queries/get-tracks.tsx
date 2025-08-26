import prisma from '@/lib/prisma'

import { Track } from '../types'

export const getTracks = async (): Promise<Track[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const tracks = await prisma.track.findMany()
  return new Promise((resolve) => resolve(tracks))
}
