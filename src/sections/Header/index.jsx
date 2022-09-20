import React from 'react'
import styles from '../Header/styles.module.css'

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

import ScrollIndicator from '../../components/ScrollAnimation'

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
                    <a href="" target="_blank"><AiOutlineTwitter size={30} /></a>
                    <a href="https://www.linkedin.com/in/pedro-guerra-abb52a226/" target="_blank"><AiFillLinkedin size={30} /></a>
                    <a href="https://github.com/Pedro6Miguel" target="_blank"><AiFillGithub size={30} /></a>
                </div>
            </nav>
            <div className={styles.main}>
                <div className={styles.main_dev}>
                    <div>
                        <h6>Hi, my name is</h6>
                        <h1>Pedro Miguel</h1>
                        <h2>I build things for the web.</h2>
                        <p>I'm a web developer who enjoys creating things that live on the internet. <br></br>I am currently looking for my first opportunity to put my learnings into real-world solutions.</p>
                        <button>Projects</button>
                    </div>
                </div>
                <div className={styles.scroll}><ScrollIndicator /></div>
            </div>
            <div className={styles.light}>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Header