import { useState } from 'react';
import { motion } from "framer-motion"
import styles from '../Header/styles.module.css'

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

import ScrollIndicator from '../../components/ScrollAnimation'

const Header = () => {
    const [isShowLinks, setShowLinks] = useState(true);

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.first_div}>
                    <motion.a
                        initial={{ y: -500, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: -90 }}
                        transition={{ ease: "linear", delay: 1, duration: 0.6 }}
                        className={styles.nav_item} href="#projects"
                    >Projects
                    </motion.a>
                    <motion.a
                        initial={{ y: -500, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: -90 }}
                        transition={{ ease: "linear", delay: 0.8, duration: 0.6 }}
                        className={styles.nav_item} href="#contact"
                    >Contact
                    </motion.a>
                </div>
                <div className={styles.last_div}>
                    <motion.a
                        initial={{ y: "-40vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "linear", delay: 0.6, duration: 0.6 }}
                        href="" target="_blank">
                        <AiOutlineTwitter size={30} />
                    </motion.a>
                    <motion.a
                        initial={{ y: "-40vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "linear", delay: 0.4, duration: 0.6 }}
                        href="https://www.linkedin.com/in/pedro-guerra-abb52a226/" target="_blank">
                        <AiFillLinkedin size={30} />
                    </motion.a>
                    <motion.a
                        initial={{ y: "-40vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "linear", delay: 0.2, duration: 0.6 }}
                        href="https://github.com/Pedro6Miguel" target="_blank">
                        <AiFillGithub size={30} />
                    </motion.a>
                </div>
            </nav>
            <div className={styles.main}>
                <div className={styles.main_dev}>
                    <div>
                        <motion.div id='bg'
                            initial={{ x: 40, opacity: 0, scale: 0 }}
                            animate={{ x: 0, opacity: .1, scale: 1 }}
                            transition={{
                                default: {
                                    delay: 2.3,
                                    duration: 2,
                                    ease: [0, 0.71, 0.2, 1.01]
                                },
                                scale: {
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 120,
                                    restDelta: 0.001
                                }
                            }} ></motion.div>
                        <motion.h6
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                default: {
                                    delay: 1.2,
                                    duration: 0.9,
                                    ease: [0, 0.71, 0.2, 1.01]
                                },
                                scale: {
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 120,
                                    restDelta: 0.001
                                }
                            }}>Hi, my name is</motion.h6>

                        <motion.h1
                            initial={{ x: -30, opacity: 0, scale: 0.5 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{
                                default: {
                                    delay: 1.4,
                                    duration: 1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                },
                                scale: {
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 120,
                                    restDelta: 0.001
                                }
                            }}>Pedro Miguel</motion.h1>

                        <motion.h2
                            initial={{ x: -30, opacity: 0, scale: 0.5 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{
                                default: {
                                    delay: 1.7,
                                    duration: 1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                },
                                scale: {
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 120,
                                    restDelta: 0.001
                                }
                            }}>I build things for the web.</motion.h2>

                        <motion.p
                            initial={{ x: -100, opacity: 0, scale: 0.5 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{
                                default: {
                                    delay: 2,
                                    duration: 1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                },
                                scale: {
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 120,
                                    restDelta: 0.001
                                }
                            }}>I'm a web developer who enjoys creating things that live on the internet. <br></br>I am currently looking for my first opportunity to put my learnings into real-world solutions.</motion.p>
                    </div>
                </div>
                <div className={styles.scroll}><ScrollIndicator /></div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "linear", delay: 2, duration: 0.6 }} className={styles.light}>
                <div onClick={() => setShowLinks(!isShowLinks)} className={styles.button}>
                    <span id={isShowLinks ? "" : "open"}></span>
                    <span id={isShowLinks ? "" : "open"}></span>
                </div>
                <div className={styles.info} id={isShowLinks ? "info" : ""}>
                    <div className={styles.links}>
                        <a href="#projects"><li>Projects</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </div>
                    <div className={styles.socials}>
                        <li><AiFillGithub size={40} color="#fff" /></li>
                        <li><AiFillLinkedin size={40} color="#fff" /></li>
                        <li><AiOutlineTwitter size={40} color="#fff" /></li>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Header