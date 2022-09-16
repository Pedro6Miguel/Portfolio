import React from 'react'
import styles from './styles.module.scss'

import Project from '../../components/project'

function Projects() {

    return (
        <div className={styles.container}>
            <h6>Some of the</h6>
            <h2>Projects I've been working on</h2>

            <div className={styles.projects}>
                <Project image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
                <Project image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
                <Project image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
                <Project image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
            </div>
        </div>
    )
}

export default Projects