import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href='/about' className={styles.card} rel='noopener noreferrer'>
          <h2>
            to About
          </h2>
          <p>to About Page.</p>
        </Link>

        <Link href='/new' className={styles.card} rel='noopener noreferrer'>
          <h2>
            to new
          </h2>
          <p>to new Page.</p>
        </Link>

        <Link href='/setting' className={styles.card} rel='noopener noreferrer'>
          <h2>
            to Setting
          </h2>
          <p>to Setting Page.</p>
        </Link>

        <Link href='/kk' className={styles.card} rel='noopener noreferrer'>
          <h2>
            to KK
          </h2>
          <p>to KK Page.</p>
        </Link>
      </div>
    </main>
  )
}
