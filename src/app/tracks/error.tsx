'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

import { Placeholder } from '@/components/placeholder'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <Placeholder label={error.message || 'Failed to fetch'} />
}
