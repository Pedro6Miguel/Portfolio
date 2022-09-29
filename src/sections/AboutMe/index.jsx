import React from 'react'
import styles from './styles.module.scss'

function AboutMe() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}></div>
            <div className={styles.content}>
                <h1><span>02.</span> About Me</h1>
                <div className={styles.about}>
                    <div className={styles.text}>
                        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. <br></br>My interest in web development started back in 2012 when<br></br> I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog<br></br> button taught me a lot about HTML & CSS! <br></br>Fast-forward to today, and I've had the privilege of <br></br>working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. <br></br>My main focus these days is building accessible, inclusive products and <br></br>digital experiences at Upstatement for a variety of clients.</p>
                    </div>
                    <div className={styles.picture}>
                        <img src="https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe