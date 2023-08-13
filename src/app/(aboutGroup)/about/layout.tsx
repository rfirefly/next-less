import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
