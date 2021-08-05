import styles from '../styles/Showcase.module.scss'
import Image from 'next/image'
import art from '../public/img/4.jpg'
import Countdown from 'react-countdown';


const Completionist = () => <span>lets jam</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

const Showcase = () => {
    return (
        <>
            
            <div className={styles.container}>
                
                <div className={styles.main}>
                    <div className={styles.text_wrap}>
                        <h1>permahaze</h1>
                    </div>
                        
                    <Image src={art} height='600' width='600' />
                </div>
                
                <div className={styles.countdown}>

                <Countdown
                    
                    date={Date.now() + 150000000}
                    renderer={renderer}
                />

                </div>
                
            </div>
            

        </>
    )
}

export default Showcase
