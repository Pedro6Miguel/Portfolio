import React from 'react'
import styles from './styles.module.scss'
import ProjectShowcase from '../../components/ProjectShowcase'

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}></div>
            <div className={styles.content}>
                <h1><span>01.</span> Projects</h1>
                <h4>Some of the things I've done for fun</h4>
                <div className={styles.showcase}>
                    <ProjectShowcase
                        name="Onedio."
                        technologies="ReactJS"
                        repository="https://github.com/Pedro6Miguel/Onedio.-Studio"
                        website="https://onedio-studio.vercel.app/"
                        img="https://media.discordapp.net/attachments/905837522813337613/1021788071454322688/unknown.png?width=819&height=568"
                    />
                    <ProjectShowcase img="https://media.discordapp.net/attachments/905837522813337613/1021829996534317157/unknown.png?width=856&height=630" />
                    <ProjectShowcase img="https://media.discordapp.net/attachments/905837522813337613/1021961299229409340/unknown.png?width=1228&height=630" />
                    <ProjectShowcase img="https://media.discordapp.net/attachments/905837522813337613/1021944344422396005/unknown.png?width=1071&height=630" />
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