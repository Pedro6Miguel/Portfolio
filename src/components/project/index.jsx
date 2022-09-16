import React from 'react'
import styles from './styles.module.scss'

function Project(props) {
    return (
        <div className={styles.project}>
            <img src={props.image} alt="" />
            <div className={styles.hover}>
                <a target="_blank" href="github.com"><div>VISIT WEBSITE</div></a>
                <a target="_blank" href="github.com"><div>GITHUB</div></a>
            </div>
        </div>
    )
}

export default Project