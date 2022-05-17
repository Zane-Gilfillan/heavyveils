import React from 'react'
import Link from 'next/link'
import styles from '../styles/Mini.module.scss'

const mini_nav = () => {
  return (
    <>
        <div className={styles.nav__line}>
            <Link href='/audio'><ul className={styles.audio}>audio</ul></Link>
            <Link href='/visual'><ul className={styles.visual}>visual</ul></Link>
            <Link href='/other'><ul className={styles.other}>other</ul></Link>
        </div>
    </>
  )
}

export default mini_nav