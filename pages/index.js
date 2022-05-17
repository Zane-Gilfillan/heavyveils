import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Logo from '../components/Nav.js'
import Showcase from '../components/Showcase.js'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Logo />
      <Showcase />
    </>
  )
}
