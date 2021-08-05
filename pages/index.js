import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Nav from '../components/Nav.js'
import Showcase from '../components/Showcase.js'

export default function Home() {
  return (
    <>
      <Nav />
      <Showcase />
    </>
  )
}
