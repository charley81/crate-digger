import './globals.css'

import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

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
      <body
        className={`${sourceCodePro.variable} ${sourceCodePro.variable}flex h-screen flex-col overflow-hidden antialiased`}
      >
        <main className="flex min-h-screen flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
