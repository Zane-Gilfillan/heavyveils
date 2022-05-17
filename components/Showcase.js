import Head from 'next/head'
import Image from 'next/image'
import Nav from './mini_nav'
import styles from '../styles/Showcase.module.scss'
import one from '../public/img/one.jpg'
import two from '../public/img/two.jpg'
import three from '../public/img/three.jpg'




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

                <div className={styles.img_wrap}>
                        <Image src={two} height='4000' width='3000' />
                        <Image src={one} height='4000' width='3000' />
                        <Image src={three} height='4000' width='3000' />
                </div>
                <div className={styles.nav__bar}>
                    <Nav />
                </div>
            </div>

           
            

        </>
    )
}

export default Showcase
