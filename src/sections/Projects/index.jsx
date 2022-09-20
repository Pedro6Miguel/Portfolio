import React from 'react'
import styles from './styles.module.scss'
import ProjectShowcase from '../../components/ProjectShowcase'

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}></div>
            <div className={styles.content}>
                <h1>Projects</h1>
                <h4>Some of the things I've done for fun</h4>
                <div className={styles.showcase}>
                    <ProjectShowcase
                        name="Onedio."
                        technologies="ReactJS"
                        repository="https://github.com/Pedro6Miguel/Onedio.-Studio"
                        website="https://onedio-studio.vercel.app/"
                        img="https://media.discordapp.net/attachments/905837522813337613/1021788071454322688/unknown.png?width=819&height=568"
                    />
                    <ProjectShowcase img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                    <ProjectShowcase />
                    <ProjectShowcase />
                    <ProjectShowcase />
                    <ProjectShowcase />
                    <ProjectShowcase />
                    <ProjectShowcase />
                    <ProjectShowcase />
                </div>
            </div>
        </div>
    )
}

export default Projects