import React from 'react'
import styles from '../Header/styles.module.css'
import ScrollIndicator from '../../features/scroll'

const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.first_div}>
                    <a className={styles.nav_item} href="">Logo</a>
                    <a className={styles.nav_item} href="">Logo</a>
                    <a className={styles.nav_item} href="">Logo</a>
                    <a className={styles.nav_item} href="">Logo</a>
                </div>
                <div className={styles.last_div}>
                    <a className={styles.nav_item} href="">Logo</a>
                    <a className={styles.nav_item} href="">Logo</a>
                    <a className={styles.nav_item} href="">Logo</a>
                </div>
            </nav>
            <div className={styles.main}>
                <div className={styles.main_dev}>
                    <h4>This is it</h4>
                    <h1>Web Developer</h1>
                </div>
                <div className={styles.scroll}><ScrollIndicator /></div>
            </div>
            <div className={styles.light}>
                <button>sasdasd</button>
            </div>
        </div>
    )
}

export default Header