import React from 'react'
import Link from 'next/link'
import './index.scss'

export default function Test() {
  return (
    <div>
      <span className='tip'>hello</span>
      <Link href="/">
        to Home
      </Link>
    </div>
  )
}
