import React from 'react'
import styles from '../Header/styles.module.css'

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

import ScrollIndicator from '../../components/scroll'

const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.first_div}>
                    <a className={styles.nav_item} href="">Projects</a>
                    <a className={styles.nav_item} href="">About</a>
                    <a className={styles.nav_item} href="">Contact</a>
                </div>
                <div className={styles.last_div}>
                    <a href=""><AiOutlineTwitter size={30} /></a>
                    <a href=""><AiFillLinkedin size={30} /></a>
                    <a href=""><AiFillGithub size={30} /></a>
                </div>
            </nav>
            <div className={styles.main}>
                <div className={styles.main_dev}>
                    <div>
                        <h4>This is it</h4>
                        <h1>Web Developer</h1>
                    </div>
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