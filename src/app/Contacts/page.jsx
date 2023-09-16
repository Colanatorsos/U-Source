'use client'
import React, { useState } from 'react'
import styles from './Contacts.module.css'
import Image from 'next/image'

const page = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [buttonText, setButtonText] = useState('Отправить');

    const handleButtonClick = () => {
        setIsButtonClicked(true);
        setButtonText('Отправлено');
    };

    return (
        <div>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.block}>
                        <h1 className={styles.title}>Свяжитесь с нами</h1>
                        <div className={styles.card}>
                            <div className={styles.text}>
                                Мы всегда готовы ответить на ваши вопросы и предоставить дополнительную информацию!
                            </div>
                            <form className={styles.form} action="">
                                <input type="text" className={styles.input} placeholder="Имя" />
                                <input type="text" className={styles.input} required placeholder="Email" />
                                <input type="text" className={styles.input} placeholder="Сообщение" />
                                <button
                                    type="button"
                                    className={`${styles.btn} ${isButtonClicked ? styles.clicked : ''}`}
                                    onClick={handleButtonClick}
                                >
                                    {buttonText}
                                </button>
                            </form>
                            <div className={styles.side} >
                                <h2 className={styles.sideTitle} >Информация</h2>
                                <ul>
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default page