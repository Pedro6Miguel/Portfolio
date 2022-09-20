import React from 'react'
import styles from './styles.module.scss'
import ProjectShowcase from '../../components/ProjectShowcase'

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                NAVBAR
            </div>
            <div className={styles.content}>
                <ProjectShowcase />
                <ProjectShowcase />
                <ProjectShowcase />
            </div>
        </div>
    )
}

export default Projects