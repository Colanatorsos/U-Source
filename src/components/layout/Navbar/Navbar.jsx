import React from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/">
            <Image
              src='/Logo.svg'
              width={68.457}
              height={52}
              alt='logo'
            />
          </Link>
          <ul className={styles.ul}>
            <li className={styles.li}><Link className={styles.link} href='/'>Главная</Link></li>
            <li className={styles.li}><Link className={styles.link} href='/Service'>Услуги</Link></li>
            <li className={styles.li}><Link className={styles.link} href='/About'>О нас</Link></li>
            <li className={styles.li}><Link className={styles.link} href='/Portfolio'>Портфолио</Link></li>
            <li className={styles.li}><Link className={styles.link} href='/Contacts'>Контакты</Link></li>
          </ul>
          <Link className={styles.btn} href='/Contacts'>Свяжитесь с нами</Link>
        </nav>
      </div>
    </header >
  )
}

export default Navbar