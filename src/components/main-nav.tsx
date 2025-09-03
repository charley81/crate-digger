import Link from 'next/link'

import { tracksPath } from '@/paths'

import { Logo } from './logo'
import { ModeToggle } from './theme/mode-toggle'
import { Button } from './ui/button'

export function MainNav() {
  return (
    <nav className="bg-background mx-auto flex w-full max-w-[1100px] justify-between p-6">
      <Logo />

      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <Button asChild className="font-bold" variant="secondary">
          <Link href={tracksPath()}>Tracks</Link>
        </Button>
      </div>
    </nav>
  )
}
