import React from 'react'
import styles from './styles.module.scss'

function Contact() {
    return (
        <div className={styles.container} id="contact">
            <div className={styles.nav}></div>
            <div className={styles.contact}>
                <h1><span>02.</span> Contact</h1>
                <h4>Interested in working together? Fill in the form</h4>
                <div className={styles.form}>
                    <form>
                        <input placeholder='Name' />
                        <input placeholder='Email' />
                        <textarea placeholder='Message' />
                        <button>Send</button>
                    </form>
                    <div>
                        This is blank space
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact