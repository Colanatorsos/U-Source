'use client'
import React, { useState } from 'react';
import styles from './Contacts.module.css';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_urs7udh';
const TEMPLATE_ID = 'template_4om6u5o';
const USER_ID = 'RUXfSdoUIcL5hhX2N';

emailjs.init(USER_ID);

const page = React.memo(() => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState('Отправить');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sideRef, sideInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = () => {
    const { name, email, message } = formData;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('Успешно отправлено :)', response);
        setIsButtonClicked(true);
        setButtonText('Отправлено');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Отловлена ошибка:', error);
      });
  };

  return (
    <div>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.block}>
            <h1 className={styles.title}>Свяжитесь с нами</h1>
            <div className={styles.card}>
              <div className={styles.text}>
                Мы всегда готовы ответить на ваши вопросы и предоставить дополнительную информацию!
              </div>
              <form className={styles.form} action="">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={styles.input}
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="message"
                  name="message"
                  className={styles.input}
                  placeholder="Сообщение"
                  value={formData.message}
                  onChange={handleInputChange}
                />
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
                <h2 className={styles.sideTitle}>Информация</h2>
                <ul>
                  <li>
                    <Image src="/footer/sms.svg" width={30} height={30} alt="sms" />
                    u.skillz.edu@gmail.com
                  </li>
                  <li>
                    <Image src="/footer/call.svg" width={30} height={30} />
                    +996 554 201 506
                  </li>
                  <li>
                    <Image src="/contacts/info.svg" width={30} height={30} />
                    ул.Манаса 91/1
                  </li>
                  <li>
                    <Image src="/contacts/clock.svg" width={30} height={30} />
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
})
export default page;