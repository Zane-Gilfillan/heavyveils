import styles from '../styles/Showcase.module.scss'
import Image from 'next/image'
import art from '../public/img/4.jpg'

const Showcase = () => {
    return (
        <>
            
            <div className={styles.container}>
                
                <div className={styles.text_wrap}>
                    <h1>permahaze</h1>
                </div>
                        
                <Image src={art} height='700' width='700' />
                
            </div>
            

        </>
    )
}

export default Showcase
