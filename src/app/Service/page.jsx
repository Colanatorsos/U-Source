import React from "react";
import styles from "./Service.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section className={styles.services}>
        <div className="container">
          <div className={styles.box}>
            <h3 className={styles.title}>Услуги</h3>
            <p className={styles.text}>
              Мы предлагаем инновационные услуги, основанные на потребностях
              вашего бизнеса.
            </p>
          </div>
          <div className={styles.servicesCard}>
            <h2 className={styles.cardTitle}>Дизайн </h2>
            <p className={styles.cardText}>
              Дизайн веб-сайта - это один из ключевых факторов, определяющих его
              успех и <br /> эффективность. Эффективный дизайн объединяет в себе
              функциональность,
              <br /> красоту и удобство использования. Дружелюбный
              пользовательский интерфейс
              <br /> (UI) и приятный пользовательский опыт (UX) - это
              неотъемлемые элементы
              <br /> успешного дизайна.
            </p>
          </div>
          <div className={styles.servicesCard}>
            <h2 className={styles.cardTitle}>Разработка </h2>
            <p className={styles.cardText}>
              Разработка веб-сайтов - это сложный и творческий процесс,
              включающий
              <br />
              создание уникальных и функциональных онлайн-ресурсов. Наши опытные
              <br />
              специалисты учитывают потребности каждого заказчика, строят
              удобные
              <br />
              интерфейсы и обеспечивают надежность и безопасность сайта.
            </p>
          </div>
          <div className={styles.servicesCard}>
            <h2 className={styles.cardTitle}>Поддержка </h2>
            <p className={styles.cardText}>
              Поддержка веб-сайта после разработки - это ключевой этап, который
              <br />
              обеспечивает его стабильную работу и безопасность. Мы регулярно
              проверяем <br />
              функциональность и скорость загрузки сайта, следя за его
              надежностью и <br />
              эффективностью. Наши структурированные процессы сосредотачиваются
              на
              <br /> технических аспектах, чтобы достичь желаемых результатов.
            </p>
          </div>
          <div className={styles.servicesCard}>
            <h2 className={styles.cardTitle}>SEO - оптимизация </h2>
            <p className={styles.cardText}>
              Поддержка веб-сайта после разработки - это ключевой этап, который
              <br /> обеспечивает его стабильную работу и безопасность. Мы
              регулярно проверяем
              <br /> функциональность и скорость загрузки сайта, следя за его
              надежностью и<br /> эффективностью. Наши структурированные
              процессы сосредотачиваются на <br />
              технических аспектах, чтобы достичь желаемых результатов.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.tools}>
        <div className="container">
          <h2 className={styles.title}>Инструменты</h2>
          <div className="row">
            <div className="col-6">
              <h2 className={styles.toolsTitle}>Разработка</h2>
              <p className={styles.cardText}>
                При разработке сайта мы полагаемся на <br /> современные и
                разнообразные
                <br /> инструменты, чтобы создать
                <br /> функциональный сайт.
              </p>
              <div className={styles.boxImages}>
                <Image
                  src="/service/js.svg"
                  alt="JS"
                  className={styles.images}
                  width={48}
                  height={48}
                />
                <Image
                  src="/service/python.svg"
                  alt="Python"
                  className={styles.images}
                  width={48}
                  height={48}
                />
                <Image
                  src="/service/html5.svg"
                  alt="HTML5"
                  className={styles.images}
                  width={48}
                  height={48}
                />
                <Image
                  src="/service/css3.svg"
                  alt="CSS3"
                  className={styles.images}
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <div className="col-6">
              <h2 className={styles.toolsTitle}>Дизайн</h2>
              <p className={styles.cardText}>
                Мы используем современные <br />
                инструменты, чтобы создать уникальные <br />
                визуальные решения.
              </p>
              <div className={styles.boxImages}>
                <Image
                  src="/service/figma.svg"
                  alt="Figma"
                  className={styles.images}
                  width={48}
                  height={48}
                />
                <Image
                  src="/service/flaticon.svg"
                  alt="Flaticon"
                  className={styles.images}
                  width={48}
                  height={48}
                />
                <Image
                  src="/service/adobe-illustrator.svg"
                  alt="Adobe Illustrator"
                  className={styles.images}
                  width={48}
                  height={48}
                />
                <Image
                  src="/service/adobe-photoshop.svg"
                  alt="Adobe Photoshop"
                  className={styles.images}
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
