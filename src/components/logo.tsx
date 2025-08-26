import Link from 'next/link'

import { indexPath } from '@/paths'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href={indexPath()} className={`${className} text-2xl font-black`}>
      <h3>crateDigger</h3>
    </Link>
  )
}
