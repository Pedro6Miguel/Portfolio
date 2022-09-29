import React from 'react'
import styles from './styles.module.scss'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}></div>
            <div className={styles.content}>
                <div className={styles.border}></div>
                <p>Pedro Miguel</p>
                <p>Made with Love & Code 😄</p>
            </div>
        </div>
    )
}

export default Footer