import React from 'react'
import styles from './styles.module.scss'

import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

function ProjectShowcase(props) {
    return (
        <div className={styles.main}>
            <img src={props.img} alt="" />
            <div className={styles.overlay}>
                <div className={styles.items}>
                    <a target="_blank" href={props.repository}><AiFillGithub size={30} /></a>
                    <a target="_blank" href={props.website}><AiOutlineGlobal size={30} /></a>
                </div>
                <div className={styles.items_two}>
                    <h6>{props.name}</h6>
                    <p>{props.technologies}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectShowcase