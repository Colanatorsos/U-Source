import styles from './Card.module.scss'

const Card = ({ children }) => {
  return (
    <>
    {children.map((el, idx) => (
      <div key={idx} className={styles.card}>
        <h4 className={children.length == 3 ? styles.OurServicesBlockH : ''}>{el.title}</h4>
        <p className={children.length == 3 ? styles.OurServicesBlockP : ''}>{el.desc}</p>
      </div>
    ))}
    </>
  )
}

export default Card