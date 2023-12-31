'use client'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Slider from '../components/home/Slider'
import Card from '../components/home/Card'
import Form from '../app/Contacts/page'
import PortfolioCard from '../components/home/PorfolioCard'


const page = () => {
  const [imagesVisible, setImagesVisible] = useState([false, false, false, false]);
  const [imagesVisible2, setImagesVisible2] = useState([false, false, false, false]);
  const [imagesVisible3, setImagesVisible3] = useState([false, false, false, false]);


  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 1,
  });


  useEffect(() => {
    if (inView) {
      setImagesVisible([true, true, true, true]);
    }
  }, [inView]);
  useEffect(() => {
    if (inView2) {
      setImagesVisible2([true, true, true, true]);
    }
  }, [inView2]);
  useEffect(() => {
    if (inView3) {
      setImagesVisible3([true, true, true, true]);
    }
  }, [inView3]);

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
      title: 'Стремление к вершинам инноваций',
      desc: 'Наша компания всегда на грани новых технологий и идей, что позволяет нам предлагать современные решения, способствующие конкурентоспособности.'
    },
    {
      title: 'Контроль качества',
      desc: 'Все этапы проектов проходят строгий контроль, обеспечивая надежность и высокое качество наших продуктов.'
    },
    {
      title: 'Интегрированный комплекс услуг',
      desc: 'Наша компания предоставляет полный спектр услуг с начала и до конца проекта, минимизируя сложности для клиента.'
    },
    {
      title: 'Гибкость и реагирование на изменения',
      desc: 'Мы готовы оперативно реагировать на рыночные изменения, предоставляя клиентам гибкие решения.'
    },
    {
      title: 'Доказанная подтвержденная репутация',
      desc: 'Мы имеем ряд успешных проектов и благодарные отзывы, демонстрируя нашу способность к предоставлению результатов.'
    },
  ]
  const OurServicesContent = [
    {
      title: 'Программирование и разработка',
      desc: 'Наши ведущие специалисты в области программирования создадут для вас мощные и эффективные веб-приложения, обеспечивая высочайший уровень функциональности и безопасности.',
      bg: '/home/python.svg'
    },
    {
      title: 'Дизайн и пользовательский опыт',
      desc: 'Наши дизайнеры превратят ваши идеи в визуально привлекательные и удобные приложения. Мы создаем уникальные дизайнерские решения, которые будут отражать вашу уникальную идентичность.',
      bg: '/home/figma.svg'
    },
    {
      title: 'Управление проектами и продуктами',
      desc: 'Наши менеджеры по продуктам и проектам будут работать в тесном сотрудничестве с вами, чтобы обеспечить эффективное управление проектом, соблюдение сроков и достижение поставленных целей.',
      bg: '/home/chart-2.svg'
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
    <div style={{ overflow: 'hidden' }}>
      <section className={styles.hero}>
        <div className="container">
          <div className='d-flex justify-space-between align-items-center'>
            <div className={styles.heroLeft}>
              <h1>U! – Команда лучших <br /> специалистов в IT</h1>
              <p>U! объединяет уникальные знания и навыки в области программирования, дизайна, и управления. Ваша компания может доверить свои важнейшие задачи экспертам из U!</p>
              <Link className={styles.heroBtn} href='/Contacts'>Свяжитесь с нами </Link>
            </div>
            <div className='d-none d-md-block'>
              <Image src='/Logo.svg' priority={true} width={380.998} height={289.407} alt='logo' />
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
        <div>
          <Image
            ref={ref}
            src="/home/shield-search.svg"
            width={160}
            height={160}
            alt='bg'
            style={{ opacity: imagesVisible[0] ? 1 : 0 }}
          />
          <Image
            src="/home/flash.svg"
            width={160}
            height={160}
            alt='bg'
            style={{ opacity: imagesVisible[1] ? 1 : 0 }}
          />
          <Image
            src="/home/global.svg"
            width={160}
            height={160}
            alt='bg'
            style={{ opacity: imagesVisible[2] ? 1 : 0 }}
          />
          <Image
            src="/home/cup.svg"
            width={160}
            height={160}
            alt='bg'
            style={{ opacity: imagesVisible[3] ? 1 : 0 }}
          />
          <Slider children={companyValuesSliderContent} />
        </div>
      </section>
      <section className={styles.ourAdvantages}>
        <div className="container d-flex flex-d-column align-items-center gap-50">
          <h1 className={styles.ourAdvantagesH}>Наши преимущества:</h1>
          <div className={styles.ourAdvantagesBlock}>
            <Image ref={ref2} style={{ opacity: imagesVisible2[0] ? 1 : 0 }} src="/home/lamp-charge.svg" width={160} height={160} alt='bg' />
            <Image style={{ opacity: imagesVisible2[0] ? 1 : 0 }} src="/home/clock.svg" width={160} height={160} alt='bg' />
            <Image style={{ opacity: imagesVisible2[0] ? 1 : 0 }} src="/home/messages-2.svg" width={160} height={160} alt='bg' />
            <Image style={{ opacity: imagesVisible2[0] ? 1 : 0 }} src="/home/verify.svg" width={160} height={160} alt='bg' />
            <Card justifyC={'center'} children={ourAdvantagesContent} />
          </div>
        </div>
      </section>
      <section className={styles.OurServices}>
        <h1>Наши услуги</h1>
        <p>В U! мы предлагаем разнообразные услуги, которые охватывают все аспекты разработки, от концепции до <br /> воплощения, с акцентом на инновации, качество и удовлетворение клиентов.</p>
        <div className="container d-flex justify-space-centre">
          <div className={styles.OurServicesBlock}>
            <Image
              ref={ref3}
              src="/home/python-min.svg"
              alt="Описание изображения"
              className={styles.svgFigma}
              width={160}
              height={160}
              style={{ opacity: imagesVisible3[0] ? 1 : 0, left: imagesVisible3[0] ? 'calc(var(--index) * -1.5)' : 'calc(var(--index) * -0.5)' }}
            />
            <Image
              src="/home/figma-min.svg"
              alt="Описание изображения"
              className={styles.svgFigma}
              width={160}
              height={160}
              style={{ opacity: imagesVisible3[0] ? 1 : 0 }}
            />
            <Image
              src="/home/chart-min.svg"
              alt="Описание изображения"
              className={styles.svgFigma}
              width={160}
              height={160}
              style={{ opacity: imagesVisible3[0] ? 1 : 0 }}
            />
            <Card children={OurServicesContent} />
            <Link href='/Service'>Узнать подробнее</Link>
          </div>
        </div>
      </section>
      <section className={styles.About}>
        <div className="container d-flex flex-d-column align-items-center">
          <h1 className={styles.AboutTitle}>О нас</h1>
          <div>
            <Image src='/home/scroll-min.svg' width={60} height={60} alt='bg' />
            <Image src='/home/command-min.svg' width={60} height={60} alt='bg' />
            <div className={styles.AboutCard}>
              <p>Наши решения возможны благодаря нашей выдающейся команде. Мы объединяем дизайнеров, бэкенд и фронтенд разработчиков с опытом работы более 4 лет. Наши специалисты не только обладают глубокими знаниями в своей области, но и делятся общей страстью к инновациям.</p>
            </div>
          </div>
          <div className={styles.AboutTextBox}>
            <h3>Более подробнее о нас можете узнать</h3>
            <Link href='/About'>Здесь</Link>
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
      <section>
        <Form />
      </section>
    </div>
  )
}

export default page