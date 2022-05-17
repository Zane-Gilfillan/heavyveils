import React from 'react'
import Image from 'next/image'
import Nav from '../components/Nav'
import Mini from '../components/mini_nav'
import styles from '../styles/Audio.module.scss'
import wall from '../public/img/wall_ws_edit.jpg'
import smile from '../public/img/smile_resize.jpg'

const audio = () => {
  return (
    <>
        <Nav />
        <div className={styles.container}>
            <div className={styles.album__card}>
              <div className={styles.img__holder}><Image className={styles.img} src={smile} /></div>
              <iframe className={styles.album__info} src="https://bandcamp.com/EmbeddedPlayer/album=3993573502/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="https://heavyveils.bandcamp.com/album/death-knell-relics-mix">Death Knell Relics Mix by Melvin Henry</a></iframe>
            </div>
            <div className={styles.album__card}>
              <div className={styles.img__holder}><Image className={styles.img} src={wall} /></div>
              <iframe className={styles.album__info} src="https://bandcamp.com/EmbeddedPlayer/album=2810766443/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="https://heavyveils.bandcamp.com/album/proscenium-crash">Proscenium Crash by Melvin Henry</a></iframe>
            </div>
        </div>
    </>
  )
}

export default audio