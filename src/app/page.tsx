import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { tracksPath } from '@/paths'

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <Image
          src="/images/background-v0.jpg"
          alt="background"
          fill
          priority
          quality={75}
          className="-z-10 object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfSRyjKLlL6WQlbW5n//Z"
        />
        <div className="flex min-h-screen flex-col justify-center bg-black/60 p-4">
          <nav>
            <h3 className="absolute top-4 text-2xl font-black text-white">
              crateDigger
            </h3>
          </nav>
          <div className="max-w-[648px]">
            <h1 className="text-2xl font-thin text-white sm:text-4xl md:text-6xl">
              This platform is a work in progress. Who knows where it will go,
              but for now you can add, edit, and delete songs
            </h1>
            <Button className="mt-8 w-[90%]">
              <Link href={tracksPath()} className="font-medium">
                START JOURNEY
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
