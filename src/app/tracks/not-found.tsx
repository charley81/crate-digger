import Link from 'next/link'

import { Placeholder } from '@/components/placeholder'
import { Button } from '@/components/ui/button'
import { tracksPath } from '@/paths'

export default function NotFound() {
  return (
    <Placeholder
      label="Something wierd is going on. I can't find what you're looking for"
      button={
        <Button asChild variant="outline" className="flex items-center">
          <Link href={tracksPath()}>Go to tracks</Link>
        </Button>
      }
    />
  )
}
