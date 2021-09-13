import styles from '../styles/Showcase.module.scss'
import Image from 'next/image'
import art from '../public/img/4.jpg'




const Showcase = () => {
    return (
        <>
            
            <div className={styles.container}>
                
                <div className={styles.main}>
                    <div className={styles.text_wrap}>
                       <h1>melvin henry</h1>
                    </div>

                    <div className={styles.img_wrap}>
                        <Image src={art} height='800' width='800' />
                    </div>
                    
                    <div className={styles.text_wrap}>
                       <h1>proscenium crash</h1>
                    </div>
                </div>
                
            </div>
            

        </>
    )
}

export default Showcase
