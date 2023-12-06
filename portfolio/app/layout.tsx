import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ava | Portfolio',
  description: 'A virtual portfolio containing all the necessary information about me.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}