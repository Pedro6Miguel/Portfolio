import React from 'react'
import styles from './styles.module.scss'

import Project from '../../components/project'

function Projects() {

    return (
        <div className={styles.container}>
            <h6>Some of the</h6>
            <h2>Projects I've been working on</h2>

            <div className={styles.projects}>
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default Projects