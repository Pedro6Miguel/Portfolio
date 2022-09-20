import React from 'react'
import styles from './styles.module.scss'

function ProjectShowcase() {
    return (
        <div className={styles.main}>
            <p>Project</p>
            <div className={styles.overlay}>
                <div className={styles.items}>
                    <p>github</p>
                </div>
                <div className={styles.items_two}>
                    <p>github</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectShowcase