import type { Metadata } from 'next'
import { MainNav } from '@/components/main-nav'

export const metadata: Metadata = {
  title: 'Tracks',
  description: 'All your tracks here',
}

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <MainNav />
      {children}
    </main>
  )
}
