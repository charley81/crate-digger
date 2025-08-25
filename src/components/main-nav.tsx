import Link from 'next/link'
import { Logo } from './logo'
import { Button } from './ui/button'
import { tracksPath } from '@/paths'

export function MainNav() {
  return (
    <nav className="bg-background fixed top-0 right-0 left-0 z-20 flex w-full justify-between p-6">
      <Logo />

      <div>
        <Button asChild className="font-bold">
          <Link href={tracksPath()}>Tracks</Link>
        </Button>
      </div>
    </nav>
  )
}
