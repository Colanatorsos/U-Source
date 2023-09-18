import Image from 'next/image'
import styles from './About.module.scss'
import Slider from '../../components/about/Slider'
import Macbook from '../../components/about/Macbook'
import Card from '../../components/about/Card'

const page = () => {
  const Cards = [
    {
      title: 'Более 50+',
      desc: 'Проектов'
    },
    {
      title: 'Более 50+',
      desc: 'Проектов'
    },
    {
      title: 'Более 50+',
      desc: 'Проектов'
    }
  ]
  const teamData = [
    {
      name: 'ФИО',
      Specialization: 'Специальность'
    },
    {
      name: 'ФИО',
      Specialization: 'Специальность'
    },
    {
      name: 'ФИО',
      Specialization: 'Специальность'
    },
    {
      name: 'ФИО',
      Specialization: 'Специальность'
    },
    {
      name: 'ФИО',
      Specialization: 'Специальность'
    },
    {
      name: 'ФИО',
      Specialization: 'Специальность'
    },
    {
      name: 'ФИО',
      Specialization: 'Специальность'
    },
    {
      name: 'ФИО',
      Specialization: 'Специальность'
    },
  ]
  const CompanyHistoryData = [
    {
      title: '2016 - Веб-студия U!',
      desc: ' Веб-студия U-SkillZ была основана в 2016 году. Наш путь был испытан трудностями, но результативен: мы сформировали бренд, предоставляющий выдающиеся программные услуги'
    },
    {
      title: '2016 - Веб-студия U!',
      desc: ' Веб-студия U-SkillZ была основана в 2016 году. Наш путь был испытан трудностями, но результативен: мы сформировали бренд, предоставляющий выдающиеся программные услуги'
    },
    {
      title: '2016 - Веб-студия U!',
      desc: ' Веб-студия U-SkillZ была основана в 2016 году. Наш путь был испытан трудностями, но результативен: мы сформировали бренд, предоставляющий выдающиеся программные услуги'
    },
    {
      title: '2016 - Веб-студия U!',
      desc: ' Веб-студия U-SkillZ была основана в 2016 году. Наш путь был испытан трудностями, но результативен: мы сформировали бренд, предоставляющий выдающиеся программные услуги'
    },
    {
      title: '2016 - Веб-студия U!',
      desc: ' Веб-студия U-SkillZ была основана в 2016 году. Наш путь был испытан трудностями, но результативен: мы сформировали бренд, предоставляющий выдающиеся программные услуги'
    },
    {
      title: '2016 - Веб-студия U!',
      desc: ' Веб-студия U-SkillZ была основана в 2016 году. Наш путь был испытан трудностями, но результативен: мы сформировали бренд, предоставляющий выдающиеся программные услуги'
    },
  ]
  return (
    <>
      <section className={styles.AboutCompany}>
        <div className="container d-flex flex-d-column align-items-center">
          <h3 className={styles.AboutCompanyTitle}>О компании</h3>
          <div className={styles.AboutCompanyCard}>
            {/*<Image className={styles.AboutCompanyGameIcon} src='/about/game.svg' width={180} height={180} alt='bg' />
            <Image className={styles.AboutCompanyMonitorIcon} src='/about/monitor-mobbile.svg' width={180} height={180} alt='bg' />*/}
            <p>U! Веб-студия уже зарекомендовала себя в разработке посадочных страниц, интернет-магазинов, корпоративных сайтов и создании веб-приложений.
              Наши усилия направлены на то, чтобы вы вышли впереди конкурентов. Мы достигаем этой цели, обеспечивая высокую скорость загрузки ваших цифровых продуктов, повышенную функциональность и превосходную навигацию.</p>
          </div>
        </div>
      </section>
      <section className={styles.AboutCards}>
        <div className="container d-flex justify-space-between">
          {Cards.map((el, idx) => (
            <div className={styles.AboutCardsCard} key={idx}>
              <h5>{el.title}</h5>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.OurSkills}>
        <div>
          <h3>Наши умения и навыки</h3>
          <p>U-Skillz - это студия, которая воплощает проекты любой сложности, создавая веб-сайты, мобильные приложения и обеспечивая SEO-продвижение.
            Наше дизайн-направление также предоставляет услуги по разработке логотипов, корпоративной айдентики и созданию креативных веб-продуктов для компаний. Кроме того, команда U-SkillZ обеспечивает техническую поддержку и доработку ваших веб-сайтов. После завершения разработки предлагаем настройку рекламных кампаний и долгосрочное сопровождение вашего проекта.</p>
        </div>
        <Macbook />
      </section>
      <section className={styles.team}>
        <h1>Наша команда</h1>
        <Slider children={teamData} />
      </section>
      <section className={styles.CompanyHistory}>
        <div className="container d-flex flex-d-column align-items-center gap-50">
          <h1 className={styles.CompanyHistoryH}>Наши преимущества:</h1>
          <div className={styles.CompanyHistoryGrid}>
            <Card children={CompanyHistoryData} />
          </div>
        </div>
      </section>
    </>
  )
}

export default page