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
                    <form action="https://formsubmit.co/pedro.miguel.16@hotmail.com" method="POST">
                        <input placeholder='Name' name='name' />
                        <input placeholder='Email' name='email' />
                        <textarea placeholder='Message' name='message' />
                        <input type="hidden" name="_next" value="https://pedromigueldev.vercel.app/"></input>
                        <button type='submit'>Send</button>
                    </form>
                    <div className={styles.border}>
                        <h2>Dont feel like talking right now?</h2>
                        <p>That's okay. Whenever you feel like it, you can contact me.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact