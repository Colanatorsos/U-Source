import Image from "next/image";
import Link from "next/link";
import styles from "../../../app/Portfolio/Portfolio.module.css"

function Card({ title, description, images, slideImage }) {
  return (
    <div className={styles.card}>
      <div className={styles.leftCard}>
        <Image
          src={images}
          alt="Alfa Bank"
          className={styles.images}    
          width={120}
          height={120}
        />
        <h3 className= {styles.name}>{title}</h3>
        <p className=  {styles.info}>{description}</p>
      </div>
      <Link className= {styles.btn} href="/">
          Перейти на сайт
        </Link>
      <div className=  {styles.rightCard}>         
        <Image
          src={slideImage}
          alt="Описание изображения"
          className={styles.slide}
          width={503}
          height={248}
        />
        <div className={styles.nav}>
          <svg
            className= {styles.svgNav}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
          >
            <circle cx="6.5" cy="6" r="6" fill="white" />
          </svg>
          <svg
            className= {styles.svgNav}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
          >
            <circle cx="6.5" cy="6" r="6" fill="#808080" />
          </svg>
          <svg
            className= {styles.svgNav}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
          >
            <circle cx="6.5" cy="6" r="6" fill="#808080" />
          </svg>
          <svg
            className= {styles.svgNav}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
          >
            <circle cx="6.5" cy="6" r="6" fill="#808080" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
