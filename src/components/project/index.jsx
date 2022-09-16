import React from 'react'
import styles from './styles.module.scss'

import { AiFillGithub } from "react-icons/ai";
import { FaSmileBeam } from "react-icons/fa";

function Project(props) {
    return (
        <div className={styles.project}>
            <img src={props.image} alt="" />
            <div className={styles.hover}>
                <a target="_blank" href="github.com"><div>VISIT WEBSITE <FaSmileBeam /></div></a>
                <a target="_blank" href="github.com"><div>GITHUB <AiFillGithub /></div></a>
            </div>
        </div>
    )
}

export default Project