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
  },
  {
    title: 'Tarantula',
    album: 'Hold Your Colour',
    releaseDate: '2005',
    label: 'Breakbeat Kaos',
    genre: 'Drum and Bass',
    producer: 'Pendulum',
  },
  {
    title: 'Turbulence',
    album: 'Turbulence',
    releaseDate: '2012',
    label: 'RAM Records',
    genre: 'Drum and Bass',
    producer: 'Loadstar',
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
