import './globals.css'

export default function RootLayout({
  children,
  footer,
}: {
  children: React.ReactNode
  footer: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='h-100vh flex flex-col'>
        {children}
        {footer}
      </body>
    </html>
  )
}
