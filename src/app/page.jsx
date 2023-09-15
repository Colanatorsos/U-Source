import React from 'react'
import styles from './Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <section className={styles.hero}>
                <div className="container">
                    <div className='d-flex justify-space-between align-items-center'>
                        <div className={styles.heroLeft}>
                            <h3>U! – Команда лучших специалистов в IT</h3>
                            <p>U! объединяет уникальные знания и навыки в <br /> области программирования, дизайна, и управления. <br /> Ваша компания может доверить свои важнейшие <br /> задачи экспертам из U!</p>
                            <Link className={styles.heroBtn} href='/contacts'>Свяжитесь с нами </Link>
                        </div>
                        <div className={styles.heroRight}>
                            <Image src='/Logo.svg' width={380.998} height={289.407} />
                        </div>
                    </div>
                    <div className={styles.heroUnder} >
                        <h1 className={styles.heroUnderH} >Мощь топовых специалистов теперь на вашей стороне
                            – используйте ее для своего успеха.</h1>
                        <p className={styles.heroUnderText} >Мы инновационная компания, создающая
                            веб-приложения и цифровые решения для клиентов по всему миру.
                            Наша миссия – превращать идеи в реальность с помощью передовых
                            технологий и творческого подхода. С объединением опыта и энергии,
                            мы создаем уникальные цифровые продукты, способствующие росту и успеху
                            наших клиентов.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page