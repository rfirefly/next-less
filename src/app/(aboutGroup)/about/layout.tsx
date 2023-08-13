import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page',
}

export default function Layout(props: {
  children: React.ReactNode
  footer: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        {props.children}
        {props.footer}
      </body>
    </html>
  )
}
