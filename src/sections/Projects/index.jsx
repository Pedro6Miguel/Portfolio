import React from 'react'
import styles from './styles.module.scss'
import { motion } from "framer-motion"
import ProjectShowcase from '../../components/ProjectShowcase'

function Projects() {
    return (
        <div id='projects' className={styles.container}>
            <div className={styles.nav}></div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "linear", delay: 2.6, duration: 0.6 }} className={styles.content}>
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
                    <ProjectShowcase
                        name="Owlearn"
                        technologies="NextJS"
                        repository="https://github.com/Pedro6Miguel/Repository"
                        website="https://repositoryy.vercel.app/"
                        img="https://media.discordapp.net/attachments/905837522813337613/1021829996534317157/unknown.png?width=856&height=630"
                    />
                    <ProjectShowcase
                        name="Heat"
                        technologies="NextJS, Framer Motion"
                        repository="https://github.com/Pedro6Miguel/Repository"
                        website="https://heat-one.vercel.app/"
                        img="https://media.discordapp.net/attachments/905837522813337613/1021961299229409340/unknown.png?width=1228&height=630"
                    />
                    <ProjectShowcase
                        name="Crea."
                        technologies="ReactJS"
                        repository="https://github.com/Pedro6Miguel/FrontendProject_1"
                        website="https://frontend-crea.vercel.app/"
                        img="https://media.discordapp.net/attachments/905837522813337613/1021944344422396005/unknown.png?width=1071&height=630"
                    />
                    <ProjectShowcase
                        name="Empire Burger"
                        technologies="ReactJS, Framer Motion"
                        repository="https://github.com/Pedro6Miguel/KingBurger"
                        website="https://kingburger.vercel.app/"
                        img="https://media.discordapp.net/attachments/905837522813337613/1031671953184002158/unknown.png?width=1128&height=591"
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Projects