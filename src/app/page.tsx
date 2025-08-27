import Link from 'next/link'

import { tracksPath } from '@/paths'

export default function Home() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1100px] flex-col justify-center p-4">
      <div className="max-w-[648px]">
        <h1 className="text-2xl font-thin sm:text-4xl md:text-6xl">
          This platform is a work in progress. Who knows where it will go, but
          for now you can add, edit, and delete songs
        </h1>

        <Link href={tracksPath()}>
          <p className="mt-8 text-slate-500">
            Click here are the tracks button in the navigation to get started
          </p>
        </Link>
      </div>
    </div>
  )
}
