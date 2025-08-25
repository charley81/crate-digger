import { indexPath } from '@/paths'
import Link from 'next/link'
import { Button } from './ui/button'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Button
      variant="ghost"
      asChild
      className={`${className} text-2xl font-black`}
    >
      <Link href={indexPath()}>
        <h3>crateDigger</h3>
      </Link>
    </Button>
  )
}
