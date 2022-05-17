import styles from '../styles/Nav.module.scss'
import Link from 'next/link'
import Head from 'next/head'

const Logo = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <nav className={styles.nav_bar}>
                
                <div className={styles.links}>
                    <ul className={styles.nav_links}>
                        <li><Link href="/">heavyveils studio.</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Logo