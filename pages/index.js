import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="card shadow-md rounded-md hover:text-green-400 cursor-pointer">
          <div className="card-body p-5">
            <p className="font-medium ">Welcome to NextJS + TailwindCSS boilerplate.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
