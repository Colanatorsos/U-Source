'use client'
import React, { useState } from 'react'
import styles from './Contacts.module.css'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const page = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState('Отправить');

  const [sideRef, sideInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
              <div
                ref={sideRef}
                className={`${styles.side} ${sideInView ? styles.sideVisible : ''}`}
              >
                <h2 className={styles.sideTitle} >Информация</h2>
                <ul>
                  <li>
                    <Image src='/footer/sms.svg' width={30} height={30} alt='sms' />
                    u.skillz.edu@gmail.com
                  </li>
                  <li>
                    <Image src='/footer/call.svg' width={30} height={30} />
                    +996 554 201 506
                  </li>
                  <li>
                    <Image src='/contacts/info.svg' width={30} height={30} />
                    ул.Манаса 91/1
                  </li>
                  <li>
                    <Image src='/contacts/clock.svg' width={30} height={30} />
                    09:00-20:00
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