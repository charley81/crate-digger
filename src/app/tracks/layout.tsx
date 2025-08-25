import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'crateDigger',
  description: 'keep a list of records you own',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
