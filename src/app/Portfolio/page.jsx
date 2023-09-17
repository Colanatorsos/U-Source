import React from "react";
import styles from "./../Portfolio/Portfolio.module.css";
import Card from "../../components/layout/Card/Card";

const page = () => {
  const cardsData = [
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
    },
    {
      id: "5",
      images: "/portfolio/evraz.svg",
      title: "ЕВРАЗ",
      description:
        "Наше приложение планирования задач помогло ЕВРАЗ управлять проектами и сроками на разных континентах",
      slideImage: "/portfolio/slide-image.svg",
    },
    {
      id: "6",
      images: "/portfolio/gazprom-media.svg",
      title: "Газпром Медиа",
      description:
        "Создали сайт для Газпром Медиа, обеспечив легкий доступ к контенту и информации о медийных проектах",
      slideImage: "/portfolio/slide-image.svg",
    },
    {
      id: "7",
      images: "/portfolio/hb.svg",
      title: "HealthBalance",
      description:
        "Создали интуитивное мобильное приложение HealthBalance для отслеживания активности, здоровья и фитнеса",
      slideImage: "/portfolio/slide-image.svg",
    },
    {
      id: "8",
      images: "/portfolio/texta.svg",
      title: "Texta",
      description:
        "Разработали приложение Texta, которое автоматически генерирует высококачественный контент для блогов и публикаций",
      slideImage: "/portfolio/slide-image.svg",
    },
  ];
  return (
    <div>
      <section className={styles.projects}>
        <div className={styles.container}>
          <h1 className={styles.title}>Наши проекты</h1>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              images={card.images}
              title={card.title}
              description={card.description}
              slideImage={card.slideImage}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
