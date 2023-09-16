import React from 'react'
import styles from './Contacts.module.css'

const page = () => {
    return (
        <div>
            <section className={styles.section} >
                <div className={styles.container}>
                    <div className={styles.block} >
                        <h1 className={styles.title} >Свяжитесь с нами</h1>
                        <div className={styles.card} >
                            <div className={styles.text}>
                                Мы всегда готовы ответить на ваши вопросы и предоставить дополнительную информацию!
                            </div>
                            <form className={styles.form} action="">
                                <input type="text" className={styles.input} placeholder='Имя' />
                                <input type="text" className={styles.input} Required placeholder='Email' />
                                <input type="text" className={styles.input} placeholder='Сообщение' />
                                <button className={styles.btn} >Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page