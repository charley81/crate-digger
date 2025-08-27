import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

const tracks = [
  {
    title: 'Brown Paper Bag',
    album: 'Timeless',
    releaseDate: '1996',
    label: 'Metalheadz',
    genre: 'Drum and Bass',
    producer: 'Roni Size',
    description:
      'A groundbreaking drum and bass classic from Roni Size & Reprazent. Features complex breakbeats and a memorable bassline. Won the Mercury Prize in 1997.',
  },
  {
    title: 'Tarantula',
    album: 'Hold Your Colour',
    releaseDate: '2005',
    label: 'Breakbeat Kaos',
    genre: 'Drum and Bass',
    producer: 'Pendulum',
    description:
      'An explosive track blending drum and bass with rock elements. Known for its aggressive energy and powerful drops. Helped define the mid-2000s dnb sound.',
  },
  {
    title: 'Turbulence',
    album: 'Turbulence',
    releaseDate: '2012',
    label: 'RAM Records',
    genre: 'Drum and Bass',
    producer: 'Loadstar',
    description:
      "A modern drum and bass anthem with heavy basslines and crisp production. Showcases Loadstar's signature powerful sound design. Remains a dancefloor favorite.",
  },
]

export async function seed() {
  const t0 = performance.now()
  console.log('DB Seed: Started...')

  await prisma.track.deleteMany()
  await prisma.track.createMany({
    data: tracks,
  })

  const t1 = performance.now()
  console.log(`DB Seed: Finished ${t1 - t0}ms`)
}

seed()
