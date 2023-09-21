import Image from 'next/image'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Главная'); // Устанавливаем начальный активный пункт
  return (
    <header className={styles.header}>
      <div className="container-lg">
        <nav className={styles.nav}>
          <Link href="/">
            <Image
              src='/Logo.svg'
              width={68.457}
              height={52}
              alt='logo'
              className={styles.logo}
            />
          </Link>
          <ul className={styles.ul}>
            <ul className={styles.ul}>
              <li className={activeLink === 'Главная' ? `${styles.li} ${styles.active}` : styles.li} onClick={() => setActiveLink('Главная')}><Link className={activeLink === 'Главная' ? `${styles.link} ${styles.active}` : styles.link} onClick={() => setActiveLink('Главная')} href='/'>Главная</Link></li>
              <li className={activeLink === 'Услуги' ? `${styles.li} ${styles.active}` : styles.li} onClick={() => setActiveLink('Услуги')}><Link className={activeLink === 'Услуги' ? `${styles.link} ${styles.active}` : styles.link} onClick={() => setActiveLink('Услуги')} href='/Service'>Услуги</Link></li>
              <li className={activeLink === 'О нас' ? `${styles.li} ${styles.active}` : styles.li} onClick={() => setActiveLink('О нас')}><Link className={activeLink === 'О нас' ? `${styles.link} ${styles.active}` : styles.link} onClick={() => setActiveLink('О нас')} href='/About'>О нас</Link></li>
              <li className={activeLink === 'Портфолио' ? `${styles.li} ${styles.active}` : styles.li} onClick={() => setActiveLink('Портфолио')}><Link className={activeLink === 'Портфолио' ? `${styles.link} ${styles.active}` : styles.link} onClick={() => setActiveLink('Портфолио')} href='/Portfolio'>Портфолио</Link></li>
              <li className={activeLink === 'Контакты' ? `${styles.li} ${styles.active}` : styles.li} onClick={() => setActiveLink('Контакты')}><Link className={activeLink === 'Контакты' ? `${styles.link} ${styles.active}` : styles.link} onClick={() => setActiveLink('Контакты')} href='/Contacts'>Контакты</Link></li>
            </ul>
          </ul>
          <Link className={styles.btn} href='/Contacts'>Свяжитесь с нами</Link>
        </nav>
      </div>
    </header >
  )
}

export default Navbar
