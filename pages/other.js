import React from 'react'
import styles from '../styles/Other.module.scss'
import Nav from '../components/Nav'



const other = () => {
  return (
    <>
        <Nav />
        <div className={styles.container}>
          <div className={styles.vid__holder}>
            <video className={styles.vid} src='/vid/crash_cut.mp4' type='video/mp4' autoPlay />
          </div>
          
        </div>
    </>
  )
}

export default other