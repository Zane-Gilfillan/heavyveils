import styles from '../styles/Nav.module.scss'
import Link from 'next/link'

const Nav = () => {
    return (
        <>
            <nav className={styles.nav_bar}>
                
                <div className={styles.links}>
                    <ul className={styles.nav_links}>
                        {/* <li><Link href="/">heavyveils.</Link></li> */}
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