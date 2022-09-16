import React from 'react'
import styles from './styles.module.scss'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
    return (
        <div className={styles.container}>
            <h6>pedro miguel <p>web developer</p></h6>
            <div>
                <a href=""><AiFillGithub /></a>
                <a href=""><AiFillLinkedin /></a>
                <a href=""><AiOutlineTwitter /></a>
            </div>
        </div>
    )
}

export default Footer