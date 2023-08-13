import React from 'react'
import styles from './page.module.scss'
import Test from '@/components/test'

export default function About() {
  return (
    <div className={styles.page}>
      <Test />
      <span className='tip'>about tip</span>
    </div>
  )
}
