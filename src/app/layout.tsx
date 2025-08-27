import './globals.css'

import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'

import { MainNav } from '@/components/main-nav'
import { ThemeProvider } from '@/components/theme/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceCodePro.variable} flex h-screen flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          <main className="flex flex-1 flex-col overflow-y-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
