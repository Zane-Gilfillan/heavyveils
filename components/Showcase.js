import Head from 'next/head'
import styles from '../styles/Showcase.module.scss'
import Image from 'next/image'
import art from '../public/img/4.jpg'
import wall from '../public/img/wall.jpg'




const Showcase = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet"></link>
            </Head>
            <div className={styles.container}>
                
                <div className={styles.main}>
                    <div className={styles.text_wrap}>
                       <h1>melvin henry</h1>
                       <h2>the proscenium crash suite</h2>
                    </div>

                    <div className={styles.img_wrap}>
                        <Image src={wall} height='600' width='1000' />
                    </div>

                    <div className={styles.audio_wrap}>
                        <iframe className={styles.bc_player} src="https://bandcamp.com/EmbeddedPlayer/album=2810766443/size=small/bgcol=333333/linkcol=ffffff/transparent=true/" seamless><a href="https://heavyveils.bandcamp.com/album/proscenium-crash">Proscenium Crash by Melvin Henry</a></iframe>
                    </div>
                    
                </div>
                
            </div>
            

        </>
    )
}

export default Showcase
