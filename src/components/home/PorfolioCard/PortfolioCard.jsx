import Image from 'next/image'
import styles from './PortfolioCard.module.scss'

const PortfolioCard = ({ children }) => {
  return (
    <>
      {children.map((el, idx) => (
        <div className={styles.PortfolioCard} key={el.id}>
          <Image src={el.images} width={120} height={120} alt='logo'/>
          <h6>{el.title}</h6>
          <span></span>
          <p>{el.description}</p>
        </div>
      ))}
    </>
  )
}

export default PortfolioCard