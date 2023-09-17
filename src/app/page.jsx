import React from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Slider from '../components/Slider'
import Card from '../components/home/Card'
import Form from '../app/Contacts/page'
import PortfolioCard from '../components/home/PorfolioCard'


const page = () => {
  const companyValuesSliderContent = [
    {
      title: 'Инновации',
      desc: 'Мы постоянно находились в поиске новых идей и передовых технологий. Инновации являются нашим двигателем, позволяя нам предоставлять клиентам самые современные и эффективные решения.'
    },
    {
      title: 'Качество',
      desc: 'Мы стремимся к высочайшему качеству во всем, что делаем. От дизайна до разработки, каждый этап проекта выполняется с умением и вниманием к деталям.'
    },
    {
      title: 'Сотрудничество',
      desc: 'Мы верим в силу командной работы. Сотрудничество как с нашими клиентами, так и внутри нашей компании, позволяет нам достигать уникальных результатов.'
    },
    {
      title: 'Адаптивность',
      desc: 'Мир цифровых технологий постоянно меняется, и мы готовы адаптироваться к новым вызовам. Гибкость в подходе к проектам позволяет нам эффективно реагировать на изменения.'
    },
    {
      title: 'Результат',
      desc: 'Наша цель - не просто создать продукт, но и достичь конкретных результатов для наших клиентов. Мы сосредотачиваемся на достижении поставленных целей и превосходим ожидания.'
    },
    {
      title: 'Этика',
      desc: 'Мы придерживаемся высочайших стандартов профессиональной этики во всех аспектах нашей деятельности. Доверие наших клиентов и партнеров – наша главная ценность.'
    },
    {
      title: 'Качество',
      desc: 'Мы стремимся к высочайшему качеству во всем, что делаем. От дизайна до разработки, каждый этап проекта выполняется с умением и вниманием к деталям.'
    }
  ]
  const ourAdvantagesContent = [
    {
      title: 'Индивидуальный подход',
      desc: 'Мы создаем решения, точно соответствующие уникальным потребностям клиента, с учетом бюджета и сроков.'
    },
    {
      title: 'Индивидуальный подход',
      desc: 'Мы создаем решения, точно соответствующие уникальным потребностям клиента, с учетом бюджета и сроков.'
    },
    {
      title: 'Индивидуальный подход',
      desc: 'Мы создаем решения, точно соответствующие уникальным потребностям клиента, с учетом бюджета и сроков.'
    },
    {
      title: 'Индивидуальный подход',
      desc: 'Мы создаем решения, точно соответствующие уникальным потребностям клиента, с учетом бюджета и сроков.'
    },
    {
      title: 'Индивидуальный подход',
      desc: 'Мы создаем решения, точно соответствующие уникальным потребностям клиента, с учетом бюджета и сроков.'
    },
    {
      title: 'Индивидуальный подход',
      desc: 'Мы создаем решения, точно соответствующие уникальным потребностям клиента, с учетом бюджета и сроков.'
    },
  ]
  const OurServicesContent = [
    {
      title: 'Программирование и разработка',
      desc: 'Наши ведущие специалисты в области программирования создадут для вас мощные и эффективные веб-приложения, обеспечивая высочайший уровень функциональности и безопасности.'
    },
    {
      title: 'Программирование и разработка',
      desc: 'Наши ведущие специалисты в области программирования создадут для вас мощные и эффективные веб-приложения, обеспечивая высочайший уровень функциональности и безопасности.'
    },
    {
      title: 'Программирование и разработка',
      desc: 'Наши ведущие специалисты в области программирования создадут для вас мощные и эффективные веб-приложения, обеспечивая высочайший уровень функциональности и безопасности.'
    }
  ]
  const PortfolioContent = [
    {
      id: "1",
      images: "/portfolio/alfa-bank.svg",
      title: "Альфа Банк",
      description:
        "Удобный онлайн-инструмент для управления финансами, предоставляющий клиентам доступ к счетам, переводам и платежам",
      slideImage: "/portfolio/slide-image.svg",
    },
    {
      id: "2",
      images: "/portfolio/evraz.svg",
      title: "ЕВРАЗ",
      description:
        "Наше приложение планирования задач помогло ЕВРАЗ управлять проектами и сроками на разных континентах",
      slideImage: "/portfolio/slide-image.svg",
    },
    {
      id: "3",
      images: "/portfolio/gos-min-obr.svg",
      title: "Гос - Мин образования КР",
      description:
        "Мы разработали веб-сайт для Минобразования КР, обеспечив легкий доступ к информации о программах, событиях и новостях",
      slideImage: "/portfolio/slide-image.svg",
    },
    {
      id: "4",
      images: "/portfolio/gen-prokuratura.svg",
      title: "Генпрокуратура РФ",
      description:
        "Разработали сайт для удобного анализа статистики правоохранительных органов",
      slideImage: "/portfolio/slide-image.svg",
    }
  ];
  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <div className='d-flex justify-space-between align-items-center'>
            <div className={styles.heroLeft}>
              <h1>U! – Команда лучших <br /> специалистов в IT</h1>
              <p>U! объединяет уникальные знания и навыки в области программирования, дизайна, и управления. Ваша компания может доверить свои важнейшие задачи экспертам из U!</p>
              <Link className={styles.heroBtn} href='/contacts'>Свяжитесь с нами </Link>
            </div>
            <div className='d-none d-md-block'>
              <Image src='/Logo.svg' width={380.998} height={289.407} alt='logo' />
            </div>
          </div>
          <div className={styles.heroUnder} >
            <h2>Мощь топовых специалистов теперь на вашей стороне
              – используйте ее для своего успеха.</h2>
            <p>Мы инновационная компания, создающая
              веб-приложения и цифровые решения для клиентов по всему миру.
              Наша миссия – превращать идеи в реальность с помощью передовых
              технологий и творческого подхода. С объединением опыта и энергии,
              мы создаем уникальные цифровые продукты, способствующие росту и успеху
              наших клиентов.</p>
          </div>
        </div>
      </section>
      <section className={styles.companyValues}>
        <h1>Ценности компании:</h1>
        <Slider children={companyValuesSliderContent} />
      </section>
      <section className={styles.ourAdvantages}
      >
        <div className="container d-flex flex-d-column align-items-center gap-50">
          <h1 className={styles.ourAdvantagesH}>Наши преимущества:</h1>
          <div className={styles.ourAdvantagesBlock}>
            <Card children={ourAdvantagesContent} />
          </div>
        </div>
      </section>
      <section className={styles.Portfolio}>
        <div className="container d-flex flex-d-column align-items-center">
          <h3 className={styles.PortfolioTitle}>Наши проекты</h3>
          <p className={styles.PortfolioDesc}>Мы гордимся каждым из этих проектов, которые стали не только техническими достижениями, но и важными шагами к достижению целей наших клиентов.</p>
          <div className={styles.PortfolioGrid}>
            <PortfolioCard children={PortfolioContent} />
          </div>
          <Link href='Portfolio' className={styles.PortfolioBtn}>Еще больше проектов</Link>
        </div>
      </section>
      <section className={styles.OurServices}>
        <h1>Наши услуги</h1>
        <p>В U! мы предлагаем разнообразные услуги, которые охватывают все аспекты разработки, от концепции до <br /> воплощения, с акцентом на инновации, качество и удовлетворение клиентов.</p>
        <div className="container d-flex justify-space-centre">
          <div className={styles.OurServicesBlock}>
            <Card children={OurServicesContent} />
            <Link href='/Service'>Узнать подробнее</Link>
          </div>
        </div>
      </section>
      <section className={styles.About}>
        <div className="container d-flex flex-d-column align-items-center">
          <h1 className={styles.AboutTitle}>О нас</h1>
          <div className={styles.AboutCard}>
            <p>Наши решения возможны благодаря нашей выдающейся команде. Мы объединяем дизайнеров, бэкенд и фронтенд разработчиков с опытом работы более 4 лет. Наши специалисты не только обладают глубокими знаниями в своей области, но и делятся общей страстью к инновациям.</p>
          </div>
          <div className={styles.AboutTextBox}>
            <h3>Более подробнее о нас можете узнать</h3>
            <Link href='/About'>Здесь</Link>
          </div>
        </div>
      </section>
      <section>
        <Form />
      </section>
    </div>
  )
}

export default page