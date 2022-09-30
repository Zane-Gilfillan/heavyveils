import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './mini_nav'
import styles from '../styles/Showcase.module.scss'
import styless from '../styles/Audio.module.scss'
import one from '../public/img/one.jpg'
import two from '../public/img/two.jpg'
import three from '../public/img/three.jpg'
import cover from '../public/img/cover.jpg'




const Showcase = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet"></link>
            </Head>
            <div className={styles.container}>

                <div className={styles.nav__bar}>
                    <Nav />
                </div>


                <div className={styles.cover__container}>
                    <div className={styles.img__holder}>
                        <Image src={cover}></Image>
                    </div>
                    <div className={styles.album__info}>
                    <iframe className={styles.album__player} src="https://bandcamp.com/EmbeddedPlayer/album=727038836/size=large/bgcol=333333/linkcol=fe7eaf/artwork=none/transparent=true/" seamless><a href="https://melvinhenry.bandcamp.com/album/permahaze">Permahaze by Melvin Henry</a></iframe>
                    </div>
                    
                </div>

                {/* <div className={styles.img_wrap}>
                        <Link href='/audio'><Image src={two} height='4000' width='3000' /></Link>
                        <Link href='/visual'><Image src={one} height='4000' width='3000' /></Link>
                        <Link href='other'><Image src={three} height='4000' width='3000' /></Link>
                </div> */}

            </div>

           
            

        </>
    )
}

export default Showcase
