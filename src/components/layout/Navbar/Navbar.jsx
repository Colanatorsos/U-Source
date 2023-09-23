import Image from 'next/image'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
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
              <li className={pathname === '/' ? `${styles.li} ${styles.active}` : styles.li} ><Link className={pathname === '/' ? `${styles.link} ${styles.active}` : styles.link} href='/'>Главная</Link></li>
              <li className={pathname === '/Service' ? `${styles.li} ${styles.active}` : styles.li} ><Link className={pathname === '/Service' ? `${styles.link} ${styles.active}` : styles.link} href='/Service'>Услуги</Link></li>
              <li className={pathname === '/About' ? `${styles.li} ${styles.active}` : styles.li} ><Link className={pathname === '/About' ? `${styles.link} ${styles.active}` : styles.link} href='/About'>О нас</Link></li>
              <li className={pathname === '/Portfolio' ? `${styles.li} ${styles.active}` : styles.li} ><Link className={pathname === '/Portfolio' ? `${styles.link} ${styles.active}` : styles.link} href='/Portfolio'>Портфолио</Link></li>
              <li className={pathname === '/Contacts' ? `${styles.li} ${styles.active}` : styles.li} ><Link className={pathname === '/Contacts' ? `${styles.link} ${styles.active}` : styles.link} href='/Contacts'>Контакты</Link></li>
            </ul>
          </ul>
          <Link className={styles.btn} href='/Contacts'>Свяжитесь с нами</Link>
        </nav>
      </div>
    </header >
  )
}

export default Navbar
