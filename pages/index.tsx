import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const router = useRouter()
  const redirectLogin = async () =>
        await setTimeout(() => {
            router.push('/login/')
        }, 3000)

  redirectLogin()

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Fractus</title>
        <meta name="description" content="Admin Dashboard - Fractus" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main className={styles.main}>

        <img 
            src="/logo-fractus-cor.svg" 
            alt="Logo Fractus" 
            width={300}
            height={180}
        />
        <h1 className={styles.title}>
          Bem-vindos ao Fractus!
        </h1>
        <br />
        <div className={styles.grid}>
          <div className={styles.loader}></div>     
        </div>

        <p>Carregando ...</p>
        <br />
        <br />
        <p>App Versão 1.0.0</p>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <span className={styles.logo}>
              <Image
                  src="/logo.png"
                  alt="Orkneytech Logo"
                  width={16}
                  height={16}
              />
          </span>
      </footer>
    </div>
  )
}

export default Home
