import prisma from '@/lib/prisma'

import { Track } from '../types'

export const getTracks = async (): Promise<Track[]> => {
  const tracks = await prisma.track.findMany()

  return new Promise((resolve) => resolve(tracks))
}
