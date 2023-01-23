import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './home.module.scss'
import { SubscribeButton } from '@/components/SubscribeButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home |  ig.news</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton/>
        </section>
        <img src="images/avatar.svg" alt="Girl Coding"/>
      </main>
    </>
  )
}
