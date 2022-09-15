import React from 'react'
import styles from '../Header/styles.module.css'

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
                sadasd
            </div>
            <div className={styles.light}>
                asdsa
            </div>
        </div>
    )
}

export default Header