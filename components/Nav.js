import styles from '../styles/Nav.module.scss'
import Link from 'next/link'
import Head from 'next/head'

const Nav = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <nav className={styles.nav_bar}>
                
                <div className={styles.links}>
                    <ul className={styles.nav_links}>
                        <li><Link href="/">heavyveils studio.</Link></li>
                        {/* <li><Link href="/about_me"></Link></li>
                        <li><Link href="/design"></Link></li>
                        <li><Link href="/contact"></Link></li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav