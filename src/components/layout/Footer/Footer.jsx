import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.logo}>
            <Link href='/'>
              <Image
                src='/Logo.svg'
                width={64.504}
                height={49}
                alt='logo'
              />
            </Link>
            Школа креативных профессий
          </div>
          <div className={styles.icons}>
            <a href='tel:+996554201506'>
              <Image
                src='/footer/call.svg'
                width={24}
                height={24}
                alt='call'
              />
            </a>
            <a href="https://api.whatsapp.com/message/LXAO5R2BKDMPD1?autoload=1&app_absent=0">
              <Image
                src='/footer/whatsapp.svg'
                width={24}
                height={24}
                alt='whatsapp'
              />
            </a>
            <a href="mailto:u.skillz.edu@gmail.com">
              <Image
                src='/footer/sms.svg'
                width={24}
                height={24}
                alt='email'
              />
            </a>
            <a href="https://t.me/JalilUskillz">
              <Image
                src='/footer/send-2.svg'
                width={24}
                height={24}
                alt='telegram'
              />
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <ul className={styles.ul}>
            <li className={styles.li}><Link className={styles.link} href='/'>Главная</Link></li>
            <li className={styles.li}><Link className={styles.link} href='/Service'>Услуги</Link></li>
            <li className={styles.li}><Link className={styles.link} href='/About'>О нас</Link></li>
            <li className={styles.li}><Link className={styles.link} href='/Portfolio'>Портфолио</Link></li>
            <li className={styles.li}><Link className={styles.link} href='/Contacts'>Контакты</Link></li>
          </ul>
          <div className={styles.box}>
            <p>Наши социальные сети</p>
            <ul>
              <li><a href="https://www.instagram.com/u.skill.z/"><Image
                src='/footer/instagram.svg'
                width={24}
                height={24}
                alt='instagram'
              /> Instagram</a></li>
              <li><a href="https://www.youtube.com/channel/UCMOANSqh_IfUFCZ2bo1z3Bg"><Image
                src='/footer/youtube.svg'
                width={24}
                height={24}
                alt='youtube'
              /> Youtube</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.privacy}>
          <Image
            src='/Logo-white.svg'
            width={64.504}
            height={49}
            alt='logo'
          />
          <div className={styles.textBox}>
            <p>© 2023 | ОсОО «U!SkillZ» | Все права защищены. <br />
              Копирование материалов запрещено.</p>
            <p>Политика конфидециальности <br />
              Договор оферты</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer